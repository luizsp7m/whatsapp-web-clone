import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary };
  min-height: 100vh;
`;
