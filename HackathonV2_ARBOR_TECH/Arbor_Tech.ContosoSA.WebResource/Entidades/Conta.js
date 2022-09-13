function Conta_onChange_formataCNPJ(executionContext) {
    "use strict";

    var formContext = executionContext.getFormContext();

    var logicalNameCnpj = "arbor_cnpj_conta";
    var cnpj = formContext.getAttribute(logicalNameCnpj).getValue();
    var cnpjFormatted = Mascaras.Js.FormatCNPJ(cnpj);

    if (cnpjFormatted !== "erro") {
        formContext.getAttribute(logicalNameCnpj).setValue(cnpjFormatted);
    }
    else {
        formContext.getAttribute(logicalNameCnpj).setValue(null);
    }
}

function Conta_onChange_formataCEP(executionContext) {
    "use strict";

    var formContext = executionContext.getFormContext();

    var logicalNameCep = "address1_postalcode";
    var cep = formContext.getAttribute(logicalNameCep).getValue();
    var cepFormatted = Mascaras.Js.FormatCEP(cep);

    if (cepFormatted !== "erro") {
        formContext.getAttribute(logicalNameCep).setValue(cepFormatted);
    }
    else {
        formContext.getAttribute(logicalNameCep).setValue(null);
    }
}

function Conta_onChange_formataTelefone(executionContext) {
    "use strict";

    var formContext = executionContext.getFormContext();

    var logicalNamePhoneNo = "telephone1";
    var phoneNo = formContext.getAttribute(logicalNamePhoneNo).getValue();
    var phoneNoFormatted = Mascaras.Js.FormatPhoneNo(phoneNo);

    if (phoneNoFormatted !== "erro") {
        formContext.getAttribute(logicalNamePhoneNo).setValue(phoneNoFormatted);
    }
    else {
        formContext.getAttribute(logicalNamePhoneNo).setValue(null);
    }
}