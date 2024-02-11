import { NavLink } from 'react-router-dom'
import { HeaderButtons, HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderButtons>
        <NavLink to="/" title="Home">
          Home
        </NavLink>
        <NavLink to="/users" title="Users">
          Users
        </NavLink>
      </HeaderButtons>
    </HeaderContainer>
  )
}
