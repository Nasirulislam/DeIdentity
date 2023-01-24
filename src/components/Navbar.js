import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const Navbar1 = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount]);
  return (
    <>
      <div
        className="container d-flex justify-content-between mt-4 color-bg "
        style={{ alignItems: "baseline" }}
      >
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <NavLink to="/" className='px-2 navbar-links'>Generate Token</NavLink>
                  <NavLink to="/verify-token" className='px-2 navbar-links'>Verify Token</NavLink>
                  <NavLink to="/add-provider" className='px-2 navbar-links'>Add Provider</NavLink>
                  <NavLink to="/service-provider" className='px-2 navbar-links'>Service Provider</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <div className="container ">
            <div className="d-flex  justify-content-end ">
              <DropdownButton
                id="dropdown-basic-button"
                title=""
                className="px-5"
              >
         
                  <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
        
           
                  <Dropdown.Item href='/user'>User</Dropdown.Item>
        
       
                  <Dropdown.Item href="#/action-3">Service</Dropdown.Item>
         
              </DropdownButton>

              <Button onClick={connectWalletHandler}>{connButtonText} </Button>
            </div>
            <p
              className="d-flex justify-content-center"
              style={{ color: "black" }}
            >
              {" "}
              {defaultAccount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
