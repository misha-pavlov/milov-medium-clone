import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack, useToast } from '@chakra-ui/react';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';

import { messages } from '../../../../config/messages';
import { colors } from '../../../../config/colors';
import { TStage2 } from './types';

const Stage2: React.FC<TStage2 & { addLocalStorageItem?: (params: string) => void }> = ({
  onClick,
  users,
  addLocalStorageItem,
}) => {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [usersNames, setUsersList] = useState<Array<string>>([]);

  useEffect(() => {
    users?.map(u => setUsersList([...usersNames, u.userName]));
  }, [users]);

  const handleClick = () => setShow(!show);

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    onSubmit: values => {
      if (users) {
        users.forEach(u => {
          if (u.userName === values.userName) {
            if (u.password === values.password) {
              toast.closeAll();
              toast({
                title: messages.stages.successLogin,
                status: 'success',
                isClosable: true,
              });
              if (addLocalStorageItem) {
                addLocalStorageItem(JSON.stringify(u));
              }
              onClick();
              return null;
            }
            toast.closeAll();
            toast({
              title: messages.stages.errorLogin,
              status: 'error',
              isClosable: true,
            });
          } else if (!usersNames.includes(values.userName)) {
            toast.closeAll();
            toast({
              title: messages.stages.errorLogin,
              status: 'error',
              isClosable: true,
            });
          }
        });
      }
    },
  });
  return (
    <Stack>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4} mt={25} mb={25}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <AtSignIcon color="gray.300" />
            </InputLeftElement>
            <Input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              placeholder={messages.stages.userName}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder={messages.stages.password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" disabled={formik.values.password === ''} onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            disabled={formik.values.password.length < 5 || formik.values.userName === ''}
            bg={colors.specialGreen}
            type="submit">
            {messages.buttons.next}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Stage2;
