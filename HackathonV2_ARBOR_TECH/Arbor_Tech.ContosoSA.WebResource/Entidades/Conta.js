function Conta_onChange_formataCNPJ(executionContext) {
    "use strict";

    var logicalNameCnpj = "arbor_cnpj_conta";
    Mascaras.Js.FormatCNPJ(executionContext, logicalNameCnpj);
}

function Conta_onChange_formataCEP(executionContext) {
    "use strict";

    var logicalNameCep = "address1_postalcode";
    Mascaras.Js.FormatCEP(executionContext, logicalNameCep);
}

function Conta_onChange_formataTelefone(executionContext) {
    "use strict";

    var logicalNamePhoneNo = "telephone1";
    Mascaras.Js.FormatPhoneNo(executionContext, logicalNamePhoneNo);
}
