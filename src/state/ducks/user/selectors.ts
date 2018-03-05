import { IUserState } from './reducers';

export const getUserViewState = (state: IUserState) => ({
  id: state.id,
  name: state.name,
  thumbnail: state.thumbnail,
  tags: state.tags,
  token: state.token,
});
