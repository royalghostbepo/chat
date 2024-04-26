const ThierMessage = ({lastMessage, message}) => {
    const ifFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {ifFirstMessageByUser && (
                <div className={"message-avatar"}
                style={{backgroundImage: `url(${message.sender?.avatar})`}}
                />
            ) }
            {message?.attachements?.length > 0
                ? (
                    <img
                        src={message.attachements[0].file}
                        alt="Attachment" 
                        className="message-image"
                        style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                    />
                ) : (
                    <div className="message" style={{float: 'left', backgroundColor: '##CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                        {message.text}
                    </div>
                )
                
            }
            
        </div>
    );
}
export default ThierMessage;