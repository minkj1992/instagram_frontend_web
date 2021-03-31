import { useReactiveVar } from '@apollo/client';
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { disableDarkMode, enableDarkMode, isDarkModeVar } from '../../apollo';

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    max-width: 350px;
    width: 100%;
`;

const Footer = styled.footer`
    margin-top: 20px;
`;

const DarkModeBtn = styled.span`
    cursor: pointer;
`;

type Props = {
    children: React.ReactNode;
};

const AuthContainer: React.FC<Props> = ({ children }) => {
    const darkMode = useReactiveVar(isDarkModeVar);
    return (
        <Container>
            <Wrapper>{children}</Wrapper>
            <Footer>
                <DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
                    <FontAwesomeIcon icon={darkMode ? faLightbulb : faMoon} />
                </DarkModeBtn>
            </Footer>
        </Container>
    );
};

export default AuthContainer;
