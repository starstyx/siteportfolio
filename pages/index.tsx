import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../infra/firebase/clientApp';

const dummyArr = new Array(100);

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
      <>
      <Button onClick={onCreateUser}>Hello world</Button>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      {dummyArr.map((i, idx) => (
        <Card key={idx}>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
        </Card>
      ))}
      </>
    </div>
  )
};
