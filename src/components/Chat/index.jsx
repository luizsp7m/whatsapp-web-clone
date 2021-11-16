import { Container } from './styles';

import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatSidebar from '../ChatSidebar';
import Messages from '../Messages';

import { useApp } from '../../hooks/useApp';

export default function Chat() {

  const { showChatSidebar } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>
      <ChatHeader />
      <Messages />
      <ChatFooter />
      <ChatSidebar />
    </Container>
  );
}