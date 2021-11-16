import { Container } from './styles';

import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatSidebar from '../ChatSidebar';
import Messages from '../Messages';

import { useApp } from '../../hooks/useApp';

import { useEffect, useState } from 'react';

export default function Chat() {

  const { showChatSidebar, groupSelected, groups } = useApp();

  const [indexSelected, setIndexSelected] = useState();

  useEffect(() => {
    groups.map(group => {
      if(groupSelected === group.id) {
        setIndexSelected(group);
      }
    })
  }, [groupSelected, groups]);

  return (
    <Container showChatSidebar={showChatSidebar}>
      <ChatHeader group={indexSelected} />
      <Messages group={indexSelected} />
      <ChatFooter />
      {/* <ChatSidebar /> */}
    </Container>
  );
}