import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Stage2 from './Stage2';
import { TStage2 } from './types';
import { AppStateType } from '../../../../redux/redux';
import { getUsersList, TUsers } from '../../../../redux/reducers/UsersReducer';
import { getUsers } from '../../../../redux/selectors/UsersSelector';

type statePropsType = {
  users: Array<TUsers>;
};

type dispatchPropsType = {
  getUsersList: () => void;
};

type ownPropsType = TStage2 & { addLocalStorageItem?: (params: string) => void };

type TStage2Container = statePropsType & dispatchPropsType & ownPropsType;

const Stage2Container: React.FC<TStage2Container> = ({ onClick, users, getUsersList, addLocalStorageItem }) => {
  useEffect(() => {
    (async function getUsersListFunction() {
      await getUsersList();
    })();
  }, [getUsersList]);

  return <Stage2 onClick={onClick} users={users} addLocalStorageItem={addLocalStorageItem} />;
};

const mapStateToProps = (state: AppStateType) => ({
  users: getUsers(state),
});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, { getUsersList }),
)(Stage2Container);
