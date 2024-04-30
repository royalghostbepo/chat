import {useState } from 'react' ;
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined} from '@ant-design/icons';


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
        //send a typing event every time the a user is typing     
    
        //user types something

        isTyping(props, chatID);
        
       
    }

    const handleUpload = (event) => {

        sendMessage(creds, chatID, {files: event.target.files, text: ''})

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
        <label htmlFor="upload-button">
            <span className="image-button">
                <PictureOutlined classID="picture-icon" />

            </span>


        </label>
        <input 
        type='file' id='upload-button'
        multiple={false}
        style={{"display":"none"}}
        accept=".jpg,.jpeg,.png,.gif"
        onChange={handleUpload}
        />
        
        <button type="submit"  className="send-button">
            Send

        </button>
       </form>
    );
}
export default MessageForm;