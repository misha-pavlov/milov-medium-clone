import axios from 'axios';
import { TUsers } from '../redux/reducers/UsersReducer';

export const userAPI = {
    getUsers() {
        const users = `http://localhost:3000/users`;

        return axios
            .get<Array<TUsers>>(users)
            .then(response => response.data)
    }
};