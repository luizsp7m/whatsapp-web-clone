import { Container } from './styles';

import { RiSendPlaneFill } from 'react-icons/ri';

import { useApp } from '../../hooks/useApp';

export default function ChatFooter() {

  const { showChatSidebar } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>
      <input type="text" placeholder="Digite uma mensagem" />

      <button>
        <RiSendPlaneFill size={18} />
      </button>
    </Container>
  );
}