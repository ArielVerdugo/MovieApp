import { routes } from '@/controllers/routes';
import { strings } from '@/localization';


export class UserController {
  constructor(networkService) {
    this.networkService = networkService;
  }

  
  getSessionId(){
    return this.networkService.request({
      method: 'GET',
      url: routes.sessionId.getSessionId,
    });
  }

  getAccessToken(){
    return this.networkService.request({
      method: 'GET',
      url: routes.onlineAuthentication.requestToken,
    });
  }

  /*login({ username, password}) {
    return this.networkService.request({
      method: 'POST',
      url: routes.onlineAuthentication.login,
      data: { username, password },
    });
  }*/

  logout({ demoMode } = {}) {
    if (demoMode) {
      return new Promise((resolve) => {
        setTimeout(resolve, 250);
      });
    }

    return this.networkService.request({
      method: 'DELETE',
      url: routes.authentication.logout,
    });
  }


  login({ username, password, demoMode }) {
    if (demoMode) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username && password) {
            resolve({ data: { user: { username } } });
          } else {
            reject({ data: { error: strings.login.invalidCredentials } });
          }
        }, 50);
      });
    }
    return this.networkService.request({
      method: 'POST',
      url: routes.authentication.login,
      data: { username, password },
    });
  }
}
