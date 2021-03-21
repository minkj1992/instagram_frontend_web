import React from 'react';
import styled from 'styled-components';

const SFormError = styled.span`
    color: tomato;
    font-weight: 600;
    font-size: 12px;
`;

type Props = {
    message?: string;
};

const FormError: React.FC<Props> = ({ message }) => (message ? <SFormError>{message}</SFormError> : null);
export default FormError;
