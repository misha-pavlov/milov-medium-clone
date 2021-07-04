import { AppStateType, InferActionsTypes } from '../redux';
import { ThunkAction } from 'redux-thunk';
import { userAPI } from '../../api/api';

import { constants } from '../../config/constants';

export type TUsers = {
    _id: string;
    id?: string;
    userName: string;
    password: string;
    twitter?: string;
    gitHub?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    photo?: string;
    __v: number
}

export type initialStateType = {
    users: Array<TUsers>
}

let initialState: initialStateType = {
    users: []
};

const UsersReducer = (state = initialState, action: ActionsTypesUsers): initialStateType => {
    switch (action.type) {
        case constants.reducers.SET_USER: {
            return {
                ...state,
                users: [...state.users, {
                    _id: action._id,
                    userName: action.userName,
                    password: action.password,
                    twitter: action?.twitter,
                    gitHub: action?.gitHub,
                    linkedin: action?.linkedin,
                    facebook: action?.facebook,
                    instagram: action?.instagram,
                    photo: action?.photo,
                    __v: 0,
                }]
            }
        }

        default:
            return state
    }
};

//AC
type ActionsTypesUsers = InferActionsTypes<typeof actionsUsers>

export const actionsUsers = {
    setUsers: function (
        _id: string,
        userName: string,
        password: string,
        twitter?: string,
        gitHub?: string,
        linkedin?: string,
        facebook?: string,
        instagram?: string,
        photo?: string,
    ) {
        return {
            type: constants.reducers.SET_USER,
            _id, userName, password, twitter, gitHub, linkedin, facebook, instagram, photo
        } as const;
    }
};

//Thunks
type ThunkWeatherType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypesUsers>

export const getUsersList = (): ThunkWeatherType => {
    return async (dispatch) => {
        let response = await userAPI.getUsers();
        for (let entry of response) {
            dispatch(actionsUsers.setUsers(entry._id, entry.userName, entry.password,
                entry.twitter, entry.gitHub, entry.linkedin, entry.facebook, entry.instagram, entry.photo))
        }
    }
};

export default UsersReducer