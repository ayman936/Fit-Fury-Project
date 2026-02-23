import React, { useContext, useState, useEffect } from 'react';
import './FormOrder.css';
import { ProgramContext } from '../context';
import axios from 'axios';
import { Await } from 'react-router-dom';

export default function CoachingForm() {
    const { selectedProgram } = useContext(ProgramContext);
    const [formData, setFormData] = useState({
        nomuser: '',
        prenomuser: '',
        emailuser: '',
        adresseuser: '',
        selectedProgram: selectedProgram || ''
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            selectedProgram: selectedProgram || ''
        }));
    }, [selectedProgram]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();  // Prevent default form submission
        try {
            console.log('Form data before submission:', formData);
            const response = axios.post('http://127.0.0.1:8000/api/users', formData)
            
                console.log('Data saved successfully:', response.data);
            
            alert("Confirmed!!");
            setFormData({
                nomuser: '',
                prenomuser: '',
                emailuser: '',
                adresseuser: '',
                selectedProgram: selectedProgram || ''
            });
        } catch (error) {
            if (error.response) {
                console.error("Problem with submission:", error.response.data);
                alert(`Error: ${JSON.stringify(error.response.data)}`);
            } else {
                console.error("Problem with submission:", error.message);
                alert(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className="login-box">
            <form>
                <div className="user-box">
                    <input type="text" name="nomuser" value={formData.nomuser} onChange={handleChange} placeholder="First Name" required />
                    <label>First Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="prenomuser" value={formData.prenomuser} onChange={handleChange} placeholder="Last Name" required />
                    <label>Last Name</label>
                </div>
                <div className="user-box">
                    <input type="email" name="emailuser" value={formData.emailuser} onChange={handleChange} placeholder="Email" required />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="text" name="adresseuser" value={formData.adresseuser} onChange={handleChange} placeholder="Address" required />
                    <label>Address</label>
                </div>
                <div className="relative group rounded-lg w-64 bg-black overflow-hidden">
                    <select
                        name="selectedProgram" value={formData.selectedProgram} onChange={handleChange} required
                        className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-white bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    >
                        <option value="" disabled hidden>{selectedProgram || "Select a Program"}</option>
                        <option value="Basic" className="text-black">Basic</option>
                        <option value="Pro" className="text-black">Pro</option>
                        <option value="Elite" className="text-black">Elite</option>
                    </select>
                </div>
                <center>
                    <button type="submit" onClick={handleSubmit}>
                        <a href="">
                        SEND
                        <span></span>
                        </a>
                    </button>
                </center>
            </form>
        </div>
    );
}
