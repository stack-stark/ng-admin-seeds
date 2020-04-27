
import { createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';
const selectBookStates = (state: UserState) => state;

export const getUserInfo = createSelector(selectBookStates, (state: UserState) => state.userInfo);
