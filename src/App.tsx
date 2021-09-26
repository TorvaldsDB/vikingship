import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
          <MenuItem index={0}>cool link</MenuItem>
          <MenuItem index={1} disabled>
            cool link 2
          </MenuItem>
          <MenuItem index={2}>cool link 3</MenuItem>
        </Menu>
        <Button
          autoFocus
          className="custom"
          onClick={() => alert('clicked me')}
        >
          hello
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          large primary
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>
          disabled button
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          small danger
        </Button>
        <Button btnType={ButtonType.Link} href="www.ekohe.com" disabled>
          disabled link
        </Button>
        <Button btnType={ButtonType.Link} href="www.ekohe.com">
          Ekohe link
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
