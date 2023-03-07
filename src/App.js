import { useDrag } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//Number Component
function Number({ text }) {
  return (
    <div className="number">
      {text}
    </div>
  )
}

//Operator Component
function Operator({ text }) {
  return (
    <div className="operator">
      {text}
    </div>
  )
}

function App() {
  return (

    <DndProvider backend={HTML5Backend}>

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
              <Number key={i} text={i} /> 
            ))}
          </div>

          <div className='buttons operators'>
            {['*', '-', '+', '/'].map((n, i) => (
              <Operator key={i} text={n} />
            ))}
          </div>
        </div>

      </div>

    </DndProvider>
  );
}

export default App;
