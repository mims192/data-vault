import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('File uploaded successfully!');
      } else {
        setMessage('File upload failed.');
      }
    } catch (error) {
      setMessage('An error occurred while uploading the file.');
    }
  };

  return (
    <div className="card bg-gray-800 text-white w-96 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-sky-900">
    <div className="card-body">
    <h2 className="card-title">Upload File</h2>
    <input type="file" onChange={handleFileChange} className="border border-gray " />

    <div className="card-actions justify-end">
      <button onClick={handleUpload} className="bg-green-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-1">Upload</button>
      <p>{message}</p>
    </div>
  </div>
</div>
  );
};

export default FileUpload;