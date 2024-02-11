import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserInfo = styled.div`
  min-width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray_600};

  small {
    font-weight: bold;
    font-size: 0.875rem;
  }

  a {
    color: ${({ theme }) => theme.colors.purple_300};
    text-decoration: none;
  }
`
