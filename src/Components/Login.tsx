import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IForm {
    name: string;
    password: string;
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const WhiteBox = styled.div`
    background-color: white;
    border: ${(props) => props.theme.boxBorder};
    width: 100%;
    max-width: 350px;
`;

const TopBox = styled(WhiteBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 35px 40px 25px 40px;
    margin-bottom: 10px;
    form {
        margin-top: 35px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;

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
const SubmitButton = styled.input`
    width: 100%;
    border: none;
    margin-top: 12px;
    background-color: ${(props) => props.theme.accentColor};
    color: white;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
`;

const BottomBox = styled(WhiteBox)`
    padding: 20px 0px;
    text-align: center;
    a {
        font-weight: 600;
        margin-left: 5px;
    }
`;

const Wrapper = styled.div`
    max-width: 350px;
    width: 100%;
`;
const Separator = styled.div`
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
const FacebookLogin = styled.div`
    color: #385285;
    span {
        margin-left: 10px;
        font-weight: 600;
    }
`;

const Login: React.FC = () => {
    const { register, handleSubmit, getValues, setValue } = useForm<IForm>();

    const onValid = () => {
        const { name, password } = getValues();
        console.log(name, password);
        setValue('name', name);
        setValue('password', password);
    };
    return (
        <Container>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <form onSubmit={handleSubmit(onValid)}>
                        <Input ref={register({ required: true })} name="name" type="text" placeholder="Username" />
                        <Input
                            ref={register({ required: true })}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <SubmitButton type="submit" value="Log in" />
                    </form>
                    <Separator>
                        <div></div>
                        <span>Or</span>
                        <div></div>
                    </Separator>
                    <FacebookLogin>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <span>Log in with Facebook</span>
                    </FacebookLogin>
                </TopBox>
                <BottomBox>
                    <span>Don&apos;t have an account?</span>
                    <Link to="/signup">Sign up</Link>
                </BottomBox>
            </Wrapper>
        </Container>
    );
};

export default Login;
