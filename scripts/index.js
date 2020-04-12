$(function() {
    $("#formIndices").submit(function(e) {
        e.preventDefault();

        var urlPage = "/dd.github.io/indices/" + $("#choixReponse").val();

        $.ajax({
            type: 'get',
            url: urlPage,
            success: function(data, textStatus, XMLHttpRequest) {
                location.href = urlPage;
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Ça marche pas ;)");
            }
        });
    });
});