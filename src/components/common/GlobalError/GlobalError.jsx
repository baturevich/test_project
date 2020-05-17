import React, { useState, useEffect } from 'react';
import s from './GlobalError.module.css'
class GlobalError extends React.Component {
    state = {
        showError: false
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.global_errors.length != this.props.global_errors.length) {
            this.setState({ showError: true })
        }
    }
    render() {
        let currentError = this.props.global_errors.length - 1;
        return (
            <>
                {this.state.showError &&
                    <div className={s.wrapper}>
                        <div className={s.error}>
                            <h1>{this.props.global_errors[currentError]}</h1>
                            <span onClick={() => this.setState({ showError: false })}>
                                <i className="material-icons">close</i> Close
                            </span>
                        </div>
                    </div>
                }
            </>
        )
    }
}
export default GlobalError;