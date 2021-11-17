import SidebarHeader from '../SidebarHeader';
import SidebarItem from '../SidebarItem';
import CreateGroup from '../CreateGroup';

import { Container, SidebarContent } from './styles';

import { useGroup } from '../../hooks/useGroup';
import { useApp } from '../../hooks/useApp';

export default function Sidebar() {

  const { groups } = useGroup();

  const { groupSelected, setGroupSelected } = useApp();

  return (
    <Container>
      <SidebarHeader />

      <SidebarContent>
        {groups.map(group => {
          return (
            <div key={group.id} onClick={() => setGroupSelected(group.id)}>
              <SidebarItem group={group} selected={groupSelected === group.id ? true : false} />
            </div>
          )
        })}
      </SidebarContent>

      <CreateGroup />
    </Container>
  );
}