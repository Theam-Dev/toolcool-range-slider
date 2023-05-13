import './App.css';
import 'toolcool-range-slider';
function App() {
  return (
    <div className="App">
      <h1>react using toolcool-range-slider</h1>
      <toolcool-range-slider pointer-width="25px"
        pointer-height="25px"
        pointer-radius="5px"></toolcool-range-slider>
      <br/>
      <toolcool-range-slider slider-width="300px"
        slider-height="15px"
        slider-radius="0.5rem"></toolcool-range-slider>
      <br/>
      <toolcool-range-slider min="-100" max="100" value="50"></toolcool-range-slider>
      <br/>
      <toolcool-range-slider min="0" max="100" value="50"></toolcool-range-slider>
      <br/>
      <toolcool-range-slider min="100" max="200" value="150" step="10"></toolcool-range-slider>
    </div>
  );
}

export default App;
