import React from 'react';

function Login() {
    return (
        <div className='container-login-register'>
            <h3>uTeam - Login</h3>
            <p className='input-label'>Email</p>
            <input className='form-input' placeholder='Email'></input>
            <div className='error-box'><p className='error-message'>Invalid email!</p></div>
            <p className='input-label'>Password</p>
            <input className='form-input' placeholder='Password'></input>
            <div className='error-box'><p className='error-message'>Invalid password!</p></div>
            <span className='input-label'>Don't have an account?</span><button className='btn-login'>Login</button>
        </div>
    )
}

export default Login;
