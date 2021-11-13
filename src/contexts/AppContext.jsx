import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showChatSidebar, setShowChatSidebar] = useState(false);

  return (
    <AppContext.Provider value={{
      showCreateGroup,
      setShowCreateGroup,
      showChatSidebar,
      setShowChatSidebar
    }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider }