import React from 'react';
import Sidebar from './Sidebar';
import MessageWindow from './MessageWindow';

const MessagePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MessageWindow />
    </div>
  );
};

export default MessagePage;
