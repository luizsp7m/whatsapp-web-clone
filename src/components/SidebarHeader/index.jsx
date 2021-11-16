import { Container, ProfileImage, Icons } from './styles';

import { BsFillChatLeftTextFill, BsPlus } from 'react-icons/bs';

import { useApp } from '../../hooks/useApp';

export default function HeaderSidebar({ user }) {

  const { setShowCreateGroup } = useApp();

  return (
    <Container>
      <ProfileImage>
        <img src={user.avatar} alt={user.name} />
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