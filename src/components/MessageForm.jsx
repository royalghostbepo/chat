import {useState } from 'react' ;


const MessageForm = () => {
    const [value, setValue] = useState('');

    //Submit the form
    const handleSubmit = () =>{

    }

    const  handleChange = ()=>{
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