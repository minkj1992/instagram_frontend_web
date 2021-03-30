import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const _TOKEN_KEY = 'token';

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(_TOKEN_KEY)));
export const logUserIn = (token) => {
    localStorage.setItem(_TOKEN_KEY, token);
    isLoggedInVar(true);
};
export const clearStorage = () => {
    localStorage.removeItem(_TOKEN_KEY);
    isLoggedInVar(false);
};

export const isDarkModeVar = makeVar(false);
export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
