import React, { useContext } from 'react';
import { MessageContext } from '../../utils/MessageContext.jsx';

const MessageWindow = () => {
  const { selectedInbox } = useContext(MessageContext);

  return (
    <div className="w-3/4 h-screen p-4">
      {selectedInbox ? (
        <>
          <h2 className="text-xl font-bold mb-4">{selectedInbox.user}</h2>
          <div className="h-5/6 bg-gray-50 p-4 rounded shadow-sm">
            {/* Message list will go here */}
            <p className="text-gray-700">Chat with {selectedInbox.user}</p>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Select an inbox to view messages</p>
      )}
    </div>
  );
};

export default MessageWindow;
