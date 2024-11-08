import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { parseXML } from '../utils/xmlUtils';

function TypesFileDrop({ onFileParsed }) {
    const [ error, setError ] = useState('');
    
    // handle accepted files
    const onDrop = useCallback((acceptedFiles) => {
        setError('') // clear any previous error
        // handle files here
        const file = acceptedFiles[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const fileContent = reader.result;
                const xmlDoc = parseXML(fileContent);
                onFileParsed(xmlDoc); // Pass xml content to parent
            };
            reader.readAsText(file);
        }
        // acceptedFiles.forEach((file) => {
        //     console.log(file); //replace with file handling logic here
        // });
    }, [onFileParsed]);

    // handle rejected files
    const onDropRejected = useCallback(() => {
        setError('Only XML files are accepted.');
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        onDropRejected,
        accept: { 'text/xml' : ['.xml'] },
     });

    return (
        <div    
            { ...getRootProps()}
            style={{
                border: '2px dashed #ccc',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            <input {...getInputProps()}/>
            {isDragActive ? (
                <p> Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select the files</p>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default TypesFileDrop;