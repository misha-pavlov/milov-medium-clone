import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Stage2 from './Stage2';
import { TStage2 } from './types';
import { AppStateType } from '../../../../redux/redux';
import { getUsersList, TUsers } from '../../../../redux/reducers/UsersReducer';
import { getUsers } from '../../../../redux/selectors/UsersSelector';

type statePropsType = {
    users: Array<TUsers>
}

type dispatchPropsType = {
    getUsersList: () => void
}

type ownPropsType = TStage2;

type TStage2Container = statePropsType & dispatchPropsType & ownPropsType

const Stage2Container:React.FC<TStage2Container> = ({ onClick, users, getUsersList }) => {
    useEffect(() => {
        (async function getUsersListFunction() {
            await getUsersList();
        })();
    }, [getUsersList]);

    console.log('users = ', users)
    return <Stage2 onClick={onClick} users={users} />
}

const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps,
        { getUsersList })
)(Stage2Container)