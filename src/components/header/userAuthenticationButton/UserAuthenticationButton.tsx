import { useState, useCallback, SyntheticEvent, ChangeEvent } from 'react';

import {
  Input,
  Stack,
  IconButton,
  Button,
  ButtonGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { FaUserCircle } from "react-icons/fa";

import { auth } from '@/infra/firebase/clientApp';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useUserAuthenticationContext } from '@/infra/contexts/userAuthentication';

const UserAuthenticationButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { setUser } = useUserAuthenticationContext();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  

  const onUsernameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value), []);
  const onPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value), []);

  const onSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredentials.user;
      setUser(user);
      onClose();
    } catch (error: any) {
      
    } finally {
      setIsSubmitting(false);
    }

  }, [username, password, setUser, onClose]);

  return (
    <>
      <IconButton
        aria-label='Members Area'
        icon={<FaUserCircle />}
        onClick={onOpen}
        variant="ghost"
        isActive={isOpen}
        colorScheme="blue"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Login | Sign up
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Input placeholder='Email' size='lg' onChange={onUsernameChange}/>
              <Input placeholder='Password' size='lg' onChange={onPasswordChange} />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup colorScheme="blue">
              <Button onClick={onSubmit} isLoading={isSubmitting}>
                Login
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { UserAuthenticationButton };
