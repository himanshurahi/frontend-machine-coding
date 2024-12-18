import { motion } from "framer-motion";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useEffect, useState } from "react";
import { pollQuestions } from "../../utils/PollWidget/mockData";
import PollWidgetMain from "../../components/PollWidget/PollWidgetMain";
import Header from "../../components/Header";
export const PollWidget = () => {
  const [pollData, setPollData] = useState(null);

  const [totalVotes, setTotalVotes] = useState(0);

  const [selectedOptionId, setSelectedOptionId] = useState(
    localStorage.getItem("option")
  );

  const handleChangeVote = (optionId) => {
    const updatedOptions = pollData.options.map((option) => {
      if (option.id == optionId) {
        option.votes++;
      } else if (option.id == selectedOptionId) {
        option.votes--;
      }
      return option;
    });
    localStorage.setItem("option", optionId);
    setSelectedOptionId(optionId);
    setPollData((prevPollData) => {
      return {
        ...prevPollData,
        options: updatedOptions,
      };
    });
  };

  useEffect(() => {
    const intialQuestion =
      pollQuestions[Math.floor(Math.random() * pollQuestions.length)];
    intialQuestion.options.map((option) => {
      if (option.id == selectedOptionId) {
        option.votes++;
      }
      return option;
    });
    setPollData(intialQuestion);
  }, []);

  useEffect(() => {
    if (pollData) {
      setTotalVotes(
        pollData.options.reduce((acc, option) => {
          return acc + option.votes;
        }, 0)
      );
    }
  }, [pollData]);

  if (!pollData) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12 h-screen">
        <Header title={"Poll Widget"} />
        <div className="conatiner bg-base-300 h-3/4 flex justify-center items-center">
          <PollWidgetMain
            question={pollData.question}
            options={pollData.options}
            selectedOptionId={selectedOptionId}
            totalVotes={totalVotes}
            onClickOption={(optionId) => handleChangeVote(optionId)}
          />
        </div>
      </div>
    </div>
  );
};
