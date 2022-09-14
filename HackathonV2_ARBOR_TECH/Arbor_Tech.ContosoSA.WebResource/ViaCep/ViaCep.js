function limpa_formulário_cep(logradouro, bairro, cidade, estado) {

    var formContext = executionContext.getFormContext();

    if (logradouro !== "" && logradouro !== null && logradouro !== undefined) {
        formContext.getAttribute(logradouro).setValue("");
    }
    if (bairro !== "" && bairro !== null && bairro !== undefined) {
        formContext.getAttribute(bairro).setValue("");
    }
    if (cidade !== "" && cidade !== null && cidade !== undefined) {
        formContext.getAttribute(cidade).setValue("");
    }
    if (estado !== "" && estado !== null && estado !== undefined) {
        formContext.getAttribute(estado).setValue("");
    }
}

function meu_callback(conteudo) {
    var formContext = executionContext.getFormContext();

    if (!("erro" in conteudo)) {

        formContext.getAttribute("address1_line2").setValue(conteudo.logradouro);
        formContext.getAttribute("address1_line1").setValue(conteudo.bairro);
        formContext.getAttribute("address1_city").setValue(conteudo.localidade);
        formContext.getAttribute("address1_stateorprovince").setValue(conteudo.uf);
    }
    else {
        limpa_cep();
    }
}

function pesquisacep(valor, logradouro, bairro, cidade, estado) {

    var formContext = executionContext.getFormContext();

    var cep = valor.replace(/\D/g, '');

    if (cep !== "") {

        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {

            formContext.getAttribute(logradouro).setValue("...");
            formContext.getAttribute(bairro).setValue("...");
            formContext.getAttribute(cidade).setValue("...");
            formContext.getAttribute(estado).setValue("...");

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        }
        else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    }
    else {
        limpa_formulário_cep();
    }
}
