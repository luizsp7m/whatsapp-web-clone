import { useApp } from '../../hooks/useApp';

import { Container, GroupInformation, MenuButton } from './styles';

export default function ChatHeader() {

  const { setShowChatSidebar, groupSelected } = useApp();

  return (
    <Container>
      <GroupInformation>
        <img
          src={groupSelected?.image}
          alt={groupSelected?.name}
          onClick={() => setShowChatSidebar(true)}
        />
        <span>{groupSelected?.name}</span>
      </GroupInformation>

      <MenuButton
        size={18}
        onClick={() => setShowChatSidebar(true)}
      />
    </Container>
  );
}