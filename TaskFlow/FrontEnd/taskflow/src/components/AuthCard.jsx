import Button from "./button_roxo";
import "./style/AuthCard.css";

const AuthCard = ({ title, subtitle, children, buttonText, onSubmit }) => {
    return (
    <div className="auth-wrapper">
        <div className="auth-card">
            <h2>{title}</h2>    
            <p>{subtitle}</p>

            <form onSubmit={onSubmit}>
                {children}
                <Button text={buttonText}/>
            </form>
        </div>        
    </div>
    );
}

export default AuthCard;