import Pusher from 'pusher-js'
import React, { useEffect, useState } from 'react'
import './app.scss'
import API from './axios'
import Chat from './components/Chat/Chat.jsx'
import Sidebar from './components/Sidebar/Sidebar'
const App = () => {

  const [messages,setMessages]=useState([])
  console.log(messages);
  useEffect(() => {
    API.get('/api/v1/messages/sync')
    .then(res=>setMessages(res.data))
  },[])
  useEffect(() => {
    const pusher = new Pusher('a70763a08dc64edb87ae', {
      cluster: 'ap1'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      alert(JSON.stringify(newMessage));

      setMessages([...messages,newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])
    return (
      <div className='app'>
        <div className='app__body'>
          <Sidebar />
          <Chat messages={messages} />
        </div>
      </div>
    );
}

export default App
