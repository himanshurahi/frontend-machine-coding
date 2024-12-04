import { motion } from "framer-motion";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useEffect, useState } from "react";
import { ArrowBigDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const MemoryGame = () => {
  const [grid, setGrid] = useState(5);
  const [gridSize, setGridSize] = useState(5);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isStarted, setIsStarted] = useState(false);

  const handleStartGame = () => {
    setGridSize(grid);
    setMatched([]);
    const totalCards = grid * grid;
    const pairs = Math.floor(totalCards / 2);
    const numbers = Array(pairs)
      .fill(null)
      .map((_, index) => index + 1);

    const cards = [...numbers, ...numbers]
      .map((item) => {
        return {
          id: crypto.randomUUID(),
          number: item,
        };
      })
      .sort((a, b) => 0.5 - Math.random());

    // if (totalCards % 2 == 1) {
    //   cards.push(0);
    // }

    setCards(cards);
    setIsStarted(true);
  };

  useEffect(() => {
    if (flipped.length < 2) return;
    const [firstId, secondId] = flipped;

    const firstCard = cards.find((card) => card.id == firstId);
    const secondCard = cards.find((card) => card.id == secondId);

    if (firstCard.number == secondCard.number) {
      setMatched((prev) => [...prev, firstCard.id, secondCard.id]);
      setFlipped([]);
    } else {
      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  }, [flipped]);

  const handleCardClick = (id) => {
    if (flipped.includes(id) || flipped.length == 2 || flipped.length == 2)
      return;

    setFlipped((prev) => [...prev, id]);
  };

  const isFlipped = (id) => {
    return flipped.includes(id);
  };

  const isMatched = (id) => {
    return matched.includes(id);
  };

  const isGameEnded = () => {
    return matched.length > 0 && matched.length === cards.length;
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12 h-screen">
        <div className="flex items-center gap-4 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Memory Game
          </motion.h1>
        </div>
        <div className="main flex flex-col items-center">
          {isGameEnded() && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
              className="flex items-center justify-center flex-col"
            >
              <motion.h1
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold text-green-500"
              >
                🎉 Winner! 🎉
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl text-gray-300 mt-2 mb-6"
              >
                Congratulations, you matched all cards!
              </motion.p>
            </motion.div>
          )}

          <div className="text-xl text-gray-300 mt-2 mb-6">
            Enter Size And Click Start To Continue
          </div>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Grid"
              value={grid}
              onChange={(e) => setGrid(e.target.value)}
            />
            <button
              className="btn btn-outline btn-primary"
              onClick={handleStartGame}
            >
              Start
            </button>
          </div>

          <div
            className="grid gap-2 p-4"
            style={{
              gridTemplateColumns: `repeat(${parseInt(gridSize)}, 1fr)`,
            }}
          >
            {cards.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  aria-label={`Card ${item.number}`}
                  tabIndex={0}
                  className={`border ${
                    isFlipped(item.id) || isMatched(item.id)
                      ? "bg-primary text-black border-primary"
                      : "text-primary"
                  } rounded-md text-primary px-8 py-6 text-center cursor-pointer`}
                >
                  {isFlipped(item.id) || isMatched(item.id) ? item.number : "x"}
                  {/* {item.number} */}
                </div>
              );
            })}
          </div>

          {
            <div>
              <button className="btn btn-outline btn-primary">Reset</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
