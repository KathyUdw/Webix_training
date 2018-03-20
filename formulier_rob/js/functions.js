// Bekijk de ingevulde values
function getFormValues() {
    var valueFormulier = $$("gebruikersformulier").getValues();
    console.log('Huidige waarden: ' + JSON.stringify(valueFormulier, null, ' '));
};

// Haal de default values op (voor enige aanpassingen) en plaats ze terug met setValues
function resetFormulier() {
    var original = $$("gebruikersformulier").getCleanValues();
    $$("gebruikersformulier").setValues(original);
}