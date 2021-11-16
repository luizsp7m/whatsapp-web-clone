import { createContext, useEffect, useState } from "react";

import { firebase } from '../services/firebase';

import { useAuth } from '../hooks/useAuth';

const AppContext = createContext();

function AppProvider({ children }) {

  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showChatSidebar, setShowChatSidebar] = useState(false);

  const [allGroups, setAllGroups] = useState([]);
  const [groupsParticipate, setGroupsParticipate] = useState([]);
  const [idGroupSelected, setIdGroupSelected] = useState("");
  const [groupSelected, setGroupSelected] = useState();

  const { user } = useAuth();

  useEffect(() => {
    const groupsRef = firebase.database().ref("groups");

    groupsRef.on("value", groups => {
      const data = groups.val();

      let arrayAllGroups = [];
      let arrayGroupsParticipate = [];

      for (let id in data) {
        arrayAllGroups.push({
          id, ...data[id],
        });
      }

      arrayAllGroups.map(group => {
        for(let member in group.members) {
          if(group.members[member]?.id === user?.id) {
            arrayGroupsParticipate.push(group);
          }
        }
      })

      setGroupsParticipate(arrayGroupsParticipate);

      setAllGroups(arrayAllGroups);

      return () => {
        groupsRef.off('value');
      }
    });
  }, []);

  useEffect(() => {
    // const groupRef = firebase.database().ref(`groups/${idGroupSelected}`);

    // groupRef.on("value", group => {
    //   const data = group.val();

    //   setGroupSelected(data);

    //   return () => {
    //     groupRef.off('value');
    //   }
    // });

    allGroups.map(group => {
      if(group.id === idGroupSelected) {
        setGroupSelected(group);
      }
    })

  }, [idGroupSelected, allGroups]);

  return (
    <AppContext.Provider value={{
      showCreateGroup,
      setShowCreateGroup,
      showChatSidebar,
      setShowChatSidebar,
      allGroups,
      idGroupSelected,
      setIdGroupSelected,
      groupSelected,
      groupsParticipate,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider }