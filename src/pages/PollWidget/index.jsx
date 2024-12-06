import { motion } from "framer-motion";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useEffect, useState } from "react";
export const PollWidget = () => {
  const [pollData, setPollData] = useState([
    { id: 1, label: "Backend", votes: 20 },
    { id: 2, label: "Frontend", votes: 20 },
    { id: 3, label: "Full Stack", votes: 20 },
  ]);

  const [totalVotes, setTotalVotes] = useState(0);

  const [selectedOptionId, setSelectedOptionId] = useState(
    localStorage.getItem("poll")
  );

  const handleChangeVote = (pollId) => {
    const updatedPollData = pollData.map((poll) => {
      if (poll.id == pollId) {
        poll.votes++;
      } else if (poll.id == selectedOptionId) {
        poll.votes--;
      }
      return poll;
    });

    localStorage.setItem("poll", pollId);
    setSelectedOptionId(pollId);
    setPollData(updatedPollData);
  };

  useEffect(() => {
    const updatedPollData = pollData.map((poll) => {
      if (poll.id == selectedOptionId) {
        poll.votes++;
      }
      return poll;
    });

    setPollData(updatedPollData);

    setTotalVotes(
      pollData.reduce((acc, poll) => {
        return acc + poll.votes;
      }, 0)
    );
  }, []);

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
            Poll Widget
          </motion.h1>
        </div>
        <div className="conatiner bg-base-300 h-3/4 flex justify-center items-center">
          <div className="bg-base-100 p-12 poll-container flex flex-col items-center">
            <h1 className="text-lg text-gray-300 mb-3">
              What's the tech stack you're working with these days? 🌐💻
            </h1>
            {pollData.map((poll) => {
              return (
                <div className="poll-item p-2" key={poll.id}>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="poll-options"
                      class="radio"
                      checked={poll.id == selectedOptionId}
                      onChange={() => handleChangeVote(poll.id)}
                    />
                    <h1 className="text-lg text-gray-300 ">{poll.label}</h1>
                  </div>
                  <progress
                    class="progress w-56"
                    value={Math.round((poll.votes / totalVotes) * 100)}
                    max="100"
                  ></progress>
                  <p className="text-sm text-gray-400 mt-1">
                    {Math.round((poll.votes / totalVotes) * 100)}% ({poll.votes}{" "}
                    Votes)
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
