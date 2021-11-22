import { useEffect, useState } from 'react';

import { Container, GroupImage, GroupInformation } from './styles';

import { format } from 'date-fns';

export default function SidebarItem({ group, selected }) {
  return (
    <Container selected={selected}>
      <GroupImage>
        <img src={group.image} alt={group.name} />
      </GroupImage>

      <GroupInformation>
        <span>
          <h5>{group.name}</h5>
          <label>
            {group.messages.length > 0 ? format(new Date(group.messages[group.messages.length - 1].created_at), 'kk:mm') : format(new Date(group.created_at), 'kk:mm')}
          </label>
        </span>
        <p>
          {group.messages.length > 0 &&
            `${group.messages[group.messages.length - 1].sender.name}: ${group.messages[group.messages.length - 1].message}`
          }
        </p>
      </GroupInformation>
    </Container>
  );
}