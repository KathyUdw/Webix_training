var map_icon = "../images/map_marker.svg";
var person_image = "../images/coffee_monkey.jpg";
var shops = {
    cols: [
        {
            view: "google-map",
            id: "map",
            key: "",
            css: "map",
            zoom: 4,
            center: [ 33.348885, -60.820313 ],
            data: [
                { id: 1, lat: 40.730610, lng: -73.935242, title: "Webix Coffee New York City Office", icon: map_icon },
                { id: 2, lat: 25.761681, lng: -80.191788, title: "Webix Coffee Miami Office", icon: map_icon }
            ]
        },
        {
            view: "organogram",
            id: "staffOrganogram",
            url: "https://api.myjson.com/bins/cga85",
            select: true,
            item: {
                marginX: 80,
                marginY: 80,
                listMarginX: 30,
                listMarginY: 40,
                lineColor: "#665476",
                width: 200
            },
            css: "organogram",
            template: function(obj){
                var image = obj.image ? obj.image : person_image;
                var html = "<img src=" + image + " class='avatar'></img>" +
                            "<div class='wrapper'>" +
                                "<p>" + obj.person + "</p>" +
                                "<p>" + obj.value + "</p>" +
                            "</div>";
                return html
            }
        }
    ]
}