import styled from 'styled-components';
import { colors } from '../../../config/colors';

export const searchPostsStyles = {
  input: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30,
  },
  searchBlock: {
    borderRadius: 10,
    border: 'none',
  },
};

export const SearchEmptyList = styled.p`
  font-family: Nunito-Bold;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  margin-top: 15px;
  color: ${colors.white1};
`;
