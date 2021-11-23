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
  const { groupSelected, setGroupSelected, showChat, setShowChat } = useApp();
  const { user } = useAuth()

  const [participate, setParticipate] = useState([]);

  useEffect(() => {
    let groupArray = [];

    groups.map(group => {
      group.members.find(member => member.memberId === user.id) && groupArray.push(group);
    });

    groupArray.sort(function (x, y) {
      let aLength = x.messages.length - 1;
      let bLength = y.messages.length - 1;

      let a = aLength >= 0 ? new Date(x.messages[aLength].created_at) : new Date(x.created_at);
      let b = bLength >= 0 ? new Date(y.messages[bLength].created_at) : new Date(y.created_at);

      return b - a;
    });

    setParticipate(groupArray);
  }, [groups]);

  return (
    <Container showChat={showChat}>
      <SidebarHeader />

      <SidebarContent>
        {participate.map(group => {
          return (
            <div key={group.id} onClick={() => {
              setGroupSelected(group.id);
              setShowChat(true);
            }}>
              <SidebarItem group={group} selected={groupSelected === group.id ? true : false} />
            </div>
          )
        })}
      </SidebarContent>

      <CreateGroup />
    </Container>
  );
}