import React, { PureComponent } from 'react';

import TheenBuilder from 'Components/TheenBuilder';
import TheenEditorItemPanel from 'Components/DragDrop/Editor/TheenEditorItemPanel';

class TheenEditorItem extends PureComponent {
  render() {
    const { item } = this.props;

    return (
      <div className="relative group">
        <TheenEditorItemPanel id={item.id} />
        <TheenBuilder name={item.block} />
      </div>
    );
  }
}

export default TheenEditorItem;
