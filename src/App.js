import {ChatEngine} from 'react-chat-engine';
//import ChatFeed, {sendMessage, toggleChat} from './components/Chat
import  ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import './App.css';


const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID="1244a889-4491-4859-b4be-8c6403ad1ecd"
      userName="play"
      userSecret="play"
      renderChatFeed={(chatAppProps) =>  <ChatFeed {...chatAppProps} />}
      
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;