import { useParams } from 'react-router-dom'
import { UserContainer, UserInfo } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { NewUserSchema } from '../../schemas/User'

export function User() {
  const { userId } = useParams()
  const [user, setUser] = useState<NewUserSchema>()

  async function getUserById(userId: string | undefined) {
    await api.get(`/${userId}`).then((response) => {
      setUser(response.data)
    })
  }

  useEffect(() => {
    getUserById(userId)
  }, [userId])

  return (
    <UserContainer>
      <h1>Detalhes do usuário: {user?.name}</h1>
      <UserInfo>
        <small>Occupation: {user?.occupation}</small>
      </UserInfo>
    </UserContainer>
  )
}
