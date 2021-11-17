import { useEffect, useState } from 'react';

import { Container, GroupImage, GroupInformation } from './styles';

export default function SidebarItem({ group, selected }) {
  return (
    <Container selected={selected}>
      <GroupImage>
        <img src={group.image} alt={group.name} />
      </GroupImage>

      <GroupInformation>
        <h5>{group.name}</h5>
        <p>
          {group.messages.length > 0 &&
            `${group.messages[group.messages.length - 1].sender.name}: ${group.messages[group.messages.length - 1].message}`
          }
        </p>
      </GroupInformation>
    </Container>
  );
}