$(document).ready(function() {
    function loadPatients() {
        $.getJSON('js/json/patient.json', function(patients) {
            const $tbody = $('.patients tbody');
            $tbody.empty();

            $.each(patients, function(index, patient) {
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

    loadPatients();
});
