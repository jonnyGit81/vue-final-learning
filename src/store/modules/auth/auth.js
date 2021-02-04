import * as userTypes from "./types";
import * as axiosInstance from "../../../authAxiosInstance";
import router from "vue-router";
import * as authTypes from "./types";

const state = {
  userInfo: {},
  expiryDate: null,
  token: null
};

const actions = {
  [userTypes.ACTIONS.SIGNUP_USER_ACTION]: (
    { getters, dispatch, commit },
    payloads
  ) => {
    axiosInstance.SIGN_UP_INSTANCE.post("", payloads.fireBaseUser)
      .then(resp => {
        const user = {
          userId: resp.data.localId,
          email: resp.data.email,
          age: payloads.formData.age,
          country: payloads.formData.country,
          hobbies: payloads.formData.hobbies
        };

        const expiry = new Date(
          new Date().getTime() + resp.data.expiresIn * 1000
        );

        const auth = {
          userInfo: user,
          expiryDate: expiry,
          token: resp.data.idToken
        };

        commit(userTypes.MUTATIONS.SIGNUP_USER, auth);

        if (getters[authTypes.GETTERS.IS_AUTHENTICATED]) {
          dispatch(typesStocks.ACTIONS.INIT_STOCKS_ACTION);
          router.push("/");
        }
      })
      .catch(error => commit(userTypes.MUTATIONS.LOGOUT_USER));
  },

  [userTypes.ACTIONS.LOGOUT_USER_ACTION]: ({ commit }) => {
    commit(userTypes.MUTATIONS.LOGOUT_USER);
  },

  [userTypes.ACTIONS.RESUME_USER_ACTION]: ({ commit }) => {
    commit(userTypes.MUTATIONS.RESUME_USER);
  }
};

function authenticated(state, data) {
  state.userInfo = data.userInfo;
  state.token = data.token;
  state.expiryDate = data.expiryDate;

  localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
  localStorage.setItem("token", data.token);
  localStorage.setItem("expiry", data.expiryDate);
}

function logout(state) {
  state.userInfo = {};
  state.token = null;
  state.expiryDate = null;

  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
  localStorage.removeItem("expiry");
}

function resumeUser(state) {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("token");
  const expiry = localStorage.getItem("expiry");
  if (token && userInfo && expiry) {
    state.token = token;
    state.userInfo = JSON.parse(userInfo);
    state.expiryDate = new Date(expiry);
  }
}

const mutations = {
  [userTypes.MUTATIONS.SIGNUP_USER]: (state, payloads) => {
    authenticated(state, payloads);
  },

  [userTypes.MUTATIONS.LOGOUT_USER]: state => {
    logout(state);
  },

  [userTypes.MUTATIONS.RESUME_USER]: state => {
    resumeUser(state);
  },

  [userTypes.MUTATIONS.FETCH_USER]: state => {}
};

const getters = {
  [userTypes.GETTERS.GET_USER]: state => {
    return {
      userInfo: state.userInfo,
      expiryDate: state.expiryDate,
      token: state.token
    };
  },

  [userTypes.GETTERS.IS_AUTHENTICATED]: state => {
    const isAuth = state.expiryDate
      ? state.expiryDate.getTime() > new Date().getTime()
      : false;
    console.log(isAuth);
    return isAuth;
  }
};

export default { state, actions, getters, mutations };
