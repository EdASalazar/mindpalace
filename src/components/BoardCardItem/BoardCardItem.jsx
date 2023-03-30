import { useEffect, useState } from "react";

import "./BoardCardItem.css"

export default function BoardCardItem({ sideOne, sideTwo, setI, setJ, setAnswer,
  i, j, answer, length 
}) {
  const[visible, setVisible] = useState(false);

  async function sleep(seconds) {
    return new Promise((resolve) =>setTimeout(resolve, seconds * 1000));
    }
    
    


  function handleChange(evt) {
    setAnswer({...answer, [evt.target.name]: evt.target.value})
  };

function handleSubmit(evt) {
    evt.preventDefault();
    console.log('submitted');
    async function checkWin() {
    if (answer.text === `${sideTwo}`) {
      setVisible(true)
      await sleep(1)
      setVisible(false)
      setI(i + 1);
      setJ(j + 1);
      setAnswer("");
    } else {
      alert('try again');
    }
  }
  checkWin();
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
      <div className="winCheckResponse">
        {visible && <h4>Correct!</h4>}
      </div>
      <div className="FlashCardSideTwo">
       {visible && <div>{sideTwo}</div>}
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