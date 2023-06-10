import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbaar } from "./components/Main/Navbar";
import { Home } from "./pages";
import { ScrollToTop } from "./components/ScrollTop";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbaar />
      <Home />
    </>
  );
}

export default App;
