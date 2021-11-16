import { createContext, useEffect, useMemo, useState } from "react";

import { useAuth } from "../hooks/useAuth";

import { useGroups } from '../hooks/useGroups';

import { database } from '../services/firebase';

const AppContext = createContext();

function AppProvider({ children }) {

  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showChatSidebar, setShowChatSidebar] = useState(false);

  const [groups, setGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);

  // Get data from Firebase
  const [groupSelected, setGroupSelected] = useState();
  const [loadingGroups, setLoadingGroups] = useState(true);

  const { user, loadingUser } = useAuth();

  useEffect(() => {
    if (!loadingUser && user) {
      const groupsRef = database.ref(`/groups`);

      groupsRef.on('value', snapshot => {
        const data = snapshot.val();

        const groupsParticipate = [];
        const allGroupsArray = [];

        for (let group in data) {
          allGroupsArray.push({
            id: group, ...data[group]
          });

          for (let member in data[group].members) {
            if (data[group].members[member].id === user.id) {
              groupsParticipate.push({
                id: group, ...data[group],
              });
            }
          }
        }

        setAllGroups(allGroupsArray);
        setGroups(groupsParticipate);

        return () => {
          groupRef.off('value');
        }
      });
    }
  }, [loadingUser]);

  return (
    <AppContext.Provider value={{
      showCreateGroup,
      setShowCreateGroup,
      showChatSidebar,
      setShowChatSidebar,
      groups,
      allGroups,
      groupSelected,
      setGroupSelected
    }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider }