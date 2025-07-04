const Dashboard = {
  async render() {
    return `
      <div class="dashboard-header">
      </div>
<div class="summary-cards">
  <div class="summary-card">
    <img src="icons/heartbeat.png" alt="heartbeat" class="icon-summary" />
    Total Devices <h2>80</h2>
  </div>
  <div class="summary-card">
    <img src="icons/param.png" alt="param report" class="icon-summary" />
    Selected Device <h2>80</h2>
  </div>
  <div class="summary-card">
    <img src="icons/regis.png" alt="registration" class="icon-summary" />
    Voltage <h2>80</h2>
  </div>
  <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Battery <h2>240</h2>
  </div>  <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Last Update <h2>240</h2>
  </div>
    <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Status <h2>240</h2>
  </div>
    <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Last Acitivity <h2>240</h2>
  </div>
</div>


      <div class="data-section mt-4">
        
        <div class="judul">
          <div class="judul"> Message Type </div>
          <div class="judul"> Start Date </div>
          <div class="judul"> End Date </div>
        </div>
        
        <div class="filters">
          <select>
            <option>All Message Type</option>
          </select>
          <input type="date" value="" />
          <input type="date" value="" />
          <button class="btn btn-success">Filter Date</button>
          <button class="btn btn-secondary">Reset Date</button>
        </div>

        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>IMEI</th>
                <th>ID Container</th>
                <th>Type</th>
                <th>Timestamp</th>
                <th>Battery Voltage</th>
                <th>Battery Level</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>2</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>3</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>4</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>5</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>6</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>7</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>8</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>9</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>10</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>11</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>12</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>13</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>14</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>15</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>16</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>17</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>18</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>19</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>20</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>21</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>23</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>24</td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
              <tr><td>25/td><td>324293472937</td><td>TAKU 245267-0</td><td>Heartbeat</td><td>2025-07-03  15:42:42</td><td>34 V</td><td>99%</td></tr>
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
    // Tambahkan interaksi jika diperlukan
  }
};

export default Dashboard;
