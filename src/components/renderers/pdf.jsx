import React, { useRef, useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Pdf = ({ pageNumber = 1, file = null }) => {

  const [numPages, setNumPages] = useState(null);
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const ref = useRef();

  return (
    <Document ref={ref} file={file} onLoadSuccess={onDocumentLoadSuccess}>
      { pageNumber <= numPages && <Page key={pageNumber} pageNumber={pageNumber} />}
      { pageNumber + 1 <= numPages && <Page key={pageNumber + 1} pageNumber={pageNumber + 1} /> }
      { pageNumber + 2 > numPages && <p>End of pdf.</p>}
    </Document>
  );
};

export default Pdf;
