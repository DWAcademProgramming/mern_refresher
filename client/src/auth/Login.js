import React, { useState } from 'react'
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        email: '', 
        password: '', 
    }); 

    const { name, email, password, password2 } = formData; 
    const onChange = e => setFormData({ ...formData, [e.target.email]: e.target.value}); 

    const onSubmit= e =>{
        e.preventDefault(); 
        if (password !== password2){
            console.log("passwords don't match")
        }else{
            const newUser = {
                name, 
                email, 
                password
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser); 
               // const res = axios.post('/api/users', body, config); 
            } catch (error) {
                
            }
        }
    }

    return (
        <div>
             <nav className="navbar bg-dark">
            <h1>
                <a href="index.html"><i className="fas fa-code"></i> DevConnector</a>
            </h1>
            <ul>
                <li><a href="profiles.html">Developers</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
            </nav>
            <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={name}
                    onChange={e => onChange(e)}
                    required 
                />
                </div>
                <div className="form-group">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    value={name}
                    onChange={e => onChange(e)}
                    required 
                />
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small
                >
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={e => onChange(e)}
                    minLength="6"
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={e => onChange(e)}
                    minLength="6"
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
            </section>
        </div>
    )
}

export default Login
