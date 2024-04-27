import {useState } from 'react' ;
import { sendMessage, isTyping } from 'react-chat-engine';


const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const {chatID, creds } = props;

    //Submit the form
    const handleSubmit = (event) =>{
        event.preventDefault();

        const text = value.trim();

        if(text.length >  0) sendMessage(creds, chatID, {text});

    }

    const  handleChange = (event)=>{
        setValue(event.target.value);
        //send a typing event every time the
        //user types something

        isTyping(props, chatID);
    }

    return (
       <form className="message-form" onSubmit={handleSubmit}>
        <input 
            className="message-input" 
            placeholder="Type your message here..." 
            value= {value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
        

       </form>
    );
}
export default MessageForm;