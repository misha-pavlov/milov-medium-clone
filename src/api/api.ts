import axios from 'axios';

export const userAPI = {
    getUsers() {
        const users = `http://localhost:3000/users`;

        return axios
            .get<any>(users)
            .then(response => console.log(response))
    }
};