import { useContext, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PomodoroContext } from '../../provider/PomodoroSettings';

import { Container, Button } from './style';

export function CircleTimer() {
  const {
    toggleStartTimer,
    beginTimer,
    minutesAndSeconds,
    toggleStatePomodoro,
    timer,
    keyPomodoro,
    finished,
    RestartPomodoro,
    theme
  } = useContext(PomodoroContext);

  const [finalTimePomodoro, setFinalTimePomodoro] = useState(null);

  return (
    <CountdownCircleTimer
      key={keyPomodoro}
      size={'339'}
      isPlaying={beginTimer}
      duration={timer * 60}
      colors={[theme.color]}
      strokeWidth={11}
      trailColor="#161932"
      onComplete={() => {
        toggleStatePomodoro();
      }}
      onUpdate={
        (remainingTime) => {
          let minutes = Math.floor(remainingTime / 60);
          let seconds = remainingTime - minutes * 60;

          let finalTime = minutesAndSeconds(minutes, '0', 2) + ':' + minutesAndSeconds(seconds, '0', 2);

          setFinalTimePomodoro(finalTime);
        }
      }
    >
      {() =>
        <Container>

          <h1>{finalTimePomodoro}</h1>
          {finished ? (
            <Button onClick={RestartPomodoro}>Restart</Button>
          ) : (
            beginTimer ? (<Button onClick={toggleStartTimer}>pause</Button>) : (<Button onClick={toggleStartTimer}>start</Button>)
          )}

        </Container>
      }
    </CountdownCircleTimer>
  );
}
