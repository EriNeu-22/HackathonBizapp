if (typeof (Mascaras) === "undefined") { Mascaras = { __namespace: true }; }
Mascaras.Js = {

    FormatCNPJ: function (cnpj) {
        "use strict";
        var nvsTmp = cnpj;

        if (typeof (cnpj) !== "undefined" && cnpj !== null) {
            nvsTmp = cnpj.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 14:

                    nvsTmp = nvsTmp.substr(0, 2) + "." + nvsTmp.substr(2, 3) + "." + nvsTmp.substr(5, 3) + " / " + nvsTmp.substr(8, 4) + " - " + nvsTmp.substr(12, 2);
                    return (nvsTmp);
                    break;

                default:

                    return ("erro");
                    break;
            }
        }
    },

    FormatCEP: function (cep) {
        "use strict";

        var nvsTmp = cep;

        if (typeof (cep) !== "undefined" && cep !== null) {
            nvsTmp = cep.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 8:

                    nvsTmp = nvsTmp.substr(0, 5) + "-" + nvsTmp.substr(5, 8);
                    return (nvsTmp);
                    break;

                default:

                    return ("erro");
                    break;
            }
        }
    },

    FormatPhoneNo: function (phone) {
        "use strict";

        var nvsTmp = phone;

        if (typeof (phone) !== "undefined" && phone !== null) {
            nvsTmp = phone.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 11:

                    nvsTmp = "(" + nvsTmp.substr(0, 2) + ") " + nvsTmp.substr(2, 5) + "-" + nvsTmp.substr(7, 4);
                    return (nvsTmp);
                    break;

                default:

                    return ("erro");
                    break;
            }
        }
    }
}
