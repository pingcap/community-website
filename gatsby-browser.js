import 'antd/dist/antd.css';
import 'src/styles/globals.scss';

import { logPageView } from '@tidb-community/tracking-script';

export { wrapPageElement } from 'src/create-pages/wrapPage';

export const onRouteUpdate = () => {
  if (process.env.NODE_ENV === 'production') {
    logPageView();
  }
};
