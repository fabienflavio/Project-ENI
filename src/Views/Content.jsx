import { useState } from 'react'


const MultipleFileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...newFiles]); // Add new files
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1); // Remove file at index
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement file upload logic using libraries or fetch API
    // depending on your requirements

    console.log('Selected files to upload:', selectedFiles);

    // Clear selected files after upload (optional)
    setSelectedFiles([]);
  };

  const renderFileList = () => (
    selectedFiles.map((file, index) => (
      <div key={index}>
      <p className='Contener_menu'>   {file.name}  </p>
        <button onClick={() => handleDeleteFile(index)}>Delete</button>
      </div>
    ))
  );

  return (
    <form onSubmit={handleSubmit} className='Container'>
      <input type="file" multiple onChange={handleFileChange} />
      {renderFileList()}
      <button type="submit">Upload Files</button>
    </form>
  );
};

export default MultipleFileUpload;