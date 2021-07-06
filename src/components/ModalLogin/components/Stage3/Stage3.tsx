import React from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { AtSignIcon, LockIcon, LinkIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';

import { messages } from '../../../../config/messages';
import { colors } from '../../../../config/colors';
import { DefaultText } from '../../../../config/fonts';
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

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
      twitter: '',
      gitHub: '',
      linkedin: '',
      facebook: '',
      instagram: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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

          <DefaultText>{messages.stages.socialNetworks}</DefaultText>

          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <TwitterOutlined color="gray.300" />
            </InputLeftElement>
            <Input
              id="twitter"
              name="twitter"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.twitter}
              placeholder={messages.stages.twitter}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <GithubOutlined color="gray.300" />
            </InputLeftElement>
            <Input
              id="gitHub"
              name="gitHub"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.gitHub}
              placeholder={messages.stages.gitHub}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <LinkedinOutlined color="gray.300" />
            </InputLeftElement>
            <Input
              id="linkedin"
              name="linkedin"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.linkedin}
              placeholder={messages.stages.linkedin}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <FacebookOutlined color="gray.300" />
            </InputLeftElement>
            <Input
              id="facebook"
              name="facebook"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.facebook}
              placeholder={messages.stages.facebook}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <InstagramOutlined color="gray.300" />
            </InputLeftElement>
            <Input
              id="instagram"
              name="instagram"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.instagram}
              placeholder={messages.stages.instagram}
            />
          </InputGroup>

          <Button
            disabled={
              formik.values.password.length < 5 ||
              formik.values.userName === '' ||
              formik.values.repeatPassword.length < 5 ||
              formik.values.password !== formik.values.repeatPassword ||
              (formik.values.twitter !== '' && !formik.values.twitter?.includes('twitter.com')) ||
              (formik.values.gitHub !== '' && !formik.values.gitHub?.includes('github.com')) ||
              (formik.values.linkedin !== '' && !formik.values.linkedin?.includes('linkedin.com')) ||
              (formik.values.facebook !== '' && !formik.values.facebook?.includes('facebook.com')) ||
              (formik.values.instagram !== '' && !formik.values.instagram?.includes('instagram.com'))
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
