import React from "react";

interface resetProps {
    onClick?: () => void;
}

const ResetButton: React.FC<resetProps> = ({onClick}) => {
    return(
        <button className="resetBtn" onClick={onClick}>
            Reset
        </button>
    );
};

export default ResetButton;