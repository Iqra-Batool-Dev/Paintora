import React, { useContext } from 'react';
import { MessageContext } from '../../utils/MessageContext.jsx';

const Sidebar = () => {
  const { inboxes, setSelectedInbox } = useContext(MessageContext);

  return (
    <div className="w-1/4 h-screen bg-gray-100 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Inboxes</h2>
      {inboxes.map((inbox) => (
        <div
          key={inbox.id}
          className="p-2 border-b cursor-pointer hover:bg-gray-200"
          onClick={() => setSelectedInbox(inbox)}
        >
          <p className="font-semibold">{inbox.user}</p>
          <p className="text-sm text-gray-600">{inbox.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
