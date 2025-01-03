function Option({
  index,
  text,
  handleKeyDown,
}) {
  const myId = `option-${index}`;

  return (
    <>
      <input
        className="quiz__option-input"
        id={myId}
        value={text}
        name="answer"
        type="radio"
      />
      <label onKeyDown={handleKeyDown} tabIndex={0} className="quiz__option quiz__option--checkable" htmlFor={myId}>{text}</label>
    </>
  );
}

export default function Options({
  options
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.currentTarget.click();
    }
  }

  return (
    <div className="quiz__options">
      {options.map((option, i) => <Option key={i} index={i} text={option} handleKeyDown={handleKeyDown} />)}
    </div>
  );
}