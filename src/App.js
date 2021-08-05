import {Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import Error404Screen from "./screens/Error404Screen";
import DashboardScreen from "./screens/DashboardScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTopRoute from "./components/ScrollToTop";

function App()
{

  return (
    <div className="App" style={{ backgroundColor: "#FAFBFE" }}>
      <main>
     
        <ErrorBoundary>
        <ToastContainer />
          <Header />
  
          <Switch>

            <ScrollToTopRoute path="/" component={HomeScreen} exact />
            <ScrollToTopRoute path="/login" component={LoginScreen} exact />
            <ScrollToTopRoute path="/signup" component={SignupScreen} exact />
            <ScrollToTopRoute path="/dashboard" component={DashboardScreen} exact />
         
            <ScrollToTopRoute component={Error404Screen} />
          </Switch>
        
        </ErrorBoundary>
      </main>
     
    </div>
  );
}

export default App;
