import { useEffect, useState } from 'react';

import { Container, GroupImage, GroupInformation } from './styles';

export default function SidebarGroup({ group, selected }) {

  const [messages, setMessages] = useState();

  useEffect(() => {
    const messagesFormatted = [];

    for(let id in group?.messages) {
      messagesFormatted.push({
        id: group.messages[id], ...group.messages[id]
      });

      setMessages(messagesFormatted);
    }
  }, [group]);

  return (
    <Container selected={selected}>
      <GroupImage>
        <img src={group.image} alt={group.name} />
      </GroupImage>

      <GroupInformation>
        <h5>{group.name}</h5>
        <p>{ messages ? `${messages[messages.length - 1]?.sender.name}: ${messages[messages.length - 1]?.message}` : 'Seja o primeiro a dar boas vindas' }</p>
      </GroupInformation>
    </Container>
  );
}