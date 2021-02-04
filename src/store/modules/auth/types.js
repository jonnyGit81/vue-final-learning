//Actions
const SIGNUP_USER_ACTION = "authSignupAction";
const SIGNIN_USER_ACTION = "authSigninAction";
const FETCH_USER_ACTION = "authFectUserAction";
const LOGOUT_USER_ACTION = "authResetUserAction";
const RESUME_USER_ACTION = "authResumeUserAction";
const ACTIONS = {
  SIGNUP_USER_ACTION,
  SIGNIN_USER_ACTION,
  FETCH_USER_ACTION,
  LOGOUT_USER_ACTION,
  RESUME_USER_ACTION
};

//Getters
const GET_USER = "authGetUser";
const IS_AUTHENTICATED = "authIsUserAuthenticated";
const GETTERS = { GET_USER, IS_AUTHENTICATED };

//Mutations
const SIGNUP_USER = "authCreateUser";
const SIGNIN_USER = "authSignInUser";
const FETCH_USER = "authFetchUser";
const LOGOUT_USER = "authLogoutUser";
const RESUME_USER = "resumeAuthUser";
const MUTATIONS = {
  SIGNUP_USER,
  SIGNIN_USER,
  FETCH_USER,
  RESUME_USER,
  LOGOUT_USER
};

export { ACTIONS, MUTATIONS, GETTERS };
