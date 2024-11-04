$(document).ready(function() {
    function loadSchedule() {
        $.getJSON('js/json/schedule.json', function(schedules) {
            const $tbody = $('.schedule tbody');
            $tbody.empty();

            $.each(schedules, function(index, schedule) {
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

    loadSchedule();
});
