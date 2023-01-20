import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function GenerateToken() {
  return (
    <>
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
    <Button className='mx-5'>Generate Token</Button>
    </div>
  </form>
    </div>

    <div className='container d-flex flex-column justify-content-center  '>
  
    <div className='d-flex justify-content-center'>
    <Button className='m-3'>Encrypt Token</Button>
    </div>

    <div className='container d-flex justify-content-center flex-column w-100'>
    <p className='text-class'><label for="token">Encrypted Token</label></p>
    <textarea  style={{resize: 'none', outline: 'none', borderRadius:'8px' }} id="token-verification" name="token" rows="2" cols="20">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
    <br/>
    </div>
    </div>

    </>
  );
}

export default GenerateToken;