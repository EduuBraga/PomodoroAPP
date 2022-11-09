import React, { createContext, useEffect, useState } from "react";

export const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
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
    setMinutesPomodoro(Number(event.target.value));
  };

  function changeValueInputShortBreak(event) {
    setMinutesShortBreak(Number(event.target.value));
  };

  function changeValueInputLongBreak(event) {
    setMinutesLongBreak(Number(event.target.value));
  };


  // Manipulando o Pomodoro

  const [newTimer, setNewTimer] = useState({ pomodoro: 4, short: 3, long: 1, active: 'pomodoro' })
  const [beginTimer, setBeginTimer] = useState(false)

  function toggleStartTimer() {
    beginTimer ? setBeginTimer(false) : setBeginTimer(true)
  }

  function toggleStatePomodoro() {
    let active = newTimer.active
    let pomodoroTotal = newTimer.pomodoro
    let shortTotal = newTimer.short
    let longTotal = newTimer.long

    if (active === 'pomodoro' && pomodoroTotal - 1 !== 0) {
      setNewTimer({ ...newTimer, active: 'short', pomodoro: Number(`${newTimer.pomodoro - 1}`) })
    }
    else if (active === 'short' && shortTotal !== 0) {
      setNewTimer({ ...newTimer, active: 'pomodoro', short: Number(`${newTimer.short - 1}`) })
    }
    else if (shortTotal === 0 && pomodoroTotal === 1 && longTotal === 1) {
      setNewTimer({ ...newTimer, active: 'long', long: Number(`${parseInt(newTimer.long - 1)}`) })
    }
    else {
      setNewTimer({ ...newTimer, pomodoro: 4, short: 3, long: 1, active: 'pomodoro' })
    }
  };

  // useEffect(() => {
  //   console.log(newTimer)
  // }, [newTimer])

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
      str_pad_left,
      toggleStatePomodoro
    }}>
      {children}
    </PomodoroContext.Provider>
  );
};