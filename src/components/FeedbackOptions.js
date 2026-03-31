function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{ marginRight: 10, padding: "10px 20px" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;