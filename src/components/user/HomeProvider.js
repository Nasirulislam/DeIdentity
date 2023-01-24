import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const HomeProvider = () => {
  return (
    <>
    <div className='container text-center'>
      <h1> My Token</h1>
      <NavLink to="/"><button className='btn btn-primary'>back</button></NavLink>
    </div>

    <div className='form container'>
    <form action="/action_page.php" className='form-element'>

    <div className='d-flex justify-content-center flex-column  mt-4'>
    <label for="id" className=' label-text '>ID:</label>
    <input type="text" id="fname" name="id" className='input-feild' placeholder='ID'/>
    </div>
    <div className='d-flex justify-content-center flex-column mt-4'>
    <label for="fname" className=' label-text '>Full Name:</label>
    <input type="text" id="fname" name="fname" className='input-feild' placeholder='Name'/>
    </div>
    <div className='d-flex justify-content-center flex-column mt-4'>
    <label for="cnic" className=' label-text '>CNIC:</label>
    <input type="text" id="fname" name="cnic" className='input-feild' placeholder='CNIC'/>
    </div>
    <div className='d-flex  mt-4 flex-column'>
    <label for="address" className=' label-text'>Address:</label>
    <input type="text" id="fname" name="address" className='input-feild' placeholder='Address'/>
    </div>

    

  

    <div className='d-flex justify-content-center mt-3'>
    <Button className='mx-5'>Decrypt Token</Button>
    </div>
  </form>
    </div>


    <div className='container d-flex justify-content-center flex-column w-100'>
    <p className='text-class'><label for="token">Decrypteded Token</label></p>
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

export default HomeProvider
