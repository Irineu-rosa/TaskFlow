import AuthCard from "../components/AuthCard";
import Input from "../components/input";
import { Link } from "react-router-dom";

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
            <div>
                <Link to="/register" className="link">Cadastre-se</Link>
            </div>
        </AuthCard>
    );
}

export default Login;