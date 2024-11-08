import logo from './logo.svg';
import './App.css';
import TypesFileDrop from './Components/TypesFileDrop';
import XMLViewer from './Components/XMLViewer';
import { useState } from 'react';
import { Buffer } from 'buffer';


window.Buffer = Buffer;

function App() {
  const [xmlDoc, setXmlDoc] = useState(null);
  // parse xml content when the file is dropped
  const handleFileParsed = (xmlDoc) => {
    
      setXmlDoc(xmlDoc);
    };
  

  return (
    <div className="App">
      
      {/* Nav Bars here. One general Nav, a lower one with totals and percentages */}
      <h1>Drag and Drop File Upload</h1>
      <TypesFileDrop onFileParsed={handleFileParsed} />
      {xmlDoc ? <XMLViewer xmlDoc={xmlDoc} /> : <p>No XML file uploaded yet.</p>}
    </div>
  );
}

export default App;
