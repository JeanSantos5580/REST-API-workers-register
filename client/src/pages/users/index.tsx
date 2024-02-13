import { useEffect, useState } from 'react'
import { NewUserSchema } from '../../schemas/User'
import { useNavigate } from 'react-router-dom'
import {
  ActionButton,
  ActionButtons,
  ButtonDelete,
  CardsContainer,
  UserCard,
  UsersContainer,
} from './styles'
import { api } from '../../lib/axios'

export function Users() {
  const [users, setUsers] = useState<NewUserSchema[]>([])
  const navigate = useNavigate()

  async function getUsers() {
    await api.get('/').then((response) => {
      setUsers(response.data)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  async function deleteUser(userId: number) {
    const response = await api.post(`/delete/${userId}`)
    return response.data
  }

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId)
      console.log('Usuário deletado com sucesso!')
      await getUsers()
    } catch (error) {
      console.error('Houve um problema ao criar o usuário:', error)
    }
  }

  return (
    <UsersContainer>
      <h1>Lista de usuários</h1>
      <CardsContainer>
        {users.map((user) => (
          <UserCard key={user.name}>
            <h3>{user.name}</h3>
            <span>Occupation: {user.occupation}</span>
            <ActionButtons>
              <ActionButton onClick={() => navigate(`/users/${user.id}`)}>
                Detalhes
              </ActionButton>
              <ActionButton onClick={() => navigate(`/users/edit/${user.id}`)}>
                Editar
              </ActionButton>
              <ButtonDelete
                type="button"
                onClick={() => handleDeleteUser(user.id)}
              >
                Excluir
              </ButtonDelete>
            </ActionButtons>
          </UserCard>
        ))}
      </CardsContainer>
    </UsersContainer>
  )
}
