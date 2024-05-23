import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      {/* <FlashCards /> */}
      <Counter />
    </div>
  );
}

function Counter() {



  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1)
  const date = new Date();
  date.setDate(date.getDate() + count)

  function handleReset(){
    setCount(0)
    setStep(1)
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Steps:{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>

        <p>
          <span>
            {
              count === 0 ? 'Today is' :
                count > 0
                  ? `${count} days from today is`
                  : `${count} days ago was`

            }
          </span>
          <span>{date.toDateString()}</span>



        </p>

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}


      </div>





    </div>
  )

}










// // Flash cards
// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript"
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components"
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX"
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props"
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook"
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element"
//   }
// ];
// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(null);

//   function handleClick(id) {
//     setSelectedId(id !== selectedId ? id:null);
//   }

//   return (
//     <div className="flashcards">
//       {questions.map((question) => (
//         <div
//           key={question.id}
//           onClick={() => handleClick(question.id)}
//           className={question.id === selectedId ? "selected" : ""}
//         >
//           <p>
//             {question.id === selectedId ? question.answer : question.question}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
