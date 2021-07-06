export type TStage3 = {
  onClick: () => void;
  addUser?: (
    userName: string,
    password: string,
    twitter?: string,
    gitHub?: string,
    linkedin?: string,
    facebook?: string,
    instagram?: string,
    photo?: string,
  ) => void;
};
