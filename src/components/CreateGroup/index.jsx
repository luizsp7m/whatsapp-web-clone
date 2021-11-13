import { useApp } from '../../hooks/useApp';

import { Container, Header, Icon } from './styles';

export default function CreateGroup() {

  const { showCreateGroup, setShowCreateGroup } = useApp();

  return (
    <Container showCreateGroup={showCreateGroup} >
      <Header>
        <Icon 
          size={16}
          onClick={() => setShowCreateGroup(false)} 
        />
        <span>Voltar</span>
      </Header>
    </Container>
  );
}