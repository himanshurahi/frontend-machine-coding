const MemoryGameGrid = ({ gridSize, cards, flipped, matched, onCardClick }) => {
  const isFlipped = (id) => flipped.includes(id);
  const isMatched = (id) => matched.includes(id);

  return (
    <div
      className="grid gap-2 p-4"
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => onCardClick(card.id)}
          className={`border ${
            isFlipped(card.id) || isMatched(card.id)
              ? "bg-primary text-black border-primary"
              : "text-primary"
          } rounded-md px-8 py-6 text-center cursor-pointer`}
        >
          {isFlipped(card.id) || isMatched(card.id) ? card.number : "x"}
        </div>
      ))}
    </div>
  );
};

export default MemoryGameGrid;
