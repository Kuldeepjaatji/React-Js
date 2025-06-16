import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    // <div>
    //   <button onClick={() => setIsVisible(!isVisible)}>
    //     {isVisible?"ture":"false"}
    //   </button>
    //   {isVisible && <p>This is visible</p>}
    // </div>

    // <div>
    //   <button onClick={() => setIsVisible(!isVisible)}>
    //     {isVisible?"ture":"false"}
    //   </button>
    //   {isVisible?<p>This is visible</p>:<p>This is not visible</p>}
    // </div>

    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible?"ture":"false"}
      </button>
      {isVisible?<p>This is visible</p>:<p>This is not visible</p>}
    </div>
  );
}
export default App;