import FormDevice from './formdevice.js';
import DeviceTable from '../components/DeviceTable.js';

const DashboardManagement = {
  _tableData: [],

  async render() {
    let tableData = [];

    try {
      const response = await fetch('/api/device-management');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log('HASIL API:', jsonData);

      // Mapping ke struktur table
      tableData = jsonData.data.map((item, index) => ({
        no: index + 1,
        imei: item.imei || 'N/A',
        uuid: item.setting_uuid || 'N/A',
        location: item.location || 'N/A',
        type: item.type || 'N/A',
        created_at: item.created_at || 'N/A'
      }));

      // Simpan ke properti internal
      this._tableData = tableData;

    } catch (error) {
      console.error('ERROR FETCH:', error);
    }

    return await DeviceTable.render(this._tableData);
  },

  async afterRender() {
    await DeviceTable.afterRender(async () => {
      document.getElementById('mainContent').innerHTML = await FormDevice.render();
      if (FormDevice.afterRender) await FormDevice.afterRender();
    });
  }
};

export default DashboardManagement;
