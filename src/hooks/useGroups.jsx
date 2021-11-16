import { useEffect, useState } from 'react';

import { database } from '../services/firebase';

import { useAuth } from './useAuth';

export function useGroups() {
  const { user, loadingUser } = useAuth();

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if(!loadingUser && user) {
      const groupRef = database.ref(`/groups`);

      groupRef.on('value', snapshot => {
        const data = snapshot.val();
        const groupsParticipate = new Array();

        for(let group in data) {
          for(let member in data[group].members) {
            if(data[group].members[member].id === user.id) {
              groupsParticipate.push({
                id: group, ...data[group],
              });
            }
          }
        }

        setGroups(groupsParticipate);

        return () => {
          groupRef.off('value');
        }
      });
    }
  }, [loadingUser]);

  return groups;
}