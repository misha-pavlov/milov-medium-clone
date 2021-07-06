import styled from 'styled-components';
import { colors } from '../../config/colors';

export const FooterBlock = styled.div`
  width: 100vw;
  height: 80px;
  background-color: ${colors.black2};
  display: flex;
  align-items: center;
`;

export const FooterText = styled.p`
  color: ${colors.white1};
  font-size: 20px;
  line-height: 30px;
  font-family: Nunito-SemiBold;
  text-align: center;
  width: 100%;
`;
