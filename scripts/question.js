$(function() {
    window.Scoute.Init();
    window.Scoute.ModifierUrls();
    window.Scoute.LogOuverture();

    $("#formIndices").submit(function(e) {
        e.preventDefault();

        var reponseSaisie = $("#choixReponse").val();
        var reponse = $("#r").val();

        if (!$('.alert').is(':visible')) {
            window.Scoute.LogReponse(reponseSaisie);
        }

        if (reponseSaisie.toUpperCase() === reponse.toUpperCase()) {
            $('.alert').fadeIn(200);
            $('.alert')[0].scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            $("#choixReponse").effect("shake");
            $("#choixReponse").val('');
        }
    });

    $('#btnDemandeIndice').click(function() {
        var $element = $('.indice:not(:visible):first').parents('li');

        if ($element.length > 0) {
            window.Scoute.LogIndice();
            $element.show();
            $element[0].scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    });
});