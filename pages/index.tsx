import { useMemo, useState } from 'react';

import { Button, Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { ImageSlider } from '@/components/imageSlider';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/infra/firebase/clientApp';

import { useUserAuthenticationContext } from '@/infra/contexts/userAuthentication';

const dummyArr = new Array(100);

const imageSources = [
  '/banners/1.jpg',
  '/banners/2.jpg',
  '/banners/3.jpg',
  '/banners/4.jpg',
];

const altText = [''];

export default function Home() {
  const { user } = useUserAuthenticationContext();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onCreateUser = async () => {
    try {
      if (email && password) {
        const userCredentials = await createUserWithEmailAndPassword(auth, 'email@gmail.com', 'abcdefghijkl');
        const user = userCredentials.user;
      }
    } catch (error: any) {

    };

  };

  return (
    <div>
      <>
      <Button onClick={onCreateUser}>{!user ? 'Hello world' : `Hello, ${user.email}`}</Button>
      <ImageSlider
        imageSources={imageSources}
        altText={altText}
        transitionTime={10}
      />
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
