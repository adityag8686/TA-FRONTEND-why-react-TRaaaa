function Questionone(){
    return <>
        <h2> This is  question one </h2>
        <button onClick={handleEvent}> Click Me</button>
    </>
}

function handleEvent(event){
    alert("Hello React Event");
}
export default Questionone;