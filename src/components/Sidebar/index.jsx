import SidebarHeader from '../SidebarHeader';
import SidebarItem from '../SidebarItem';
import CreateGroup from '../CreateGroup';

import { Container, SidebarContent } from './styles';

import { useGroup } from '../../hooks/useGroup';
import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

import { useEffect, useState } from 'react';

export default function Sidebar() {
  const { groups } = useGroup();
  const { groupSelected, setGroupSelected } = useApp();
  const { user } = useAuth()

  const [participate, setParticipate] = useState([]);

  useEffect(() => {
    let groupArray = [];

    groups.map(group => {
      group.members.find(member => member.memberId === user.id) && groupArray.push(group);
    });

    setParticipate(groupArray);
  }, [groups]);

  return (
    <Container>
      <SidebarHeader />

      <SidebarContent>
        {participate.map(group => {
          return (
            <div key={group.id} onClick={() => setGroupSelected(group.id)}>
              <SidebarItem group={group} selected={groupSelected === group.id ? true : false} />
            </div>
          )
        })}
      </SidebarContent>

      <CreateGroup />
    </Container>
  );
}