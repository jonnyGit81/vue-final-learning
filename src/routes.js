import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";
import SignUp from "./components/auth/Signup.vue";
import SignIn from "./components/auth/Signin.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks },
  { path: "/auth/signup", component: SignUp },
  { path: "/auth/signin", component: SignIn }
];
