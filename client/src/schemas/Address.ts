import { z } from 'zod'

export const adressSchema = z.object({
  street: z.string(),
  number: z.string(),
  city: z.string(),
})

export type AddressSchema = z.infer<typeof adressSchema>
