import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppStoreModule } from 'src/app/store/app-store.module';
import { getToken } from 'src/app/store/selectors/user.selector';
import { userLogin, userLogout } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  constructor(
    private store: Store<AppStoreModule>
  ) {
    this.store.pipe(select('user' as any), select(getToken)).subscribe(item => {
      this.isLoggedIn = item ? true : false;
    });
  }

  /**
   * 模拟登陆
   * @param name
   * @param id
   */
  login(name: string, id: number): boolean {
    const token = this.getToken(name, id);
    this.store.dispatch(userLogin({ user: { name, id, token} }));
    return true;
  }

  logout(): void {
    this.store.dispatch(userLogout());
  }

  /**
   * 模拟获取token
   * @param name
   * @param id
   */
  private getToken(name: string, id: number) {
    return name + id + new Date().getTime();
  }
}
