import '../App.css'

function Button({ text, className }) {

  return <button className={className}>{text}</button>;
}

export default function Navbar() {

  return (
    <nav className="navbar">
      <Button text='Content' className='content' />
      <Button text='Customize' className='customize' />
    </nav>
  )
}
