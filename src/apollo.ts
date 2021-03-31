import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const _TOKEN_KEY = 'token';
const _DARK_MODE_KEY = 'DARK_MODE';

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(_TOKEN_KEY)));
export const isDarkModeVar = makeVar(Boolean(localStorage.getItem(_DARK_MODE_KEY)));

export const logUserIn = (token: string): void => {
    localStorage.setItem(_TOKEN_KEY, token);
    isLoggedInVar(true);
};
export const clearStorage = (): void => {
    localStorage.removeItem(_TOKEN_KEY);
    isLoggedInVar(false);
};

export const enableDarkMode = (): void => {
    localStorage.setItem(_DARK_MODE_KEY, 'enabled');
    isDarkModeVar(true);
};

export const disableDarkMode = (): void => {
    localStorage.removeItem(_DARK_MODE_KEY);
    isDarkModeVar(false);
};

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
