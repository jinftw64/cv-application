import '../App.css'
import InputGroup from '../inputGroup'

export default function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <InputGroup
        id='school'
        labelText='School'
        placeholder='Enter school/university'
        type='text'
        onChange=''
        value=''
      />
      <InputGroup
        id='degree'
        labelText='Degree'
        placeholder='Enter Degree / Field of Study'
        type='text'
        onChange=''
        value=''
      />
      <div className="dates-group">
        <InputGroup
          id='start-date'
          labelText='Start Date'
          placeholder='Enter Start Date'
          type='text'
          onChange=''
          value=''
        />
        <InputGroup
          id='end-date'
          labelText='End Date'
          placeholder='Enter End Date'
          type='text'
          onChange=''
          value=''
        />
      </div>
      <InputGroup
        id='school-location'
        labelText='Location'
        placeholder='Enter Location'
        type='text'
        onChange=''
        value=''
      />
    </div>
  )
}
