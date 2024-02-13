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
import { useNavigate, useParams } from 'react-router-dom'

type UserSchemaWithAddress = NewUserSchema & {
  street: string
  number: string
  city: string
}

export function UserEdit() {
  const { userId } = useParams()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSchemaWithAddress>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      newsletter: true,
    },
  })

  async function editUser(userData: UserSchemaWithAddress) {
    const response = await api.put(`/update/${userId}`, userData)
    return response.data
  }

  const handleEditUser: SubmitHandler<UserSchemaWithAddress> = async (
    userData: UserSchemaWithAddress,
  ) => {
    await editUser(userData)
    reset()
    navigate('/users')
  }

  return (
    <Container>
      <h1>Edite seus dados:</h1>
      <form onSubmit={handleSubmit(handleEditUser)}>
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

        <Input>
          <label htmlFor="street">Street:</label>
          <input placeholder="Register your street" {...register('street')} />
          {errors.street && (
            <ErrorMessage>{errors.street.message}</ErrorMessage>
          )}
        </Input>
        <Input>
          <label htmlFor="number">Number:</label>
          <input
            placeholder="Enter your house number"
            {...register('number')}
          />
          {errors.number && (
            <ErrorMessage>{errors.number.message}</ErrorMessage>
          )}
        </Input>
        <Input>
          <label htmlFor="city">City:</label>
          <input
            placeholder="Enter the name of your city."
            {...register('city')}
          />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
        </Input>

        <Checkbox>
          <input
            type="checkbox"
            {...register('newsletter', { required: true })}
          />
          <label htmlFor="newsletter">Receber newsletter?</label>
        </Checkbox>

        <ActionButton type="submit">Salvar</ActionButton>
      </form>
    </Container>
  )
}
