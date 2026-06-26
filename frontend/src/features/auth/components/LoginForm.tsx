import { Button } from '@/components/ui/button'
import type { LoginField, LoginFormValues } from '../types/auth.types'

interface LoginFormProps {
  values: LoginFormValues
  onChange: (field: LoginField, value: string | boolean) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function LoginForm({ values, onChange, onSubmit }: LoginFormProps) {
  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(event) => onChange('email', event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-200" htmlFor="password">
          Mật khẩu
        </label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={(event) => onChange('password', event.target.value)}
          placeholder="••••••••"
          className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
        />
      </div>

      <div className="flex items-center justify-between text-sm text-slate-400">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={values.rememberMe}
            onChange={(event) => onChange('rememberMe', event.target.checked)}
            className="h-4 w-4 rounded border-slate-600 bg-slate-800"
          />
          Ghi nhớ tôi
        </label>
        <a href="#" className="text-sky-400 hover:text-sky-300">
          Quên mật khẩu?
        </a>
      </div>

      <Button type="submit" className="w-full rounded-xl bg-sky-500 text-white hover:bg-sky-400">
        Đăng nhập
      </Button>
    </form>
  )
}

export default LoginForm
