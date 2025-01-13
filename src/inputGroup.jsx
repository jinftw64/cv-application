function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{labelText}</label>

      {type === 'text' ? (
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )
      }
    </div>
  )
}

export default InputGroup;
