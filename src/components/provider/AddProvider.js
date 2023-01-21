import React from 'react'
import { Button } from 'react-bootstrap'

const AddProvider = () => {
  return (
    <div>
    <div className='form container'>
    <form action="/action_page.php" className='form-element'>

    <div className='d-flex justify-content-center flex-column  mt-4'>
    <label for="id" className=' label-text '>Address:</label>
    <input type="text" id="fname" name="id" className='input-feild' placeholder='Decryted Adress'/>
    </div>
    <div className='d-flex justify-content-center mt-3'>
    <Button className='mx-5'>Add Provider</Button>
    </div>
  </form>
    </div>
    </div>
  )
}

export default AddProvider
