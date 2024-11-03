$(document).ready(function() {
    function loadArticles() {
        $.getJSON('js/json/article.json', function(articles) {
            const $tbody = $('.articles tbody');
            $tbody.empty();

            if (articles.length > 0) {
                $.each(articles, function(index, article) {
                    const articleHTML = `
                        <tr>
                            <td>${article.title}</td>
                            <td>${article.description}</td>
                            <td><img src="${article.image}" alt="Profile of ${article.title}" class="profile-img" width="50"></td>
                            <td>
                                <button class="btn-primary">Detail</button>
                                <button class="btn-warning">Edit</button>
                                <button class="btn-danger">Hapus</button>
                            </td>
                        </tr>
                    `;
                    $tbody.append(articleHTML);
                });
            } else {
                $tbody.append('<tr><td colspan="4">No articles found.</td></tr>');
            }
        }).fail(function() {
            console.error('Error loading articles');
        });
    }

    loadArticles();
});
