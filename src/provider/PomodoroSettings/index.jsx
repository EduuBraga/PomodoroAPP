import React, { createContext, useState } from "react";

export const PomodoroContext = createContext()

export function PomodoroProvider({children}){
  const [optionActive, setOptionActive] = useState('option0')

  function changeOptionON(event) {
    const options = document.querySelectorAll('.options')
    let optionClicked = event.target

    options.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionActive(`option${index}`)
      }
    })
  }

  return(
    <PomodoroContext.Provider value={{optionActive, changeOptionON}}>
      {children}
    </PomodoroContext.Provider>
  )
}