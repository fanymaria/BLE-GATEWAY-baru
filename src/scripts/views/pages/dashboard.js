import Dashboard from '../components/Dashboard';

const DashboardPage = {
  async render() {
    let tableData = [];

    try {
      const response = await fetch('/api/scanner');
      const jsonData = await response.json();

      console.log('HASIL API:', jsonData);

      tableData = jsonData.data.map((item, index) => ({
        no: index + 1,
        imei: item.sn_sensor || 'N/A',
        idContainer: item.id_container || 'N/A',
        type: 'N/A',
        timestamp: item.created_time || 'N/A',
      }));

    } catch (error) {
      console.error('ERROR FETCH:', error);
    }

    const data = {
      summary: {
        totalDevices: tableData.length,
        selectedDevice: tableData.length,
        voltage: 0,
        battery: 0,
        lastUpdate: 'N/A',
        status: 'N/A',
      },
      tableData,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        hasNext: false,
        hasPrev: false,
      },
      filters: {
        messageTypes: ['All Message Type'],
        startDate: '',
        endDate: '',
      },
    };

    return await Dashboard.render(data);
  },

  async afterRender() {
    await Dashboard.afterRender();
  },
};

export default DashboardPage;
