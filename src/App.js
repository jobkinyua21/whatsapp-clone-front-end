import './App.css';
import React from 'react';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from 'pusher-js';
import  { useEffect,useState  } from "react";
import axios from "./axios";

function App() {
  // state=way of declaring variables ,usestate here to store messages
  const [messages,setMessages]=useState([]);

// 1st useeffect resp for fetching all initial info
  useEffect(() =>{
    axios.get("/messages/sync").then((response) =>{
      setMessages(response.data);
    });
  }, []);
  
  


  useEffect(()=>{

// add this from pusher tothe front end
    const pusher = new Pusher('92258fab840fa0382a3b', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage)=> {
      // alert(JSON.stringify(newMessage)); 
      setMessages([...messages,newMessage]);
    });
    // unsubscribe to avoid keeping setting a new listener each time
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);

  console.log(messages);

  
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar/>
      <Chat  messages={messages} />
      </div>

    
    </div>
  );
}

export default App;
