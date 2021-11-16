import SidebarHeader from '../SidebarHeader';
import SidebarGroup from '../SidebarGroup';
import CreateGroup from '../CreateGroup';

import { Container, SidebarContent } from './styles';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

export default function Sidebar() {

  const { groupSelected, setGroupSelected, groups } = useApp();
  const { user } = useAuth();

  return (
    <Container>
      <SidebarHeader user={user} />

      <SidebarContent>
        {groups.map(group => <div key={group.id} onClick={() => setGroupSelected(group.id)}>
          <SidebarGroup
            group={group}
            selected={group.id == groupSelected ? true : false}
          />
        </div>)}
      </SidebarContent>

      <CreateGroup />
    </Container>
  );
}