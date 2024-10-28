import React, { createContext, useState } from 'react';

// Create the context
export const MessageContext = createContext();

// Context Provider Component
export const MessageProvider = ({ children }) => {
  const [inboxes, setInboxes] = useState([
    { id: 1, user: 'Buyer1', lastMessage: 'Hello, can we discuss?' },
    { id: 2, user: 'Buyer2', lastMessage: 'Is this available?' },
  ]);
  const [selectedInbox, setSelectedInbox] = useState(null);

  return (
    <MessageContext.Provider value={{ inboxes, selectedInbox, setSelectedInbox }}>
      {children}
    </MessageContext.Provider>
  );
};
