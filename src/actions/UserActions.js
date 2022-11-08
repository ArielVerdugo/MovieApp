import { UserController } from '@/controllers';
import { strings } from '@/localization';
import { useQuery } from '@tanstack/react-query';



export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginSuccess = (user) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

const loginError = (error) => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});


//Version inicial
export const login = (username, password) => async (dispatch, _, { demoMode, networkService }) => {
  try {
    dispatch(loginRequest());
    const userController = new UserController(networkService);
    const { data } = await userController.login({ username, password, demoMode });

    /*if(!demoMode){
      networkService.setAccessToken(data.user.accessToken);
    }*/
    const {data:{results}} = await userController.getMovies();
    console.log(results);

    dispatch(loginSuccess(data.user));
  } catch ({ data }) {
    dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
  }
};

//Version tratandom de logarme
/*export const login = (username, password) => async (dispatch, _, { demoMode, networkService }) => {
  try {
    //dispatch(loginRequest());
    const userController = new UserController(networkService);

    //llamo a la funcion que me devuelve el access token
    //const {data} = await userController.getAccessToken();


    //const {data: responseData} = await userController.getAccessToken();

    //const {data: {request_token}} = await userController.getAccessToken();


    const {data: {requestToken}} = await userController.getAccessToken();

    console.log(requestToken);
    //lo seteo en la sesion ver bien como acceder porque el accessToken.request_token esta mal
    networkService.setAccessToken(data.request_token)
    //const { data } = await userController.login({ username, password});

    dispatch(loginSuccess(data.user));
    //Guardar el token

  } catch ({ data }) {
    dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
  }
};*/


export const generateSessionId = () => async (dispatch, _, {networkService }) => {
  try {

    const userController = new UserController(networkService);

    const {data: {guest_session_id}} = await userController.getSessionId();

    console.log(guest_session_id);
  
  } catch ({ data }) {
    dispatch(loginError(data?.error ?? strings.sessionId.invalidCredentials));
  }
};

export const logout = () => async (dispatch, _, { demoMode, networkService }) => {
  try {
    const userController = new UserController(networkService);
    await userController.logout(true);
  } finally {
    networkService.clearAccessToken();
    dispatch(clearStore());
  }
};


export const getMovies = async(dispatch, _, { demoMode, networkService }) =>{
  try{
    const userController = new UserController(networkService);
    const {data:{results}} = await userController.getMovies();
    console.log(results);
    return results;
  } catch({data}){
    console.log("entro al error");
  }
  
};

export const UseGetAllmovies = () =>{
  const{isLoading,data} = useQuery(['allMovies'],getMovies);
  console.log(data);

  return {data,isLoading};
};