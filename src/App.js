import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import TheenBuilder from './Components/TheenBuilder';
import TheenLayout from './Components/Layouts/TheenLayout';
import TheenDropable from './Components/DragDrop/TheenDropable';

import { templates } from './Templates';

import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <TheenLayout>
          <TheenDropable
            renderStoreItem={block => (
              <div className="rounded overflow-hidden">
                <img alt="content"
                     className="object-cover object-center h-full w-full"
                     src={templates[block].settings.review} />
              </div>
            )}
            renderCodeItem={block => templates[block].template}
            renderEditorItem={block => (
              <TheenBuilder {...templates[block]} />
            )}
          />
        </TheenLayout>
      </Router>
    );
  }
}
export default App
