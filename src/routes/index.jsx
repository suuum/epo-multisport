import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import NewsPage from "views/NewsPage/NewsPage";
import ShopPage from "views/ShopPage/ShopPage";
import ContactPage from "views/ContactPage/ContactPage";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/landing-page", name: "Components", component: Components },
  { path: "/sklep", name: "Sklep", component: ShopPage },
  { path: "/kontakt", name: "Kontakt", component: ContactPage },
  { path: "/aktualnosci", name: "Aktualności", component: NewsPage }
];

export default indexRoutes;
