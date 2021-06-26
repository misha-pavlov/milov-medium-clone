import styled from 'styled-components';
import { colors } from '../../config/colors';

export const GoodIdeasText = styled.p<{ isOurStory?: boolean }>`
    font-family: Nunito-SemiBold;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 30px;
    margin-top: ${({isOurStory}) => isOurStory ? 50 : 0}px;
    color: ${colors.black1};
    text-align: ${({isOurStory}) => isOurStory ? 'center' : 'left'};
`;

export const TextUnderEnterText = styled.p`
  font-family: Nunito-Bold;
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 50px;
  width: 750px;
  text-align: center;
  color: ${colors.black1};
  word-break: break-word;
`;