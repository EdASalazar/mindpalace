import { useEffect } from "react";

import "./BoardCardItem.css"

export default function BoardCardItem({ 
  sideOne, sideTwo, setI, setJ, setAnswer,
  i, j, answer, length 
}) {
  

  function handleChange(evt) {
    setAnswer({...answer, [evt.target.name]: evt.target.value})
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('submitted');
    console.log('answer', answer)
    console.log('?', sideTwo)
    if (answer.text === `${sideTwo}`) {
      alert('correct')
      setI(i + 1);
      setJ(j + 1);
      setAnswer("");
    } else {
      alert('try again');
    }
  }

  useEffect(function() {
    if(j === length) {
      setI(0);
      setJ(1);
    }
  }, [j]);


  


  return(
    <div className="FlashCard">
      <div className="FlashCardSideOne">
        {sideOne}
      </div>
      <div className="FlashCardSideTwo">
        {sideTwo}
      </div>
      <div className="AnswerForm">
        <form action="">
          <input type="text" name="text" value={answer.text} onChange={handleChange}/>
          <button type='submit' onClick={handleSubmit}>Submit Answer</button>
        </form>
      </div>
    </div>
  )
}