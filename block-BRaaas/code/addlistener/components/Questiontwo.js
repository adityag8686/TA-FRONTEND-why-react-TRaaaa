function Questiontwo() {
    return (
      <>
        <h2> This is question two </h2>
        <button onClick={handleEvent}> How can I help you?</button>
      </>
    );
  }
  
  function handleEvent() {
    alert(`
         To learn React use https://reactjs.org
     React and ReactDOM works together
     Babel helps in writing JSX
      `);
  }
  export default Questiontwo;