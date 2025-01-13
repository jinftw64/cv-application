import InputGroup from "../inputGroup";

export default function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <InputGroup
        id='company-name'
        placeholder='Enter Company Name'
        type='text'
        labelText='Company Name'
        onChange=''
        value=''
      />
      <InputGroup
        id='position'
        placeholder='Enter Position Title'
        type='text'
        labelText='Position Title'
        onChange=''
        value=''
      />
      <div className="date-group">
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
        id='location'
        labelText='Location'
        placeholder='Enter Location'
        type='text'
        onChange=''
        value=''
      />
      <InputGroup
        id='description'
        labelText='Description'
        placeholder='Enter Description'
        type='text'
        onChange=''
        value=''
      />
    </div>
  )
}
