
import './App.css';
import { useState , useEffect  } from 'react';

function App() {

  const[num,setNum] = useState(0)
  const [topic, setTopic] = useState('');
  

  const incNum =() =>{
    setNum(num + 1)
  }
  const decNum =() =>{
    if(num > 0){
      setNum(num - 1)
    }
    else{
      setNum(0);
      alert('Decrement limit is valid till "0" ')
    }
   
  };
  useEffect(() => {
    if (!topic && !window.__ALERT_SHOWN__) {
      window.__ALERT_SHOWN__ = true;
      const enteredTopic = window.prompt('Please add a topic for the count option:');
      setTopic(enteredTopic || 'No topic provided');
      console.log(enteredTopic);
    }
  }, [topic]);
    
  


  return (
    <>
    <div><h3>Counting Machine</h3></div>
    
    <div className='main_div'>
      
      <div className='center_div'>
      <h2>Topic: {topic}</h2>
        <h1> {num} </h1>
        <div className='btn_div'>
          <button onClick={incNum}>Incre</button>
          <button onClick={decNum}>Decre</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;