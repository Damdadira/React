import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfiremd] = useState(false);

    const handleConfirm = () => {
        setIsConfiremd((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;
