import { useContext, useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PomodoroContext } from '../../provider/PomodoroSettings';

import { Container } from './style';

export function CircleTimer({ timer = 1 }) {
  const { toggleStartTimer, beginTimer, str_pad_left, toggleStatePomodoro } = useContext(PomodoroContext)

  const [finalTimePomodoro, setFinalTimePomodoro] = useState('25:00')
  const [finalTimeShort, setFinalTimeShort] = useState('05:00')
  const [finalTimeLong, setFinalTimeLong] = useState('15:00')

  return (
    <CountdownCircleTimer
      size={'339'}
      isPlaying={beginTimer}
      duration={timer * 60}
      colors={['#F87070']}
      strokeWidth={14}
      trailColor="#161932"
      onComplete={() => {
        // toggleStatePomodoro()
      }}
      onUpdate={
        (remainingTime) => {
          let minutes = Math.floor(remainingTime / 60);
          let seconds = remainingTime - minutes * 60;

          let finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);

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
