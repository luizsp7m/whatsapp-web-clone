import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

import { firebase } from '../../services/firebase';

import { Container, Header, Icon, Form, Input, Wrapper } from './styles';

export default function CreateGroup() {

  const { showCreateGroup, setShowCreateGroup, allGroups } = useApp();
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  async function createNewGroup(event) {
    event.preventDefault();

    const data = {
      image: `https://avatars.dicebear.com/api/initials/${name}.svg`,
      name,
      description,
      owner: user,
      members: [user],
    }

    try {
      await firebase.database().ref("groups").push(data);
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setDescription("");
      setCode("");
      setShowCreateGroup(false);
    }
  }

  async function joinGroup(event) {
    event.preventDefault();

    if (code === "") {
      alert("Selecione um grupo");
    } else {

      try {
        await firebase.database().ref(`/groups/${code}/members`).push(user);
      } catch (error) {
        console.log(error);
      } finally {
        setName("");
        setDescription("");
        setCode("");
        setShowCreateGroup(false);
      }
    }
  }

  useEffect(() => {
    if (!showCreateGroup) {
      setName("");
      setDescription("");
      setCode("");
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

        <Form onSubmit={joinGroup}>
          <h2>Entrar em grupo existente</h2>

          <Input>
            <label>Selecione um grupo</label>

            <select onChange={({ target }) => setCode(target.value)}>
              {allGroups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
            </select>
          </Input>

          <button type="submit">Entrar</button>
        </Form>
      </Wrapper>
    </Container>
  );
}