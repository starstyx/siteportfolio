import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';


import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../infra/firebase/clientApp';

import { Button } from 'baseui/button';

export default function Home() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onCreateUser = async () => {
    try {
      if (email && password) {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;
      }
    } catch (error: any) {

    };

  };

  return (
    <div>
      <Button onClick={onCreateUser}>Hello world</Button>
    </div>
  )
};
