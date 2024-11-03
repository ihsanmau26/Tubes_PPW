$(document).ready(function() {
    
    function loadAdmin() {
        $.getJSON('js/json/account.json', function(data) {
            const adminName = data.account[0].name;
            $('.welcome span').text(adminName);
        }).fail(function() {
            console.error('Error loading admin account');
        });
    }
    
    function loadArticles() {
        $.getJSON('js/json/article.json', function(articles) {
            const $row = $('.row');
            $row.empty();

            $.each(articles.slice(0, 3), function(index, article) {
                const articleHTML = `
                    <div class="col">
                        <div class="card">
                            <img src="${article.image}" class="card-img-top" alt="${article.title}">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}</p>
                                <div class="card-link">
                                    <a href="#" class="btn">Baca Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $row.append(articleHTML);
            });
        }).fail(function() {
            console.error('Error loading articles');
        });
    }

    function loadSchedule() {
        $.getJSON('js/json/schedule.json', function(schedules) {
            const $tbody = $('.schedule tbody');
            $tbody.empty();

            $.each(schedules.slice(0, 5), function(index, schedule) {
                const scheduleHTML = `
                    <tr>
                        <td>${schedule.nama_pasien}</td>
                        <td>${schedule.nama_dokter}</td>
                        <td>${schedule.jenis_pengobatan}</td>
                        <td>${new Date(schedule.jam_pengobatan).toLocaleString()}</td>
                        <td>
                            <button class="btn-primary">Detail</button>
                            <button class="btn-warning">Edit</button>
                            <button class="btn-danger">Hapus</button>
                        </td>
                    </tr>
                `;
                $tbody.append(scheduleHTML);
            });
        }).fail(function() {
            console.error('Error loading schedule');
        });
    }

    function loadHistory() {
        $.getJSON('js/json/history.json', function(historyData) {
            const $tbody = $('.history tbody');
            $tbody.empty();

            $.each(historyData.slice(0, 5), function(index, history) {
                const historyHTML = `
                    <tr>
                        <td>${history.nama_pasien}</td>
                        <td>${history.nama_dokter}</td>
                        <td>${history.obat.join(', ')}</td>
                        <td>${history.diagnosis_penyakit}</td>
                        <td>${history.catatan_dokter}</td>
                        <td>
                            <button class="btn-primary">Detail</button>
                            <button class="btn-warning">Edit</button>
                            <button class="btn-danger">Hapus</button>
                        </td>
                    </tr>
                `;
                $tbody.append(historyHTML);
            });
        }).fail(function() {
            console.error('Error loading history');
        });
    }

    function loadPatients() {
        $.getJSON('js/json/patient.json', function(patients) {
            const $tbody = $('.patients tbody');
            $tbody.empty();

            $.each(patients.slice(0, 5), function(index, patient) {
                const patientHTML = `
                    <tr>
                        <td>${patient.email}</td>
                        <td>${patient.nama}</td>
                        <td>${patient.no_telp}</td>
                        <td><img src="${patient.foto_profil}" alt="Profile of ${patient.nama}" class="profile-img" width="50"></td>
                        <td>
                            <button class="btn-primary">Detail</button>
                            <button class="btn-warning">Edit</button>
                            <button class="btn-danger">Hapus</button>
                        </td>
                    </tr>
                `;
                $tbody.append(patientHTML);
            });
        }).fail(function() {
            console.error('Error loading patients');
        });
    }

    function loadDoctors() {
        $.getJSON('js/json/doctor.json', function(doctors) {
            const $tbody = $('.doctors tbody');
            $tbody.empty();

            $.each(doctors.slice(0, 5), function(index, doctor) {
                const shifts = doctor.waktu_shift.map(shift => `${shift.hari}: ${shift.jam_mulai} - ${shift.jam_selesai}`).join('<br>');
                const doctorHTML = `
                    <tr>
                        <td>${doctor.email}</td>
                        <td>${doctor.nama}</td>
                        <td>${doctor.no_telp}</td>
                        <td><img src="${doctor.foto_profil}" alt="Profile of ${doctor.nama}" class="profile-img" width="50"></td>
                        <td>${doctor.spesialis}</td>
                        <td>${shifts}</td>
                        <td>
                            <button class="btn-primary">Detail</button>
                            <button class="btn-warning">Edit</button>
                            <button class="btn-danger">Hapus</button>
                        </td>
                    </tr>
                `;
                $tbody.append(doctorHTML);
            });
        }).fail(function() {
            console.error('Error loading doctors');
        });
    }

    loadAdmin();
    loadArticles();
    loadSchedule();
    loadHistory();
    loadPatients();
    loadDoctors();
});
