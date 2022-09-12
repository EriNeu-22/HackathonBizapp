function FormatCPF(executionContext) {
    "use strict";

    var formContext = executionContext.getFormContext();
    var cnpj = formContext.getAttribute("arbor_cnpj").getValue();
    var cnpjformatted = Mascaras.Js.FormatCNPJ(cnpj);
    if (cnpjformatted.length > 19) {
        formContext.getAttribute("arbor_cnpj").setValue(cnpjformatted);
    } else {
        //cnpj esta no formato errado
    }
}