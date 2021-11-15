import { useApp } from '../../hooks/useApp';

import { Container, Description, Header, CloseButton, Members, Wrapper } from './styles';

export default function ChatSidebar() {

  const { showChatSidebar, groups, groupSelected, setShowChatSidebar } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>
      <Header>
        <CloseButton size={18} onClick={() => setShowChatSidebar(false)} />
        <span>Dados do grupo</span>
      </Header>

      <Wrapper>
        <Description>
          <img src={groups[groupSelected].image} alt={groups[groupSelected].name} />

          <div>
            <h1>{groups[groupSelected].name}</h1>
            <p>Grupo - {groups[groupSelected].members.length} {groups[groupSelected].members.length > 1 ? "participantes" : "participante"}</p>
          </div>

          <p>{groups[groupSelected].description}</p>
        </Description>

        <Members>
          <h3>{groups[groupSelected].members.length} {groups[groupSelected].members.length > 1 ? "participantes" : "participante"}</h3>

          {groups[groupSelected].members.map((member, index) => (
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