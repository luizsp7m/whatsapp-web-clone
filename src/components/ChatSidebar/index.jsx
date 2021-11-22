import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';

import { Container, Description, Header, CloseButton, Members, Wrapper } from './styles';

export default function ChatSidebar({ group }) {

  const { showChatSidebar, setShowChatSidebar } = useApp();

  const [members, setMembers] = useState([]);

  useEffect(() => {
    let parsedMembers = [];

    for (let id in group.members) {
      parsedMembers.push({
        id, ...group.members[id]
      });
    }

    console.log(parsedMembers);

    setMembers(parsedMembers);
  }, [group]);

  return (
    <Container showChatSidebar={showChatSidebar}>
      <Header>
        <CloseButton size={18} onClick={() => setShowChatSidebar(false)} />
        <span>Dados do grupo</span>
      </Header>

      <Wrapper>
        <Description>
          <img src={group.image} alt={group.name} />

          <div>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
          </div>
        </Description>

        <Members>
          <h3>Participantes</h3>

          {members.map(member => <div key={member.id}>
            <img src={member.avatar} alt={member.name} />
            <div>
              <span>{member.name}</span>
              <label>{member.email}</label>
            </div>
          </div>)}
        </Members>
      </Wrapper>
    </Container>
  );
}