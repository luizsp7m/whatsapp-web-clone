import { useApp } from '../../hooks/useApp';

import { Container } from './styles';

export default function ChatSidebar() {

  const { showChatSidebar } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>

    </Container>
  );
}