import React from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { AtSignIcon, LockIcon, LinkIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';

import { messages } from '../../../../config/messages';
import { colors } from '../../../../config/colors';

type TStage3 = {
  onClick: () => void;
};

const Stage3: React.FC<TStage3> = ({ onClick }) => {
  const [show, setShow] = React.useState(false);
  const [showR, setShowR] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleClickR = () => setShowR(!showR);

  const formik = useFormik({
    initialValues: {
      userName: '',
      photo: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      values.userName = '';
      values.photo = '';
      values.password = '';
      values.repeatPassword = '';
      onClick();
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
              <LinkIcon color="gray.300" />
            </InputLeftElement>
            <Input
              id="photo"
              name="photo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.photo}
              placeholder={messages.stages.photo}
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

          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              id="repeatPassword"
              name="repeatPassword"
              type={showR ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              placeholder={messages.stages.repeatPassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" disabled={formik.values.repeatPassword === ''} onClick={handleClickR}>
                {showR ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            disabled={
              formik.values.password.length < 5 ||
              formik.values.userName === '' ||
              formik.values.repeatPassword.length < 5 ||
              formik.values.password !== formik.values.repeatPassword
            }
            bg={colors.specialGreen}
            type="submit">
            {messages.buttons.next}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Stage3;
