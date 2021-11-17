import { useEffect, useState } from 'react';

import { Container, GroupImage, GroupInformation } from './styles';

export default function SidebarItem() {
  return (
    <Container selected={false}>
      <GroupImage>
        <img src="https://avatars.dicebear.com/api/initials/luiz.svg" alt="Imagem do grupo" />
      </GroupImage>

      <GroupInformation>
        <h5>Nome do grupo</h5>
        <p>Última mensagem enviada no grupo [dinâmica]</p>
      </GroupInformation>
    </Container>
  );
}