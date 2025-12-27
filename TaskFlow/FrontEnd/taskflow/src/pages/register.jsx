import { useState } from "react";
import AuthCard from "../components/AuthCard";
import Input from "../components/input.jsx";
import Select from "../components/select.jsx";

const Register = () => {
    const [type, setType] = useState("");

    const options = [
        { value: "Empresa", label: "Empresa" },
        { value: "Pessoa-Física", label: "Pessoa Física" },
    ];

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
            <Select
                placeholder="Selecione o tipo"
                options={options}
                value={type}
                onChange={(e) => setType(e.target.value)}
            />            
        </AuthCard>
    );
};

export default Register;
