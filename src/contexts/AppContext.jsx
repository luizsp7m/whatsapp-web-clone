import { createContext, useEffect, useState } from "react";

import data from "../data/database.json";

const AppContext = createContext();

function AppProvider({ children }) {

  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showChatSidebar, setShowChatSidebar] = useState(false);

  const [groups, setGroups] = useState(data.groups);
  const [groupSelected, setGroupSelected] = useState(0);

  return (
    <AppContext.Provider value={{
      showCreateGroup,
      setShowCreateGroup,
      showChatSidebar,
      setShowChatSidebar,
      groups,
      groupSelected, 
      setGroupSelected
    }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider }