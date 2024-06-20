import React from 'react';
import {createRoot} from 'react-dom/client';
import { Client as Styletron } from 'styletron-engine-atomic'; 
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import App from './App';

const engine = new Styletron();
const container = document.getElementById('root');
const root = createRoot(container); // Using createRoot

root.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);

