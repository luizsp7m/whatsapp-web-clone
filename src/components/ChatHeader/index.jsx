import { useApp } from '../../hooks/useApp';

import { Container, GroupInformation, MenuButton } from './styles';

export default function ChatHeader() {

  const { setShowChatSidebar } = useApp();

  return (
    <Container>
      <GroupInformation>
        <img
          src="https://avatars.dicebear.com/api/initials/luiz.svg"
          alt="Imagem do grupo"
          onClick={() => setShowChatSidebar(true)}
        />
        <span>Nome do grupo</span>
      </GroupInformation>

      <MenuButton
        size={18}
        onClick={() => setShowChatSidebar(true)}
      />
    </Container>
  );
}