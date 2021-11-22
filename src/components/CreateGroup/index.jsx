import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';
import { useGroup } from '../../hooks/useGroup';

import { firebase } from '../../services/firebase';

import { Container, Header, Icon, Form, Input, Wrapper } from './styles';

import { randomColor } from '../../utils/randomColor';

export default function CreateGroup() {

  const { showCreateGroup, setShowCreateGroup, setGroupSelected } = useApp();
  const { user } = useAuth();
  const { groups } = useGroup();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [groupId, setGroupId] = useState();
  const [dontParticipate, setDontParticipate] = useState([]);

  async function createNewGroup(event) {
    event.preventDefault();

    const date = new Date();

    firebase.database().ref('/groups').push({
      image: `https://avatars.dicebear.com/api/initials/${name}.svg`,
      name,
      description,
      owner: user.id,
      created_at: date.toISOString(),
    }).then(response => {
      firebase.database().ref(`/groups/${response.key}/members`).push({
        color: randomColor(),
        ...user,
      });
      setName("");
      setDescription("");
      setGroupId(undefined);
      setShowCreateGroup(false);
      setGroupSelected(response.key);
    });
  }

  async function joinGroup(event) {
    event.preventDefault();

    if (!groupId) {
      return alert("Selecione um grupo");
    }

    firebase.database().ref(`/groups/${groupId}/members`).push({
      color: randomColor(),
      ...user,
    }).then(() => {
      setName("");
      setDescription("");
      setGroupSelected(groupId);
      setGroupId(undefined);
      setShowCreateGroup(false);
    });
  }

  useEffect(() => {
    let groupArray = [];

    groups.map(group => {
      !group.members.find(member => member.memberId === user.id) && groupArray.push(group);
    });

    setDontParticipate(groupArray);
  }, [groups]);

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

        <Form onSubmit={joinGroup}>
          <h2>Grupos</h2>

          <Input>
            <label>Grupos disponíveis</label>

            <select onChange={({ target }) => setGroupId(target.value)}>
              <option value={undefined}>Selecione um grupo</option>

              {dontParticipate.map(group => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </Input>

          <button type="submit">Entrar no grupo</button>
        </Form>
      </Wrapper>
    </Container>
  );
}