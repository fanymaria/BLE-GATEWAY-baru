import DashboardPage from '../views/pages/dashboard';
import DeviceLocation from '../views/pages/device-location';
import DeviceManagement from '../views/pages/device-management';

const routes = {
  '/': DashboardPage,
  '/dashboard': DashboardPage,
  '/device-location': DeviceLocation,
  '/device-management': DeviceManagement,
};

export default routes;
