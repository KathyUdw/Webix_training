var customers = {
    padding: 20,
    margin: 20,
    rows: [
        {
            margin: 20,
            cols: [
                {view: "button", label: "Add customer", type: "iconButton", icon: "plus",
                    autowidth: true, css: "btn", disabled: true},
                {view: "button", label: "Delete customer", type: "iconButton", icon: "trash",
                    autowidth: true, css: "btn", click: function(){
                        var sel = $$("clientTable").getSelectedId();
                        if (sel) $$("clientTable").remove(sel.row);
                        else return false
                    }
                },
                {}
            ]
        },
        {
            view: "datatable",
            id: "clientTable",
            css: "datatable",
            data: client_data,
            columns: [
                { id: "id", header: [{ text: "#" }, { text: "<span class='webix-icon fa fa-filter'></span>" }], width: 50, sort: "int" },
                { id: "fullname", header: [{ text: "Full name" }, { content: "textFilter" }],
                    fillspace: true, sort: "string", editor: "text" },
                { id: "branch", header: [{ text: "Branch" }, { content: "richSelectFilter" }], width: 150,
                    options: ["New York City", "Miami"], editor: "richselect" },
                { id: "level", header: [{ text: "Discount level" }, { content: "richSelectFilter" }], width: 150,
                    options: ["Platinum", "Gold", "Silver", "Bronze"], editor: "richselect" },
                { id: "carddate", header: [{ text: "Client since" }, { text: "" }] },
                { header: [{ text: "Action" }, { text: "" }], template: "{common.editIcon}", width: 60 }
            ],
            scroll: false,
            type: {
                trashIcon: "<span class='webix-icon fa fa-trash'></span>",
                editIcon: "<span class='webix-icon fa fa-pencil'></span>"
            },
            pager: "pager",
            borderless: true,
            yCount: 5,
            select: true,
            editable: true,
            editaction: "dblclick"
        },
        {
            view: "pager",
            id: "pager",
            css: "pager",
            size: 5,
            template: "{common.prev()} {common.pages()} {common.next()}"
        },
        {}
    ]
}