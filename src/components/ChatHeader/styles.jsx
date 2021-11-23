import styled from 'styled-components';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 63px;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.sidebarHeader};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, .05);
`;

export const GroupInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: default;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  > span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
    font-size: 1.35rem;
  }
`;

export const MenuButton = styled(BsThreeDotsVertical)`
  cursor: pointer;
  transition: filter .3s;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    filter: brightness(.75);
  }
`

export const IconBack = styled(BiArrowBack)`
  display: none;

  @media(max-width: 768px) {
    display: block;
    cursor: pointer;
    transition: filter .3s;
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover {
      filter: brightness(.75);
    }
  }
`