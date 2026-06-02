import { useState } from 'react';
import Envelope from './components/Envelope/Envelope';
import Invitation from './components/Invitation/Invitation';
import { coupleInfo } from './data/weddingData';

type AppState = 'envelope' | 'invitation';

export default function App() {
  const [state, setState] = useState<AppState>('envelope');
  const { bride, groom } = coupleInfo;

  if (state === 'envelope') {
    return (
      <Envelope
        onOpen={() => setState('invitation')}
        brideName={bride.firstName}
        groomName={groom.firstName}
      />
    );
  }

  return <Invitation />;
}
