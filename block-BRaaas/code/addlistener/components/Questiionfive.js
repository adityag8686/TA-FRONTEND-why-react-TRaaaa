let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
]



function handleEvent(event){
    alert(event.target.innerText);
}

function Questionfive(){
    return <>
        <h2>
            Question five 
        </h2>
        { fruits.map(data=> <Button key= {data.id} info={data}/>)}
    </>
}
function Button(props){
    let buttondata= props.info;
    return <button onClick={handleEvent}>{buttondata.value}</button>
}

export default Questionfive;