import styled from 'styled-components';
import { colors } from '../../config/colors';

export const ErrorPageBlock = styled.div`
    height: 100vh;
    display: flex;
    alignt-items: center;
    justify-content: center;
`;

export const Text404 = styled.p`
    font-size: 90px;
    line-height: 104px;
    font-family: Nunito-Bold;
    color: ${colors.brown1};
    margin: 0;
    padding: 0;
`;

export const TextPageNotFound = styled.p`
    font-size: 60px;
    line-height: 74px;
    font-family: Nunito-Bold;
    text-transform: uppercase;
    color: ${colors.black1};
    margin: 0 0 30px 0;
    padding: 0;
`;

export const TextBlock = styled.div`
    padding-bottom: 110px;
    padding-left: 60px;
`;