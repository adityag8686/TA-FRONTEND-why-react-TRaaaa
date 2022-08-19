import "./app.css";
import Button from "./Button";
function App() {
    return (
        <>
    <Button label="click me" size="medium" type="primary" />
    <Button label="click me" size="large" type="secondary" />
    <Button label="click me" size="normal" type="tertiary" />
    <Button
      label="click to alert"
      type="primary"
      onClickHandler={() => alert("You Clicked Me!")}
    />
  </>
    )
}

export default App;