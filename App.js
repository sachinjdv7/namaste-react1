const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am h1 tag'),
    React.createElement('h2', {}, 'I am h2 tag'),
  ])
);

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello wordl from react'
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
