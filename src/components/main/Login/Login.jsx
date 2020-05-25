import React from 'react';
import s from './Login.module.css'
import { reduxForm, Field } from 'redux-form';
import { loginTC, setAuthData, } from '../../../redux/authReducer';
import { requiared, maxLength } from '../../../utils/validators';
import InputLoginControl from '../../common/FormControls/FormLoginControl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Login extends React.Component {
    componentDidMount(){
   
        //Here this props:
        // auth_user_id: undefined
        // captchaUrl: null
        // history: {length: 2, action: "REPLACE", location: {…}, createHref: ƒ, push: ƒ, …}
        // location: {pathname: "/login", search: "", hash: "", state: undefined}
        // loginTC: ƒ ()
        // match: {path: "/login", url: "/login", isExact: true, params: {…}}
        // state: {profile_page: {…}, chats_page: {…}, header: {…}, users_page: {…}, auth_data: {…}, …}
        // staticContext:
    }
    onSubmit = (formData) => {
        const login_data = { ...formData}
        this.props.loginTC(login_data).then((result_code) => {
                if (result_code === 0) {
                    this.props.history.push(`/vision`)
                }
            })
    }
    render() {
        return (
            <div className={s.login}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className={s.offer}>
                                <h1>Vision.com</h1>
                                <p>Special for you</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <LoginReduxForm onSubmit={this.onSubmit}  captchaUrl={this.props.captchaUrl} />
                        </div>
                    </div>
                </div>
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
                    <Field placeholder='login' name={'email'} type="email"
                        component={InputLoginControl} validate={[requiared, maxLength50]} />
                    <Field placeholder='Password' name={'password'} type="password"
                        component={InputLoginControl} validate={[requiared, maxLength50]} />
                </div>
                <div className={s.check}>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
                Remember Me
                </div>
                <div className={props.error && s.some_error}>
                    <span>{props.error}</span>
                </div>
                { props.captchaUrl &&
                    <div className={ s.captcha}>
                    <img src={props.captchaUrl} alt="captcha"/>
                    <Field placeholder="Enter the captcha symbols..." type={'text'} 
                        name={'captcha'} component={'input'} />
                </div>
                }
                <div className={s.buttons}>
                    <button>Log In</button>
                    <button>Sign In</button>
                </div>
                <a href='##' className={s.forgout}>Forgout your passsword?</a>
            </form>
        </div>
    );
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const mapStateToprops = (state) => {
    return {
        captchaUrl: state.auth_data.captcha_url,
        auth_user_id: state.auth_data.data.id,
    }
}
export default compose(connect(mapStateToprops, { loginTC, setAuthData }),
    withRouter,
)(Login)