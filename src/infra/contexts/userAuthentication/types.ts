import type { User as FirebaseUser } from 'firebase/auth';
import type { Dispatch, SetStateAction } from 'react';

export type User = FirebaseUser;

export type SetUser = Dispatch<SetStateAction<User | undefined>>;

export type UserAuthenticationContextValue = {
  user?: User;
  setUser: SetUser;
};
