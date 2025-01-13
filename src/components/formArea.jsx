import '../App.css'
import Action from './action.jsx'
import PersonalDetails from './personalDetails.jsx';
import Education from './education.jsx';
import Experience from './experience.jsx';

function FormArea() {

  return (
    <div className="formArea">
      <Action />
      <PersonalDetails />
      <Education />
      <Experience />
    </div>
  )
}

export default FormArea;
