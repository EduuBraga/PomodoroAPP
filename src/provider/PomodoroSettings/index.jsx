import React, { createContext, useState } from "react";

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
        setOptionActive(`option${index}`);
      }
    });
  }

  function changeOptionColorON(event) {
    const optionsColors = document.querySelectorAll('.options_colors');
    let optionClicked = event.target;

    optionsColors.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionColor(`option_color${index}`);
      }
    });
  }

  function changeOptionTextON(event) {
    const optionsTexts = document.querySelectorAll('.options_text');
    let optionClicked = event.target;

    optionsTexts.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionText(`option_text${index}`);
      }
    });
  }


  // Manipulando os inputs

  const [minutesPomodoro, setMinutesPomodoro] = useState(25);
  const [minutesShortBreak, setMinutesShortBreak] = useState(5);
  const [minutesLongBreak, setMinutesLongBreak] = useState(15);

  function changeValueInputPomodoro(event) {
    setMinutesPomodoro(Number(event.target.value));
  }

  function changeValueInputShortBreak(event) {
    setMinutesShortBreak(Number(event.target.value));
  }

  function changeValueInputLongBreak(event) {
    setMinutesLongBreak(Number(event.target.value));
  }


  // Manipulando o Pomodoro

  const [newTimer, setNewTimer] = useState({ pomodoro: 4, short: 3, long: 1 })
  const [executing, setExecuting] = useState('pomodoro');
  const [timer, setTimer] = useState(minutesPomodoro);
  const [keyPomodoro, setKeyPomodoro] = useState(1);
  const [beginTimer, setBeginTimer] = useState(false);

  function toggleStartTimer() {
    beginTimer ? setBeginTimer(false) : setBeginTimer(true);
  }

  function minutesAndSeconds(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  function toggleStatePomodoro() {
    let pomodoroTotal = newTimer.pomodoro;
    let shortTotal = newTimer.short;
    let longTotal = newTimer.long;

    if (executing === 'pomodoro' && pomodoroTotal - 1 !== 0) {
      setNewTimer({ ...newTimer, pomodoro: Number(`${newTimer.pomodoro - 1}`) });
      setExecuting('short');
      setBeginTimer(false);
      setKeyPomodoro(prevState => prevState + 1);
    }
    else if (executing === 'short' && shortTotal !== 0) {
      setNewTimer({ ...newTimer, short: Number(`${newTimer.short - 1}`) });
      setExecuting('pomodoro');
      setBeginTimer(false);
      setKeyPomodoro(prevState => prevState + 1);
    }
    else if (shortTotal === 0 && pomodoroTotal === 1 && longTotal === 1) {
      setNewTimer({ ...newTimer, long: Number(`${parseInt(newTimer.long - 1)}`) });
      setExecuting('long');
      setBeginTimer(false);
      setKeyPomodoro(prevState => prevState + 1);
    }
    else {
      setNewTimer({ ...newTimer, pomodoro: 4, short: 3, long: 1 });
      setExecuting('pomodoro');
      setBeginTimer(false);
      setKeyPomodoro(prevState => prevState + 1);
    }
  }

  function toggleSectionPomodoro(e) {
    let optionName = e.target.name;

    if (executing !== optionName) {
      switch (optionName) {
        case 'pomodoro':
          setKeyPomodoro(prevState => prevState + 1)
          setExecuting(optionName)
          setBeginTimer(false)
          setTimer(minutesPomodoro)
          setOptionActive('option0')
          break;
        case 'short':
          setExecuting(optionName)
          setBeginTimer(false)
          setTimer(minutesShortBreak)
          setKeyPomodoro(prevState => prevState + 1)
          setOptionActive('option1')
          break;
        case 'long':
          setExecuting(optionName)
          setBeginTimer(false)
          setTimer(minutesLongBreak)
          setKeyPomodoro(prevState => prevState + 1)
          setOptionActive('option2')
          break;
        default:
          break;
      }
    } else {
      return null
    }
  }

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
      minutesAndSeconds,
      newTimer,
      setNewTimer,
      toggleStatePomodoro,
      toggleSectionPomodoro,
      executing,
      setExecuting,
      timer,
      setTimer,
      keyPomodoro
    }}>
      {children}
    </PomodoroContext.Provider>
  );
}