import React, {useState} from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//Number Component (draggable component)
function Number({ text }) {
  const [{ opacity }, dragRef] = useDrag({
    type: 'number',
    item: () => ({text}),
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    })
  })

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
    item: () => ({text}),
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    })
  });

  return (
    <div className="operator" ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}

//Spot Component
function Spot({ type, text, spot, dropHandler }) {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: type,
    drop: (item) => {
      dropHandler(spot, item);
      // console.log(item);
      // console.log(type);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  let backgroundColor = '#f2f2f2';
  if (canDrop) backgroundColor = '#eabbf0';
  if (isOver) backgroundColor = '#ecd1f0';

  return (
    <div className='spot' ref={dropRef} style={{ backgroundColor }}>{text}</div>
  )
}

function App() {
  const [number1, setNumber1] = useState(2);
  const [number2, setNumber2] = useState(3);
  const [operator, setOperator] = useState('+');

  function dropHandler(spot, item) {
    console.log(item.text);
    if (spot === 'number1') setNumber1(item.text);
    if (spot === 'number2') setNumber2(item.text);
    if (spot === 'operator') setOperator(item.text);
    console.log(eval(`${number1}${operator}${number2}`));
  }

  return (
    <DndProvider backend={HTML5Backend}>

      <div className="App">
        <div className='calculator-display'>
          <Spot type='number' text={number1} spot='number1' dropHandler={dropHandler} />
          <Spot type='number' text={number2} spot='number2' dropHandler={dropHandler} />
          <Spot type='operator' text={operator} spot='operator' dropHandler={dropHandler} />
          <div className='total'>{eval(`${number1}${operator}${number2}`)}</div>
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
