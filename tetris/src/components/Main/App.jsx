import React, { useState } from 'react'
import MyText from '../UI/text/text'
import MyTitle from '../UI/title/text'
import BlockVert from '../UI/blockVert/block'
import BlockHor from '../UI/blockHor/block'
import MyBut from '../UI/button/button'
import './App.css'
import MyField from '../Game/field'
import BlockImage from '../UI/blockImage/blockImage'
import MyTimer from '../Game/timer'


function App() {
  const [draw, setDraw] = useState(false)

  return (
    <div className="App">
      <BlockVert>
        <MyTitle>Tetris</MyTitle>
        {draw ? 
          <MyField id="field" event={draw} eventStart={setDraw} width={300} height={600}/> :
          <BlockImage/>
        }
        <BlockHor>
          <MyTitle>Score</MyTitle>
          <MyText id="scoreCount">0</MyText>
          <MyTitle>Line</MyTitle>
          <MyText id="lineCount">0</MyText>
          <MyBut id="start" onClick={() => {setDraw(true)}}>Play</MyBut>
          <MyTimer id="timer" event={draw}/>
        </BlockHor>
      </BlockVert>
    </div>
  )
}

export default App
