import './App.css';
import Dicsover from './Components/Discover/Discover';
import Header from './Components/Header/Header';
import HotTours from './Components/HotTours/HotTours';
import Services from './Components/Services/Services';
import TopPage from './Components/TopPageImages/TopPage';

function App() {
  return (
    <div>
      <Header />
      <TopPage />
      <Dicsover />
      <Services />
      <HotTours />
    </div>
  );
}
export default App;
