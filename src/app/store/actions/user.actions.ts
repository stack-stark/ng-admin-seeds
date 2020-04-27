import { createAction, props } from '@ngrx/store';

export interface UserType {
  name: string;
  token: string;
  id: number;
}

export const userLogin = createAction('[user login]', props<{ user: UserType }>());
export const userLogout = createAction('[user logout]', props<{ user: UserType }>());
