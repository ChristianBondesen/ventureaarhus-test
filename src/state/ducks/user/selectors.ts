import { IUserState } from './reducers';

export const getCommonViewState = (state: IUserState) => ({
  id: state.id,
  name: state.name,
  thumbnail: state.thumbnail,
  participatingEvent: state.participatingEvents,
  likedEvents: state.likedEvents,
  followedEvents: state.followedEvents,
});
