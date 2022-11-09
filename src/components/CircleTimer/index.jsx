import { useContext, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PomodoroContext } from '../../provider/PomodoroSettings';

import { Container } from './style';

export function CircleTimer() {
  const {
    toggleStartTimer,
    beginTimer,
    minutesAndSeconds,
    toggleStatePomodoro,
    timer,
    keyPomodoro
  } = useContext(PomodoroContext);

  const [finalTimePomodoro, setFinalTimePomodoro] = useState(null);

  return (
    <CountdownCircleTimer
      key={keyPomodoro}
      size={'339'}
      isPlaying={beginTimer}
      duration={timer * 60}
      colors={['#F87070']}
      strokeWidth={11}
      trailColor="#161932"
      onComplete={() => {
        toggleStatePomodoro()
      }}
      onUpdate={
        (remainingTime) => {
          let minutes = Math.floor(remainingTime / 60);
          let seconds = remainingTime - minutes * 60;

          let finalTime = minutesAndSeconds(minutes, '0', 2) + ':' + minutesAndSeconds(seconds, '0', 2);

          setFinalTimePomodoro(finalTime)
        }
      }
    >
      {() =>
        <Container>
          <h1>{finalTimePomodoro}</h1>
          {beginTimer ? (<h3 onClick={toggleStartTimer}>pause</h3>) : (<h3 onClick={toggleStartTimer}>start</h3>)}
        </Container>
      }
    </CountdownCircleTimer>
  );
};
