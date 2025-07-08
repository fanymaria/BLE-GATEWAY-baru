import Dashboard from '../components/Dashboard';

const DashboardPage = {
  _tableData: [],

  async render() {
    let tableData = [];

    try {
      const response = await fetch('/api/scanner');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

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

    // simpan data full
    this._tableData = tableData;

    // render page pertama (page 1)
    return this._renderDashboardPage(1);
  },

  async _renderDashboardPage(page) {
    const perPage = 10;
    const totalPages = Math.ceil(this._tableData.length / perPage);

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const pagedData = this._tableData.slice(startIndex, endIndex);

    const data = {
      summary: {
        totalDevices: this._tableData.length,
        selectedDevice: pagedData.length,
        voltage: 0,
        battery: 0,
        lastUpdate: 'N/A',
        status: 'N/A',
      },
      tableData: pagedData,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        hasPrev: page > 1,
        hasNext: page < totalPages,
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
    const onPageChange = async (page) => {
      console.log('Page Change:', page);
      const html = await this._renderDashboardPage(page);
      document.querySelector('#mainContent').innerHTML = html;
      await this.afterRender();
    };

    await Dashboard.afterRender(
      null,         // onFilterChange
      onPageChange, // onPageChange
      null          // onExcelExport
    );
  },
};

export default DashboardPage;
