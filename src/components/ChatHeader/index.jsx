import { useApp } from '../../hooks/useApp';

import { Container, GroupInformation, MenuButton } from './styles';

export default function ChatHeader() {

  const { showChatSidebar, setShowChatSidebar } = useApp();

  return (
    <Container>
      <GroupInformation>
        <img 
          src="https://images.wallpaperscraft.com/image/single/clock_alarm_clock_time_222141_1280x720.jpg" 
          alt="Group Information" 
          onClick={() => setShowChatSidebar(true)}
        />
        <span>What is Lorem Ipsum?</span>
      </GroupInformation>

      <MenuButton
        size={18}
        onClick={() => setShowChatSidebar(!showChatSidebar)}
      />
    </Container>
  );
}