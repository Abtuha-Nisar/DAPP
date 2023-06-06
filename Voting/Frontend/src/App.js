import './App.css';
import React from 'react';
//import { Route, Switch, } from 'react-router-dom';
import Register from './Login components/Register';
import Login from './Login components/Login';
//import SigninOTP from './Login components/SigninOTP';
import Dashboard from './User components/Dashboard';
import AdminDashboard from './Admin components/AdminDashbord';
import Result from './User components/Result';
import Aboutvoter from './User components/Aboutvoter';
import Setting from './User components/Setting';
import Voterlist from './Admin components/Voterlist';
import DisplayResult from './Admin components/DisplayResult';
import ViewElection from './User components/ViewElection';
import Candidatelist from './Admin components/Candidatelist';
import HomePage from './Home/Homepage';
import Adminlogin from './Admin components/Adminlogin';
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { useState, useEffect } from 'react';
import RegisterOTP from './Login components/RegisterOTP';
import ForgetPassword from './Login components/ForgetPassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { loadContract } from './utils/load-contract';


const App = () => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  // eslint-disable-next-line no-unused-vars
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      // const contract = await loadContract("Vote", provider)
      if (provider) {

        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          //contract
        });
      } else {
        console.error("Please install MetaMask!");
      }

      // console.log(window.web3);
      // console.log(window.ethereum);
      // let provider = null;
      // if (window.ethereum) {
      //   provider = window.ethereum;
      //   try {
      //     await provider.enable();
      //   } catch {
      //     console.error("User is not allowed");
      //   }
      // } else if (window.web3) {
      //   provider = window.web3.currentProvider;
      // } else if (!process.env.production) {
      //   provider = new Web3.providers.HttpProvider("http://localhost:7545");
      // }
      // setWeb3Api({
      //   web3: new Web3(provider),
      //   provider,

      // });

    };
    loadProvider();

  }, []);
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);


  console.log(web3Api.web3);

  return (
    <>
      <ToastContainer />
      <div className='App' >
        {/* <p> Account:{account ? account : "not connected"} </p> */}
        <Router>
          <Switch>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/RegisterOTP' component={RegisterOTP} />
            <Route exact path='/login' component={Login} />
            {/* <Route exact path='/SigninOTP' component={SigninOTP} /> */}
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/ForgetPassword' component={ForgetPassword} />
            <Route exact path='/AdminDashboard' component={AdminDashboard} />
            <Route exact path='/Result' component={Result} />
            <Route exact path='/Aboutvoter' component={Aboutvoter} />
            <Route exact path='/Setting' component={Setting} />
            <Route exact path='/Voterlist' component={Voterlist} />
            <Route exact path='/DisplayResult' component={DisplayResult} />
            <Route exact path='/ViewElection' component={ViewElection} />
            <Route exact path='/Candidatelist' component={Candidatelist} />
            <Route exact path='/Adminlogin' component={Adminlogin} />

          </Switch>
        </Router>
      </div>


    </>
  );
};

export default App;
