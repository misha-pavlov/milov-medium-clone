import styled from 'styled-components';
import { colors } from './colors';

export const DefaultText = styled.p<{ isBold?: boolean; isPost?: boolean }>`
  font-family: ${({ isBold }) => (isBold ? 'Nunito-SemiBold' : 'Nunito-Regular')};
  font-size: ${({ isPost }) => (isPost ? '22' : '16')}px;
  line-height: ${({ isPost }) => (isPost ? '22' : '16')}px;
`;

export const PostCreator = styled.p<{ isPostPage?: boolean }>`
  font-family: Nunito-Bold;
  font-size: ${({ isPostPage }) => (isPostPage ? 18 : 13)}px;
  line-height: ${({ isPostPage }) => (isPostPage ? 18 : 13)}px;
  cursor: pointer;
`;

export const PostDateTime = styled.p`
  font-family: Nunito-Light;
  font-size: 13px;
  line-height: 13px;
  margin-top: 15px;
  margin-bottom: 30px;
  color: ${colors.gray2};
`;

export const TrendingNumber = styled.p`
  font-family: Nunito-SemiBold;
  font-size: 30px;
  line-height: 30px;
  color: ${colors.gray1};
`;

export const RecentPost = styled.p<{ isTopicPage?: boolean }>`
  font-family: Nunito-Bold;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: ${({ isTopicPage }) => (isTopicPage ? 0 : 10)}px;
`;

export const SearchEmptyList = styled.p<{ needBlackFontColor?: boolean }>`
  font-family: Nunito-Bold;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  margin-top: 15px;
  color: ${({ needBlackFontColor }) => (needBlackFontColor ? colors.black1 : colors.white1)};
`;
