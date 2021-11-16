import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';

import { Container, Description, Header, CloseButton, Members, Wrapper } from './styles';

export default function ChatSidebar() {

  const { showChatSidebar, groups, groupSelected, setShowChatSidebar } = useApp();

  const [indexSelected, setIndexSelected] = useState();

  useEffect(() => {
    groups.map(group => {
      if(groupSelected === group.id) {
        setIndexSelected(group);
      }
    })
  }, [groupSelected]);

  return (
    <Container showChatSidebar={showChatSidebar}>
      <Header>
        <CloseButton size={18} onClick={() => setShowChatSidebar(false)} />
        <span>Dados do grupo</span>
      </Header>

      <Wrapper>
        <Description>
          <img src={indexSelected?.image} alt={indexSelected?.name} />

          <div>
            <h1>{indexSelected?.name}</h1>
            <p>Grupo - {indexSelected?.members.length} {indexSelected?.members.length > 1 ? "participantes" : "participante"}</p>
          </div>

          <p>{indexSelected?.description}</p>
        </Description>

        <Members>
          <h3>{indexSelected?.members.length} {indexSelected?.members.length > 1 ? "participantes" : "participante"}</h3>

          {indexSelected?.members.map((member, index) => (
            <div key={index}>
              <img src={member.image} alt={member.name} />
              <div>
                <span>{member.name}</span>
                <label>{member.email}</label>
              </div>
            </div>
          ))}
        </Members>
      </Wrapper>
    </Container>
  );
}