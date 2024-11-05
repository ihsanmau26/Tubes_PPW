$(document).ready(function () {
    $.getJSON('js/json/account.json', function(data) {
        const account = data.account[0];

        $('#profile-name').text(account.name);
        $('#profile-email').text(account.email);
        $('#profile-password').text(account.password);
        $('.profile-name').text(account.name);
        $('.profile-picture').attr('src', account.foto_profil);
    });

    $('.btn-profile-photo').on('click', function () {
        alert('Fitur ganti foto profil belum diimplementasikan.');
    });
});
