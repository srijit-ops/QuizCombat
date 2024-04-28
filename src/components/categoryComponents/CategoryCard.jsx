import React, { useState, useRef } from "react";
import CustomModal from "../common/CustomModal";
import { useStore } from "../../store/store";
import { useQuizDetails } from "../../hooks/quiz.hooks";
import { serialize } from "../../utils/paramsAppenderFunc";
import { useNavigate, createSearchParams } from "react-router-dom";

const levels = ["easy", "medium", "hard"];
function CategoryCard({ name, number, id }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const difficultyHandler = (e) => {
    setDifficultyLevel(e.target.value);
  };

  const fetchQuiz = async () => {
    navigate({
      pathname: "/quiz",
      search: `?${createSearchParams({
        difficulty: difficultyLevel,
        category: id,
      })}`,
    });
  };

  return (
    <div
      className="w-full bg-[#151517] mb-8 px-5 py-8 rounded-lg relative cursor-pointer hover:scale-105 hover:bg-[#282828cc] transition-all border border-gray-600"
      onClick={onOpenModal}
    >
      <img src="/categories.png" className=" w-12 h-12 mb-8" />
      <p className="mb-6 text-[#546ef3] font-semibold">{number}</p>
      <p className="text-white tracking-wider font-semibold text-lg">{name}</p>
      <CustomModal
        open={open}
        onCloseModal={onCloseModal}
        name={name}
        title={"Select difficulty level"}
      >
        {levels.map((item, index) => {
          return (
            <div key={index} className="flex justify-between items-center mb-5">
              <p className="text-gray-700 dark:text-gray-300 sm:text-base text-sm">
                {item}
              </p>
              <input
                type="radio"
                name="level"
                value={item}
                onChange={difficultyHandler}
              />
            </div>
          );
        })}
        <div className="flex justify-center items-center mt-8">
          <button
            className="rounded-lg px-6 py-2 bg-[#546ef3] text-white"
            onClick={fetchQuiz}
          >
            Start
          </button>
        </div>
      </CustomModal>
    </div>
  );
}

export default CategoryCard;
