import React, {useState} from 'react';


function Squares() {
    const [color1, setColor1] = useState("red")
    const [color2, setColor2] = useState("blue")

    const handleClick1 = () => {
        setColor1(color2)
        setColor2(color1)
    }


    const handleClick2 = () => {
        setColor1(color2)
        setColor2(color1)
    }
    return (
        <div>
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: color1,
                    gap: "20px",
                    cursor: "pointer"
                }}
                onClick={handleClick1}
            ></div>
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: color2,
                    gap: "20px",
                    cursor: "pointer"
                }}
                onClick={handleClick2}
            ></div>
        </div>

    );
}

export default Squares;