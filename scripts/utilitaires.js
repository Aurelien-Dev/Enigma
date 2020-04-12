if (window.Scoute == null || typeof(window.Scoute) != "object") { window.Scoute = []; }

window.Scoute.UrlBase = 'https://functscout.azurewebsites.net/api/';

window.Scoute.Init = function() {
    var nomUrl = getUrlVars()['Nom'];

    var nomPresentUrl = typeof(nomUrl) === 'string' && nomUrl.length > 0 && (nomUrl !== 'undefined' || nomUrl !== 'null');

    if (!nomPresentUrl) {
        console.log('demander son nom');
        DemanderNom();
    }
};

window.Scoute.GetNom = function() {
    return getUrlVars()['Nom'];
};

window.Scoute.LogReponse = function(reponse) {
    $.get(window.Scoute.UrlBase + 'AjouterReponseQuestion', {
        NomQuestion: GetNomPageUrl(),
        Reponse: reponse,
        NomPersonne: window.Scoute.GetNom()
    }, function(retourFuncApp) {
        console.log(retourFuncApp);
    });
};

window.Scoute.LogOuverture = function(nom) {
    var nomPage = nom;
    if (typeof nomPage !== 'string') {
        nomPage = GetNomPageUrl();
    }

    $.get(window.Scoute.UrlBase + 'AjouterOuverturePage', {
        NomPage: nomPage,
        NomPersonne: window.Scoute.GetNom()
    }, function(retourFuncApp) {
        console.log(retourFuncApp);
    });
};

window.Scoute.LogIndice = function() {
    $.get(window.Scoute.UrlBase + 'AjouterDemandeIndice', {
        NomQuestion: GetNomPageUrl(),
        NomPersonne: window.Scoute.GetNom()
    }, function(retourFuncApp) {
        console.log(retourFuncApp);
    });
};


window.Scoute.ModifierUrls = function() {
    $('.link-info').each(function(index, element) {
        var $element = $(element);
        var url = $element.attr('href')

        $element.attr('href', url + '?Nom=' + window.Scoute.GetNom());
    });
};

function DemanderNom() {
    var nomJoueur = prompt("Désolé, j'ai oublié ton nom. Est-ce que tu pourrais me le redonner ?", "");
    location.href = location.href.split('?')[0] + '?Nom=' + nomJoueur;
}

function GetNomPageUrl() {
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    return sPage;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}