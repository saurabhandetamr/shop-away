import React, { useState } from "react";
import { BrowserRouter as Link, useHistory  } from 'react-router-dom'

const Register = () =>{
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState(""); 
    const [error, setError] = useState("");
    const history = useHistory();

    /*const fetchTasks = async () => {
        const res = await fetch('http://localhost:8080/users/create', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    username,
                    email,
                    password,
                    phoneNo,
                }),
                headers: {
                    "Content-type": "application/json;"
                }
            });
            
            const data = await res.json()
            if (data) {
                history.push("/login");
            }
    }*/

    function registerClick(){
            
            if (name==="" || email === "" || username === "" || password === "" || confPassword === "" || phoneNo === "" || email === "") {
                setError("Fields are required");
                return;
            }

            const aa = async function () {
                const res = await fetch('http://localhost:8080/users/create', {
                    method: 'POST',
                    body: JSON.stringify({
                        name,
                        username,
                        email,
                        password,
                        phoneNo,
                    }),
                    headers: {
                        "Content-type": "application/json;"
                    }
                });

                const data = await res.json();
                if (data) {
                    history.push("/login");
                }
            }

            const callAPI = async() => {
                await aa();
            }
            
    }
        
    function loginUser(){
        console.log(" -- ");
    }

    return <div>
        <section class="bg">
            <div class="content">
                <div class="header-icon">
                <a href="#">
                    <i class="iconfont icon_logo"></i>
                </a>
                </div>
                <div class="from-content">
                <h1>Create a K & H Appliances free account</h1> 
                <div class="from">
                    <div class="from-list">
                    <input id="name" onChange={e => setName(e.target.value)} type="text" placeholder="Name" data-text="Please enter a Name" autocomplete="off"/>
                    </div>
                    <div class="from-list">
                    <input id="username" onChange={e => setUsername(e.target.value)} type="text" placeholder="UserName" data-text="Please enter a UserName" autocomplete="off"/>
                    </div>
                    <div class="from-list">
                    <input id="email" onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" data-text="Please enter a valid email address." autocomplete="off"/>
                    </div>
                    <div class="from-list">
                    <input id="password" onChange={e => setPassword(e.target.value)} type="password" placeholder="Password (6-20 characters)" data-text="The password must be between 6-20 characters long." autocomplete="off"/>
                    </div>
                    <div class="from-list">
                    <input id="cofPassword" onChange={e => setConfPassword(e.target.value)} type="password" placeholder="Confirm password" data-text="Password does not match." autocomplete="off"/>
                    </div>
                    <div class="from-list">
                    <input id="phoneNo" onChange={e => setPhoneNo(e.target.value)} type="number" placeholder="Phone No" data-text="Password does not match." autocomplete="off"/>
                    </div>
                    <p class="tip tip-signup" id="agree" data-text="Please read and accept the User Agreement.">
                    <span class="icon iconfont"></span>
                    <span>By signing up, I agree to Mockplus <a href="https://www.mockplus.com/tos" target="_blank">Terms of Service.</a></span>
                    </p>
                    <p class="error-message">&nbsp;{setError}</p>
                    <div class="submit-btn">
                    <button onClick={registerClick} id="register">Continue</button>
                    </div>
                    <p class="tip signup-tip">
                    <button type="button"/>
                    <span>Already have an account?</span>
                    <Link to='/'>Sign in</Link>
                    </p>
                </div>
                </div>
            </div>
        </section>
    </div>
};

export default Register