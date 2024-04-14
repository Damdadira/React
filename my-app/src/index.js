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

/**Chapter_08 Code */
import ConfirmButton from "./Chapter_08/ConfirmButton";

ReactDOM.render(
    <React.StrictMode>
        <ConfirmButton></ConfirmButton>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
