import { useApp } from '../../hooks/useApp';

import { Container, GroupInformation, MenuButton } from './styles';

export default function ChatHeader({ group }) {

  const { setShowChatSidebar } = useApp();

  return (
    <Container>
      <GroupInformation>
        <img
          src={group.image}
          alt={group.name}
          onClick={() => setShowChatSidebar(true)}
        />
        <span>{group.name}</span>
      </GroupInformation>

      <MenuButton
        size={18}
        onClick={() => setShowChatSidebar(true)}
      />
    </Container>
  );
}