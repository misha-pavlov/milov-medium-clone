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

  const allTopicItem = (name: string, components: any) => {
    return (
      <Stack width={1200} pb={55}>
        <RecentPost>{name}</RecentPost>
        <Divider orientation="horizontal" colorScheme="green" />

        <Stack direction="row" wrap="wrap" justify="space-between">
          {components}
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack>
      <Header
        addLocalStorageItem={addLocalStorageItem}
        isAuth={isAuth}
        removeLocalStorageItem={removeLocalStorageItem}
      />
      <Stack align="center">
        {allTopicItem(messages.topicLists.artAndEntertainment, artAndEntertainment)}
        {allTopicItem(messages.topicLists.culture, culture)}
        {allTopicItem(messages.topicLists.health, health)}
        {allTopicItem(messages.topicLists.industry, industry)}
        {allTopicItem(messages.topicLists.personalDevelopment, personalDevelopment)}
        {allTopicItem(messages.topicLists.programming, programming)}
        {allTopicItem(messages.topicLists.science, science)}
        {allTopicItem(messages.topicLists.technology, technology)}
      </Stack>
    </Stack>
  );
};

export default AllTopicsPage;
