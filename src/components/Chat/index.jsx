import { Container } from './styles';

import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatSidebar from '../ChatSidebar';

import { useApp } from '../../hooks/useApp';

export default function Chat() {

  const { showChatSidebar } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>
      <ChatHeader />
      <ChatFooter />
      <ChatSidebar />
    </Container>
  );
}