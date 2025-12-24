import AuthCard from "../components/AuthCard/AuthCard";
import Input from "../components/Input/Input";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Cadastro enviado");
    };

    return (
        <AuthCard
            title="TaskFlow"
            subtitle="Crie sua conta"
            buttonText="Cadastrar"
            onSubmit={handleRegister}
        >
            <Input placeholder="Nome" />
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <Input placeholder="Empresa" />
        </AuthCard>
    );
};

export default Register;
