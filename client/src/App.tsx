import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        async function getCount() {
            const response = await fetch('http://staging.webdevlearner.in/visit');
            const data = await response.json();
            setCount(data.count);
        }
        getCount();
    }, []);
    return (
      <div style={{fontSize: '2em', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', padding: '30px'}}>
            <div>
                {count === 0 ? 'No user visited to this site' : `${count} users visited to this site`}
            </div>
      </div>
    );
}

export default App;