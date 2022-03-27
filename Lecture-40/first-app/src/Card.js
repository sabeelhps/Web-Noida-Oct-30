import React from 'react'

const Card = () => {


    const randomNum = Math.floor(Math.random() * 10);

    // let element = '';
    // if (randomNum % 2 === 0) {
    //     element=<img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344"/>
    // }

  return (
      <div>
          <h1>My Fav Random Number is {randomNum}</h1>
          <h2>{randomNum % 2 === 0 ? 'Even' : 'Odd'}</h2>
          {/* {
              randomNum === 7 ? <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344"/> : ''
          } */}

          {/* {element} */}

          {randomNum===7 && <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344"/> }
      </div>
      
  )
}

export default Card;