import { useEffect, useState } from "react";
import "./BoardCardItem.css"

export default function BoardCardItem({ sideOne, sideTwo, setI, setJ, setAnswer,
  i, j, answer, length,  
}) {
  const[visible, setVisible] = useState(false);
  const[wrong, setWrong] = useState(false);
  const[correct, setCorrect] = useState(false)

  async function sleep(seconds) {
    return new Promise((resolve) =>setTimeout(resolve, seconds * 1000));
    }
    
  function handleChange(evt) {
    setAnswer({...answer, [evt.target.name]: evt.target.value})
  };

async function handleClickSkip(evt) {
  evt.preventDefault();
  setVisible(true)
  setCorrect(false)
  setWrong(true)
  await sleep(1.5)
  setVisible(false)
  setWrong(false)
  setI(i + 1);
  setJ(j + 1);
  setAnswer("");
}

function handleSubmit(evt) {
    evt.preventDefault();
    console.log('submitted');
    async function checkWin() {
    if (answer.text.toLowerCase === sideTwo.toLowerCase) {
      setVisible(true)
      setCorrect(true)
      await sleep(1.5)
      setVisible(false)
      setI(i + 1);
      setJ(j + 1);
      setAnswer("");
     
    } else {
      setWrong(true)
      await sleep(1)
      setWrong(false)
    }
  }
  checkWin();
}

  useEffect(function() {
    if(j === length) {
      setI(0);
      setJ(1);
    }
  }, [j, i, length]);

  return(
    <div className="FlashCards">
      <div className="FlashCardSideOne">
        {sideOne}
      </div>
      <div className="winCheckResponse">
        {correct && <h4>Correct!</h4>}
        {wrong && <h4>Wrong!</h4>}
      </div>
      <div className="FlashCardSideTwo">
       {visible && <div>{sideTwo}</div>}

      </div>
      <div className="AnswerForm">
        <form>
          <input type="text" name="text" autofocus="autofocus" onChange={handleChange}/>
          <button type='submit' onClick={handleSubmit}>Submit Answer</button>
        </form>
        <button type="submit" onClick={handleClickSkip}>Skip</button>
      </div>
    </div>
  )
}