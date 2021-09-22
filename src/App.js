import { useEffect, useState } from "react";
import { Container } from "./components";
import { convertFileTob64 } from "./utils";

function App() {
  const [file, setFile] = useState(null);
  const [b64, setB64] = useState(null);
  const handleFileChange = (e) => {
    e.stopPropagation();
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (file) {
      convertFileTob64(file)
        .then((res) => {
          setB64(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [file]);
  return (
    <div className="App">
      <label for="fileInput">Select a file to render..</label>
      <br />
      <input type="file" id="fileInput" onChange={handleFileChange} />
      <br />
      <div>
        <Container file={b64}></Container>
      </div>
    </div>
  );
}

export default App;
