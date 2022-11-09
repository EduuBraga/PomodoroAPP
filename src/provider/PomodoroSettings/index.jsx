import React, { createContext, useState } from "react";

export const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
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

  const [minutesPomodoro, setMinutesPomodoro] = useState(25);
  const [minutesShortBreak, setMinutesShortBreak] = useState(5);
  const [minutesLongBreak, setMinutesLongBreak] = useState(15);

  function changeValueInputPomodoro(event) {
    setMinutesPomodoro(Number(event.target.value));
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
      changeValueInputLongBreak
    }}>
      {children}
    </PomodoroContext.Provider>
  );
};