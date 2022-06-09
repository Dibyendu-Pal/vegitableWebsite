import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpAndLogin() {
    const Navigate = useNavigate()

    const signUpHandelOnClick = () => {
        document.getElementById('account-container').classList.add("right-panel-active")
    }

    const signInHandelOnClick = () => {
        document.getElementById('account-container').classList.remove("right-panel-active")
    }

    const [user, setUser] = useState({ name: "", email: "", password: "", loginEmail: "", loginPassword: "" })

    const handelChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const signUpClick = (e) => {
        e.preventDefault()
        addUser(user)
    }

    const signInClick = (e) => {
        e.preventDefault()
        loginUser(user)
    }

    const addUser = (user) => {
        const { name, email, password } = user
        fetch("/api/user/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(res => res.json())
            .then(data => {
                const token = data["token"]
                console.log(data["token"])
                window.localStorage.setItem("auth-token", token)
                if (data.user) {
                    return Navigate('/')
                }
            })
    }

    const loginUser = (user) => {
        const { loginEmail, loginPassword } = user
        fetch("/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loginEmail, password: loginPassword })
        })
            .then(res => res.json())
            .then(data => {
                const token = data["token"]
                console.log(data["token"])
                window.localStorage.setItem("auth-token", token)
                if (data.user) {
                    return Navigate('/')
                }
            })
    }

    return (
        <div className='account-full-div'>
            <div className="account-container" id="account-container">
                <div className="form-container sign-up-container">
                    <form className='account-form' action="">
                        <h1 className="account-h1" >Create Account</h1>
                        {/* <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span> */}
                        <input className='account-input' id='name' name='name' type="text" placeholder="Name" onChange={handelChange} />
                        <input className='account-input' id='email' name='email' type="text" placeholder="Email" onChange={handelChange} />
                        <input className='account-input' id='password' name='password' type="text" placeholder="Password" onChange={handelChange} />
                        {/* <input className='account-input' name='confirmPassword' type="password" placeholder="Password" /> */}
                        <button className='account-button' onClick={signUpClick}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className='account-form' action="">
                        <h1 className="account-h1" >Sign in</h1>
                        {/* <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span> */}
                        <input className='account-input' id='loginEmail' name='loginEmail' type="text" placeholder="Email" onChange={handelChange} />
                        <input className='account-input' id='loginPassword' name='loginPassword' type="text" placeholder="Password" onChange={handelChange} />
                        <button className='account-button' onClick={signInClick}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="account-h1" >Welcome Back!</h1>
                            <p className='account-p'>To keep connected with us please login with your personal info</p>
                            <button className="ghost account-button" id="signIn" onClick={signInHandelOnClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="account-h1" >Hello, Friend!</h1>
                            <p className='account-p'>Enter your personal details and start journey with us</p>
                            <button className="ghost account-button" id="signUp" onClick={signUpHandelOnClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpAndLogin