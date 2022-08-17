function Questionthree() {
    return (
        <>
            <h2> This is question three </h2>
            <button onClick={handleEvent}>Arya</button>
            <button onClick={handleEvent}>John</button>
            <button onClick={handleEvent}>Bran</button>
        </>
    );
}

function handleEvent(event) {
    let name = event.target.innerText;
    alert(`Hello ${name}`);
}
export default Questionthree;