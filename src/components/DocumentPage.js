import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles/DocumentPage.css';
import axios from 'axios';

const DocumentPage = () => {
  const { category, subcategory } = useParams();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/documents`)
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the documents!", error);
      });
  }, []);
  

  return (
    <main className="document-page">
      <div className="documents">
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
             <Link to={`/document/${category}/${subcategory}/${doc.filename}`}>{doc.filename}</Link> ({doc.upload_date})
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
};

export default DocumentPage;
