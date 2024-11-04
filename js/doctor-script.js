$(document).ready(function() {
    function loadDoctors() {
        $.getJSON('js/json/doctor.json', function(doctors) {
            const $tbody = $('.doctors tbody');
            $tbody.empty();

            $.each(doctors, function(index, doctor) {
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

    loadDoctors();
});
