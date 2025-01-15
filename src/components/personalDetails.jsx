import '../App.css'
import InputGroup from '../inputGroup'

export default function PersonalDetails(props) {
  const { personalDetails, setPersonalDetails } = props;
  const { fullName, email, phone, address } = personalDetails;

  function handleChange(e) {
    const newValue = e.target.value;
    const dataset = e.target.dataset;
    const newPersonalDetails = { ...personalDetails, [dataset.key]: newValue };

    setPersonalDetails(newPersonalDetails);
  }

  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <InputGroup
        id='full-name'
        placeholder='Full name'
        type='text'
        labelText='Full name'
        onChange={handleChange}
        value={fullName}
        dataKey='fullName'
      />
      <InputGroup
        id='email'
        placeholder='Email address'
        type='email'
        labelText='Email'
        onChange={handleChange}
        value={email}
        dataKey='email'
      />
      <InputGroup
        id='phone'
        placeholder='123-456-7890'
        type='tel'
        labelText='Phone'
        onChange={handleChange}
        value={phone}
        dataKey='phone'
      />
      <InputGroup
        id='address'
        placeholder='Address'
        type='text'
        labelText='Address'
        onChange={handleChange}
        value={address}
        dataKey='address'
      />
    </div>
  )
}
