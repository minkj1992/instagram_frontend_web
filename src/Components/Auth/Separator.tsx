import React from 'react';
import styled from 'styled-components';

const SSeparator = styled.div`
    margin: 20px 0px 30px 0px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    div {
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.lightGreyColor};
    }
    span {
        margin: 0px 10px;
        font-weight: 600;
        font-size: 12px;
        color: #8e8e8e;
    }
`;

type Props = {
    value: string;
};

const Separator: React.FC<Props> = ({ value }) => (
    <SSeparator>
        <div></div>
        <span>{value}</span>
        <div></div>
    </SSeparator>
);

export default Separator;
