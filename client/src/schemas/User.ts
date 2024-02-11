import { z } from 'zod'

export const newUserSchema = z.object({
  name: z.string().nonempty('Name is necessary'),
  occupation: z.string().nonempty('Occupation is necessary'),
  newsletter: z.boolean(),
})

export type NewUserSchema = z.infer<typeof newUserSchema>
