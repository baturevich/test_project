import React from 'react';
import s from './Login.module.css'

const Login = (props) => {
    return (
        <div className={s.login}>
            <div className={s.offer}>
                <h1>Vision.com</h1>
                <p>Special for you</p>
            </div>
            <div className={s.form_wrapper}>
                <form className={s.form_login}>
                    <h2 className={s.login_title}>Login</h2>
                    <div className={s.inputs}>
                        <input type="text" placeholder='login' />
                        <input type="text" placeholder='Password' />
                    </div>
                    <div className={s.buttons}>
                        <button>Log In</button>
                        <button>Sign In</button>
                    </div>
                    <button className={s.forgout}>Forgout your passsword?</button>
                </form>
            </div>
        </div>
    );
};

export default Login;