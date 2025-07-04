import DeviceManagement from './device-management.js';

const FormDevice = {
  async render() {
    return `
      <form class="device-form" id="deviceForm">
        <div class="form-group">
          <label for="deviceName" class="form-label">Device Name</label>
          <input type="text" id="deviceName" class="form-input" placeholder="Device Name" required>
        </div>
        <div class="form-group">
          <label for="location" class="form-label">Location</label>
          <input type="text" id="location" class="form-input" placeholder="Location" required>
        </div>
        <div class="form-group">
          <label for="uuid" class="form-label">UUID</label>
          <input type="text" id="uuid" class="form-input" placeholder="UUID" required>
        </div>
        <div class="form-group">
          <label for="longitude" class="form-label">Longitude</label>
          <input type="text" id="longitude" class="form-input" placeholder="Longitude">
        </div>
        <div class="form-group">
          <label for="latitude" class="form-label">Latitude</label>
          <input type="text" id="latitude" class="form-input" placeholder="Latitude">
        </div>
        <div class="form-group">
          <label for="photo" class="form-label">Photo</label>
          <input type="file" id="photo" class="form-file" accept="image/*">
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-save">Save</button>
          <button type="button" class="btn btn-cancel" id="cancelBtn">Cancel</button>
        </div>
      </form>
    `;
  },

  async afterRender() {
    // Cancel: kembali ke dashboard management
    document.getElementById('cancelBtn').addEventListener('click', async () => {
      document.getElementById('mainContent').innerHTML = await DeviceManagement.render();
      await DeviceManagement.afterRender();
    });

    // Save: contoh handler
    document.getElementById('deviceForm').addEventListener('submit', (e) => {
      e.preventDefault();
      // Proses simpan data di sini
      alert('Device saved!');
    });
  }
};

export default FormDevice;