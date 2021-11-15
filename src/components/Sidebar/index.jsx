import SidebarHeader from '../SidebarHeader';
import SidebarGroup from '../SidebarGroup';
import CreateGroup from '../CreateGroup';

import { Container, SidebarContent } from './styles';

import { useApp } from '../../hooks/useApp';

export default function Sidebar() {

  const { groupSelected, setGroupSelected, groups } = useApp();

  return (
    <Container>
      <SidebarHeader />

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