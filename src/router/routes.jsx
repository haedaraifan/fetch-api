import HomePage from "../pages/home_page"
import LoginPage from "../pages/login_page"

const routes = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <HomePage /> 
  }
]

export default routes