import { useContext } from 'react';

import { UserAuthenticationContext } from './UserAuthenticationContext';

import type { UserAuthenticationContextValue } from './types';

const useUserAuthenticationContext = (): UserAuthenticationContextValue => useContext(UserAuthenticationContext);

export { useUserAuthenticationContext};
