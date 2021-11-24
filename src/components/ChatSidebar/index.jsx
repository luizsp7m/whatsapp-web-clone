import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';

import { firebase } from '../../services/firebase';

import {
  Container,
  Description,
  Header,
  CloseButton,
  Members,
  Wrapper,
  IconPen,
  EditSidebar,
  Form,
  Input,
  IconClose,
} from './styles';

export default function ChatSidebar({ group }) {

  const { showChatSidebar, setShowChatSidebar, groupSelected } = useApp();

  const [members, setMembers] = useState([]);
  const [showEditSidebar, setShowEditSidebar] = useState(false);
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);

  async function editGroup(event) {
    event.preventDefault();

    firebase.database().ref(`/groups/${groupSelected}`).update({
      image: `https://avatars.dicebear.com/api/initials/${name}.svg`,
      name, 
      description,
    });

    setShowEditSidebar(false);
  }

  useEffect(() => {
    let parsedMembers = [];

    for (let id in group.members) {
      parsedMembers.push({
        id, ...group.members[id]
      });
    }

    setMembers(parsedMembers);
  }, [group]);

  useEffect(() => {
    setName(group.name);
    setDescription(group.description);
  }, [showEditSidebar, group]);

  return (
    <Container showChatSidebar={showChatSidebar}>
      <Header>
        <CloseButton size={18} onClick={() => {
          setShowChatSidebar(false);
          setShowEditSidebar(false);
        }} />
        <span>Dados do grupo</span>
      </Header>

      <Wrapper>
        <Description>
          <img src={group.image} alt={group.name} />

          <div>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
          </div>

          <IconPen
            onClick={() => setShowEditSidebar(true)}
            size={18}
          />

          <EditSidebar showEditSidebar={showEditSidebar}>
            <Form onSubmit={editGroup}>
              <h2>Editar grupo</h2>

              <IconClose
                size={18}
                onClick={() => setShowEditSidebar(false)}
              />

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

              <button type="submit">Salvar alterações</button>
            </Form>
          </EditSidebar>
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