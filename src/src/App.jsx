import { useState } from 'react'
import './App.css'
import Card from "./Compones/Card"
import Hero from "./Compones/Hero"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    {count}
    <button onClick={() => setCount(count+1)}>+<button/>
   <Card
   image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_eAv9ncK228St03vOpp9k9rFKvec10ZUPVa2PBzZtiON3FYjv"
   name="tulips"
   city="Stamford"
   />
     <Card
    image="https://res.heraldm.com/content/image/2023/06/04/20230604000185_0.jpg"
    name="JK"
    city="South korea"
   />
     <Card
    image="https://thebiaslistcom.files.wordpress.com/2023/12/jimin-closer-than-this.jpg?w=640"
    name="JIMIN"
    city="South Korea"
 />
  </>
  )
}

export default App
