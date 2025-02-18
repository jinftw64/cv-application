import '../App.css'
import Action from './action.jsx'
import PersonalDetails from './personalDetails.jsx';
import Education from './education.jsx';
import Experience from './experience.jsx';

function FormArea(props) {
  const { personalDetails, setPersonalDetails } = props;
  const { educations, setEducations } = props;
  const { experiences, setExperiences } = props;

  return (
    <div className="formArea">
      <Action />
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Education
        educations={educations}
        setEducations={setEducations}
      />
      <Experience
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  )
}

export default FormArea;
