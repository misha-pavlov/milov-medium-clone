import styled from 'styled-components';
import { colors } from '../../config/colors'

export const Li = styled.p`
    font-family: Nunito-Regular;
    font-size: 16px;
    color: ${colors.black1};
    &:hover {
        color: ${colors.green1};
    }
`