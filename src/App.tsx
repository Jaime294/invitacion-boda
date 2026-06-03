import { useState } from 'react';
import Envelope from './components/Envelope/Envelope';
import Invitation from './components/Invitation/Invitation';
import { coupleInfo } from './data/weddingData';

type AppState = 'envelope' | 'invitation';

export default function App() {
  const [state, setState] = useState<AppState>('envelope');
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const { bride, groom } = coupleInfo;

  function handleOpen() {
    setShouldPlayMusic(true);
    setState('invitation');
  }

  return state === 'envelope' ? (
    <Envelope
      onOpen={handleOpen}
      brideName={bride.firstName}
      groomName={groom.firstName}
    />
  ) : (
    <Invitation autoPlayMusic={shouldPlayMusic} />
  );
}
