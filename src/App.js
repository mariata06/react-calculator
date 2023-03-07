import { useDrag } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className="App">
      <div className='calculator-display'>
        <div className='spot'>1</div>
        <div className='spot'>1</div>
        <div className='spot'>+</div>
        <div className='total'>2</div>
      </div>

      <div className='calculator-buttons'>
        <div className='buttons numbers'>
          {Array(10).fill(0).map((n, i) => (
            <div key={i} className="number">
              {i + 1}
            </div> 
          ))}
        </div>

        <div className='buttons operators'>
          {['*', '-', '+', '/'].map((n, i) => (
            <div key={i} className="operator">
              {n}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
