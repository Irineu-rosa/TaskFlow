import AuthCard from "../components/AuthCard";
import Input from "../components/input";

const Login = () => {
    const hadleLogin = (e) => {
        e.preventDefault();
        console.log("Login Enviado!");
    };

    return (
        <AuthCard
            title="TaskFlow"
            subtitle="Entre para continuar"
            buttonText="Entrar"
            onSubmit={hadleLogin}
        >
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
        </AuthCard>
    );
}

export default Login;