import '../App.css'
import Action from './action.jsx'
import PersonalDetails from './personalDetails.jsx';
import Education from './education.jsx';
import Experience from './experience.jsx';

function FormArea({ personalDetails }) {
  console.log(personalDetails);
  return (
    <div className="formArea">
      <Action />
      <PersonalDetails
        personalDetails={personalDetails}
      />
      <Education />
      <Experience />
    </div>
  )
}

export default FormArea;
