import axios from "axios";

const SIGN_UP_INSTANCE = axios.create({
  baseURL:
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdLIxGGfWUdxbaMtrgUOtNGIv7aTu0QwE"
});

const SIGN_IN_INSTANCE = axios.create({
  baseURL:
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdLIxGGfWUdxbaMtrgUOtNGIv7aTu0QwE"
});

//SIGN_UP_INSTANCE.defaults.headers.get["Accept"] = "Application/json";

//SIGN_IN_INSTANCE.defaults.headers.get["Accept"] = "Application/json";

export { SIGN_UP_INSTANCE, SIGN_IN_INSTANCE };
