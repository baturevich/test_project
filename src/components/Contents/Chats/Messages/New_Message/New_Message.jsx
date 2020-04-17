import React from 'react';
import s from './New_Message.module.css'


const New_Message = (props) => {
    debugger;
    let newMessEl = React.createRef();
    let current_text = props.new_message_data[0].new_message_text;
    
    const upNewMessText = () => {
        let mess_text = newMessEl.current.value;
        props.up_new_mess_text(mess_text);
    }
    const addMess = () => {
        props.add_mess()
    }
    const downEnter = (event) => {
        event = event || window.event
        if (event.keyCode == 13) {
            props.add_mess()
        } return
    }

    return (
        <div className={s.wrapper}>
            <i className="fa fa-smile-o"></i>
            <i className="fa fa-paperclip"></i>
            <textarea type="text"
                ref={newMessEl}
                onChange={() => upNewMessText()}
                value={current_text}
                className={s.message}
                onKeyDown={() => downEnter()}
            />
            <a href="#s" onClick={() => addMess()} className={s.send}><i className="fa fa-paper-plane-o"></i></a>
        </div>
    );
};

export default New_Message;