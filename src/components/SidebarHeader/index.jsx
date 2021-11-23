import { Container, ProfileImage, Icons } from './styles';

import { BsPlus, BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import { dark } from '../../styles/Themes';

export default function SidebarHeader() {

  const { setShowCreateGroup } = useApp();
  const { user, signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  return (
    <Container>
      <ProfileImage>
        <img src={user.avatar} alt={user.name} />
      </ProfileImage>

      <Icons>
        <button onClick={toggleTheme}>
          { theme === dark ? <BsFillSunFill size={18} /> : <BsMoonStarsFill size={16} /> }
        </button>

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