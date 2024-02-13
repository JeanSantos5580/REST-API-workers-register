import styled from 'styled-components'

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
  }

  div + div {
    margin-top: 0.5rem;
  }
`

export const ButtonGetUser = styled.button`
  width: 100px;
  height: 30px;
  background: ${({ theme }) => theme.colors.purple_500};
  border: none;
  padding: 6px 0;
  margin-bottom: 1rem;
  border-radius: 4px;
  cursor: pointer;

  color: #fff;
  font-weight: bold;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const UserCard = styled.div`
  min-width: 400px;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray_600};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.purple_300};
    text-decoration: none;
  }
`

export const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

export const ActionButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.purple_500};
  border: none;
  padding: 6px 0;
  border-radius: 4px;
  cursor: pointer;

  color: #fff;
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.colors.purple_700};
  }
`
export const ButtonDelete = styled(ActionButton)`
  background: ${({ theme }) => theme.colors.gray_700};

  &:hover {
    background: ${({ theme }) => theme.colors.purple_300};
  }
`
