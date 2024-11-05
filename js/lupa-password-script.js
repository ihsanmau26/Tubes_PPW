$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const inputEmail = $('#email').val();


        $.getJSON('js/json/account.json', function(data) {
            let isEmailFound = false;
            
            data.account.forEach(account => {
                if (account.email === inputEmail) {
                    isEmailFound = true;
                    return false;
                }
            });

            if (isEmailFound) {
                alert('Verifikasi ubah password sudah dikirim ke email Anda.');
                window.location.href = 'login.html';
            } else {
                alert('Email tidak ditemukan.');
            }
        }).fail(function() {
            alert('Gagal memuat data akun.');
        });
    });
});
