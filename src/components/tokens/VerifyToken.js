import { Button } from 'react-bootstrap'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const VerifyToken = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
   


    <div className='container d-flex justify-content-center mt-4 '>
  
    <Button className='mx-5'>Get All New Tokens</Button>
    </div>

    <div className='container d-flex justify-content-center flex-column w-100'>
    <p className='text-class'><label for="token">Encrypted Token</label></p>
    <div className='form container'>
    <form action="/action_page.php" className='form-element'>

    <div className='d-flex justify-content-center flex-column  mt-4' onClick={handleShow}>
    <label for="id" className=' label-text '>Address:</label>
    <textarea style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verify" name="token" rows="2" cols="50">They offer free tutorials in all web development technologies.</textarea>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tokens</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className=' container'>
    <form action="/action_page.php" className='form-element'>

    <div className='d-flex justify-content-center flex-column  mt-4'>
    <label for="id" className=' label-text '>ID:</label>
    <input type="text" id="fname" name="id" className='input-feild'/>
    </div>
    <div className='d-flex justify-content-center flex-column mt-4'>
    <label for="fname" className=' label-text '>Full Name:</label>
    <input type="text" id="fname" name="fname" className='input-feild' />
    </div>
    <div className='d-flex justify-content-center flex-column mt-4'>
    <label for="cnic" className=' label-text '>CNIC:</label>
    <input type="text" id="fname" name="cnic" className='input-feild' />
    </div>
    <div className='d-flex  my-4 flex-column'>
    <label for="address" className=' label-text'>Address:</label>
    <input type="text" id="fname" name="address" className='input-feild' />
    </div>
  </form>
    </div>
        
        </Modal.Body>
       
      </Modal>



  </form>
  

  
    </div>
    </div>


    <div className='container d-flex justify-content-center mt-4 '>
  
    <Button className='mx-5'>Decrypt Token</Button>
    </div>

    <div className='container d-flex justify-content-center flex-column w-100'>
    <p className='text-class'><label for="token">Decryted Token</label></p>
    <div className='form container'>
    <form action="/action_page.php" className='form-element'>

    <div className='d-flex justify-content-center flex-column  mt-4'>
    <label for="id" className=' label-text '>ID:</label>
    <textarea style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verify" name="token" rows="2" cols="50">They offer free tutorials in all web development technologies.</textarea>
    </div>
    <div className='d-flex justify-content-center flex-column mt-4'>
    <label for="fname" className=' label-text '>Full Name:</label>
    <textarea style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verify" name="token" rows="2" cols="50">They offer free tutorials in all web development technologies.</textarea>
    </div>
    <div className='d-flex justify-content-center flex-column mt-4'>
    <label for="cnic" className=' label-text '>CNIC:</label>
    <textarea style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verify" name="token" rows="2" cols="50">They offer free tutorials in all web development technologies.</textarea>
    </div>
    <div className='d-flex  mt-4 flex-column'>
    <label for="address" className=' label-text'>Address:</label>
    <textarea style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verify" name="token" rows="2" cols="50">They offer free tutorials in all web development technologies.</textarea>
    </div>
  </form>
    </div>
    </div>
    </>
  )
}

export default VerifyToken
