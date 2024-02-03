import React from 'react'

export default function Download() {
    const handleDownload = () => {
        // Replace 'path/to/your/file.pdf' with the actual path to your PDF file.
        const pdfPath = 'https://drive.google.com/file/d/1WPW0RuvPdIHDJBIelbo9mzpckKfGzgfq/view?usp=sharing';
    
        // Create a temporary link element
        const link = document.createElement('a');
    
        // Set the href attribute to the path of the PDF file
        link.href = pdfPath;
    
        // Set the download attribute with the desired filename for the user
        link.download = 'downloaded_file.pdf';
    
        // Append the link to the document
        document.body.appendChild(link);
    
        // Trigger a click event on the link to start the download
        link.click();
    
        // Remove the link from the document after the download starts
        document.body.removeChild(link);
      };
  return (
    <>
      
 

 
    <button onClick={handleDownload}>Download PDF</button>
  

    </>
  )
}
