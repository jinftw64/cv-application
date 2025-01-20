import InputGroup from "../inputGroup";
import ButtonGroup from "./buttonGroup";

export default function Experience(props) {
  const { experiences, setExperiences } = props;

  function handleChange(index, propertyName, newValue) {
    const newExperiences = [...experiences]

    newExperiences[index] = { ...newExperiences[index], [propertyName]: newValue }

    setExperiences(newExperiences);
  }

  const deletePlace = (list, index) => {
    const newEducations = [...list];
    newEducations.splice(index, 1);

    setExperiences(newEducations);
  }

  return (
    <div className="experience">
      <h2>Experience</h2>

      {
        experiences.map((experience, index) => (
          <div className="work" key={experience.id}>
            <InputGroup
              id='company-name'
              placeholder='Enter Company Name'
              type='text'
              labelText='Company Name'
              onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
              value={experience.company}
              dataKey='company'
            />
            <InputGroup
              id='position'
              placeholder='Enter Position Title'
              type='text'
              labelText='Position Title'
              onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
              value={experience.position}
              dataKey='position'
            />
            <div className="date-group">
              <InputGroup
                id='start-date'
                labelText='Start Date'
                placeholder='Enter Start Date'
                type='text'
                onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
                value={experience.startDate}
                dataKey='startDate'
              />
              <InputGroup
                id='end-date'
                labelText='End Date'
                placeholder='Enter End Date'
                type='text'
                onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
                value={experience.endDate}
                dataKey='endDate'
              />
            </div>
            <InputGroup
              id='location'
              labelText='Location'
              placeholder='Enter Location'
              type='text'
              onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
              value={experience.location}
              dataKey='location'
            />
            <InputGroup
              id='description'
              labelText='Description'
              placeholder='Enter Description'
              type='text'
              onChange={(e) => handleChange(index, e.target.dataset.key, e.target.value)}
              value={experience.description}
              dataKey='description'
            />

            <ButtonGroup
              onClick={() => deletePlace(experiences, index)}
            />
          </div>
        ))
      }

    </div>
  )
}
