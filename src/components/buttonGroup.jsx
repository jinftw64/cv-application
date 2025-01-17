function DeleteButton({ index, onClick }) {
  return (
    <button className="delete"
      onClick={onClick}
      index={index}>
      Delete
    </button>
  )
}

function CancelButton({ index, onClick }) {
  return (
    <button className="cancel"
      onClick={onClick}
      index={index}>
      Cancel
    </button>
  )
}

export default function ButtonGroup({ index, onClick }) {
  return (
    <div className="button-group">
      <DeleteButton
        index={index}
        onClick={onClick}
      />

      <CancelButton
        index={index}
        onClick={onClick}
      />
    </div>
  )
}
