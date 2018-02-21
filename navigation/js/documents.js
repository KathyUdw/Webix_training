var docTree = {
    view: "tree",
    css: "doc_tree",
    id: "docTree",
    width: 300,
    data: pdf_data,
    drag: true,
    select: true,
    on: {
        onBeforeSelect: function(id){
            return !this.getItem(id).$count
        },
        onAfterSelect: function(id){
            $$("pdf").clear();
            $$("pdf").load("binary->docs/files/"+this.getItem(id).docurl).fail(function(err){
                webix.message({text:"Missing file", type:"error"})
            });
        },
        onAfterAdd: function(id){
            this.blockEvent();
            this.select(id);
            this.unblockEvent();
        }
    }
};
var pdfView = {
    rows: [
        {
            view: "pdfbar",
            id: "pdfbar",
            css: "pdf_toolbar",
            paddingY: 10
        },
        {
            view: "pdfviewer",
            id: "pdf",
            toolbar: "pdfbar",
            css: "pdf_viewer"
        }
    ]
};
var docUpload = {
    view: "uploader",
    inputWidth: 300,
    height: 160,
    upload: "docs/upload.php",
    value: "Choose a PDF file to upload",
    accept: "application/pdf",
    template:
        `<div class='upload_place'>
            <div class='upload_image'></div>
            <span class='upload_text'> Drag files here </span><br />or
            <span onclick='$$(\\\"uploadAPI\\\").fileDialog();' class='upload_browse'>
                browse your computer
            </span>
        </div>`,
    css: "uploader",
    on: {
        onAfterFileAdd: function(upload){
            $$("docTree").add({value:upload.file.name, docurl:upload.file.name});
            $$("pdf").parse(upload.file);
        }
    }
};

var documents = {
    cols: [
        {
            rows: [
                docTree,
                docUpload
            ]
        },
        pdfView
    ]
};