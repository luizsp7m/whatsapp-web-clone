import { useApp } from '../../hooks/useApp';

import { Container, GroupInformation, MenuButton, IconBack } from './styles';

export default function ChatHeader({ group }) {

  const { setShowChatSidebar, setShowChat, showChat } = useApp();

  return (
    <Container>
      <GroupInformation>
        <IconBack 
          size={18} 
          onClick={() => setShowChat(!showChat)}
        />

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