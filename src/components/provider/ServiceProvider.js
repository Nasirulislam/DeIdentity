import React from 'react'
import { Button } from 'react-bootstrap'

const ServiceProvider = () => {
  return (
    <div className='container mt-5'>
    <div class="form-check my-2">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label class="form-check-label" for="flexCheckDefault">
     ID
    </label>
  </div>
  <div class="form-check my-2">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
    <label class="form-check-label" for="flexCheckChecked">
     Name
    </label>
  </div>
  <div class="form-check my-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
   CNIC
  </label>
</div>
<div class="form-check my-2">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
<label class="form-check-label" for="flexCheckChecked">
  Address
</label>
</div>

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
<Button className='mx-5'>Service</Button>
</div>
</form>
    </div>
  )
}

export default ServiceProvider
