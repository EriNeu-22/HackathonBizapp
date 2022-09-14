if (typeof (Mascaras) === "undefined") { Mascaras = { __namespace: true }; }
Mascaras.Js = {

    FormatCNPJ: function (executionContext, logicalNameCnpj) {
        "use strict";

        var formContext = executionContext.getFormContext();

        var nvsTmp = cnpj;
        var cnpj = formContext.getAttribute(logicalNameCnpj).getValue();

        if (typeof (cnpj) !== "undefined" && cnpj !== null) {
            nvsTmp = cnpj.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 14:

                    nvsTmp = nvsTmp.substr(0, 2) + "." + nvsTmp.substr(2, 3) + "." + nvsTmp.substr(5, 3) + " / " + nvsTmp.substr(8, 4) + " - " + nvsTmp.substr(12, 2);
                    formContext.getAttribute(logicalNameCnpj).setValue(nvsTmp);
                    break;

                default:

                    formContext.getAttribute(logicalNameCnpj).setValue(null);
                    break;
            }
        }
    },

    FormatCEP: function (executionContext, logicalNameCep) {
        "use strict";

        var formContext = executionContext.getFormContext();

        var cep = formContext.getAttribute(logicalNameCep).getValue();
        var nvsTmp = cep;

        if (typeof (cep) !== "undefined" && cep !== null) {
            nvsTmp = cep.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 8:

                    nvsTmp = nvsTmp.substr(0, 5) + "-" + nvsTmp.substr(5, 8);
                    formContext.getAttribute(logicalNameCep).setValue(nvsTmp);
                    break;

                default:

                    formContext.getAttribute(logicalNameCep).setValue(null);
                    break;
            }
        }
    },

    FormatPhoneNo: function (executionContext, logicalNamePhoneNo) {
        "use strict";

        var formContext = executionContext.getFormContext();

        var phone = formContext.getAttribute(logicalNamePhoneNo).getValue();
        var nvsTmp = phone;

        if (typeof (phone) !== "undefined" && phone !== null) {
            nvsTmp = phone.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 11:

                    nvsTmp = "(" + nvsTmp.substr(0, 2) + ") " + nvsTmp.substr(2, 5) + "-" + nvsTmp.substr(7, 4);

                    formContext.getAttribute(logicalNamePhoneNo).setValue(nvsTmp);
                    break;

                default:

                    formContext.getAttribute(logicalNamePhoneNo).setValue(null);
                    break;
            }
        }
    }
}
