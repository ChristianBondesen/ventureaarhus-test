import { IUserState } from './reducers';

export const getUserViewState = (state: IUserState) => ({
  id: state.id,
  name: state.name,
  thumbnail: state.thumbnail,
  participatingEvent: state.participatingEvents,
  likedEvents: state.likedEvents,
  followedEvents: state.followedEvents,
  token: state.token,
});
