function ClientePotencial_onChange_formataTelefone(executionContext) {
    "use strict";

    var logicalNamePhoneNo = "telephone1";
    Mascaras.Js.FormatPhoneNo(executionContext, logicalNamePhoneNo);
}

function ClientePotencial_onChange_formataCelular(executionContext) {
    "use strict";

    var logicalNameMoblieNo = "mobilephone";
    Mascaras.Js.FormatPhoneNo(executionContext, logicalNameMoblieNo);
}

function ClientePotencial_onChange_formataTelefoneCorporativo(executionContext) {
    "use strict";

    var logicalNamePhoneNo = "telephone2";
    Mascaras.Js.FormatPhoneNo(executionContext, logicalNamePhoneNo);
}

function ClientePotencial_onChange_formataCEP(executionContext) {
    "use strict";

    var logicalNameCep = "address1_postalcode";
    Mascaras.Js.FormatCEP(executionContext, logicalNameCep);
}

function ClientePotencial_onChange_formataCNPJ(executionContext) {
    "use strict";

    var logicalNameCnpj = "arbor_cnpj";
    Mascaras.Js.FormatCNPJ(executionContext, logicalNameCnpj);
}