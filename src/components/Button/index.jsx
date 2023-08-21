import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import PropTypes from "prop-types";

function Button({ children, redirect, disabled, variant = 'primary', type = "button", onClick, full }) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (redirect) {
            navigate(redirect);
            return;
        }
        if (onClick) onClick();
    }

    return (
        <S.Button type={type} $variant={variant} onClick={handleClick} disabled={disabled} $full={full}>
            {variant === 'link' ? <S.LinkButton className="Link" to={redirect}>{children}</S.LinkButton> : children}
        </S.Button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    redirect: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'link']),
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    full: PropTypes.bool,
}

export default Button;
