import logo from './logo.svg';
import './App.css';
import Resume from "./Osama+Idrees.pdf"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
const App = () =>{
  return <div>

<DocViewer

  pluginRenderers={DocViewerRenderers}
  documents={[{uri:Resume}]}

  />

  </div>  
}

export default App;
