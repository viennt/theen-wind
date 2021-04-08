import React, { PureComponent, Suspense, lazy } from 'react';
import Frame from 'react-frame-component';
import { connect } from 'react-redux';

import { getSettingFontFamily } from 'Stores/reducers/settingsStore';
import { getEditorItems } from 'Stores/reducers/editorStore';

const TheenBuilder = lazy(() => import('Components/TheenBuilder'));

class TheenViewPreview extends PureComponent {
  render() {
    const { reduxEditorItems, reduxFontFamily } = this.props;
    const innerHTML = {__html: `body * { font-family: '${reduxFontFamily.value}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif }`};

    return (
      <div className="w-full h-full sm:p-2 bg-gray-200 sm:border border-solid border-gray-300">
        <Frame
          className="w-full h-full bg-white rounded sm:border border-solid border-gray-300"
          head={
            <>
              <link href="/css/tailwind.min.css" rel="stylesheet" />
              <link href={reduxFontFamily.href} rel="stylesheet" />
              <style dangerouslySetInnerHTML={innerHTML}/>
            </>
          }>
            {reduxEditorItems.map(item => (
              <Suspense fallback={<div/>}>
                <TheenBuilder key={item.id} name={item.block} />
              </Suspense>
            ))}
        </Frame>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
  reduxFontFamily: getSettingFontFamily(state),
})
export default connect(mapStateToProps)(TheenViewPreview);
