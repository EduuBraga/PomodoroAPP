import React, { createContext, useEffect, useState } from "react";

export const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
  const [optionActive, setOptionActive] = useState('option0');
  const [optionColor, setOptionColor] = useState('option_color0');
  const [optionText, setOptionText] = useState('option_text0');

  const [minutesPomodoro, setMinutesPomodoro] = useState(25);
  const [minutesShort, setMinutesShort] = useState(5);
  const [minutesLong, setMinutesLong] = useState(15);

  const [minutesSections, setMinutesSections] = useState({ pomodoro: 25, short: 5, long: 15 })
  const [newTimer, setNewTimer] = useState({ pomodoro: 4, short: 3, long: 1 })
  const [timer, setTimer] = useState(minutesSections.pomodoro);
  const [executing, setExecuting] = useState('pomodoro');
  const [keyPomodoro, setKeyPomodoro] = useState(1);
  const [beginTimer, setBeginTimer] = useState(false);
  const [finished, setFinished] = useState(false);


  // Manipulando as opções de cor, fonte e de sessão do pomodoro.

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

  function changeValueInputs(input) {
    const { name, value } = input.target;

    switch (name) {
      case 'pomodoro':
        setMinutesPomodoro(parseInt(value));
        break;
      case 'short':
        setMinutesShort(parseInt(value));
        break;
      case 'long':
        setMinutesLong(parseInt(value));
        break;
      default:
        break;
    }
  }

  // Manipulando o Pomodoro

  function toggleStartTimer() {
    beginTimer ? setBeginTimer(false) : setBeginTimer(true);
  }

  function minutesAndSeconds(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  function changeSectionPomodoro() {
    setKeyPomodoro(prevState => prevState + 1);
    setTimer(minutesSections.pomodoro);
    setOptionActive('option0');
    setExecuting('pomodoro');
    setBeginTimer(false);
  }
  function changeSectionShort() {
    setKeyPomodoro(prevState => prevState + 1);
    setTimer(minutesSections.short);
    setOptionActive('option1');
    setExecuting('short');
    setBeginTimer(false);
  }
  function changeSectionLong() {
    setKeyPomodoro(prevState => prevState + 1);
    setTimer(minutesSections.long);
    setOptionActive('option2');
    setExecuting('long');
    setBeginTimer(false);
  }

  function toggleStatePomodoro() {
    let pomodoroTotal = newTimer.pomodoro;
    let shortTotal = newTimer.short;
    let longTotal = newTimer.long;

    if (executing === 'pomodoro' && pomodoroTotal - 1 !== 0) {
      setNewTimer({ ...newTimer, pomodoro: Number(`${newTimer.pomodoro - 1}`) });
      changeSectionShort();
    }
    else if (executing === 'short' && shortTotal !== 0) {
      setNewTimer({ ...newTimer, short: Number(`${newTimer.short - 1}`) });
      changeSectionPomodoro();
    }
    else if (shortTotal === 0 && pomodoroTotal === 1 && longTotal === 1) {
      setNewTimer({ ...newTimer, long: Number(`${parseInt(newTimer.long - 1)}`) });
      changeSectionLong();
    }
    else {
      setFinished(true);
    }
  }

  function toggleSectionPomodoro(e) {
    let optionName = e.target.name;

    if (executing !== optionName) {
      switch (optionName) {
        case 'pomodoro':
          changeSectionPomodoro()
          break;
        case 'short':
          changeSectionShort()
          break;
        case 'long':
          changeSectionLong()
          break;
        default:
          break;
      }
    } else {
      return null;
    }
  }

  function ApplyChangeInputs(){
    setMinutesSections({...minutesSections, pomodoro: minutesPomodoro, short: minutesShort, long: minutesLong});
  }

  function RestartPomodoro(){
    setNewTimer({ ...newTimer, pomodoro: 4, short: 3, long: 1 });
    setTimer(minutesSections.pomodoro);
    setKeyPomodoro(prevState => prevState + 1);
    setOptionActive('option0');
    setExecuting('pomodoro');
    setBeginTimer(true);
  }

  useEffect(()=>{
    changeSectionPomodoro();
  }, [minutesSections]);

  return (
    <PomodoroContext.Provider value={{
      changeOptionON,
      optionActive,
      changeOptionColorON,
      optionColor,
      changeOptionTextON,
      optionText,
      toggleStartTimer,
      beginTimer,
      minutesAndSeconds,
      toggleStatePomodoro,
      toggleSectionPomodoro,
      timer,
      keyPomodoro,
      changeValueInputs,
      minutesPomodoro,
      minutesShort,
      minutesLong,
      ApplyChangeInputs,
      finished,
      RestartPomodoro
    }}>
      {children}
    </PomodoroContext.Provider>
  );
}