import { Container } from './styles';

import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatSidebar from '../ChatSidebar';
import Messages from '../Messages';

import { useApp } from '../../hooks/useApp';

export default function Chat() {

  const { showChatSidebar, groupSelected, groups } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>
      <ChatHeader group={groups[groupSelected]} />
      <Messages messages={groups[groupSelected].messages} />
      <ChatFooter />
      <ChatSidebar />
    </Container>
  );
}