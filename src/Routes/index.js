import React from 'react';
import LibraryPage from 'Routes/LibraryPage';
// const LibraryPage = React.lazy(() => import('Routes/LibraryPage'));
const StorePage = React.lazy(() => import('Routes/StorePage'));
const SettingPage = React.lazy(() => import('Routes/SettingPage'));

export const ROUTES = {
  settings: { title: 'Settings', url: '/settings', component: SettingPage },
  store: { title: 'Store', url: '/store', component: StorePage },
  library: { title: 'Library', url: '', component: LibraryPage },
}
