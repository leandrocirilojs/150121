$(document).ready(function() {
    $("#buttonEncurtarTINYLINK").click(function() {
        if (linkCompletoTINYLINK.value == "" || linkCompletoTINYLINK.value.length < 6) {
            /* Tratamento de Erro */
            $("#divErro").text(`URL Inválida`).removeClass("d-none").slideDown("slow").delay("4000").slideUp("slow")
            console.log("URL Inválida");
        } else {
            var fullLink = linkCompletoTINYLINK.value;
            $.get(`https://tinyurl.com/api-create.php?url=${fullLink }`, function(fullLink) {
                var linkShortTINYLINK = fullLink;
                linkCurtoTiny.value = linkShortTINYLINK;
                AcessarLinkEncurtado.href = linkShortTINYLINK;
                $("#divLinkCopiarTINYLINK").slideDown("slow")
            })
        }
    })
    $("#copiarTINYLINK").click(function() {
        $("#linkCurto").select();
        document.execCommand("copy")
    })
});