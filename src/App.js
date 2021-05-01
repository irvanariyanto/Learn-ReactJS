import Biodata from './components/Biodata'
import Component4 from './components/Component4'
import NewBiodata from './components/NewBiodata'

function App() {
  return (
    <div>
      <Biodata nama="Irvan Ariyanto" semester="4" hobi={<Hobi/> }/>
      <Biodata nama="Irvan" semester="6 " />
      <NewBiodata nama="Irvan" semester="6 " hobi={<Hobi/>}/>
      <Component4/>
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
