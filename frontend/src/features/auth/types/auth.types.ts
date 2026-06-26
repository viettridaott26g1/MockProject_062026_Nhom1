export interface LoginFormValues {
  email: string
  password: string
  rememberMe: boolean
}

export type LoginField = keyof LoginFormValues
