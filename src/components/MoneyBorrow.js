import React, { useState } from "react";

const MoneyBorrow = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [count, setCount] = useState(0);

    const accept = () => {
        alert('0363202401 - HO HOANG NAM - MB bank :))');
    };
    const onHover = () => {
        if (count == 5) {
            setX(0);
            setY(20);
            setCount(0);
        }
        else {
            setX(Math.floor(Math.random() * 1000));
            setY(Math.floor(Math.random() * 500));
            setCount(count + 1)
        }
    }
    return (
        <div >
            <div >
                <div>Cho Nam mượn 200k nha ?</div>
                <button style={{ padding: 10 }} onClick={accept}>OK Luôn</button>
                <button style={{ padding: 10, position: 'absolute', top: y, left: x }} onMouseOver={onHover}>Không</button>
            </div>
        </div>
    );
}
export default MoneyBorrow;