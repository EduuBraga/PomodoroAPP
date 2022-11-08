import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export function CircleTimer({timer = 60, begin = false}) {
  return (
    <CountdownCircleTimer
      size={'339'}
      isPlaying={begin}
      duration={60}
      colors={['#F87070']}
      strokeWidth={14}
      trailColor="#161932"
      onComplete={() => {
      }}
    >
      {({ remainingTime }) => <h1>{remainingTime}</h1>}
    </CountdownCircleTimer>
  );
};
