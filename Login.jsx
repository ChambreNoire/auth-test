import { useLogin } from "./useLogin";

export const Login = () => {
  const login = useLogin();
  const handleLogin = () => {
    login.mutate({
      email: "user@test.com",
      password: "password",
    });
  };
  return (
    <div>
      <div>
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
};
