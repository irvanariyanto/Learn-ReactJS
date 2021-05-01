import Biodata from './components/Biodata'
import Component4 from './components/Component4'
import NewBiodata from './components/NewBiodata'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Counter/>
      <Counter/>
    </div>
  );
}

const Hobi = () => {
  return (
    <ul>
      <li>Jogging</li>
      <li>Berenang</li>
      <li>Bela diri</li>
    </ul>
  )
}

export default App;
