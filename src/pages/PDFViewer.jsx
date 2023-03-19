import React from 'react';
import './styles/Pdf.css'
import Footer from '../components/Footer';

function PDFViewer() {
  return (
    <>
    <div>
      <embed src="/Regulament.pdf" type="application/pdf" width="100%" height="800px" />
    </div>
    <Footer />
    </>
  );
}

export default PDFViewer;
