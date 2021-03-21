import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import routes from '../routes';

import AuthContainer from './Auth/AuthContainer';
import BottomBox from './Auth/BottomBox';
import FormBox from './Auth/FormBox';
import Input from './Auth/Input';
import Separator from './Auth/Separator';
import Button from './Auth/Button';
import styled from 'styled-components';
import FatLink from './_common/FatLink';
import PageTitle from './_common/PageTitle';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubTitle = styled(FatLink)`
    font-size: 16px;
    text-align: center;
`;

const SignUp: React.FC = () => {
    return (
        <AuthContainer>
            <PageTitle title="Signup" />
            <FormBox>
                <HeaderContainer>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <SubTitle>Sign up to see photos and videos from your friends.</SubTitle>
                </HeaderContainer>
                <Separator value="OR" />
                <form>
                    <Input name="name" type="text" placeholder="Name" />
                    <Input name="email" type="email" placeholder="Email" />
                    <Input name="username" type="text" placeholder="Username" />
                    <Input name="password" type="password" placeholder="Password" />
                    <Button type="submit" value="Sign up" />
                </form>
            </FormBox>
            <BottomBox cta="Have an account?" link={routes.home} linkText="Log in" />
        </AuthContainer>
    );
};

export default SignUp;
