"use client"

export default function Clickbtn() {
    // console.log("Click Button rendered");
    function handleClick() {
        alert('You clicked me!');
    }
    return (
        <button onClick={handleClick} style={{ border: "solid 1px white", padding: "0.3rem", borderRadius: "0.3rem" }}>Click me</button>
    )
}