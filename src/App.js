// import logo from "./logo.svg";
import "./App.scss";
// import Login from "./pages/login-page/Login";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard-page/Dashboard";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Login /> */}
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
