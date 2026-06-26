export type LoginProps = {
  email: string;
  password: string;
};
export type ResgiterProps = {
  email: string;
  password: string;
  confirmPassword: string;
}
export function login(props: LoginProps) {
  console.log(props);
}

export  function register(props: ResgiterProps) {
  console.log(props);
}
