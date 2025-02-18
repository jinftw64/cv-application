import '../App.css'
import InputGroup from '../inputGroup'
import ButtonGroup from './buttonGroup';

export default function Education(props) {
  const { educations, setEducations } = props;

  function handleChange(index, propertyName, newValue) {
    const newEducations = [...educations]

    newEducations[index] = { ...newEducations[index], [propertyName]: newValue }

    setEducations(newEducations);
  }

  const deletePlace = (list, index) => {
    const newEducations = [...list];
    newEducations.splice(index, 1);

    setEducations(newEducations);
  }

  return (
    <div className="education">
      <h2>Education</h2>

      {educations.map((education, index) => (
        <div className="school" key={education.id}>
          <InputGroup
            id='school'
            labelText='School'
            placeholder='Enter school/university'
            type='text'
            onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
            value={education.school}
            dataKey='school'
          />
          <InputGroup
            id='degree'
            labelText='Degree'
            placeholder='Enter Degree / Field of Study'
            type='text'
            onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
            value={education.degree}
            dataKey='degree'
          />
          <div className="dates-group">
            <InputGroup
              id='start-date'
              labelText='Start Date'
              placeholder='Enter Start Date'
              type='text'
              onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
              value={education.startDate}
              dataKey='startDate'
            />
            <InputGroup
              id='end-date'
              labelText='End Date'
              placeholder='Enter End Date'
              type='text'
              onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
              value={education.endDate}
              dataKey='endDate'
            />
          </div>
          <InputGroup
            id='location'
            labelText='Location'
            placeholder='Enter Location'
            type='text'
            onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
            value={education.location}
            dataKey='location'
          />

          <ButtonGroup
            onClick={() => deletePlace(educations, index)}
          />
        </div>
      ))}
    </div>
  )
}
