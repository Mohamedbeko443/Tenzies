/* eslint-disable react/prop-types */

export default function Die(props) {
const dieStyle = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
    };

return (
    <button
        aria-label={`Die with value ${props.value}, 
    ${props.isHeld ? "held" : "not held"}`}
        onClick={() => props.hold(props.id)}
        style={dieStyle}
    >
        {props.value}
    </button>
    );
}
