import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BaseBox from '../_common/BaseBox';

type Props = {
    cta: string; // call to action
    link: string;
    linkText: string;
};

const SBottomBox = styled(BaseBox)`
    padding: 20px 0px;
    text-align: center;
    a {
        font-weight: 600;
        margin-left: 5px;
    }
`;

const BottomBox: React.FC<Props> = ({ cta, link, linkText }) => {
    return (
        <SBottomBox>
            <span>{cta}</span>
            <Link to={link}>{linkText}</Link>
        </SBottomBox>
    );
};

export default BottomBox;
