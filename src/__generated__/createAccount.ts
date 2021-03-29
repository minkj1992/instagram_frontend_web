/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface createAccount_createAccount_user_following {
  __typename: "User";
  id: string;
}

export interface createAccount_createAccount_user_followers {
  __typename: "User";
  id: string;
}

export interface createAccount_createAccount_user {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string | null;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  bio: string | null;
  avatar: string | null;
  following: (createAccount_createAccount_user_following | null)[] | null;
  followers: (createAccount_createAccount_user_followers | null)[] | null;
  totalFollowing: number;
  totalFollowers: number;
  isMe: boolean;
  isFollowing: boolean;
}

export interface createAccount_createAccount {
  __typename: "CreateAccountResult";
  ok: boolean;
  user: createAccount_createAccount_user | null;
  error: string | null;
}

export interface createAccount {
  createAccount: createAccount_createAccount;
}

export interface createAccountVariables {
  firstName: string;
  lastName?: string | null;
  username: string;
  email: string;
  password: string;
}
