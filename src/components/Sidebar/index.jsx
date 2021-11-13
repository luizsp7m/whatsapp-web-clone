import SidebarHeader from '../SidebarHeader';
import SidebarGroup from '../SidebarGroup';
import CreateGroup from '../CreateGroup';

import { Container, SidebarContent } from './styles';

export default function Sidebar() {

  let array = [];

  for(let i = 0; i < 10; i++) {
    array.push(i);
  }

  return (
    <Container>
      <SidebarHeader />

      <SidebarContent>
        { array.map(group => <SidebarGroup key={group} />) }
      </SidebarContent>

      <CreateGroup />
    </Container>
  );
}