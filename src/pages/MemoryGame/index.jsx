import { motion } from "framer-motion";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useEffect, useState } from "react";
import GridInput from "../../components/MemoryGame/GridInput";
import GameStatus from "../../components/MemoryGame/GameStatus";
import MemoryGameGrid from "../../components/MemoryGame/MemoryGameGrid";
import Header from "../../components/Header";

export const MemoryGame = () => {
  const [grid, setGrid] = useState(5);
  const [gridSize, setGridSize] = useState(5);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const resetGame = () => {
    setCards([]);
    setMatched([]);
    setFlipped([]);
    setIsGameStarted(false);
    setIsGameCompleted(false);
  };

  const handleGridInput = (gridValue) => {
    setGrid(gridValue);
  };

  const handleStartGame = () => {
    setGridSize(grid);
    setIsGameStarted(true);
    const totalCards = grid * grid;
    const pairs = Math.floor(totalCards / 2);
    const numbers = Array(pairs)
      .fill(null)
      .map((_, index) => index + 1);

    const shuffledCards = [...numbers, ...numbers]
      .map((item) => ({
        id: crypto.randomUUID(),
        number: item,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
  };

  const handleCardClick = (id) => {
    if (flipped.includes(id) || flipped.length === 2) return;
    setFlipped((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (flipped.length < 2) return;

    const [firstId, secondId] = flipped;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    if (firstCard.number === secondCard.number) {
      setMatched((prev) => [...prev, firstId, secondId]);
    }

    setTimeout(() => setFlipped([]), 1000);
  }, [flipped, cards]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setIsGameCompleted(true);
    }
  }, [matched, cards]);

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12 h-screen">
        <Header title={"Memory Game"} />

        <div className="main flex flex-col items-center">
          <GameStatus
            isGameStarted={isGameStarted}
            isGameCompleted={isGameCompleted}
          />

          {!isGameStarted && (
            <GridInput
              grid={grid}
              handleStartGame={handleStartGame}
              handleGridInput={handleGridInput}
            />
          )}

          {isGameStarted && (
            <>
              <MemoryGameGrid
                gridSize={gridSize}
                cards={cards}
                flipped={flipped}
                matched={matched}
                onCardClick={handleCardClick}
              />
              <button
                onClick={resetGame}
                className="btn btn-outline btn-primary mt-4"
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
