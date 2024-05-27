import React from "react";
import Cell from "./Cell.tsx";


interface Item{
    hasItem: boolean;
    clicked: boolean;
}
interface BoardProps {
    items: Item[];
    onItemClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({items, onItemClick}) => {
    return(
        <div className="board">
            {items.map((item, index) => (
                <Cell
                    key={index}
                    hasItem={item.hasItem}
                clicked={item.clicked}
                onClick={() => onItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Board;