import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './sidebar.scss';
import SidebarChat from './SidebarChat/SidebarChat';

const Sidebar = () => {
    return (
      <div className='sidebar'>
        <div className='sidebar__header'>
          <Avatar />
          <div className='sidebar__header-right'>
            <IconButton>
              <DonutLarge />
            </IconButton>
            <IconButton>
              <Chat />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className='sidebar__search'>
          <div className='sidebar__search__container'>
            <SearchOutlined />
            <input type='text' placeholder='Seacrh Items Here' />
          </div>
        </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
        </div>
        </div>
    );
}

export default Sidebar
