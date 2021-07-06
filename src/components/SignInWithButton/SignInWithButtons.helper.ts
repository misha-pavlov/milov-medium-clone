import emailIcon from '../../assets/icons/signIn/email.svg';
import facebookIcon from '../../assets/icons/signIn/facebook.svg';
import googleIcon from '../../assets/icons/signIn/google.svg';
import { constants } from '../../config/constants';

export const getIcon = (iconType: 'userName' | 'Facebook' | 'Google') => {
  switch (iconType) {
    case constants.signIn.userName:
      return emailIcon;
    case constants.signIn.facebook:
      return facebookIcon;
    case constants.signIn.google:
      return googleIcon;
  }
};
