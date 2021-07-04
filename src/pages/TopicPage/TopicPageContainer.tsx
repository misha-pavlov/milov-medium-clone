import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import TopicPage from './TopicPage';
import { constants } from '../../config/constants';

const TopicPageContainer = () => {
    const location = useLocation();
    const profile = 'profile';

    const [isAuth, setIsAuth] = useState(localStorage.getItem(constants.localStorage.user) !== null);

    useEffect(() => {
        setIsAuth(localStorage.getItem(constants.localStorage.user) !== null)
    }, [localStorage.getItem(constants.localStorage.user)])

    const removeLocalStorageItem = () => {
        setIsAuth(false);
        localStorage.removeItem(constants.localStorage.user);
    }

    const addLocalStorageItem = (params: string) => {
        setIsAuth(true);
        localStorage.setItem(constants.localStorage.user, params);
    }

    return <TopicPage addLocalStorageItem={addLocalStorageItem}
                      removeLocalStorageItem={removeLocalStorageItem} isAuth={isAuth}
                      setIsAuth={setIsAuth} isProfilePage={location.pathname.includes(profile)} />
}

export default TopicPageContainer