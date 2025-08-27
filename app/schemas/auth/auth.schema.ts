import { z } from '~/schemas'

export const CredencialTypeEnumSchema = z.enum(['login', 'signup'])

export const UserLoginSchema = z.object({
  email: z.email('Email Inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

export type UserLogin = z.infer<typeof UserLoginSchema>
