$(document).ready(function() {
    $("#buttonEncurtarISGD").click(function() {
        if (linkCompleto2.value == "" || linkCompleto2.value.length < 6) {
            /* Tratamento de Erro */
            $("#divErro").text(`URL Inválida`).removeClass("d-none").slideDown("slow").delay("4000").slideUp("slow")
            console.log("URL Inválida");

        } else {
            var longoURL = linkCompleto2.value;
            $.getJSON("https://is.gd/create.php?callback=?", {
                url: longoURL,
                format: "json"
            }).done(function(data) {
                if (data.shorturl == undefined) {
                    /* Tratamento de Erro */
                    $("#divErro").text(`A URL não é Inválida. Undefined`).removeClass("d-none").slideDown("slow").delay("4000").slideUp("slow")
                    console.log("URL Inválida")
                } else {
                    linkCurtoISGD.value = data.shorturl
                    $("#divLinkCopiarIsGd").slideDown("slow")
                    AcessarLinkEncurtadoISGD.href = data.shorturl
                }
            })
        }
    })

    $("#copiarTimiLinkISGD").click(function() {
        $("#linkCurtoISGD").select()
        document.execCommand('copy')
    })


})