import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import useWindowDimensions from "./hooks/useWindowDimensions";
import HambergerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const { width } = useWindowDimensions();
  console.log(width);
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          {width > 576 ? <Navbar /> : <HambergerMenu />}
          <LandingPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
