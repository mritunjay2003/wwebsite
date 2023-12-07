import Router from "./routes";

//Component
import { Snackbar } from "./component";
import Loading from "./utils/loading";

//Styles
import "./App.css";

const App = () => {
  return (
    <>
      <Snackbar />
      <Loading />
      <Router />
    </>
  );
};

export default App;
