import SidebarHeader from '../SidebarHeader';
import SidebarItem from '../SidebarItem';
import CreateGroup from '../CreateGroup';

import { Container, SidebarContent } from './styles';

import { useApp } from '../../hooks/useApp';

export default function Sidebar() {

  const { allGroups, idGroupSelected, setIdGroupSelected } = useApp();

  return (
    <Container>
      <SidebarHeader />

      <SidebarContent>
        {allGroups.map(group => {
          return (
            <div key={group.id} onClick={() => setIdGroupSelected(group.id)}>
              <SidebarItem
                group={group}
                selected={group.id === idGroupSelected ? true : false}
              />
            </div>
          )
        })}
      </SidebarContent>

      <CreateGroup />
    </Container>
  );
}