import React from "react";

interface ItemProps {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void
}

const Cell: React.FC<ItemProps> = ({ hasItem, clicked, onClick}) => {
    let content = null;
    if(clicked) {
        content = hasItem ? '0' : '';
    }

    return(
        <div className='cell' onClick={onClick}>
            {content}
        </div>
    );
};

export default Cell;