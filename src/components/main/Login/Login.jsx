import React from 'react';
import s from './Login.module.css'
import { reduxForm, Field } from 'redux-form';
import { loginTC } from '../../../redux/authReducer';
import { requiared, maxLength } from '../../../utils/validators';
import InputLoginControl from '../../common/Preloader/FormControls/FormLoginControl';
import { connect } from 'react-redux';

class Login extends React.Component {

    onSubmit = (formData) => {
        let a = { ...formData, captcha: true }
        this.props.loginTC(a);
    }
    render() {
        return (
            <div className={s.login}>
                <div className={s.offer}>
                    <h1>Vision.com</h1>
                    <p>Special for you</p>
                </div>
                <LoginReduxForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};
const maxLength50 = maxLength(50);
const LoginForm = (props) => {
    return (
        <div className={s.form_wrapper}>
            <form className={s.form_login} onSubmit={props.handleSubmit}>
                <h2 className={s.login_title}>Login</h2>
                <div className={s.inputs}>
                    <Field placeholder='login' name={'email'}
                        component={InputLoginControl} validate={[requiared, maxLength50 ]} />
                    <Field placeholder='Password' name={'password'}
                        component={InputLoginControl} validate={[requiared, maxLength50]} />
                </div>
                <div className={s.check}>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
                Remember Me
                </div>
                <div className={s.buttons}>
                    <button>Log In</button>
                    <button>Sign In</button>
                </div>
                <a href='##'className={s.forgout}>Forgout your passsword?</a>
            </form>
        </div>
    );
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const mapStateToprops = ()=>{
    return{}
}
export default connect(mapStateToprops,{loginTC})(Login);