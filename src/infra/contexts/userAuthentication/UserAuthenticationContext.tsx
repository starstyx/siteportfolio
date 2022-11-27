import { createContext } from 'react';

import type { UserAuthenticationContextValue } from './types';

export const UserAuthenticationContext = createContext<UserAuthenticationContextValue>({} as UserAuthenticationContextValue);
UserAuthenticationContext.displayName = 'UserAuthenticationContext';
