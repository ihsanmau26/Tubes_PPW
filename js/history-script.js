$(document).ready(function() {
    function loadHistory() {
        $.getJSON('js/json/history.json', function(historyData) {
            const $tbody = $('.history tbody');
            $tbody.empty();

            $.each(historyData, function(index, history) {
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

    loadHistory();
});
