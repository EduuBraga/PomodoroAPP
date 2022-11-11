import React, { createContext, useEffect, useState } from "react";

import { themeRed, themeBlue, themePink } from "../../styles/themes";
import { font1, font2, font3 } from "../../styles/fonts";

export const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
  const [optionSectionON, setOptionSectionON] = useState('section0');
  const [optionColorON, setOptionColorON] = useState('option_color0');
  const [optionTextON, setOptionTextON] = useState('option_text0');
  const [autoStartCheck, setAutoStartCheck] = useState(false);
  const [theme, setTheme] = useState(themeRed);
  const [font, setFont] = useState(font1);
  const [priorTheme, setPriorTheme] = useState(null);
  const [priorFont, setPriorFont] = useState(null);

  const [minutesPomodoro, setMinutesPomodoro] = useState(25);
  const [minutesShort, setMinutesShort] = useState(5);
  const [minutesLong, setMinutesLong] = useState(15);

  const [minutesSections, setMinutesSections] = useState({ pomodoro: 25, short: 5, long: 15 })
  const [sectionsPomodoro, setSectionsPomodoro] = useState({ pomodoro: 4, short: 3, long: 1 })
  const [timerCurrent, setTimerCurrent] = useState(minutesSections.pomodoro);
  const [executing, setExecuting] = useState('pomodoro');
  const [keyPomodoro, setKeyPomodoro] = useState(1);
  const [beginTimer, setBeginTimer] = useState(false);
  const [finished, setFinished] = useState(false);


  //Salvando e buscando configurações no armazenamento local.
  
  useEffect(()=>{
    let configsSalved = JSON.parse(localStorage.getItem('configs'));

    if(configsSalved !== null){
      setMinutesPomodoro(configsSalved.minutesPomodoro);
      setMinutesShort(configsSalved.minutesShort);
      setMinutesLong(configsSalved.minutesLong);
      setMinutesSections(configsSalved.minutesSections);
      setFont(configsSalved.font);
      setTheme(configsSalved.theme);
      setOptionColorON(configsSalved.optionColorON);
      setOptionTextON(configsSalved.optionTextON);
    }
  }, [])

  useEffect(()=>{
    let salveConfig = {font, theme, minutesSections, minutesPomodoro, minutesShort, minutesLong, optionColorON, optionTextON};

    localStorage.setItem('configs', JSON.stringify(salveConfig));
  }, [font, theme, minutesSections, minutesPomodoro, minutesShort, minutesLong, optionColorON, optionTextON]);

  //Trocando fonte e tema.

  function toggleTheme(){
    switch (priorTheme) {
      case 'theme0':
        setTheme(themeRed);
        break;
      case 'theme1':
        setTheme(themeBlue);
        break;
      case 'theme2':
        setTheme(themePink);
        break;
      default:
        break;
    }
  }

  function toggleFonts(){
    switch (priorFont) {
      case 'font0':
        setFont(font1);
        break;
      case 'font1':
        setFont(font2);
        break;
      case 'font2':
        setFont(font3);
        break;
      default:
        break;
    }
  }


  // Manipulando as opções de cor, fonte e de sessão do pomodoro.

  function changeSectionON(event) {
    const options = document.querySelectorAll('.options');
    let optionClicked = event.target;

    options.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionSectionON(`section${index}`);
      }
    });
  }

  function changeOptionColorON(event) {
    const optionsColors = document.querySelectorAll('.options_colors');
    let optionClicked = event.target;

    optionsColors.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionColorON(`option_color${index}`);
        setPriorTheme(`theme${index}`)
      }
    });
  }

  function changeOptionTextON(event) {
    const optionsTexts = document.querySelectorAll('.options_text');
    let optionClicked = event.target;

    optionsTexts.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionTextON(`option_text${index}`);
        setPriorFont(`font${index}`)
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

  function toggleAutoStartCheck(){
    autoStartCheck ? setAutoStartCheck(false) : setAutoStartCheck(true);
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
    setTimerCurrent(minutesSections.pomodoro);
    setOptionSectionON('section0');
    setExecuting('pomodoro');
    autoStartCheck ? setBeginTimer(true) : setBeginTimer(false)
  }
  function changeSectionShort() {
    setKeyPomodoro(prevState => prevState + 1);
    setTimerCurrent(minutesSections.short);
    setOptionSectionON('section1');
    setExecuting('short');
    autoStartCheck ? setBeginTimer(true) : setBeginTimer(false)
  }
  function changeSectionLong() {
    setKeyPomodoro(prevState => prevState + 1);
    setTimerCurrent(minutesSections.long);
    setOptionSectionON('section2');
    setExecuting('long');
    autoStartCheck ? setBeginTimer(true) : setBeginTimer(false)
  }

  function toggleStatePomodoro() {
    let pomodoroTotal = sectionsPomodoro.pomodoro;
    let shortTotal = sectionsPomodoro.short;
    let longTotal = sectionsPomodoro.long;

    if (executing === 'pomodoro' && pomodoroTotal - 1 !== 0) {
      setSectionsPomodoro({ ...sectionsPomodoro, pomodoro: Number(`${sectionsPomodoro.pomodoro - 1}`) });
      changeSectionShort();
    }
    else if (executing === 'short' && shortTotal !== 0) {
      setSectionsPomodoro({ ...sectionsPomodoro, short: Number(`${sectionsPomodoro.short - 1}`) });
      changeSectionPomodoro();
    }
    else if (shortTotal === 0 && pomodoroTotal === 1 && longTotal === 1) {
      setSectionsPomodoro({ ...sectionsPomodoro, long: Number(`${parseInt(sectionsPomodoro.long - 1)}`) });
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
    setSectionsPomodoro({ ...sectionsPomodoro, pomodoro: 4, short: 3, long: 1 });
    setMinutesSections({...minutesSections, pomodoro: minutesPomodoro, short: minutesShort, long: minutesLong});
    toggleTheme()
    toggleFonts()
  }

  function RestartPomodoro(){
    setSectionsPomodoro({ ...sectionsPomodoro, pomodoro: 4, short: 3, long: 1 });
    setTimerCurrent(minutesSections.pomodoro);
    setKeyPomodoro(prevState => prevState + 1);
    setOptionSectionON('section0');
    setExecuting('pomodoro');
    setBeginTimer(true);
    setFinished(false)
  }

  useEffect(()=>{
    changeSectionPomodoro();
    setBeginTimer(false)
  }, [minutesSections]);

  return (
    <PomodoroContext.Provider value={{
      changeSectionON,
      optionSectionON,
      changeOptionColorON,
      optionColorON,
      changeOptionTextON,
      optionTextON,
      toggleStartTimer,
      beginTimer,
      minutesAndSeconds,
      toggleStatePomodoro,
      toggleSectionPomodoro,
      timerCurrent,
      keyPomodoro,
      changeValueInputs,
      minutesPomodoro,
      minutesShort,
      minutesLong,
      ApplyChangeInputs,
      finished,
      RestartPomodoro,
      theme,
      font,
      autoStartCheck,
      toggleAutoStartCheck
    }}>
      {children}
    </PomodoroContext.Provider>
  );
}