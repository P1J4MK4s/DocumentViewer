with (Vintasoft.Shared) {

    // specify web services, which should be used in this demo
    var fileService = new WebServiceControllerJS("/api/MyVintasoftFileApi");

    WebServiceJS.defaultFileService = fileService;
    WebServiceJS.defaultImageCollectionService = new WebServiceControllerJS("/api/MyVintasoftImageCollectionApi");
    WebServiceJS.defaultImageService = new WebServiceControllerJS("/api/MyVintasoftImageApi");
}

/**
 Creates UI button for showing information about opened PDF document.
*/
function __createShowInformationAboutPDFDocument() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiButtonJS({
        cssClass: "vsdv-button",
        title: "Show information about PDF document",
        onClick: function (event, uiElement) {
            // get the document viewer
            var docViewer = uiElement.get_DocumentViewer();
            // if it exist
            if (docViewer != null) {
                // get image viewer
                var viewer = docViewer.get_ImageViewer();
                // get focused image
                var focusedImage = viewer.get_FocusedImage();
                // get PDF document page associated with focused image
                var pdfPage = Vintasoft.Imaging.Pdf.WebPdfDocumentControllerJS.getPageAssociatedWithImage(focusedImage);
                // message with information about PDF document
                var message = "";
                // if PDF page exists
                if (pdfPage != null) {
                    // get PDF document
                    var doc = pdfPage.get_Document();
                    // if information about PDF document is available
                    if (doc.isDocumentInfoReceived()) {
                        // get information about PDF document
                        var info = doc.getDocumentInfo();
                        // add information about document to the message
                        for (var key in info) {
                            message += key + " : " + info[key] + "\n";
                        }
                    }
                    // else
                    else {
                        // specify that information about PDF document is not available
                        message = "Information about PDF document is not available, call the requestDocumentInfo method."
                    }
                }
                // else
                else {
                    // specify that PDF document, which is associated with focused image, does not exist
                    message = "The focused image is not associated with PDF page.";
                }
                // show message
                alert(message);
            }
        }
    });
}



// create the default web document viewer settings
var docViewerSettings = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer");

// get items of document viewer
var items = docViewerSettings.get_Items();

// get the main menu of document viewer
var mainMenu = items.getItemByRegisteredId("mainMenu");
// if main menu is found
if (mainMenu != null) {
    // get items of main menu
    var mainMenuItems = mainMenu.get_Items();
    // create button
    var showPdfDocumentInfoButton = __createShowInformationAboutPDFDocument();
    // add the button to the menu panel
    mainMenuItems.addItem(showPdfDocumentInfoButton);
}

// create the document viewer
var docViewer = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS(docViewerSettings);