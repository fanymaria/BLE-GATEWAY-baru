const Dashboard = {
  async render(data = {}) {
    // Default data structure jika tidak ada data yang diberikan
    const defaultData = {
      summary: {
        totalDevices: 0,
        selectedDevice: 0,
        voltage: 0,
        battery: 0,
        lastUpdate: 'N/A',
        status: 'N/A'
      },
      tableData: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        hasNext: false,
        hasPrev: false
      },
      filters: {
        messageTypes: ['All Message Type'],
        startDate: '',
        endDate: ''
      }
    };

    // Merge data dengan default data
    const dashboardData = { ...defaultData, ...data };

    return `
      <div class="summary-cards">
        <div class="summary-card">
          <img src="icons/heartbeat.png" alt="heartbeat" class="icon-summary" />
          Total Devices <h2>${dashboardData.summary.totalDevices}</h2>
        </div>
        <div class="summary-card">
          <img src="icons/param.png" alt="param report" class="icon-summary" />
          Selected Device <h2>${dashboardData.summary.selectedDevice}</h2>
        </div>
        <div class="summary-card">
          <img src="icons/regis.png" alt="registration" class="icon-summary" />
          Voltage <h2>${dashboardData.summary.voltage}</h2>
        </div>
        <div class="summary-card">
          <img src="icons/total.png" alt="total message" class="icon-summary" />
          Battery <h2>${dashboardData.summary.battery}</h2>
        </div>
        <div class="summary-card">
          <img src="icons/total.png" alt="total message" class="icon-summary" />
          Last Update <h2>${dashboardData.summary.lastUpdate}</h2>
        </div>
        <div class="summary-card">
          <img src="icons/total.png" alt="total message" class="icon-summary" />
          Status <h2>${dashboardData.summary.status}</h2>
        </div>
      </div>
      <br>
      
      <div class="data-toggle">
        <span id="tab-table" class="tab active">Tabel Data </span>
        <span id="atau" class="atau">/ </span>
        <span id="tab-graphic" class="tab">Graphic Data</span>
      </div>
      <br>

      <div id="data-table-section" class="table-responsive mt-4">
        <div class="judul">
          <div class="judul"> Device IMEI </div>
          <div class="start"> Start Date </div>
          <div class="end"> End Date </div>
        </div>
        
        <div id="graphic-section" class="data-section mt-4" style="display: none;">
          <h5>Graphic Data</h5>
          <p>Visualisasi data akan ditampilkan di sini.</p>
        </div>

        <div class="filters">
          <select id="message-type-filter">
            ${dashboardData.filters.messageTypes.map(type => 
              `<option value="${type}">${type}</option>`
            ).join('')}
          </select>
          <div class="date-group">
            <input type="date" id="start-date" value="${dashboardData.filters.startDate}" />
            <input type="date" id="end-date" value="${dashboardData.filters.endDate}" />
          </div>
          <button class="btn btn-success" id="filter-btn">Filter Date</button>
          <button class="btn btn-secondary" id="reset-btn">Reset Date</button>
          <button class="btn btn-excel" id="excel-btn">
            <img src="public/icons/download.png" class="icon-btn">Excel
          </button>
        </div>
        
        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>SN Sensor</th>
                <th>ID Container</th>
                <th>Type</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              ${this.renderTableRows(dashboardData.tableData)}
            </tbody>
          </table>
        </div>

        ${this.renderPagination(dashboardData.pagination)}
      </div>
    `;
  },

  renderTableRows(tableData) {
    if (!tableData || tableData.length === 0) {
      return `<tr><td colspan="5" class="text-center">Tidak ada data tersedia</td></tr>`;
    }

    return tableData.map((row, index) => `
      <tr>
        <td>${row.no || index + 1}</td>
        <td>${row.imei || 'N/A'}</td>
        <td>${row.idContainer || 'N/A'}</td>
        <td>${row.type || 'N/A'}</td>
        <td>${row.timestamp || 'N/A'}</td>
      </tr>
    `).join('');
  },

  renderPagination(pagination) {
    const { currentPage, totalPages, hasPrev, hasNext } = pagination;
    
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return `
      <div class="pagination">
        <button ${!hasPrev ? 'disabled' : ''} data-page="${currentPage - 1}">&lt;</button>
        ${pageNumbers.map(page => `
          <button class="${page === currentPage ? 'active' : ''}" data-page="${page}">${page}</button>
        `).join('')}
        <button ${!hasNext ? 'disabled' : ''} data-page="${currentPage + 1}">&gt;</button>
      </div>
    `;
  },

  async afterRender(onFilterChange, onPageChange, onExcelExport) {
    const tabTable = document.getElementById('tab-table');
    const tabGraphic = document.getElementById('tab-graphic');
    const tableSection = document.getElementById('data-table-section');
    const graphicSection = document.getElementById('graphic-section');

    tabTable?.addEventListener('click', () => {
      tabTable.classList.add('active');
      tabGraphic.classList.remove('active');
      tableSection.style.display = 'block';
      graphicSection.style.display = 'none';
    });

    tabGraphic?.addEventListener('click', () => {
      tabGraphic.classList.add('active');
      tabTable.classList.remove('active');
      tableSection.style.display = 'none';
      graphicSection.style.display = 'block';
    });

    const filterBtn = document.getElementById('filter-btn');
    const resetBtn = document.getElementById('reset-btn');
    const excelBtn = document.getElementById('excel-btn');

    if (filterBtn && onFilterChange) {
      filterBtn.addEventListener('click', () => {
        const messageType = document.getElementById('message-type-filter').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        onFilterChange({ messageType, startDate, endDate });
      });
    }

    if (resetBtn && onFilterChange) {
      resetBtn.addEventListener('click', () => {
        document.getElementById('message-type-filter').value = 'All Message Type';
        document.getElementById('start-date').value = '';
        document.getElementById('end-date').value = '';
        
        onFilterChange({ messageType: 'All Message Type', startDate: '', endDate: '' });
      });
    }

    if (excelBtn && onExcelExport) {
      excelBtn.addEventListener('click', onExcelExport);
    }

    const paginationBtns = document.querySelectorAll('.pagination button[data-page]');
    paginationBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const page = parseInt(btn.dataset.page);
        if (onPageChange) {
          onPageChange(page);
        }
      });
    });
  }
};

export default Dashboard;
