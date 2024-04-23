import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Library from "./Chapter_03/Library";
// import Clock from "./Chapter_04/Clock";
// import CommentList from "./Chapter_05/CommentList";
// import NotificationsList from "./Chapter_06/NotificationList";
// import Accommodate from "./Chapter_07/Accommondata";
// import ConfirmButton from "./Chapter_08/ConfirmButton";
// import LandingPage from "./Chapter_09/LandingPage";
// import AttendanceBook from "./Chapter_10/AttendanceBook";
// import SignUp from "./Chapter_11/SignUp";

/**Chapter_13 Code */
import ProfileCard from "./Chapter_13/ProfileCard";

ReactDOM.render(
    <React.StrictMode>
        <ProfileCard></ProfileCard>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
