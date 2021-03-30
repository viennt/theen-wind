import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import TheenLayout from './Components/Layouts/TheenLayout';
import TheenDroppable from './Components/DragDrop/TheenDroppable';

import TheenSideContent from './Components/Layouts/TheenSideContent';
import TheenMainContent from './Components/Layouts/TheenMainContent';

class App extends PureComponent {
  render () {
    return (
      <Router>
        <TheenLayout>
          <TheenDroppable>
            {/* SIDE CONTENT: Library, Store and Settings */}
            <TheenSideContent />

            {/* MAIN CONTENT: Editor, Code, Preview */}
            <TheenMainContent />
          </TheenDroppable>
        </TheenLayout>
      </Router>
    );
  }
}
export default App
