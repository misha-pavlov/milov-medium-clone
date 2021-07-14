import React from 'react';
import SearchPosts from './SearchPosts';
import { searchPostsList, TPosts } from '../../../redux/reducers/PostsReducer';
import { AppStateType } from '../../../redux/redux';
import { getSearchPosts } from '../../../redux/selectors/UsersSelector';
import { compose } from 'redux';
import { connect } from 'react-redux';

type statePropsType = {
  searchPosts: Array<TPosts>;
};

type dispatchPropsType = {
  searchPostsList: (postName: string) => void;
};

type ownPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

type TSearchPostsContainer = statePropsType & dispatchPropsType & ownPropsType;

const SearchPostsContainer: React.FC<TSearchPostsContainer> = ({ searchPostsList, searchPosts, onClose, isOpen }) => {
  return <SearchPosts searchPosts={searchPosts} searchPostsList={searchPostsList} isOpen={isOpen} onClose={onClose} />;
};

const mapStateToProps = (state: AppStateType) => ({
  searchPosts: getSearchPosts(state),
});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, { searchPostsList }),
)(SearchPostsContainer);
