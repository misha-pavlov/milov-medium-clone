import { useEffect, useState } from 'react';
import { userAPI } from '../api/api';
import { TUsers } from '../redux/reducers/UsersReducer';

const useUsersData = async (userName: string) => {
  const [usersList, setUsersList] = useState<Array<TUsers>>([]);

  useEffect(() => {
    (async function getUsersList() {
      const data = await userAPI.getUsers();
      setUsersList(data);
    })();
  }, []);

  const result = await usersList.filter(u => u.userName === userName);
  return result === [] ? [] : result[0]?.photo;
};

export default useUsersData;
