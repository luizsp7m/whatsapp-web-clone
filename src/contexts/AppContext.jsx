import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showChatSidebar, setShowChatSidebar] = useState(false);

  const [showChat, setShowChat] = useState(false);

  const [groupSelected, setGroupSelected] = useState();

  return (
    <AppContext.Provider value={{
      showCreateGroup,
      setShowCreateGroup,
      showChatSidebar,
      setShowChatSidebar,
      groupSelected, 
      setGroupSelected,
      showChat, 
      setShowChat,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider }