function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  dataKey,
  isActive,
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
          isActive={isActive}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
          isActive={isActive}
        />
      )
      }
    </div>
  )
}

export default InputGroup;
