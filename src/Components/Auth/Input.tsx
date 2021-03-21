import styled from 'styled-components';

// TODO: styled에 type 넣어주기
const Input: any = styled.input`
    margin-top: 5px;
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: #fafafa;
    border: 0.5px solid ${(props: any) => (props.hasError ? 'tomato' : props.theme.borderColor)};
    box-sizing: border-box;
    &::placeholder {
        font-size: 12px;
    }
    &:focus {
        border-color: rgb(38, 38, 38);
    }
`;

export default Input;
