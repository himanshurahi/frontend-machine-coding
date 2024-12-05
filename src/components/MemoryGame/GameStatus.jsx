import { motion } from "framer-motion";

const GameStatus = ({ isGameStarted, isGameCompleted }) => {
  if (isGameCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 0.8, type: "spring", stiffness: 100 },
        }}
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
    );
  }

  if (isGameStarted) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="text-xl text-gray-300 mt-2 mb-6"
      >
        Game Started. Best Of Luck 👍
      </motion.p>
    );
  }

  return null;
};

export default GameStatus;
