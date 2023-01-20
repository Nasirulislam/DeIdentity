import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {ethers} from 'ethers'


const Navbar1 = () => {
const [errorMessage, setErrorMessage] = useState(null);
const [connButtonText, setConnButtonText] = useState('Connect Wallet');
const [defaultAccount, setDefaultAccount] = useState(null);
const [provider, setProvider] = useState(null);
const [userBalance, setUserBalance] = useState(null);


const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
        // set ethers provider
        setProvider(new ethers.providers.Web3Provider(window.ethereum));

        // connect to metamask
        window.ethereum.request({ method: 'eth_requestAccounts'})
        .then(result => {
            setConnButtonText('Wallet Connected');
            setDefaultAccount(result[0]);
        })
        .catch(error => {
            setErrorMessage(error.message);
        });

    } else if (!window.ethereum){
        console.log('Need to install MetaMask');
        setErrorMessage('Please install MetaMask browser extension to interact');
    }
}

useEffect(() => {
    if(defaultAccount){
    provider.getBalance(defaultAccount)
    .then(balanceResult => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
    })
    };
}, [defaultAccount]);
  return (

    <>

    <div className='container d-flex justify-content-between mt-4 color-bg ' style={{    alignItems: 'baseline'}}>
    
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Generate Token</Nav.Link>
            <Nav.Link href="/verify">Verify Token</Nav.Link>
            <Nav.Link href="/add-provider">Add Provider</Nav.Link>
            <Nav.Link href="/service-provider">Service Provider</Nav.Link>
        


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div >
<div className='container ' >
<div className='d-flex  justify-content-end '>
<DropdownButton id="dropdown-basic-button" title="" className='px-5'>
<NavLink className='dropbtn'>
<Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
</NavLink>
<NavLink className='dropbtn'>
<Dropdown.Item href="#/action-2">User</Dropdown.Item>
</NavLink>
<NavLink className='dropbtn'>
<Dropdown.Item href="#/action-3">Service</Dropdown.Item>
</NavLink>
</DropdownButton>

<Button onClick={connectWalletHandler}>{connButtonText} </Button>


</div>
<p className='d-flex justify-content-center' style={{color:'black'}}> {defaultAccount}</p>
</div>
 </div>
    </div>


 </>
  );
}

export default Navbar1;