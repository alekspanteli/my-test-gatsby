// Step 1: Import React
import * as React from "react"
import Greeting from "../components/greeting"
// Rendering the <Greeting> component
const SayHello = () => {
  return (
    <div>
      <Greeting name="Megan" />
      <Greeting name="Obinna" />
      <Greeting name="Generosa" />
    </div>
  )
}

export const Head = () => <title>Say Hello</title>

export default SayHello