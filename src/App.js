import './App.css';
import Header from './components/headerComp/Header.jsx';
import NameSection from './components/nameSection/NameSection';
import MusicList from './components/musicList/MusicList';
import UploadMusic from './components/uploadMusic/UploadMusic';

function App() {
  return (
    <div className="App">
      <Header/>
      <NameSection />
      <MusicList />
      <UploadMusic />
    </div>
  );
}

export default App;
