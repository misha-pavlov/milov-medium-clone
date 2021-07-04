import { TUsers } from '../../../../redux/reducers/UsersReducer';

export type TStage2 = {
    onClick: () => void;
    users?: Array<TUsers>;
}