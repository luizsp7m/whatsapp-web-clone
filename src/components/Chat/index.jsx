import { Container } from './styles';

import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatSidebar from '../ChatSidebar';
import Messages from '../Messages';

import { useApp } from '../../hooks/useApp';
import { useGroupSelected } from '../../hooks/useGroupSelected';

import { Fragment } from 'react';

export default function Chat() {

  const { showChatSidebar } = useApp();
  const { group, loading } = useGroupSelected();

  return (
    <Container showChatSidebar={showChatSidebar}>
      {!loading && group && <Fragment>
        <ChatHeader group={group} />
        <Messages group={group} />
        <ChatFooter />
        <ChatSidebar group={group} />
      </Fragment>}
    </Container>
  );
}