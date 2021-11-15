import { Container, GroupImage, GroupInformation } from './styles';

export default function SidebarGroup({ group, selected }) {

  const lastMessage = group.messages.length - 1;

  return (
    <Container selected={selected}>
      <GroupImage>
        <img src={group.image} alt={group.name} />
      </GroupImage>

      <GroupInformation>
        <h5>{group.name}</h5>
        <p>{group.messages[lastMessage].sender.name}: {group.messages[lastMessage].message}</p>
      </GroupInformation>
    </Container>
  );
}