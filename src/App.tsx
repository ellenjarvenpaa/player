import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import singleMediaItem from './assets/test.json';
import VideoPlayer from './components/player/VideoPlayer';
import { MediaItem } from '@sharedTypes/DBTypes';

function App() {

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <VideoPlayer mediaItem={singleMediaItem as unknown as MediaItem} />
    </Router>
  );
}

export default App;
