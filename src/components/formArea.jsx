import '../App.css'
import Action from './action.jsx'
import PersonalDetails from './personalDetails.jsx';
import Education from './education.jsx';

function FormArea() {

  return (
    <div className="formArea">
      <Action />
      <PersonalDetails />
      <Education />
    </div>
  )
}

export default FormArea;
