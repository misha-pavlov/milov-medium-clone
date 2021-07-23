import React, { useRef, useState } from 'react';
import { Stack, Input, Button, Select } from '@chakra-ui/react';
import SunEditor, { buttonList } from 'suneditor-react';
// @ts-ignore
import SunEditorCore from 'suneditor/src/lib/core';
import 'suneditor/dist/css/suneditor.min.css';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';

import { TMediumMain } from '../MediumMain/MediumMain';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { messages } from '../../config/messages';
import { createPostStyles } from './CreatePost.styles';
import { colors } from '../../config/colors';
import { constants } from '../../config/constants';
import {
  ArtAndEntertainment,
  Culture,
  Health,
  Industry,
  PersonalDevelopment,
  Programming,
  Science,
  Technology,
} from '../../config/allTopicsData';

type TCreatePost = {
  createPost: (
    name: string,
    image: string,
    topic: string,
    postCreator: string,
    date: string,
    timeToRead: string,
    post: string,
  ) => void;
};

const CreatePost: React.FC<TMediumMain & TCreatePost> = ({
  isAuth,
  addLocalStorageItem,
  removeLocalStorageItem,
  createPost,
}) => {
  const [text, setText] = useState('');
  const editor = useRef<SunEditorCore>();
  const history = useHistory();

  // @ts-ignore
  const postCreator = JSON.parse(localStorage.getItem(constants.localStorage.user));

  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      topic: '',
      timeToRead: '',
    },

    onSubmit: values => {
      createPost(
        values.title,
        values.image,
        values.topic,
        postCreator.userName,
        new Date().toISOString().slice(0, 10).replace(/-/g, '-'),
        values.timeToRead,
        text,
      );
      history.push(constants.urls.medium);
    },
  });

  const topicOption = [
    ...ArtAndEntertainment,
    ...Culture,
    ...Health,
    ...Industry,
    ...PersonalDevelopment,
    ...Programming,
    ...Science,
    ...Technology,
  ].map(a => (
    <option key={a.name} value={a.name}>
      {a.ukr}
    </option>
  ));

  return (
    <Stack>
      <Header
        addLocalStorageItem={addLocalStorageItem}
        removeLocalStorageItem={removeLocalStorageItem}
        isAuth={isAuth}
      />

      <Stack align="center">
        <Stack width={1200}>
          <SunEditor
            setOptions={{ buttonList: buttonList.complex }}
            height="100vh"
            placeholder={messages.createPost.amazingStory}
            autoFocus
            getSunEditorInstance={getSunEditorInstance}
            onChange={e => setText(e)}
            setDefaultStyle="font-family: Nunito-Regular; font-size: 18px;"
          />

          <form onSubmit={formik.handleSubmit} style={createPostStyles.form}>
            <Stack spacing={10}>
              <Input
                variant="flushed"
                placeholder={messages.createPost.title}
                id="title"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />

              <Input
                variant="flushed"
                placeholder={messages.createPost.image}
                id="image"
                name="image"
                onChange={formik.handleChange}
                value={formik.values.image}
              />

              <Select
                variant="flushed"
                placeholder={messages.createPost.topic}
                id="topic"
                name="topic"
                onChange={formik.handleChange}
                value={formik.values.topic}
                icon={undefined}>
                {topicOption}
              </Select>

              <Input
                variant="flushed"
                placeholder={messages.createPost.timeToRead}
                id="timeToRead"
                name="timeToRead"
                onChange={formik.handleChange}
                value={formik.values.timeToRead}
              />
            </Stack>

            <Button
              mt={25}
              mb={25}
              disabled={
                formik.values.title === '' ||
                formik.values.image === '' ||
                formik.values.topic === '' ||
                formik.values.timeToRead === '' ||
                text === ''
              }
              bg={colors.specialGreen}
              type="submit">
              {messages.buttons.create}
            </Button>
          </form>
        </Stack>
        <Stack>
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CreatePost;
