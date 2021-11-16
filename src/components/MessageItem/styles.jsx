import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.message };
  position: relative;

  display: flex;
  flex-direction: column;

  align-self: ${({ alignRight }) => alignRight ? "flex-end" : "flex-start"};

  cursor: default;

  margin: auto 0 0 0;

  > span {
    font-size: 1.35rem;
    color: #e67e22;
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
    font-size: .9rem;
    text-align: right;
  }
`;
