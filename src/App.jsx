import "./App.css";
// import propTypes from "prop-types";
import { Header} from "./components/Header";
import { MainBody } from "./components/MainBody";
import { Projects } from "./components/Projects";
import { MouseFollower } from "./components/MouseFollower";
import {KnowledgeContact} from "./components/KnowledgeContact";


// Funcion generadora de numeros aleatorios para posicionar el mouseFollower
// let a = Array(25).fill(null)

// function generateRandomPositions(){
//   const randomNumberX = Math.floor(Math.random() * window.innerWidth - 200)
//   const randomNumberY = Math.floor(Math.random() * window.innerHeight * 4.2)
//   return [randomNumberX, randomNumberY]
// }

let b = [
  [
      149,
      623
  ],
  [
      981,
      1610
  ],
  [
      1011,
      1529
  ],
  [
      1004,
      1964
  ],
  [
      396,
      2092
  ],
  [
      1030,
      180
  ],
  [
      917,
      1534
  ],
  [
      618,
      2305
  ],
  [
      780,
      1737
  ],
  [
      210,
      458
  ],
  [
      911,
      998
  ],
  [
      494,
      1357
  ],
  [
      879,
      225
  ],
  [
      666,
      155
  ],
  [
      270,
      337
  ],
  [
      62,
      1009
  ],
  [
      60,
      1638
  ],
  [
      -131,
      376
  ],
  [
      -137,
      2240
  ],
  [
      484,
      2089
  ],
  [
      885,
      87
  ],
  [
      715,
      1243
  ],
  [
      498,
      33
  ],
  [
      154,
      1780
  ],
  [
      135,
      1339
  ],
  [
      698,
      1150
  ],
  [
      842,
      708
  ],
  [
      -122,
      552
  ],
  [
      -90,
      1828
  ],
  [
      299,
      1691
  ],
  [
      412,
      880
  ],
  [
      909,
      2378
  ],
  [
      108,
      2365
  ],
  [
      438,
      2142
  ],
  [
      -136,
      560
  ],
  [
      512,
      102
  ],
  [
      448,
      1877
  ],
  [
      545,
      795
  ],
  [
      472,
      1482
  ],
  [
      340,
      1448
  ],
  [
      810,
      192
  ],
  [
      671,
      1946
  ],
  [
      485,
      1446
  ],
  [
      490,
      333
  ],
  [
      804,
      704
  ],
  [
      -121,
      1564
  ],
  [
      1014,
      762
  ],
  [
      898,
      584
  ],
  [
      962,
      2370
  ],
  [
      740,
      1075
  ]
]
function App() {
  return (
    <>
{/* 
{  a.map((e,i) => {
    const positionX = generateRandomPositions()[0]
    const positionY = generateRandomPositions()[1]
    b.push([positionX, positionY])
    console.log(b)
    return <MouseFollower key={i} newPositionX={positionX} newPositionY={positionY}/>  
  })
    } */}

    {
      b.slice(0, 18).map((e,i) => {  
    return <MouseFollower key={i} newPositionX={b[i][0]} newPositionY={b[i][1]}/>  
  })
    }
      <Header />
      <MainBody/>
      <Projects />
      <KnowledgeContact/>
    </>
  );
}

export default App;


// App.propTypes = {
//   children: propTypes.element
// }

// Como desarrollador frontend en constante crecimiento, oriundo de Venezuela 🌏, y actualmente estudiando ingeniería en informática, me apasiona investigar y aprender constantemente. Estoy en proceso de construir mi portafolio, utilizando mis conocimientos en React, JS, HTML y CSS para crear experiencias web atractivas y funcionales. Siempre me entusiasma enfrentar nuevos desafíos y utilizar mi creatividad para dar vida a ideas innovadoras. ¡Explora mi trabajo y descubre cómo puedo ayudarte a alcanzar tus metas digitales!