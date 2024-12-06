function PollOptions({ option, selectedOptionId, onClickOption, totalVotes }) {
  return (
    <div className="poll-item p-2">
      <div className="flex gap-2">
        <input
          type="radio"
          name="poll-options"
          className="radio"
          checked={option.id == selectedOptionId}
          onChange={() => onClickOption(option.id)}
        />
        <h1 className="text-lg text-gray-300 ">{option.label}</h1>
      </div>
      <progress
        className="progress w-56"
        value={Math.round((option.votes / totalVotes) * 100)}
        max="100"
      ></progress>
      <p className="text-sm text-gray-400 mt-1">
        {Math.round((option.votes / totalVotes) * 100)}% ({option.votes} Votes)
      </p>
    </div>
  );
}

export default PollOptions;
