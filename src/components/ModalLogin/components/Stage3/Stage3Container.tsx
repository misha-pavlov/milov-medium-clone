import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Stage3 from './Stage3';
import { TStage3 } from './types';
import { AppStateType } from '../../../../redux/redux';
import { addUser } from '../../../../redux/reducers/UsersReducer';

type statePropsType = {};

type dispatchPropsType = {
  addUser: (
    userName: string,
    password: string,
    twitter?: string,
    gitHub?: string,
    linkedin?: string,
    facebook?: string,
    instagram?: string,
    photo?: string,
  ) => void;
};

type ownPropsType = TStage3;

type TStage3Container = statePropsType & dispatchPropsType & ownPropsType;

const Stage3Container: React.FC<TStage3Container> = ({ onClick, addUser }) => {
  return <Stage3 onClick={onClick} addUser={addUser} />;
};

const mapStateToProps = () => ({});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, { addUser }),
)(Stage3Container);
