import { Container, IconDelete } from './styles';

import { useApp } from '../../hooks/useApp';

import { firebase } from '../../services/firebase';

import { format } from 'date-fns';

export default function MessageItem({ message, mine }) {

  const { groupSelected } = useApp();

  function deleteMessage() {
    firebase.database().ref(`/groups/${groupSelected}/messages/${message.id}`).remove();
  }

  return (
    <Container mine={mine}>
      <span>{message.sender.name}</span>
      <p>{message.message}</p>

      <label>{format(new Date(message.created_at), 'kk:mm')}</label>

      {mine && <IconDelete
        onClick={deleteMessage}
        size={18}
      />}
    </Container>
  );
}