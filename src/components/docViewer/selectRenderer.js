import {
    Pdf,
    Xlsx,
    Docx,
    ImageWrapper,
    Image360,
    Image,
    Audio,
    Video,
    Csv
} from './../renderers';

function selectRenderer(fileType = 'pdf') {
    let Renderer = null;
    switch (fileType) {
        case 'pdf':
            Renderer = Pdf;
            break;    
        default:
            break;
    }
    return Renderer;
}

export default selectRenderer;
