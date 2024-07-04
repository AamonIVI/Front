import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';import './styles/CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const subcategories = {' ':[' ', ' '],
    'ГосВетНадзор': ['subcategory1', 'subcategory2'],
    'Корма': ['subcategory3', 'subcategory4'],
    'Лаборатории': ['subcategory5', 'subcategory6'],
    'Непродуктивные животные': ['subcategory7', 'subcategory8'],
    'НПА РФ': ['subcategory9', 'subcategory10'],
    'НПА субъектов РФ': ['subcategory11', 'subcategory12'],
    'ОВД': ['subcategory13', 'subcategory14'],
    'Продуктивные животные': ['Мелкий рогатый скот', 'Крупный рогатый скот']}

  return (
    <main className="category-page">
      <ul className="categories">
        {subcategories[category].map(subcategory => (
          <li key={subcategory}>
            <Link to={`/documents/${category}/${subcategory}`}>{subcategory}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CategoryPage;
