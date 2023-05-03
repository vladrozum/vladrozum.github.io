import React from "react";
import "./index.css";
import data from "./data";

export default function Main() {
  const [dataArray, setData] = React.useState(data);
  const [quest, setQuest] = React.useState(generateAllQuestions());
  const [set, setRight] = React.useState(false);
  const [number, setNumber] = React.useState(0);
  const [game, setGame] = React.useState(false);

  function random() {
    const categories = ["life", "business"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const randomNumber2 = Math.floor(Math.random() * dataArray.length);
    const chooseCategory = categories[randomNumber];
    const choose = dataArray[randomNumber2].answers[chooseCategory];
    return choose;
  }

  function chooseRandomAnswer() {
    const arrAnswer = [];
    const categories = ["life", "business", "YesNot"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const randomNumber2 = Math.floor(Math.random() * dataArray.length);
    const choose = dataArray[randomNumber2].answers[categories[randomNumber]];
    const url = dataArray[randomNumber2].img;
    arrAnswer.push(url, choose);
    return arrAnswer;
  }

  function generateAllQuestions() {
    const a = chooseRandomAnswer();

    const newArray = { url: a[0], answerOptions: [] };
    for (let i = 0; i < 3; i++) {
      const newQuestion = {
        value: random(),
        isCorrect: false,
        id: i + 1,
      };
      newArray.answerOptions.push(newQuestion);
    }

    const rightAnswer = {
      value: a[1],
      isCorrect: true,
      id: 4,
    };
    newArray.answerOptions.push(rightAnswer);

    const finalArr = [newArray].map(val => {
      console.log(val.answerOptions[0].value)

      })
    
    return [newArray];
  }

  function generateQuestions() {
    setRight(false);
    setQuest(generateAllQuestions());
  }

  function checkAnswer(isCorrect, id) {
    if (isCorrect && id === 4) {
      setRight(true);
      setNumber((prevNumber) => prevNumber + 1);
    } else if (!isCorrect) {
      setGame(true);
    }
     }

  function refresh() {
    setRight(false);
    setGame(false);
    setNumber(0);
  }


  const styles = {
    backgroundColor: set ? "green" : "",
  };



  return (
    <div>
      {game ? (
        <div className="container">
          <div>
            <p className={`whats-true}`}>Ви програли</p>
            <div className="button-next">
              <button onClick={refresh} className="but">
                Почати знову
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="container2">
            <p className="whats-true">Що з цього правда?</p>
            <p className="number">{number}</p>
          </div>
          <img src={quest[0].url} alt="" className="images"></img>
          <div className="button-next">
            {set && (
              <button onClick={generateQuestions} className="but">
                Наступне питання
              </button>
            )}
          </div>
          <div className="question-container">
            {quest[0].answerOptions.sort(()=>.5-Math.random()).map((question) => (
              <button
                className="button"
                style={styles}
                onClick={() => checkAnswer(question.isCorrect, question.id)}
              >
                {question.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
