import FormDevice from './formdevice.js';

const DashboardManagement = {
  async render() {
    return `
      <div class="dashboard-header"></div>

      <div class="device-info-header">
        <div class="device-info-header-title">Device Info</div>
        <div class="device-info-header-actions">
          <button class="btn btn-add" id="addDeviceBtn">+ Add Device</button>
          <button class="btn btn-excel">Eksport Exel <span></span></button>
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
                <th>location</th>
                <th>Longtitude</th>
                <th>Latitude</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>324293472937</td><td>TAKU 245267-0</td><td>Jakarta</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>2</td><td>324293472938</td><td>TAKU 245267-1</td><td>Bandung</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>3</td><td>324293472939</td><td>TAKU 245267-2</td><td>Surabaya</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>4</td><td>324293472940</td><td>TAKU 245267-3</td><td>Medan</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>5</td><td>324293472941</td><td>TAKU 245267-4</td><td>Bali</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>6</td><td>324293472942</td><td>TAKU 245267-5</td><td>Makassar</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>7</td><td>324293472943</td><td>TAKU 245267-6</td><td>Semarang</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>8</td><td>324293472944</td><td>TAKU 245267-7</td><td>Yogyakarta</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>9</td><td>324293472945</td><td>TAKU 245267-8</td><td>Palembang</td><td> - </td><td> - </td><td> view </td></tr>
              <tr><td>10</td><td>324293472946</td><td>TAKU 245267-9</td><td>Pontianak</td><td> - </td><td> - </td><td> view </td></tr>
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

  async afterRender() {
    // Event tombol Add Device
    const addBtn = document.getElementById('addDeviceBtn');
    if (addBtn) {
      addBtn.addEventListener('click', async () => {
        // Ganti isi mainContent dengan form device
        document.getElementById('mainContent').innerHTML = await FormDevice.render();
        if (FormDevice.afterRender) await FormDevice.afterRender();
      });
    }
    // Tambahkan interaksi lain jika diperlukan
  }
};

export default DashboardManagement;