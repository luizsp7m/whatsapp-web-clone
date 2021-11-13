import { Container, ProfileImage, Icons } from './styles';

import { BsFillChatLeftTextFill, BsPlus } from 'react-icons/bs';

import { useApp } from '../../hooks/useApp';

export default function HeaderSidebar() {

  const { setShowCreateGroup } = useApp();

  return (
    <Container>
      <ProfileImage>
        <img src="https://images.wallpaperscraft.com/image/single/monster_cute_art_126913_1280x720.jpg" alt="Profile Image" />
      </ProfileImage>

      <Icons>
        <button>
          <BsFillChatLeftTextFill size={18} />
        </button>

        <button onClick={() => setShowCreateGroup(true)}>
          <BsPlus size={22} />
        </button>
      </Icons>
    </Container>
  );
}