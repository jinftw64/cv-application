function DeleteButton({ onClick }) {
  return (
    <button className="delete"
      onClick={onClick}>
      Delete
    </button>
  )
}

function CancelButton({ onClick }) {
  return (
    <button className="cancel"
      onClick={onClick}>
      Cancel
    </button>
  )
}

export default function ButtonGroup({ onClick }) {
  return (
    <div className="button-group">
      <DeleteButton
        onClick={onClick}
      />

      <CancelButton
        onClick={onClick}
      />
    </div>
  )
}
