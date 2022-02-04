import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header/>
      {notes.map(createNotes)}
      <Footer/>
    </div>
  );
}

function createNotes(noteItem){
  return <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
}

export default App;
