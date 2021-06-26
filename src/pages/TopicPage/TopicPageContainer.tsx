import React from 'react';
import { useLocation } from 'react-router-dom';

import TopicPage from './TopicPage';

const TopicPageContainer = () => {
    const location = useLocation();
    const profile = 'profile';
    return <TopicPage isProfilePage={location.pathname.includes(profile)} />
}

export default TopicPageContainer