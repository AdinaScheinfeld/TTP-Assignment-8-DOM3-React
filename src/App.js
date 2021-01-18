import './App.css';
import { Table } from './components';

function App() {
  return (
    <div className="App">
      <h1>Grid Coloring</h1>
      <h4>Use the buttons below to add and remove rows and columns from the grid.</h4>
      <h4>You can also select a color and change the color of a specific cell by clicking the cell.</h4>
      <Table />
    </div>
  );
}

export default App;
