import recover from './recover'
import React, { useState,useEffect } from "react";
import register from './register'
import shop from './shop'
import { BrowserRouter as Router, Route,  useHistory,Redirect  } from 'react-router-dom'

export const Login = () =>{ 

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const [login, setLogin] = useState(false);

const PerformLogin = async (props) => {
    
    const res = await fetch(`http://localhost:8080/users/get`, {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify({
                "username": username,
                "password": password
            }),
    });
    
    if(res.status == 200){
        //const history = useHistory();
        props.history.push("/shop");
    }

}

const ShopLink = () => {
    const history = useHistory();
    history.push("/shop");
}

const RecoverClick = () => {
    const history = useHistory();
    history.push("/recover");
}
const NewUserClick = () => {
    const history = useHistory();
    history.push("/register");
}
const continueClick = (props) =>{
    if ( username === "" || password === "" ) {
        setError("Fields are required");
        return;
    }
    
    PerformLogin(props); 
    
}     
return <Router><div>
                <Route exact path="/recover" component={recover}/>
                <Route exact path="/register" component={register}/>
                <Route exact path="/shop" component={shop}/> 
                <Route exact path='/' render={(props) => (
                <>    
                <section class="bg">
                <div class="content">
                <div class="header-icon">
                <a href="#">
                    <i class="iconfont icon_logo"></i>
                </a>
                </div>
                <div class="from-content">
                <h1>Login to a K & H Appliances account</h1> 
                <div class="from">
                    <div class="from-list">
                    <input id="email" type="text" placeholder="Email" data-text="Please enter email address." onChange={e => setUsername(e.target.value)} autoComplete="off"/>
                    </div>
                    <div class="from-list">
                    <input id="password" type="password" placeholder="Password" data-text="Please enter a password" onChange={e => setPassword(e.target.value)} autoComplete="off"/>
                    </div>
                    <p class="error-message">&nbsp;</p>
                    <div>
                    <div class="submit-btn">
                        <button id="register" onClick={continueClick(props)} >Continue</button>
                    </div>
                    <div>
                        <p class="tip signup-tip">
                        <button onClick={RecoverClick} type="button" >Recover</button>
                        </p>
                        <p class="tip signup-tip">
                        <button onClick={NewUserClick} type="button" >New User.Sign In </button>
                        </p>
                        <p class="error-message">&nbsp;{error}</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </section>
            </>
            )}
        />
        </div> 
</Router>
};