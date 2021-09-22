import React from 'react'
import { DocumentViewer } from '../docViewer';
import ControlBar from './controlBar';

const Container = ({
    file
}) => {
    return (
        <div>
            <DocumentViewer file={file} />
        </div>
    )
}

export default Container;
