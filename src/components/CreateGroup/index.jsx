import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';
import { useGroup } from '../../hooks/useGroup';

import { firebase } from '../../services/firebase';

import { Container, Header, Icon, Form, Input, Wrapper } from './styles';

export default function CreateGroup() {

  const { showCreateGroup, setShowCreateGroup } = useApp();
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function createNewGroup(event) {
    event.preventDefault();

    firebase.database().ref('/groups').push({
      image: `https://avatars.dicebear.com/api/initials/${name.replaceAll(" ", "")}.svg`,
      name,
      description,
    });

    setName("");
    setDescription("");

    setShowCreateGroup(false);
  }

  useEffect(() => {
    if (!showCreateGroup) {
      setName("");
      setDescription("");
    }
  }, [showCreateGroup]);

  return (
    <Container showCreateGroup={showCreateGroup} >
      <Header>
        <Icon
          size={16}
          onClick={() => setShowCreateGroup(false)}
        />
        <span>Voltar</span>
      </Header>

      <Wrapper>
        <Form onSubmit={createNewGroup}>
          <h2>Criar grupo</h2>

          <Input>
            <label>Nome do grupo</label>
            <input
              type="text"
              required={true}
              maxLength="50"
              onChange={({ target }) => setName(target.value)}
              value={name}
            />
          </Input>

          <Input>
            <label>Descrição do grupo</label>
            <textarea
              type="text"
              required={true}
              maxLength="100"
              rows="5"
              onChange={({ target }) => setDescription(target.value)}
              value={description}
            />
          </Input>

          <button type="submit">Criar grupo</button>
        </Form>
      </Wrapper>
    </Container>
  );
}