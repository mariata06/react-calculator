import { useDrag } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//Number Component (draggable component)
function Number({ text }) {
  const [{ opacity }, dragRef] = useDrag({
    type: 'number',
    number: 'text',
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div className="number" ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}

//Operator Component (draggable component)
function Operator({ text }) {
  const [{ opacity }, dragRef] = useDrag({
    type: 'operator',
    operator: 'text',
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div className="operator" ref={dragRef} style={{ opacity }}>
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
