import { userLogin, userLogout } from './../actions/user.actions';
import { UserType } from './../actions';
import { createReducer, on, Action } from '@ngrx/store';

// 定义初始化值的类型
export interface UserState {
  userInfo: UserType;
}

export const initStateUser: UserState = {
    userInfo: {
        name: null,
        id: null,
        token: null
    }
};

const reducer = createReducer(
    initStateUser,
  on(userLogin, (state, { user }) => {
    return { userInfo: { name: user.name, id: user.id, token: user.token } };
  }),
  on(userLogout, (state, { user }) => {
    return { userInfo: {} };
  })
);

export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
