import React, { useState } from 'react';
import FileUpload from './FileUpload';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



const App = () => {
  const [files, setFiles] = useState([]);


  const generatePDF = async (files) => {
    const doc = new jsPDF();

    for (const file of files) {
      const imgData = await html2canvas(document.querySelector(`img[src="${file.preview}"]`));
      doc.addImage(imgData.toDataURL('image/png'), 'PNG', 0, 0);
      doc.addPage();
    }

    doc.save('my-pdf.pdf');
  };

  const handleFilesSelected = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  const handlePDFDownload = () => {
    generatePDF(files);
  };

  return (
    <div className='al'>
      <FileUpload onFilesSelected={handleFilesSelected} />
      <div className='downloadPDF' onClick={handlePDFDownload}>Download PDF</div>
    </div>
  );
};

export default App;