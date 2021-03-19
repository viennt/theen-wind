import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import TheenLayout from './Components/Layouts/TheenLayout';
import TheenDroppable from './Components/DragDrop/TheenDroppable';
import TheenViewCode from './Components/Layouts/Views/TheenViewCode';
import TheenViewEditor from './Components/Layouts/Views/TheenViewEditor';
import TheenViewPreview from './Components/Layouts/Views/TheenViewPreview';

import { templates } from './Templates';

import './App.css';

class App extends PureComponent {
  render () {
    return (
      <Router>
        <TheenLayout>
          <TheenDroppable
            renderStoreItem={block => (
              <div className="rounded overflow-hidden">
                <img alt="content"
                     className="object-cover object-center h-full w-full"
                     src={templates[block].settings.review} />
              </div>
            )}
            renderRightSide={() => (
              <>
                <TheenViewCode />
                <TheenViewEditor />
                <TheenViewPreview />
              </>
            )}
          />
        </TheenLayout>
      </Router>
    );
  }
}
export default App
