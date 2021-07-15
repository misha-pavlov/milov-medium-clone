import React from 'react';
import { Stack, Divider } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import { RecentPost } from '../../config/fonts';
import CardTopic from './components/CardTopic';
import { TMediumMain } from '../MediumMain/MediumMain';
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
import { messages } from '../../config/messages';

const AllTopicsPage: React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
  const artAndEntertainment = ArtAndEntertainment.map(a => (
    <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />
  ));
  const culture = Culture.map(a => <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />);
  const health = Health.map(a => <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />);
  const industry = Industry.map(a => <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />);
  const personalDevelopment = PersonalDevelopment.map(a => (
    <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />
  ));
  const programming = Programming.map(a => <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />);
  const science = Science.map(a => <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />);
  const technology = Technology.map(a => <CardTopic key={a.id} image={a.image} name={a.name} ukr={a.ukr} />);

  return (
    <Stack>
      <Header
        addLocalStorageItem={addLocalStorageItem}
        isAuth={isAuth}
        removeLocalStorageItem={removeLocalStorageItem}
      />
      <Stack align="center">
        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.artAndEntertainment}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {artAndEntertainment}
          </Stack>
        </Stack>

        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.culture}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {culture}
          </Stack>
        </Stack>

        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.health}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {health}
          </Stack>
        </Stack>

        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.industry}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {industry}
          </Stack>
        </Stack>

        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.personalDevelopment}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {personalDevelopment}
          </Stack>
        </Stack>

        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.programming}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {programming}
          </Stack>
        </Stack>

        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.science}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {science}
          </Stack>
        </Stack>

        <Stack width={1200} pb={55}>
          <RecentPost>{messages.topicLists.technology}</RecentPost>
          <Divider orientation="horizontal" colorScheme="green" />

          <Stack direction="row" wrap="wrap" justify="space-between">
            {technology}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AllTopicsPage;
