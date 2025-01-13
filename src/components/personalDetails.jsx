import '../App.css'

function InputGroup({ labelText, inputText, inputType, placeholder, category }) {
  return (
    <div className="input-group">
      <label for={category}>{labelText}</label>
      <input type={inputType} id={category} value={inputText} placeholder={placeholder} />
    </div>
  )
}

export default function PersonalDetails() {
  return (
    <div className="personalDetails">
      <div class='fullName'>
        <InputGroup labelText='Full name' inputText='John Smith' placeholder='First and Last Name' category='full-name' inputType='text' />
      </div>

      <div class='email'>
        <InputGroup labelText='Email' inputText='john.smith@gmail.com' placeholder='Email address' category='email' inputType='email' />
      </div>

      <div class='phone'>
        <InputGroup labelText='Phone Number' inputText='555-555-5555' placeholder='123-456-7890' category='phone' inputType='tel' />
      </div>

      <div class='address'>
        <InputGroup labelText='Address' inputText='Smithtown, NY' placeholder='Address' category='address' inputType='text' />
      </div>
    </div>
  )
}
