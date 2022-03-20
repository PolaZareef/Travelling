import './App.css';
import Booking from './Components/BookTour/Booktour';
import Dicsover from './Components/Discover/Discover';
import Header from './Components/Header/Header';
import HotTours from './Components/HotTours/HotTours';
import MissPeople from './Components/MissionPeople/MissPeople';
import PeopleSay from './Components/PeopleSay/PeopleSay';
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
      <MissPeople />
      <Booking />
      <PeopleSay />
    </div>
  );
}
export default App;
