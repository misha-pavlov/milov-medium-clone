import React, {useEffect, useState} from 'react';

import OurStoryPage from './OurStoryPage';
import {constants} from "../../config/constants";

const OurStoryPageContainer = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem(constants.localStorage.user) !== null);

    useEffect(() => {
        setIsAuth(localStorage.getItem(constants.localStorage.user) !== null)
    }, [localStorage.getItem(constants.localStorage.user)]);

    const removeLocalStorageItem = () => {
        setIsAuth(false);
        localStorage.removeItem(constants.localStorage.user);
    }

    const addLocalStorageItem = (params: string) => {
        setIsAuth(true);
        localStorage.setItem(constants.localStorage.user, params);
    }

    return <OurStoryPage addLocalStorageItem={addLocalStorageItem}
                         removeLocalStorageItem={removeLocalStorageItem} isAuth={isAuth} setIsAuth={setIsAuth} />
}

export default OurStoryPageContainer