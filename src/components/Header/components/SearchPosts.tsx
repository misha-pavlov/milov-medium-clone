import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  InputLeftElement,
  Input,
  InputGroup,
  Stack,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { useFormik } from 'formik';

import { colors } from '../../../config/colors';
import RecentPostsItem from '../../RecentPosts/RecentPostsItem';
import { searchPostsStyles } from './SearchPosts.styles';
import { TPosts } from '../../../redux/reducers/PostsReducer';
import { messages } from '../../../config/messages';
import { SearchEmptyList } from '../../../config/fonts';

export type TSearchPosts = {
  isOpen: boolean;
  searchPosts: Array<TPosts>;

  searchPostsList: (postName: string) => void;
  onClose: () => void;
};

const SearchPosts: React.FC<TSearchPosts> = ({ isOpen, onClose, searchPosts, searchPostsList }) => {
  const searchRecentPostsList = searchPosts.map(s => (
    <RecentPostsItem key={s._id} name={s.name} date={s.date} timeToRead={s.timeToRead} image={s.image} isSearchPosts />
  ));

  const formik = useFormik({
    initialValues: {
      searchInput: '',
    },
    onSubmit: values => {
      searchPostsList(values.searchInput);
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
      <ModalOverlay />
      <ModalContent style={{ background: 'rgba(0, 0, 0, 0)' }}>
        <ModalHeader style={searchPostsStyles.input}>
          <form onSubmit={formik.handleSubmit}>
            <InputGroup bg={colors.black3} width={500} style={searchPostsStyles.searchBlock}>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input
                name="searchInput"
                style={searchPostsStyles.searchBlock}
                onChange={formik.handleChange}
                value={formik.values.searchInput}
                color={colors.white1}
                placeholder="Пошук"
              />
            </InputGroup>
          </form>
        </ModalHeader>
        <ModalCloseButton>
          <CloseIcon color={colors.white1} />
        </ModalCloseButton>

        <ModalBody>
          {searchRecentPostsList.length === 0 ? (
            <SearchEmptyList>{messages.emptySearchList}</SearchEmptyList>
          ) : (
            <Stack align="center">{searchRecentPostsList}</Stack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchPosts;
