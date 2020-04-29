import { userLogin, userLogout } from './../actions/user.actions';
import { UserType } from './../actions';
import { createReducer, on, Action } from '@ngrx/store';

// 定义初始化值的类型
export interface UserState {
  userInfo: UserType;
}

const info = window.localStorage.getItem('userInfo');
let data =  {
  name: null,
  id: null,
  token: null
};
if (info) {
  data = JSON.parse(info);
}

export const initStateUser: UserState = {
    userInfo: data
};

const reducer = createReducer(
    initStateUser,
  on(userLogin, (state, { user }) => {
    const str = JSON.stringify({ name: user.name, id: user.id, token: user.token });
    window.localStorage.setItem('userInfo', str);
    return { userInfo: { name: user.name, id: user.id, token: user.token } };
  }),
  on(userLogout, (state) => {
    window.localStorage.removeItem('userInfo');
    return { userInfo: {
      name: null,
      id: null,
      token: null} };
  })
);

export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
