export const routes = {
  authentication: {
    login: '/users',
    logout: '/users/logout',
  },
  movies: {
    getAllMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=1d1e3eb34d70d120d43954cd81f5915d'
  },
  onlineAuthentication: {
    requestToken: 'https://api.themoviedb.org/3/authentication/token/new?api_key=1d1e3eb34d70d120d43954cd81f5915d',
    login: BASE_URL + 'authentication/token/validate_with_login' + API_KEY
  },
  sessionId:{
    getSessionId: 'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=1d1e3eb34d70d120d43954cd81f5915d'
  }
};

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'api_key=1d1e3eb34d70d120d43954cd81f5915d'
