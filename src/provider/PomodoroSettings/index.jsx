import React, { createContext, useState } from "react";

export const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
  // Manipulando o Pomodoro

  const [newTimer, setNewTimer] = useState({ pomodoro: 4, short: 3, long: 1, active: 'pomodoro' })
  const [pomodoro, setPomodoro] = useState(0)
  const [executing, setExecuting] = useState({})
  const [beginTimer, setBeginTimer] = useState(false)

  function toggleStartTimer() {
    beginTimer ? setBeginTimer(false) : setBeginTimer(true)
  }

  // Manipulando as opções de cor, fonte e de parte do pomodoro

  const [optionActive, setOptionActive] = useState('option0');
  const [optionColor, setOptionColor] = useState('option_color0');
  const [optionText, setOptionText] = useState('option_text0');

  function changeOptionON(event) {
    const options = document.querySelectorAll('.options');
    let optionClicked = event.target;

    options.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionActive(`option${index}`)
      }
    });
  };

  function changeOptionColorON(event) {
    const optionsColors = document.querySelectorAll('.options_colors');
    let optionClicked = event.target;

    optionsColors.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionColor(`option_color${index}`)
      }
    });
  };

  function changeOptionTextON(event) {
    const optionsTexts = document.querySelectorAll('.options_text');
    let optionClicked = event.target;

    optionsTexts.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionText(`option_text${index}`)
      }
    });
  };

  // Manipulando os inputs

  const [minutesPomodoro, setMinutesPomodoro] = useState(25);
  const [minutesShortBreak, setMinutesShortBreak] = useState(5);
  const [minutesLongBreak, setMinutesLongBreak] = useState(15);

  function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  function changeValueInputPomodoro(event) {
    let valueSecondsInput = Number(event.target.value);

    setMinutesPomodoro(valueSecondsInput);
  };


  function changeValueInputShortBreak(event) {
    setMinutesShortBreak(Number(event.target.value));
  };

  function changeValueInputLongBreak(event) {
    setMinutesLongBreak(Number(event.target.value));
  };

  return (
    <PomodoroContext.Provider value={{
      changeOptionON,
      optionActive,
      changeOptionColorON,
      optionColor,
      changeOptionTextON,
      optionText,
      minutesPomodoro,
      minutesShortBreak,
      minutesLongBreak,
      changeValueInputPomodoro,
      changeValueInputShortBreak,
      changeValueInputLongBreak,
      toggleStartTimer,
      beginTimer,
      str_pad_left
    }}>
      {children}
    </PomodoroContext.Provider>
  );
};