import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Users } from './pages/users'
import { DefaultLayout } from './layouts/DefaultLayout'
import { User } from './pages/user'
import { UserEdit } from './pages/userEdit'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/users/:userId',
    element: <User />,
  },
  {
    path: '/users/edit/:userId',
    element: <UserEdit />,
  },
]

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}
