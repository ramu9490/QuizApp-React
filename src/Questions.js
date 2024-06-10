import { useState } from "react";

const questionsData = [
  {
    title: "What is the main use of Node.js?",
    options: {
      A: "Front end development",
      B: "Back end development",
      C: "Mobile app development",
      D: "Graphic design"
    },
    answer: "B"
  },
  {
    title: "Which of the following is a CSS framework?",
    options: {
      A: "Laravel",
      B: "Django",
      C: "Bootstrap",
      D: "React"
    },
    answer: "C"
  },
  {
    title: "What is the purpose of Git?",
    options: {
      A: "Version control",
      B: "Project management",
      C: "Code compilation",
      D: "UI design"
    },
    answer: "A"
  },
  {
    title: "What does SQL stand for?",
    options: {
      A: "Simple Query Language",
      B: "Structured Query Language",
      C: "Sequential Query Language",
      D: "Server Query Language"
    },
    answer: "B"
  },
  {
    title: "Which language is primarily used for Android app development?",
    options: {
      A: "Swift",
      B: "Kotlin",
      C: "JavaScript",
      D: "Ruby"
    },
    answer: "B"
  },
  {
    title: "What is the main use of Docker?",
    options: {
      A: "Continuous Integration",
      B: "Virtualization",
      C: "Containerization",
      D: "Code debugging"
    },
    answer: "C"
  },
  {
    title: "What does HTML stand for?",
    options: {
      A: "HyperText Markup Language",
      B: "HighText Machine Language",
      C: "HyperText Markdown Language",
      D: "HighText Markup Language"
    },
    answer: "A"
  },
  {
    title: "What is the primary function of Redux in a React application?",
    options: {
      A: "Styling components",
      B: "Managing state",
      C: "Routing",
      D: "Fetching data"
    },
    answer: "B"
  },
  {
    title: "Which of the following is a Python web framework?",
    options: {
      A: "Express",
      B: "Flask",
      C: "Spring",
      D: "Rails"
    },
    answer: "B"
  },
  {
    title: "What is the main purpose of Jenkins in software development?",
    options: {
      A: "Code editing",
      B: "Continuous integration/continuous deployment (CI/CD)",
      C: "Database management",
      D: "UI design"
    },
    answer: "B"
  }
];

function Questions({ setData, score, setScore }) {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const gotoNextQuestion = () => {
    if (selectedOption === questionsData[index].answer) {
      setScore(score + 1);
    }

    if (index < questionsData.length - 1) {
      setIndex(index + 1);
      setSelectedOption("");
    } else {
      setData("rest");
    }
  };

  return (
    <div>
      <h2>{questionsData[index].title}</h2>
      {Object.keys(questionsData[index].options).map((key) => (
        <button key={key} onClick={() => handleOptionClick(key)}>
          {questionsData[index].options[key]}
        </button>
      ))}
      <br />
      <button onClick={gotoNextQuestion}>Next</button>
    </div>
  );
}

export default Questions;
