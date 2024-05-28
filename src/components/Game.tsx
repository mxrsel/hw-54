import React, { useState} from "react";
import Board from "./board.tsx";
import ResetButton from "./Reset.tsx";

interface Item {
    hasItem: boolean;
    clicked: boolean;
}

const createItems = (): Item[] => {
    const items: Item[] = Array.from({length: 36}, () => ({hasItem: false, clicked: false}));

    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;

    return items
};

const Game : React.FC = () => {
    const [items, setItems] = useState<Item[]>(createItems());
    const [attempts, setAttempts] = useState<number>(0);
    const [found, setFound] = useState<boolean>(false);

    const ItemClick = (index: number) => {
        if (found) return;

        const newItems = [...items];
        newItems[index].clicked = true;
        setItems(newItems);

        setAttempts(attempts + 1);

        if(newItems[index].hasItem){
            setFound(true)
            alert(`Symbol was found out with ${attempts + 1}`)
        }
    };

    const ResetClick: () => void = () => {
        setItems(createItems());
        setAttempts(0);
        setFound(false);
    };

    return(
        <div className="game">
            <h1>Game for find out hidden symbol</h1>
            <p>Tries: {attempts}</p>
            <Board items={items} onItemClick={ItemClick} />
            <ResetButton onClick={ResetClick} />
        </div>
    );
};

export default Game;