import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThierMessage from "./TheirMessage";

const ChatFeed = (props) =>  {
    const { chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];

    const renderReadReciepts =  (message, isMyMesaage) =>{
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={'read_${index}'}  
                className="read-recipt"
                style={{
                    float: isMyMesaage ? 'right'   : 'left',
                    background: 'url(${person?.person?.avatar} )'
                }}
            />
        ))
    }

    const renderMesssages = () => {
        const keys = Object.keys(messages);


        return  keys.map((key, index)=>{
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
                        {renderReadReciepts(message, isMyMesaage)}

                    </div>

                </div>
            );
        
    })
}


    if (!chat ) return 'Loading...';

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