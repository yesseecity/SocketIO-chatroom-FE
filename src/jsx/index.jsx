import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

// components
import {Main} from './components/main.jsx';


function Index(props) {
  return (
    <Main />
  )
}

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(<Index />);