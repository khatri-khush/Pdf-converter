import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const FileUpload = ({ onFilesSelected }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleDrop = (acceptedFiles) => {
        setSelectedFiles(acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
        onFilesSelected(acceptedFiles);
    };

    return (
        <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
                <section className='section'>
                    <div {...getRootProps()} className="dragNdrop">
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop multiple files here, or click to select</p>
                    </div>
                    {selectedFiles.length > 0 && (
                        <div>
                            {selectedFiles.map((file) => (
                                <div key={file.name}>
                                    <img src={file.preview} alt={file.name} />
                                    {file.name}
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}
        </Dropzone>
    );
};

export default FileUpload;
