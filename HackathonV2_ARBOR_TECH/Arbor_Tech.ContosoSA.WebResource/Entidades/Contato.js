function Contato_onChange_formataTelefone(executionContext) {
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
function Contato_onChange_formataCelular(executionContext) {
    "use strict";

    var formContext = executionContext.getFormContext();

    var logicalNameMoblieNo = "mobilephone";
    var mobileNo = formContext.getAttribute(logicalNameMoblieNo).getValue();
    var mobileNoFormatted = Mascaras.Js.FormatPhoneNo(mobileNo);

    if (mobileNoFormatted !== "erro") {
        formContext.getAttribute(logicalNameMoblieNo).setValue(mobileNoFormatted);
    }
    else {
        formContext.getAttribute(logicalNameMoblieNo).setValue(null);
    }
}
function Contato_onChange_formataCEP(executionContext) {
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