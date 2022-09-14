function Contato_onChange_formataTelefone(executionContext) {
    "use strict";

    var logicalNamePhoneNo = "telephone1";
    Mascaras.Js.FormatPhoneNo(executionContext, logicalNamePhoneNo);
}
function Contato_onChange_formataCelular(executionContext) {
    "use strict";

    var logicalNameMoblieNo = "mobilephone";
    Mascaras.Js.FormatPhoneNo(executionContext, logicalNameMoblieNo);
}
function Contato_onChange_formataCEP(executionContext) {
    "use strict";

    var logicalNameCep = "address1_postalcode";
    Mascaras.Js.FormatCEP(executionContext, logicalNameCep);
}