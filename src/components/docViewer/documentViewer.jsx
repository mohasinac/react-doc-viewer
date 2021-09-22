import React from "react";
import { renderTypes } from '../../constants';
import selectRenderer from "./selectRenderer";

const DocumentViewer = ({
  file = null,
  fileType = "pdf",
}) => {
  const Renderer = selectRenderer(fileType);
  return <div>{Renderer && <Renderer file={file} />}</div>;
};

export default DocumentViewer;
