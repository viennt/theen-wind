import React from 'react';
import LibraryPage from 'Routes/LibraryPage';
const ThemePage = React.lazy(() => import('Routes/ThemePage'));
const StorePage = React.lazy(() => import('Routes/StorePage'));
const SettingPage = React.lazy(() => import('Routes/SettingPage'));

export const ROUTES = {
  settings: { title: 'Settings', url: '/settings', component: SettingPage },
  store: { title: 'Store', url: '/store', component: StorePage },
  detail: { title: 'Theme', url: '/:id', component: ThemePage },
  library: { title: 'Library', url: '', component: LibraryPage, exact: true },
}
