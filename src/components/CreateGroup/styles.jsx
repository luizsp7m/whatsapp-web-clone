import styled from 'styled-components';

import { BiArrowBack } from 'react-icons/bi';

export const Container = styled.div`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: ${({ theme }) => theme.colors.sidebar };
  transform: ${({ showCreateGroup }) => showCreateGroup ? "translateX(0)" : "translateX(-100%)"};
  transition: transform .3s ease-in-out;

  /* overflow-y: hidden; */
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem 3rem 1rem;
  border-bottom: 8px solid ${({ theme }) => theme.colors.backgroundPrimary};

  &:not(:first-of-type) {
    margin-top: 2rem;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 1rem 0;
  }

  > button {
    padding: 1.5rem;
    border: 0;
    outline: 0;
    border-radius: .5rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    transition: filter .2s ease-in-out;
    color: ${({ theme }) => theme.colors.textSecondary};;

    &:hover {
      filter: brightness(.75);
    }
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.35rem;
  }

  > input, textarea {
    padding: 1rem;
    border-radius: .5rem;
    border: 0;
    outline: 0;
    color: ${({ theme }) => theme.colors.aa};
    resize: none;
    background-color: ${({ theme }) => theme.colors.message};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: 'Roboto', sans-serif;
  }
`