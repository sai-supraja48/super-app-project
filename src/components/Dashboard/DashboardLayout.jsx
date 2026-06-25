import ProfileCard from "../Common/ProfileCard";
import WeatherWidget from "../Weather/WeatherWidget";
import NotesWidget from "../Notes/NotesWidget";
import TimerWidget from "../Timer/TimerWidget";
import NewsWidget from "../News/NewsWidget";
import { Link } from "react-router-dom";

import "../../styles/dashboard.css";

function DashboardLayout() {
  return (
    <div className="dashboard">

      <div className="profile">
        <ProfileCard />
      </div>

      <div className="weather">
        <WeatherWidget />
      </div>

      <div className="notes">
        <NotesWidget />
      </div>

      <div className="timer">
        <TimerWidget />
      </div>

      <div className="news">
        <NewsWidget />
      </div>

      <div className="discover">
        <Link to="/movies">
          <button className="discover-btn">
            Browse
          </button>
        </Link>
      </div>

    </div>
  );
}

export default DashboardLayout;