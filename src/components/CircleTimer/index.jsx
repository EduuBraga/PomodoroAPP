import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PomodoroContext } from '../../provider/PomodoroSettings';

import { Container } from './style';

export function CircleTimer({ timer = 60, begin = false }) {
  const { toggleStartTimer, beginTimer } = useContext(PomodoroContext)

  return (
    <CountdownCircleTimer
      size={'339'}
      isPlaying={beginTimer}
      duration={60}
      colors={['#F87070']}
      strokeWidth={14}
      trailColor="#161932"
      onComplete={() => {
      }}
    >
      {({ remainingTime }) =>
        <Container>
          <h1>{remainingTime}</h1>
          {beginTimer ? (<h3 onClick={toggleStartTimer}>pause</h3>) : (<h3 onClick={toggleStartTimer}>start</h3>)}
        </Container>}
    </CountdownCircleTimer>
  );
};
