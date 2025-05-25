import './App.css';
import { Child } from './Components/child';
import { Parent } from './Components/Parent.jsx';

function App() {

  return (
    <>
    
      <h1>Hello From Frontend</h1>

      <Parent name="Parent Component">
        <Child /> {/* Child Component goes to Parent as a children prop */}
      </Parent>

    </>
  )
}

export default App
