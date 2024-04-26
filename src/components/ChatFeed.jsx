import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThierMessage from "./TheirMessage";

const ChatFeed = (props) =>  {
    const { chats, activeChat, username, messages} = props;

    const chat = chats && chats[activeChat];

    const renderMesssages = () => {
        const keys = Object.keys(messages);


        return  keys.map((key)=>{
            const  message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMesaage = userName === message.sender.username;

            return (
                <div key={'msg_${index}'} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                        isMyMesaage
                         ?   <MyMessage message={message} /> 
                         :   <ThierMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    
                    <div className="read-reciepts" style={{marginRight: isMyMesaage ? '18px' : '0px', marginLeft: isMyMesaage ? '0px' : '68px' }}>
                        read-reciept

                    </div>

                </div>
            );
        
    })
}


    if (!chat || !username) {
      return <p>Please select a chat.</p>;
    } else {
      console.log("chatting with ", chat.name);
      
    }

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ' ${person.person.username}')}
                </div>

            </div>
            { renderMesssages() }
            <div style={{height: '100px'  }}  />
            <div className="message-form-container">
                <MessageForm {...props} chatID={activeChat}/>
            </div>
        </div>
      );
}

export default ChatFeed;