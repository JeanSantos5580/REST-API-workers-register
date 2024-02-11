import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox, Container, Input } from './styles'
import axios from 'axios'
import { NewUserSchema, newUserSchema } from '../../schemas/User'

export function UserEdit() {
  const { register, handleSubmit } = useForm<NewUserSchema>({
    resolver: zodResolver(newUserSchema),
  })

  const editUser = async (userData: NewUserSchema) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/users/create',
        userData,
      )
      console.log('Usuário criado com sucesso!')
      return response.data
    } catch (error) {
      console.error('Houve um problema ao criar o usuário:', error)
      throw error
    }
  }

  const handleEditUser: SubmitHandler<NewUserSchema> = async (
    formData: NewUserSchema,
  ) => {
    try {
      const newsletter = !!formData.newsletter

      await editUser({ ...formData, newsletter })
      console.log('Usuário criado com sucesso!')
    } catch (error) {
      console.error('Houve um problema ao criar o usuário:', error)
    }
  }

  return (
    <Container>
      <h1>Edição de perfil:</h1>
      <form onSubmit={handleSubmit(handleEditUser)}>
        <Input>
          <label htmlFor="name">Name:</label>
          <input placeholder="Enter name" {...register('name')} />
        </Input>

        <Input>
          <label htmlFor="occupation">Occupation:</label>
          <input placeholder="Enter profession" {...register('occupation')} />
        </Input>
        <Checkbox>
          <input type="checkbox" {...register('newsletter')} checked />
          <label htmlFor="newsletter">Enviar promoções?</label>
        </Checkbox>
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  )
}
