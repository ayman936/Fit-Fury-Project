import React, { useState, useEffect } from "react";
import './cart.css';
import axios from "axios";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [display,setDisplay]=useState(false);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: ""
  });
  
  useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(cartItems);

      // Clear the cart after the page is loaded
      return () => {
          localStorage.removeItem('cart');
      };
  }, []);

  const handleDeleteItem = (id_produit) => {
      const updatedCart = cart.filter(item => item.id_produit !== id_produit);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id_produit, quantity) => {
      const updatedCart = cart.map(item => 
          item.id_produit === id_produit ? { ...item, quantity } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.prixprod, 0);

  async function handleSubmitForm(event) {
      event.preventDefault();
      setError(null);
      try {
          const order = {
              cart: cart.map(item => ({
                  product_id: item.id_produit,
                  quantity: item.quantity
              })),
              formData: formData
          };
          await axios.post('http://127.0.0.1:8000/api/orders', {order});
          alert("Order confirmed!");
          setCart([]);
          localStorage.removeItem('cart');
          setDisplay(false); // Cacher la boîte de dialogue après la soumission du formulaire
      } catch (error) {
          console.error("Error adding order", error);
          setError("An error occurred while confirming the order. Please try again.");
      } finally {
          setLoading(false);
      }
      alert("Order confirmed!");
      setCart([]);
      localStorage.removeItem('cart');
      setDisplay(false);
  }

  async function handleConfirmOrder() {
      if (cart.length > 0) {
          setDisplay(true);
      } else {
          alert("Your cart is empty!");
      }
  }

  return (
      <div className="bg-white dark:bg-gray-950 min-h-screen">
          <header className="bg-black text-white py-4 px-6">
              <h1 className="text-2xl font-bold">Cart</h1>
          </header>
          <main className="container mx-auto py-8 px-4 md:px-6">
              <div className="grid md:grid-cols-[1fr_300px] gap-8">
                  <div className="space-y-6">
                      {cart.map((item) => (
                          <div key={item.id_produit} className="flex items-center gap-4">
                              <img
                                  src={`http://127.0.0.1:8000/storage/${item.image}`}
                                  alt={item.nomprod}
                                  width={100}
                                  height={100}
                                  className="rounded-md object-cover"
                              />
                              <div className="flex-1">
                                  <h3 className="font-semibold">{item.nomprod}</h3>
                                  <div className="flex items-center gap-4">
                                      <select
                                          className="form-select"
                                          value={item.quantity}
                                          onChange={(e) => handleQuantityChange(item.id_produit, parseInt(e.target.value))}
                                      >
                                          {Array.from({ length: item.quantiteStocker }, (_, i) => i + 1).map((qty) => (
                                              <option key={qty} value={qty}>
                                                  {qty}
                                              </option>
                                          ))}
                                      </select>
                                      <span className="font-semibold text-orange-500">${(item.prixprod * item.quantity).toFixed(2)}</span>
                                  </div>
                              </div>
                              <button class="noselect"  onClick={() => handleDeleteItem(item.id_produit)}>
                                <span class="text">Delete</span>
                                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" 
                                width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                    </svg></span>
                              </button>
                          </div>
                      ))}
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-6 space-y-4">
                      <h2 className="text-xl font-bold">Order Summary</h2>
                      <div className="flex items-center justify-between">
                          <span>Subtotal</span>
                          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                          <span>Shipping</span>
                          <span className="font-semibold">$0.00</span>
                      </div>
                      <div className="flex items-center justify-between">
                          <span>Total</span>
                          <span className="font-semibold text-orange-500">${totalPrice.toFixed(2)}</span>
                      </div>
                      <button className="Btn" onClick={handleConfirmOrder}>Confirm</button>
                  </div>
              </div>
          </main>
          {display && 
          <div className="login-box" style={{marginTop:'30%'}}>
              <form onSubmit={handleSubmitForm}>
                  <div className="user-box">
                      <input 
                          type="text" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required 
                          placeholder="firstName"
                      />
                      <label>FirstName</label>
                  </div>
                  <div className="user-box">
                      <input 
                          type="text" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required 
                          placeholder="lastName"

                      />
                      <label>LastName</label>
                  </div>
                  <div className="user-box">
                      <input 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required 
                          placeholder="email"

                      />
                      <label>Email</label>
                  </div>
                  <div className="user-box">
                      <input 
                          type='text' 
                          name="address" 
                          value={formData.address} 
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          required 
                          placeholder="adresse"

                      />
                      <label>Address</label>
                  </div>
                  <center>
                      <button className="Btn" type="">Confirm</button>
                  </center>
              </form>
          </div>}
      </div>
  );
}