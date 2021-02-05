import React from "react";
import Signup from "./components/Signup";
import Adminprofile from "./components/Admin/Adminprofile";
import Foliodetail from "./components/Admin/Foliodetail";
import Transaction from "./components/Admin/Transaction";
import Taxsavinginvest from "./components/Admin/Taxsavinginvest";
import Sipstp from "./components/Admin/Sipstp";
import Portfolio from "./components/Admin/Portfolio";
import Portfoliodetail from "./components/Admin/Portfoliodetail";
import Foliofiles from "./components/Admin/Foliofiles";
import Dividend from "./components/Admin/Dividend";
import Nav from "./components/Admin/Nav";
import Transactionfeed from "./components/Admin/Transactionfeed";
import Login from "./components/Login";
import Home from "./Home";
import AdminNavBar from "./Adminnav";
import Sidebar from "./Adminsidebar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
    <AdminNavBar />
    <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Adminprofile" component={Adminprofile} />
        <Route exact path="/Foliodetail" component={Foliodetail} />
        <Route exact path="/Transaction" component={Transaction} />
        <Route exact path="/Sipstp" component={Sipstp} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Portfoliodetail" component={Portfoliodetail} />
        <Route exact path="/Taxsavinginvest" component={Taxsavinginvest} />
        <Route exact path="/Foliofiles" component={Foliofiles} />
        <Route exact path="/Dividend" component={Dividend} />
        <Route exact path="/Nav" component={Nav} />
        <Route exact path="/Transactionfeed" component={Transactionfeed} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Redirect to = "/" />
        Transactionfeed
      </Switch>
    </>
  );
};

export default App;
