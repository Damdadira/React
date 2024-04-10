function MyButton(props) {
    const [isClicked, setIsClicked] = React.userState(false);

    return React.createElement(
        "button",
        { onclick: () => setIsClicked(true) },
        isClicked ? "Clicked!" : "Click Here!"
    );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);
