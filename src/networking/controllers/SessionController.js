import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class SessionController {
  static async login(username, password) {
    const response = await axios.post(generateBackendURL('/api/auth/signin'), {
      username,
      password,
    });
    TokenService.setUser(response.data);
  }

  static async register(username, password, email) {
    const response = await axios.post(generateBackendURL('/api/auth/signup'), {
      username,
      password,
      email,
    });
    TokenService.setUser(response.data);
  }

  static async refreshtoken(refreshtoken) {
    const response = await axios.post(generateBackendURL('/api/auth/refreshtoken'), {
      refreshtoken,
    });
    TokenService.getLocalRefreshToken(response.data);
  }

  static async autenticado(token) {
    const response = await axios.get(generateBackendURL('/api/auth/refreshtoken'), {
      token,
    });
    TokenService.getUser(response.data);
  }
}

export default SessionController;
