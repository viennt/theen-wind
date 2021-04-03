import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';

import { removing } from 'Stores/reducers/editorStore';

class TheenEditorItemPanel extends PureComponent {
  render() {
    const { id, removingItem } = this.props;
    const onClick = () => removingItem(id)

    return (
      <div className="absolute z-50 hidden group-hover:block top-0 left-0 h-full cursor-default">
        <div className="flex items-start h-full">
          <div className="flex items-center h-12 w-12 text-xl bg-gray-100 rounded-br-lg">
            <div onClick={onClick} className="flex justify-center w-full text-red-500 p-2 cursor-pointer">
              <FiTrash2 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removingItem: (id) => dispatch(removing(id)),
})
export default connect(null, mapDispatchToProps)(TheenEditorItemPanel);
