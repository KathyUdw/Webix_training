var special_offer_coffee = {
    header: "Coffee offers",
    headerHeight: 60,
    headerAltHeight: 60,
    body: {
        view: "dataview",
        data: coffee_offers,
        css: "coffee_box",
        item: {
            width:400,
            height:400
        },
        template: `<div>
            <img src="#image#" alt="#title#"/>
            <div class="block">
                <button class="webixbutton button">Remove offer</button>
            </div>
        </div>`
    }
};

var special_offer_cake = {
    header: "Cake offers",
    headerHeight: 60,
    headerAltHeight: 60,
    collapsed: true,
    body: {
        view: "dataview",
        data: cake_offers,
        css: "coffee_box",
        item: {
            width:400,
            height:400
        },
        template: `<div>
            <img src="#image#" alt="#title#"/>
            <div class="block">
                <button class="webixbutton button">Remove offer</button>
            </div>
        </div>`
    }
};

var special_offer_cocktail = {
    header: "Cocktail offers",
    headerHeight: 60,
    headerAltHeight: 60,
    collapsed: true,
    body: {
        view: "dataview",
        data: cocktail_offers,
        css: "coffee_box",
        item: {
            width:400,
            height:400
        },
        template: `<div>
            <img src="#image#" alt="#title#"/>
            <div class="block">
                <button class="webixbutton button">Remove offer</button>
            </div>
        </div>`
    }
};
var special_offers = {
    view: "accordion",
    multi: false,
    type: "space",
    css: "accordion accordionitem_animation",
    rows: [
        special_offer_coffee,
        special_offer_cake,
        special_offer_cocktail
    ]
};