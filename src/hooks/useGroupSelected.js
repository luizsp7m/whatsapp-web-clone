import { useEffect, useState } from "react";

import { useApp } from "./useApp";

import { firebase } from '../services/firebase';

export function useGroupSelected() {
  const [group, setGroup] = useState();
  const [loading, setLoading] = useState(true);

  const { groupSelected } = useApp();

  useEffect(() => {
    if(groupSelected) {
      setLoading(true);

      const groupRef = firebase.database().ref(`/groups/${groupSelected}`);

      groupRef.on('value', group => {
        const data = group.val();
        
        if(data) {
          setGroup(data);
          setLoading(false);
        }

        return () => {
          groupRef.off('value');
        }
      })
    }
  }, [groupSelected]);

  return { group, loading };
}