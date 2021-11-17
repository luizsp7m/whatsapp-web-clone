import SidebarHeader from '../SidebarHeader';
import SidebarItem from '../SidebarItem';
import CreateGroup from '../CreateGroup';

import { Container, SidebarContent } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <SidebarHeader />

      <SidebarContent>
        <SidebarItem />
      </SidebarContent>

      <CreateGroup />
    </Container>
  );
}