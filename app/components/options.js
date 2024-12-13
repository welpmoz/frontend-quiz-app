function Option({
  index,
  text,
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
      <label className="quiz__option quiz__option--checkable" htmlFor={myId}>{text}</label>
    </>
  );
}

export default function Options({
  options
}) {
  return (
    <div className="quiz__options">
      {options.map((option, i) => <Option key={i} index={i} text={option} />)}
    </div>
  );
}