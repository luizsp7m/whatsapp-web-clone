import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

import { Container, Header, Icon, Form, Input } from './styles';

import { firebase } from '../../services/firebase';

export default function CreateGroup() {

  const { showCreateGroup, setShowCreateGroup, groups, allGroups } = useApp();
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  const [groupsAvaible, setGroupsAvaible] = useState();

  async function handleCreateGroup(event) {
    event.preventDefault();

    await firebase.database().ref(`/groups`).push({
      image: `https://avatars.dicebear.com/api/initials/${name}.svg`,
      name: name,
      description: description,
      owner: user.id,
      messages: [],
      members: [user],
    });

    setName("");
    setDescription("");
    setCode("");
    setShowCreateGroup(false);
  }

  async function handleEnjoyGroup(event) {
    event.preventDefault();

    await firebase.database().ref(`/groups/-Moa4RLosw_AeiL9Zdp9/members`).push({
      user
    });

    setName("");
    setDescription("");
    setCode("");
    setShowCreateGroup(false);
  }

  useEffect(() => {
    if (!showCreateGroup) {
      setName("");
      setDescription("");
      setCode("");
    }
  }, [showCreateGroup])

  return (
    <Container showCreateGroup={showCreateGroup} >
      <Header>
        <Icon
          size={16}
          onClick={() => setShowCreateGroup(false)}
        />
        <span>Voltar</span>
      </Header>

      <Form onSubmit={handleCreateGroup}>
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

      <Form onSubmit={handleEnjoyGroup}>
        <h2>Entrar em grupo existente</h2>

        <Input>
          <label>{code}</label>
          <select onChange={({ target }) => setCode(target.value)}>
            { allGroups.map((group, index) => <option key={index} value={group.id}>
              { group.id }
            </option>) }
          </select>
        </Input>

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}