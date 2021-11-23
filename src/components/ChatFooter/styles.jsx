import styled from 'styled-components';

import { RiSendPlaneFill } from 'react-icons/ri';

export const Container = styled.form`
  height: 63px;
  background-color: ${({ theme }) => theme.colors.sidebarHeader};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;

  position: absolute;
  left: 0; right: ${({ showChatSidebar }) => showChatSidebar ? "350px" : "0" };
  bottom: 0;

  transition: right .3s ease-in-out;

  @media (max-width: 768px) {
    right: 0;
  }

  > input {
    width: 95%;
    background-color: rgba(0, 0, 0, .1);
    border: 0;
    padding: 1.5rem 2rem;
    border-radius: 2rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    outline: 0;
    font-size: 1.35rem;
  }

  > button {
    outline: 0;
    border: 0;
    background: 0;
    font-size: 0;

    color: #fafafa;
    cursor: pointer;
    transition: filter .3s;

    &:hover {
      filter: brightness(.75);
    }
  }
`;

export const IconSend = styled(RiSendPlaneFill)`
  color: ${({ theme }) => theme.colors.textPrimary};;
`