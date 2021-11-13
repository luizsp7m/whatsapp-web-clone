import styled from 'styled-components';

import { BiArrowBack } from 'react-icons/bi';

export const Container = styled.div`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: ${({ theme }) => theme.colors.sidebar };
  transform: ${({ showCreateGroup }) => showCreateGroup ? "translateX(0)" : "translateX(-100%)"};
  transition: transform .3s ease-in-out;
`;

export const Icon = styled(BiArrowBack)`
  cursor: pointer;
  transition: filter .3s;

  &:hover {
    filter: brightness(.75);
  }
`

export const Header = styled.div`
  height: 63px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.25rem;
  cursor: default;
`