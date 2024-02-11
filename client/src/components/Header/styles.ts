import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const HeaderButtons = styled.nav`
  display: flex;
  gap: 0.5rem;

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 2px;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray_100};

    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.purple_500};
    }
  }
`
