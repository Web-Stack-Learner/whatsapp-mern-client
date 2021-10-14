import { Avatar, IconButton, Typography } from '@material-ui/core'
import { AttachFileOutlined, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import API from '../../axios'
import './chat.scss'


const Chat = ({ messages }) => {
  const [input, setInput] = useState('');
  const sendMessage = async(e) => {
    e.preventDefault()
    await API.post('/api/v1/messages/new', { 
message:input,
name:"borhan",
timestamps:new Date(Date.now()).toUTCString,
received:true

    })

    setInput('')

  }
  
    return (
      <div className='chat'>
        <div className='chat__header'>
          <Avatar />
          <div className='chat__header-info'>
            <Typography variant='h3'>Borhan U.</Typography>
            <Typography variant='body2'>last seen at ...</Typography>
          </div>
          <div className='chat__header-right'>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFileOutlined />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className='chat__body'>
          {messages.map(message => (
            <p
              className={`chat__body-message ${
                message.received && 'chat__body-reciver'
                }`}
              key={message?._id}
            >
              <span className='chat__body-name'>{message?.name}</span>
              {message?.message}
              <span className='chat__body-timeStamps'>
                {message?.timestamps}
              </span>
            </p>
          ))}
        </div>
        <div className='chat__footer'>
          <InsertEmoticon />
          <form className='chat__footer__form' onSubmit={sendMessage}>
            <input
              className='chat__footer__form-input'
              type='text'
              placeholder='Type a message'
              onChange={e => setInput(e.target.value)}
              value={input}
            />
            <button type='submit'>Send a message</button>
          </form>
          <Mic />
        </div>
      </div>
    );
}

export default Chat
