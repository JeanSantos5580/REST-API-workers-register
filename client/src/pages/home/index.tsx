import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ActionButton,
  Checkbox,
  Container,
  ErrorMessage,
  Input,
} from './styles'
import { api } from '../../lib/axios'
import { NewUserSchema, newUserSchema } from '../../schemas/User'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewUserSchema>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      newsletter: true,
    },
  })

  async function createUser(userData: NewUserSchema) {
    const response = await api.post('/create', userData)
    return response.data
  }

  const handleCreateUser: SubmitHandler<NewUserSchema> = async (
    userData: NewUserSchema,
  ) => {
    await createUser(userData)
    reset()
    navigate('/users')
  }

  return (
    <Container>
      <h1>Adicione um usuário:</h1>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <Input>
          <label htmlFor="name">Name:</label>
          <input placeholder="Enter name" {...register('name')} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Input>

        <Input>
          <label htmlFor="occupation">Occupation:</label>
          <input placeholder="Enter profession" {...register('occupation')} />
          {errors.occupation && (
            <ErrorMessage>{errors.occupation.message}</ErrorMessage>
          )}
        </Input>

        <Checkbox>
          <input
            type="checkbox"
            {...register('newsletter', { required: true })}
          />
          <label htmlFor="newsletter">Receber newsletter?</label>
        </Checkbox>

        <ActionButton type="submit">Cadastrar</ActionButton>
      </form>
    </Container>
  )
}
