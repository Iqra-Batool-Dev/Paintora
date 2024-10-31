import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { format } from 'date-fns';

const MessagesPage = () => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const socket = useRef();

  useEffect(() => {
    // Initialize socket connection
    socket.current = io('http://localhost:8000'); // Replace with your backend URL

    // Fetch conversations on component mount
    axios.get('http://localhost:8000/api/v1/chatroom/', { withCredentials: true })
        .then(res => setConversations(res.data))
        .catch(err => console.error(err));


    // Listen for new messages
    socket.current.on('newMessage', (message) => {
        if (currentChat?._id === message.roomId) {
        setMessages(prev => [...prev, message]);
        }
    });

    return () => socket.current.disconnect();
    }, [currentChat]);

    const selectChat = async (chat) => {
    setCurrentChat(chat);
    try {
        const res = await axios.get(`http://localhost:8000/api/v1/chatroom/${chat._id}`, { withCredentials: true });
        setMessages(res.data.messages);
    } catch (error) {
        console.error(error);
    }
    };

    const sendMessage = async () => {
    const messageData = {
        roomId: currentChat._id,
        content: newMessage,
      userId: user._id, // replace with logged-in user's ID
    };

    try {
      await axios.post('http://localhost:8000/api/v1/chatroom/message', messageData, { withCredentials: true });
      socket.current.emit('sendMessage', messageData);
      setNewMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar for conversations */}
      <div className="w-1/3 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">All Messages</h2>
        <div className="space-y-4">
          {conversations.map(chat => (
            <div
              key={chat._id}
              className={`flex items-center p-2 cursor-pointer ${currentChat?._id === chat._id ? 'bg-gray-200' : ''}`}
              onClick={() => selectChat(chat)}
            >
              <img src={chat.participants[0].avatar} alt="" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="font-semibold">{chat.participants[0].name}</p>
                <p className="text-gray-500 text-sm">{chat.messages[chat.messages.length - 1]?.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div className="w-2/3 flex flex-col">
        {currentChat ? (
          <>
            <div className="p-4 border-b border-gray-300 flex items-center">
              <img src={currentChat.participants[0].avatar} alt="" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h2 className="text-lg font-bold">{currentChat.participants[0].name}</h2>
                <p className="text-sm text-gray-500">Last seen 3 hours ago</p>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-scroll">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === user._id ? 'justify-end' : ''}`}>
                  <div className={`p-2 rounded-lg ${msg.sender === user._id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    <p>{msg.content}</p>
                    <small className="text-xs text-gray-500">{format(new Date(msg.timestamp), 'p')}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-300 flex items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Send a message..."
                className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
              />
              <button onClick={sendMessage} className="text-blue-500 font-bold">Send</button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
