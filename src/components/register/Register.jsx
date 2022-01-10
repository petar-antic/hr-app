import React from 'react';

function Register() {
    return(
        <div className='container-login-register'>
            <h3>uTeam - Login</h3>
            <p className='input-label'>Name</p>
            <input className='form-input' placeholder='Name'></input>
            <div className='error-box'><p className='error-message'>Incorrect name!</p></div>
            <p className='input-label'>Email</p>
            <input className='form-input' placeholder='Email'></input>
            <div className='error-box'><p className='error-message'>Invalid email!</p></div>
            <p className='input-label'>Password</p>
            <input className='form-input' placeholder='Password'></input>
            <div className='error-box'><p className='error-message'>Invalid password!</p></div>
            <p className='input-label'>Profile Photo</p>
            <input className='file-input' type='file'></input>
            <span className='input-label'>Already have an account?</span><button className='btn-register'>Register</button>
        </div>
    )
}

export default Register;
