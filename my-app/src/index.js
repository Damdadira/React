import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**Chapter_03 Code */
// import Library from "./Chapter_03/Library";

// ReactDOM.render(
//     <React.StrictMode>
//         <Library />
//     </React.StrictMode>,
//     document.getElementById("root")
// );

/**Chapter_04 Code */
// import Clock from "./Chapter_04/Clock";

// setInterval(() => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>,
//         document.getElementById("root")
//     );
// }, 1000);

/**Chapter_05 Code */
// import CommentList from "./Chapter_05/CommentList";

// ReactDOM.render(
//     <React.StrictMode>
//         <CommentList></CommentList>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

/**Chapter_06 Code */
// import NotificationsList from "./Chapter_06/NotificationList";

// ReactDOM.render(
//     <React.StrictMode>
//         <NotificationsList></NotificationsList>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

/**Chapter_07 Code */
import Accommodate from "./Chapter_07/Accommondata";

ReactDOM.render(
    <React.StrictMode>
        <Accommodate></Accommodate>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
