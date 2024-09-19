import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => <h1>Namaste react title</h1>;

const Heading = () => (
  <div id="container">
    <Title />
    <h1>Namaste React using Functional components🚀</h1>
  </div>
);

const jsxHeading = <h1>Namste React Using JSX🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />);
