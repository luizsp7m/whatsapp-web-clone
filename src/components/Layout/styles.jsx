import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  /* grid-template-columns: 350px 1fr 350px; */
  background-color: ${({ theme }) => theme.colors.backgroundPrimary };
`;
