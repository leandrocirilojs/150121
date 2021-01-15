$(document).ready(function() {
    $(this).ajaxStart(function() {
        $("#carregando").removeClass("d-none")
        $("#carregando").addClass("d-block")
            /* Tratamento de Erro */
        $("#divErro").slideUp("slow").removeClass("d-block").addClass("d-none").text("")
            /* divErro.innerHTML = ""; */
    })
    $(this).ajaxStop(function() {
            $("#carregando").removeClass("d-block")
            $("#carregando").addClass("d-none")
        })
        /*  $(this).ajaxError(function(){
             $("#carregando").removeClass("d-block")
             $("#carregando").addClass("d-none")
         }) */

    $(document).ajaxError(function(event, request, settings) {
        /* console.log(`Não consigo encontrar a pagina ${settings.url} para requisição.`) */
        $("#divErro").text(`A URL não é Inválida. Erro: ${request.status}`).removeClass("d-none").slideDown("slow").delay("4000").slideUp("slow")
    })

})