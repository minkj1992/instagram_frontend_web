import styled from 'styled-components';

const Input = styled.input`
    margin-top: 5px;
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: ${(props) => props.theme.accentColor};
    border: ${(props) => props.theme.boxBorder};
    box-sizing: border-box;
    &::placeholder {
        font-size: 12px;
    }
    margin-top: 5px;
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: #fafafa;
    border: ${(props) => props.theme.boxBorder};
    box-sizing: border-box;
    &::placeholder {
        font-size: 12px;
    }
`;

export default Input;
