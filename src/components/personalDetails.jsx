import '../App.css'
import InputGroup from '../inputGroup'

export default function PersonalDetails() {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <InputGroup
        id='full-name'
        placeholder='Full name'
        type='text'
        labelText='Full name'
        onChange=''
        value='John Smith'
      />
      <InputGroup
        id='email'
        placeholder='Email address'
        type='email'
        labelText='Email'
        onChange=''
        value='john.smith@gmail.com'
      />
      <InputGroup
        id='phone'
        placeholder='123-456-7890'
        type='tel'
        labelText='Phone'
        onChange=''
        value='555-555-5555'
      />
      <InputGroup
        id='address'
        placeholder='Address'
        type='text'
        labelText='Address'
        onChange=''
        value='123 Street'
      />
    </div>
  )
}
