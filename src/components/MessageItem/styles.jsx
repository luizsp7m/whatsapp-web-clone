import styled from 'styled-components';

import { AiFillDelete } from 'react-icons/ai';

export const IconDelete = styled(AiFillDelete)`
  color: ${({ theme }) => theme.colors.textSecondary};
  position: absolute;
  right: 1rem;
  opacity: 0;
  transition: .25s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(.75);
  }
`

export const Container = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.message };
  position: relative;

  display: flex;
  flex-direction: column;

  align-self: ${({ mine }) => mine ? "flex-end" : "flex-start"};

  cursor: default;

  &:hover ${IconDelete} {
    opacity: 1;
  }

  /* margin: auto 0 0 0; */

  > span {
    font-size: 1.35rem;
    font-weight: 500;
    color: ${({ mine }) => mine ? '#4cd137' : '#D81B60'};
  }

  > p {
    min-width: 200px;
    max-width: 400px;
    font-size: 1.35rem;
    letter-spacing: .05rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  > label {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
    text-align: right;
  }
`;
