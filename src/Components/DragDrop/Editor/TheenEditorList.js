import React, { PureComponent, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { FiLayout } from 'react-icons/fi';

import TheenEditorDraggable from 'Components/DragDrop/Editor/TheenEditorDraggable';
import { getEditorItems } from 'Stores/reducers/editorStore';

const TheenEditorItem = lazy(() => import('Components/DragDrop/Editor/TheenEditorItem'));

class TheenEditorList extends PureComponent {
  render() {
    const { reduxEditorItems } = this.props;

    if (reduxEditorItems && reduxEditorItems.length) {
      return reduxEditorItems.map((item, index) => (
        <TheenEditorDraggable key={item.id} id={item.id} index={index}>
          <Suspense fallback={<div/>}>
            <TheenEditorItem item={item} />
          </Suspense>
        </TheenEditorDraggable>
      ));
    }

    return (
      <div className="flex flex-col h-full items-center justify-center">
        <div className="text-4xl text-gray-400"><FiLayout /></div>
        <div className="mt-2 text-gray-400 font-bold">Drag & Drop Here</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
})
export default connect(mapStateToProps)(TheenEditorList);
