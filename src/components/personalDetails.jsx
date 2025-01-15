import '../App.css'
import InputGroup from '../inputGroup'

export default function PersonalDetails({ personalDetails: { fullName, email, phone, address } }) {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <InputGroup
        id='full-name'
        placeholder='Full name'
        type='text'
        labelText='Full name'
        onChange=''
        value={fullName}
      />
      <InputGroup
        id='email'
        placeholder='Email address'
        type='email'
        labelText='Email'
        onChange=''
        value={email}
      />
      <InputGroup
        id='phone'
        placeholder='123-456-7890'
        type='tel'
        labelText='Phone'
        onChange=''
        value={phone}
      />
      <InputGroup
        id='address'
        placeholder='Address'
        type='text'
        labelText='Address'
        onChange=''
        value={address}
      />
    </div>
  )
}
