import { ReactElement, useState, useMemo } from 'react';

import { UserAuthenticationContext } from './UserAuthenticationContext';

import type { User, UserAuthenticationContextValue } from './types';

type UserAuthenticationProviderProps = {
  children: ReactElement;
};

const UserAuthenticationProvider =  ({ children }: UserAuthenticationProviderProps): ReactElement => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const userAuthenticationContextValue = useMemo<UserAuthenticationContextValue>(() => ({ user, setUser }), [user]);

  return (
    <UserAuthenticationContext.Provider value={userAuthenticationContextValue}>
      {children}
    </UserAuthenticationContext.Provider>
  );
};

export { UserAuthenticationProvider };
