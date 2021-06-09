import appleIcon from '../../assets/icons/signIn/apple.svg';
import emailIcon from '../../assets/icons/signIn/email.svg';
import facebookIcon from '../../assets/icons/signIn/facebook.svg';
import googleIcon from '../../assets/icons/signIn/google.svg';
import twitterIcon from '../../assets/icons/signIn/twitter.svg';
import { constants } from '../../config/constants';

export const getIcon = (iconType: 'Apple' | 'email' | 'Facebook' | 'Google' | 'Twitter') => {
    switch(iconType) {
        case constants.signIn.apple: return appleIcon;
        case constants.signIn.email: return emailIcon;
        case constants.signIn.facebook: return facebookIcon;
        case constants.signIn.google: return googleIcon;
        case constants.signIn.twitter: return twitterIcon;
    }
}