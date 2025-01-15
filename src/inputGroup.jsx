function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  dataKey,
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
          data-key={dataKey}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )
      }
    </div>
  )
}

export default InputGroup;
