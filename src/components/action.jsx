import '../App.css'

function Button({ text, className }) {
  return (
    <button className={className}>{text}</button>
  )
}

export default function Action() {
  return (
    <div className="action">
      <Button text='Clear' classnName='clear' />
      <Button text='Load' classnName='load' />
    </div>
  )
}
