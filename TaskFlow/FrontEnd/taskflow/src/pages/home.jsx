import React from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

import "./styles/home.css";

import Button_inscreva from "../components/button_roxo"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};


const Home = () => {
    const handleSubscribe = () => {
        console.log("Usuário clicou em inscrever-se");
    };


    return (
        <>
            {/* HEADER */}
            <header className="header">
                <strong className="logo">TaskFlow</strong>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#intro">Introdução Rápida</a>
                    <a href="#benefits">Comece Já</a>
                    <Link to="/login" className="login">Login →</Link>
                </nav>
            </header>

            {/* HERO */}
            <motion.section
                className="hero"
                id="home"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div>
                    <h1>
                        Organize seu trabalho.<br />
                        Execute com clareza.<br />
                        Evolua com foco.
                    </h1>
                    <p>
                        O TaskFlow é uma plataforma moderna para organizar tarefas, projetos
                        e ideias em um fluxo simples, visual e eficiente, sem complicação.
                    </p>

                    <form className="hero-form">
                        <input type="email" placeholder="E-mail" />
                        <Button_inscreva
                            text="Inscreva-se, é grátis"
                            onClick={handleSubscribe} />                        
                    </form>
                </div>
            </motion.section>

            {/* how-it-works */}
            <motion.section
                className="how-it-works"
                id="intro"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2>Como o TaskFlow funciona</h2>

                <div className="steps">
                    <div className="step">
                        <span>01</span>
                        <h4>Capture</h4>
                        <p>Anote tarefas e ideias no momento em que surgem.</p>
                    </div>

                    <div className="step">
                        <span>02</span>
                        <h4>Organize</h4>
                        <p>Distribua em colunas, prioridades e projetos.</p>
                    </div>

                    <div className="step">
                        <span>03</span>
                        <h4>Execute</h4>
                        <p>Foque no que importa e acompanhe seu progresso.</p>
                    </div>
                </div>
            </motion.section>

            {/* SECTION PURPLE */}
            <motion.section
                className="section-purple"
                id="intro"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2>Sua central de produtividade definitiva.</h2>
                <p>
                    Marque tudo sob controle com um sistema visual e inteligente.
                </p>
                <ul>
                    <li>Quadros e colunas: visualize o progresso em tempo real.</li>
                    <li>Caixa de Entrada: capture ideias antes que elas sumam.</li>
                    <li>Planejador: organize sua semana com precisão.</li>
                </ul>

                <div className="cards">
                    <div className="container-card">
                        <div className="card">
                            Tire as ideias da cabeça. Não deixe nada escapar. Capture tarefas e pensamentos no momento em que surgem, de onde estiver, e mantenha o foco no que está a fazer agora.
                        </div>

                        <div className="card">
                            Domine o progresso. Não importa o tamanho da lista, mantenha tudo sob controle. Visualize cada etapa, do "A Fazer" ao "Concluído", e acompanhe seus projetos ganharem vida.
                        </div>
                        <p style={{ marginTop: "30px", maxWidth: "600px" }}>
                            Seja você um estudante, desenvolvedor ou gestor de equipes, o TaskFlow
                            adapta-se ao seu ritmo e cresce com suas necessidades.
                        </p>
                    </div>
                    
                    <div className="mockup">
                        <div className="mock-header">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="mock-columns">
                            <div className="mock-col">
                                <h5>A Fazer</h5>
                                <div className="mock-card">Criar layout</div>
                                <div className="mock-card">Definir cores</div>
                            </div>

                            <div className="mock-col">
                                <h5>Em Progresso</h5>
                                <div className="mock-card">Dashboard</div>
                            </div>

                            <div className="mock-col done">
                                <h5>Concluído</h5>
                                <div className="mock-card">Login</div>
                            </div>
                        </div>
                    </div>


                </div>
            </motion.section>

            <motion.section
                className="benefits"
                id="benefits"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2>Por que usar o TaskFlow?</h2>

                <div className="benefit-grid">
                    <div>✅ Menos distrações</div>
                    <div>✅ Mais clareza mental</div>
                    <div>✅ Progresso visível</div>
                    <div>✅ Interface intuitiva</div>
                </div>
            </motion.section>

            {/* CTA */}
            <motion.section
                className="cta"
                id="intro"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h3>Comece a usar o TaskFlow agora mesmo</h3>

                <form className="cta-form">
                    <input type="email" placeholder="E-mail" />
                    <Button_inscreva
                        text="Inscreva-se, é grátis"
                        onClick={handleSubscribe} />
                    {/* <button type="button">Inscreva-se, é grátis</button> */}
                </form>
            </motion.section>

            {/* FOOTER */}
            <footer className="footer">
                <span>
                    <strong>TaskFlow</strong> © 2025
                </span>

                <div className="socials">
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                    <span>GitHub</span>
                </div>
            </footer>
        </>
    );
};

export default Home;
