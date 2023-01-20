import React from 'react'
import { Button } from 'react-bootstrap'

const VerifyToken = () => {
  return (
    <>
   


    <div className='container d-flex justify-content-center mt-4 '>
  
    <Button className='mx-5'>Get Token</Button>
    </div>

    <div className='container d-flex justify-content-center flex-column w-100'>
    <p className='text-class'><label for="token">Encryted Token</label></p>
    <textarea style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verify" name="token" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
    <br/>
    </div>


    <div className='container d-flex justify-content-center mt-4 '>
  
    <Button className='mx-5'>Decrypt Token</Button>
    </div>

    <div className='container d-flex justify-content-center flex-column w-100'>
    <p className='text-class'><label for="token">Decrypted Token</label></p>
    <textarea style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verify" name="token" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
    <br/>
    </div>
    </>
  )
}

export default VerifyToken
