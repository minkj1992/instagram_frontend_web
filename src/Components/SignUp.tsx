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
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { createAccount, createAccountVariables } from '../__generated__/createAccount';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubTitle = styled(FatLink)`
    font-size: 16px;
    text-align: center;
`;

interface SignUpForm {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
}

export const SIGNUP_MUTATION = gql`
    mutation createAccount(
        $firstName: String!
        $lastName: String
        $username: String!
        $email: String!
        $password: String!
    ) {
        createAccount(
            firstName: $firstName
            lastName: $lastName
            username: $username
            password: $password
            email: $email
        ) {
            ok
            user {
                id
                firstName
                lastName
                username
                email
                createdAt
                updatedAt
                bio
                avatar
                following {
                    id
                }
                followers {
                    id
                }
                totalFollowing
                totalFollowers
                isMe
                isFollowing
            }
            error
        }
    }
`;

const SignUp: React.FC = () => {
    const { register, handleSubmit, errors, getValues, formState, setError, clearErrors } = useForm<SignUpForm>({
        mode: 'onChange',
    });

    const onSubmitValid = () => {
        const { firstName, lastName, username, email, password } = getValues();
        signUpMutation({
            variables: { firstName, lastName, username, email, password },
        });
    };

    const onCompleted = (data) => {
        const { ok, error, user } = data;

        if (!ok) {
            // return setError('loginResult', { message: error });
        }

        if (user) {
            // logUserIn(token);
        }
    };

    const [signUpMutation, { loading }] = useMutation<createAccount, createAccountVariables>(SIGNUP_MUTATION, {
        onCompleted,
    });

    return (
        <AuthContainer>
            <PageTitle title="Signup" />
            <FormBox>
                <HeaderContainer>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <SubTitle>Sign up to see photos and videos from your friends.</SubTitle>
                </HeaderContainer>
                <Separator value="OR" />
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                        ref={register({ required: 'First Name is required' })}
                        name="firstName"
                        type="text"
                        placeholder="Frist Name"
                    />
                    <Input
                        ref={register({ required: 'Last Name is required' })}
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                    <Input
                        ref={register({ required: 'Email is required' })}
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <Input
                        ref={register({ required: 'Username is required' })}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <Input
                        ref={register({ required: 'Password is required' })}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <Button
                        type="submit"
                        // value={loading ? 'Loading...' : 'Sign up'}
                        // disabled={!formState.isValid || loading}
                    />
                </form>
            </FormBox>
            <BottomBox cta="Have an account?" link={routes.home} linkText="Log in" />
        </AuthContainer>
    );
};

export default SignUp;
