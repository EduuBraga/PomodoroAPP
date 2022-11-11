import { useContext, useEffect, useRef, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PomodoroContext } from '../../provider/PomodoroSettings';

import complete_task from '../../assets/audio/complete_task.mp3'

import { Container, Button } from './style';

export function CircleTimer() {
  const {
    toggleStartTimer,
    beginTimer,
    minutesAndSeconds,
    toggleStatePomodoro,
    timerCurrent,
    keyPomodoro,
    finished,
    RestartPomodoro,
    theme
  } = useContext(PomodoroContext);

  const [finalTimePomodoro, setFinalTimePomodoro] = useState(null);
  const [screenMobile, setScreenMobile] = useState('339');
  const audioCompleteTask = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;

    if (width <= 425) {
      setScreenMobile('248');
    }
  }, []);

  function changeTitle(){
    beginTimer ? window.document.title = `${finalTimePomodoro} Tempo restante` : window.document.title = "Pomodoro APP";
  }

  return (
    <CountdownCircleTimer
      key={keyPomodoro}
      size={screenMobile}
      isPlaying={beginTimer}
      duration={timerCurrent * 60}
      colors={[theme.color]}
      strokeWidth={11}
      trailColor="#161932"
      onComplete={() => {
        audioCompleteTask.current.play()

        setTimeout(() => {
          toggleStatePomodoro();
        }, 1500);
      }}
      onUpdate={
        (remainingTime) => {
          let minutes = Math.floor(remainingTime / 60);
          let seconds = remainingTime - minutes * 60;

          let finalTime = minutesAndSeconds(minutes, '0', 2) + ':' + minutesAndSeconds(seconds, '0', 2);

          changeTitle()
          setFinalTimePomodoro(finalTime);
        }
      }
    >
      {() =>
        <Container>
          <h1>{finalTimePomodoro}</h1>

          {finished ? (
            <Button onClick={RestartPomodoro}>recomeçar</Button>
          ) : (
            beginTimer ? (<Button onClick={toggleStartTimer}>pausar</Button>) : (<Button onClick={toggleStartTimer}>começar</Button>)
          )}

          <audio preload="auto" ref={audioCompleteTask} src={complete_task}></audio>
        </Container>
      }
    </CountdownCircleTimer>
  );
}
