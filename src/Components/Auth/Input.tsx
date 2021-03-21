import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
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

type Props = {
    name: string;
    type: string;
    placeholder?: string;
};

const Input: React.FC<Props> = (props) => <SInput {...props} />;

export default Input;
