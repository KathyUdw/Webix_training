// Bekijk de ingevulde values, alleen als alle verplichte velden ingevuld zijn
function getFormValues() {
    if($$("gebruikersformulier").validate()){
        var valueFormulier = $$("gebruikersformulier").getValues();
        console.log('Huidige waarden: ' + JSON.stringify(valueFormulier, null, ' '));
    } else {
        console.log('Vul eerst alle verplichte velden in');
    }
};

// Haal de default values op (voor enige aanpassingen), plaats ze terug met setValues en verwijder validation teksten
function resetFormulier() {
    var original = $$("gebruikersformulier").getCleanValues();
    $$("gebruikersformulier").setValues(original);
    $$("gebruikersformulier").clearValidation();
}