import { Container, ProfileImage, Icons } from './styles';

import { BsPlus } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

export default function SidebarHeader() {

  const { setShowCreateGroup } = useApp();
  const { user, signOut } = useAuth();

  return (
    <Container>
      <ProfileImage>
        <img src={user.avatar} alt={user.name} />
      </ProfileImage>

      <Icons>
        <button onClick={signOut}>
          <GoSignOut size={18} />
        </button>

        <button onClick={() => setShowCreateGroup(true)}>
          <BsPlus size={22} />
        </button>
      </Icons>
    </Container>
  );
}