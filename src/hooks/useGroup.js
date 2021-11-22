import { useEffect, useState } from 'react';

import { useAuth } from './useAuth';

import { firebase } from '../services/firebase';

export function useGroup() {
  const [groups, setGroups] = useState([]);

  const { user, loadingUser } = useAuth();

  useEffect(() => {
    if (!loadingUser && user) {
      const groupRef = firebase.database().ref('/groups');

      groupRef.on('value', group => {
        const data = group.val();

        if (data) {
          const parsedGroups = Object.entries(data).map(([key, value]) => {
            return {
              id: key,
              image: value.image,
              name: value.name,
              description: value.description,
              owner: value.owner,
              messages: Object.entries(value.messages ?? {}).map(([key, value]) => {
                return {
                  id: key,
                  message: value.message,
                  sender: value.sender
                }
              }),
              members: Object.entries(value.members ?? {}).map(([key, value]) => {
                return {
                  id: key,
                  memberId: value.id,
                  email: value.email,
                  name: value.email,
                  avatar: value.avatar,
                }
              }),
            }
          });

          setGroups(parsedGroups);
        }

        return () => {
          groupRef.off('value');
        }
      });
    }
  }, [loadingUser, user]);

  return { groups }
}