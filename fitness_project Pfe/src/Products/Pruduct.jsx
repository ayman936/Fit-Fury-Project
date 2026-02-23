import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';
import CartIcon from '../cart.png';
import logo from '../Remove-bg.ai_1714305241460.png';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../footer';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(cart.length);
    }, []);

    const handleAddToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id_produit === product.id_produit);
    
        if (existingProduct) {
            // Check if adding another unit of the product exceeds the available stock
            if (existingProduct.quantity + 1 > product.quantiteStocker) {
                alert('Out of stock');
            } else {
                existingProduct.quantity += 1; // Increase quantity if stock is sufficient
            }
        } else {
            if (product.quantiteStocker > 0) {
                cart.push({ ...product, quantity: 1 }); // Add new product to cart
            } else {
                alert('Out of stock');
            }
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartCount(cart.length);
    };
    

    return (
        <div className="bg-gray-800 text-gray-50">
            <Navbar bg="dark" expand="lg" variant="dark" className="custom-navbar">
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo" width={150} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavDropdown" />
                <Navbar.Collapse id="navbarNavDropdown">
                    <Nav className="navbar navbar-expand-lg mx-auto nav-link-custom">
                        <NavLink id='nav' to='/' className="nav-link text-white mr-5">Home</NavLink>
                        <NavLink id='nav' to='/Product' className="nav-link text-white mr-5">Products</NavLink>
                        <NavLink id='nav' to='/Pricing' className="nav-link text-white mr-5">Pricing</NavLink>
                        <NavDropdown id='nav' title={<span className="text-white">Programs</span>} className="dropdown-item text-white">
                            <NavLink id='nav' to="/BulkingProgram" className="dropdown-item text-black">Bulking Program</NavLink>
                            <NavLink id='nav' to="/CutingProgram" className="dropdown-item text-black">Cuting Program</NavLink>
                            <NavLink id='nav' to="/MacroCalculator" className="dropdown-item text-black">Macro Calculator</NavLink>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-10">
                        <NavLink to={"/Cart"} className="nav-link">
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <img src={CartIcon} alt="Cart" width={30} />
                                {cartCount > 0 && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: -10,
                                            right: -10,
                                            background: 'red',
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '0 5px',
                                            fontSize: '12px'
                                        }}
                                    >
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <section className="container mx-auto px-4 md:px-6 py-12">
                <h1 className="text-3xl font-bold mb-8">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id_produit} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={`http://127.0.0.1:8000/storage/${product.image}`}
                                alt={product.nomprod}
                                width={400}
                                height={300}
                                className="w-full h-60 object-cover" 
                            />
                            <div className="p-4">
                                <div className="flex justify-between">
                                    <h3 className="text-xl text-black font-bold mb-2">{product.nomprod}</h3>
                                    {product.quantiteStocker > 0 ?
                                        <p className="text-l text-success font-bold">{product.quantiteStocker} - in stock</p> :
                                        <p className="text-l text-danger font-bold">out of stock</p>
                                    }
                                </div>
                                <p className="text-gray-500 mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl text-black font-bold">${product.prixprod}</span>
                                    <button className="CartBtn" onClick={() => handleAddToCart(product)}>
                                        <span className="IconContainer">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart">
                                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                                            </svg>
                                        </span>
                                        <p className="text">Add to Cart</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}