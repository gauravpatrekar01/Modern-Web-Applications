const InputComponent = (props) => {
  return (
    <input
      type={props.inputType}
      placeholder={props.placeholder}
      style={props.style}
    />
  )
}

export default InputComponent