import React, { Children, createElement as e, useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  return e('div', { className: 'font-bold', key: 1 }, [
    e('h1', { className: 'font-bold', key: 2 }, `Test tsx ${count}`),
    e('button', {
      className: 'py-1 px-4 border',
      key: 3,
      onClick: () => setCount(count + 1)
    },
      'click me'
    )
  ]);
}

export default App;