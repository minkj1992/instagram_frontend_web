import React from 'react';
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
`;

type Props = {
    type: string;
    value: string;
};

const SubmitButton: React.FC<Props> = (props) => {
    return <Button {...props} />;
};

export default SubmitButton;
