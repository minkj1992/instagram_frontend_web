import styled from 'styled-components';

const Button = styled.input`
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    background-color: ${(props) => props.theme.accentColor};
    color: white;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
    width: 100%;
    .disabled {
        pointer-events: none;
        color: internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
    }
`;

export default Button;
