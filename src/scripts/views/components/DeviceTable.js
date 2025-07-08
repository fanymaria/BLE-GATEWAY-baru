const DeviceTable = {
  renderTableRows(data) {
    if (!data || data.length === 0) {
      return `<tr><td colspan="6" class="text-center">Tidak ada data</td></tr>`;
    }

    return data.map((row, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${row.imei || 'N/A'}</td>
        <td>${row.uuid || 'N/A'}</td>
        <td>${row.location || 'N/A'}</td>
        <td>${row.type || 'N/A'}</td>
        <td>${row.created_at || 'N/A'}</td>
      </tr>
    `).join('');
  },

  async render(data = []) {
    return `
      <div class="dashboard-header"></div>

      <div class="device-info-header">
        <div class="device-info-header-title">Device Info</div>
        <div class="device-info-header-actions">
          <button class="btn btn-add" id="addDeviceBtn">+ Add Device</button>
          <button class="btn btn-excel">
            <img src="icons/download.png" alt="Download" class="icon-btn">Excel
          </button>
        </div>
      </div>

      <div class="data-section mt-4">
        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>IMEI</th>
                <th>UUID</th>
                <th>Location</th>
                <th>Type</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              ${this.renderTableRows(data)}
            </tbody>
          </table>
        </div>

        <div class="pagination">
          <button disabled>&lt;</button>
          <button>3</button>
          <button class="active">4</button>
          <button>5</button>
          <button>&gt;</button>
        </div>
      </div>
    `;
  },

  async afterRender(onAddDeviceClick) {
    const addBtn = document.getElementById('addDeviceBtn');
    if (addBtn && onAddDeviceClick) {
      addBtn.addEventListener('click', onAddDeviceClick);
    }
  }
};

export default DeviceTable;
