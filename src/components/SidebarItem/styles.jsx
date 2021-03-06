import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sidebarGroup};
  transition: background .3s;

  background: ${({ selected, theme }) => selected ? theme.colors.sidebarGroup : ""};

  &:hover {
    background: ${({ theme }) => theme.colors.sidebarGroup};
  }
`;

export const GroupImage = styled.div`
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const GroupInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  overflow: hidden;

  width: 100%;

  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h5 {
      margin: 0;
      font-size: 1.45rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textSecondary};

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > label {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 1.15rem;
    }
  }

  > p {
    margin: 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`