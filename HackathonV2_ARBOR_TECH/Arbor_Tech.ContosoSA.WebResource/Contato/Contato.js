function FormatCPF(executionContext) {
    var formContext = executionContext.getFormContext();
    var nvsField = formContext.getAttribute("erineu_cnpj").getValue();

    if (typeof (nvsField) != "undefined" && nvsField != null) {
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
}