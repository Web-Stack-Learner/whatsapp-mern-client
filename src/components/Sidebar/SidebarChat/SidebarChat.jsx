import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import './sidebarchat.scss';

const SidebarChat = () => {
    return (
      <div className='sidebarChat'>
        <Avatar />
            <div className="sidebarChat__info">
                <Typography variant='h6'>Borhan U.</Typography>
                <Typography variant='body2'>Hello How Are You?</Typography>
        </div>
      </div>
    );
}

export default SidebarChat
