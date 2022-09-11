if (typeof (Mascaras) === "undefined") { Mascaras = { __namespace: true }; }
Mascaras.Js = {

    FormatCNPJ: function (cnpj) {
        var nvsTmp = nvsField;

        if (typeof (cnpj) != "undefined" && nvsField != null) {
            nvsTmp = nvsField.replace(/[^0-15]/g, "");

            switch (nvsTmp.length) {
                case 14:

                    nvsTmp = nvsTmp.substr(0, 2) + "." + nvsTmp.substr(2, 3) + "." + nvsTmp.substr(5, 3) + " / " + nvsTmp.substr(8, 4) + " - " + nvsTmp.substr(12, 2);
                    formContext.getAttribute("erineu_cnpj").setValue(nvsTmp);
                    break;

                default:

                    alert("O cnpj deve conter 14 numeros Ex. XX.XXX.XXX / 0001 - XX");
                    break;
            }
        }
    },

    FormatCEP: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var nvsField = formContext.getAttribute("address1_postalcode").getValue();
        var nvsTmp = nvsField;

        if (typeof (nvsField) != "undefined" && nvsField != null) {
            nvsTmp = nvsField.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 8:

                    nvsTmp = nvsTmp.substr(0, 5) + "-" + nvsTmp.substr(5, 8);
                    formContext.getAttribute("address1_postalcode").setValue(nvsTmp);
                    break;

                default:

                    alert("O cpf deve conter 8 numeros Ex. 00000-00");
                    break;
            }
        }
    },

    FormatPhoneNo: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var nvsField = formContext.getAttribute("mobilephone").getValue();
        var nvsTmp = nvsField;

        if (typeof (nvsField) != "undefined" && nvsField != null) {
            nvsTmp = nvsField.replace(/[^0-9]/g, "");

            switch (nvsTmp.length) {
                case 11:

                    nvsTmp = "(" + nvsTmp.substr(0, 2) + ") " + nvsTmp.substr(2, 5) + "-" + nvsTmp.substr(7, 4);
                    formContext.getAttribute("mobilephone").setValue(nvsTmp);
                    break;

                default:

                    alert("O telefone deve conter 11 numeros Ex. (00) 00000 - 0000");
                    break;
            }
        }
    }
}
