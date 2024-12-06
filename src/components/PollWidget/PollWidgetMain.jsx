import PollOptions from "./PollOptions";

function PollWidgetMain({
  question,
  options,
  onClickOption,
  selectedOptionId,
  totalVotes,
}) {
  return (
    <div className="bg-base-100 p-12 poll-container flex flex-col items-center rounded-xl shadow-xl">
      <h1 className="text-lg text-gray-300 mb-3">{question}</h1>
      {options.map((option) => {
        return (
          <PollOptions
            key={option.id}
            option={option}
            onClickOption={(optionId) => onClickOption(optionId)}
            selectedOptionId={selectedOptionId}
            totalVotes={totalVotes}
          />
        );
      })}
    </div>
  );
}

export default PollWidgetMain;
