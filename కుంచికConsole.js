/************************************************************************
 *  కుంచికConsole -- javascript for the కుంచిక graphic language console
 *
 *  Copyright (c) 2015-2019 Kirk Carlson
 *  MIT license
 ************************************************************************/
//console.log("Starting up")

//**GLOBALS***
var helpTextActive = true;
var errorFound = false;


//SUPPORT FUNCTIONS
/************************************************************************
 * cmd -- put text into the command box
 *
 * arguments:
 *   text: (string) string to put into the command box
 *
 * returns:
 *   None
 ************************************************************************/
function cmd (text) {
  document.getElementById("command").value=text;
}


if (window.addEventListener) {
    window.addEventListener("resize", fixDragButton);
} else if (window.attachEvent) {
    window.attachEvent("onresize", fixDragButton);
}


/*************************************************************************
 * onWindowLoad -- handler for when window loads
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function onWindowLoad() {
    fixDragButton()
    // check if an example was requested in the URL
    let కుంచికభాషా = document.getElementById('kuncikaBhaShaa').value;
    const ప్రదర్శన_విధానము= ప్రదర్శన_విధానము_పేరు( కుంచికభాషా );
    let queryString = window.location.search; // was "?..." specified
    if (queryString != undefined && queryString != "") {
        let exampleValue = ""
        let command = ""
        let pos = 0
        //queryString = queryString.substr(1) // get rid of leading '?'... simple case
        // want to (queryStrint + "&").search (/[?&]example=[^=]&/)
        // no want to split string up into separate queries... divide on &
        queries = queryString.split('&')
        console.log("queries was: " + queries + ", " + typeof(queries))
        // check specific queries like
        if (queries != undefined && queries.length > 0) {
            for (let i=0; i<queries.length; i = i+1) {
                pos = queries[i].search(/^\??example=/)
//want to change 'code' to 'exampleValue'
// exampleOption ...name that is displayed
// exampleValue ... example string name ,,, its value is the string itself
                if (pos >=0) {
                    console.log( "ind: " + queries[i] + ", " + typeof(queries[i]))
                    pos = queries[i].indexOf('=')
                    if (pos > 0 && pos < queries[i].length) {
                        exampleValue = queries[i].substr(pos + 1)
                        console.log("example query was: " + exampleValue + ".")
                    } else {
                        console.log("example query was null")
                    }
                }
                pos = queries[i].search(/^\??command=/)
                if (pos >=0) {
                    pos = queries[i].indexOf('=')
                    if (pos > 0 && pos < queries[i].length) {
                        command = queries[i].substr(pos + 1)
                        console.log("command query was: " + command + ".")
                    } else {
                        console.log("command query was null")
                    }
                }
                pos = queries[i].search(/^\??codeblock=/)
                if (pos >=0) {
                    pos = queries[i].indexOf('=')
                    if (pos > 0 && pos < queries[i].length) {
                        codeBlock = queries[i].substr(pos + 1)
                        codeBlock = decodeURIComponent(codeBlock)
                        codeBlock = he.decode(codeBlock)
                        document.getElementById('codeArea').value = codeBlock
                    } else {
                        console.log("command query was null")
                    }
                }
            }

            if (exampleValue != undefined && exampleValue != "") {
                sel = document.getElementById('examples') // post to examples selector
                sel.value = exampleValue; // set selector to requested string
                //... onchange hander should take over

                console.log("sel.value: " + sel.value + ".")
                if (sel.value !== undefined && sel.value !== "") {
                    console.log("almost in it now")
                    try {
                        document.getElementById('codeArea').value = eval(examples.value);
                    } catch (e) {
                        showError(e)
                    }

                    if (command !== undefined || command !== "") { // good enough validation??
                        console.log("in it now")
                        cmd (ప్రదర్శన_విధానము);
                    }
                    console.log("passed it")
                    commandChanged()
                }
            }
        }
    }
}


var draggingleft = false;
var draggingright = false;

/*************************************************************************
 * fixDragButton -- handler to fix the drag buttons
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function fixDragButton() {
    //console.log("fixDragButton")

    let w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth; // variations for cross browser support

    let h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight; // variations for cross browser support
    
    let overallWidth = 1200;
    if (w < 12000) {
        overallWidth = w;
    }

    // work area height
    let overallHeight = h /* guessed margin */;
    let workAreaHeight = h -4 ; /* - 50 /*top displacement* / - 17 /* guessed margin? */;
    if (workAreaHeight < 400) {
        let canvasHeight = 300;
    } else {
        let canvasHeight = workAreaHeight - 140 /* APPROXIMATION space for controls */;
    }

    let wrapWidth = overallWidth - 2; //leftcolWidth + midcolWidth + rightcolWidth;


    // let referencewidth, refLeftPadding , dragleft, containertop, dropbarwidthleft, dropbarwidthright

    let containertop = Number(getStyleValue(document.getElementById("container"), "top").replace("px", ""));

    let wrapElement = document.getElementById("wrap");
    wrapElement.style.width = wrapWidth + "px";
    wrapElement.style.height = overallHeight + "px";

    /* dragbar setup*/

    /* left setup */
    let refElement = document.getElementById("reference");
    let leftcolElement = document.getElementById("leftcolumn")

    let referenceWidth = Number(getStyleValue(document.getElementById("referencewrapper"), "width").replace("px", ""));
    let refTitleHeight = Number(getStyleValue(document.getElementById("referenceTitle"), "height").replace("px", ""));
    let refLeftPadding = Number(getStyleValue(document.getElementById("reference"), "padding-left").replace("px", ""));

    /* center setup */
    midWidth = getStyleValue(document.getElementById("canvaswrapper"), "width").replace("px","");
    midContainerHeight = getStyleValue(document.getElementById("midcolumncontainer"), "height").replace("px","");
    midLeftPadding = getStyleValue(document.getElementById("canvaswrapper"), "padding-left").replace("px","");
    midRightPadding = getStyleValue(document.getElementById("canvaswrapper"), "padding-right").replace("px","");
    canvasTitleHeight = getStyleValue(document.getElementById("canvastitle"), "height").replace("px","");
    commandWrapperHeight = getStyleValue(document.getElementById("commandwrapper"), "height").replace("px","");
    let canvasHeight = midContainerHeight - canvasTitleHeight - commandWrapperHeight -25;
    let canvasWidth = midWidth - midLeftPadding - midRightPadding;

    /* right setup */
    exampleWidth = Number(getStyleValue(document.getElementById("examplewrapper"), "width").replace("px", ""));
    examplesHeight = Number(getStyleValue(document.getElementById("examples"), "height").replace("px", "")); // basically the select height
    examplesMarginTop = Number(getStyleValue(document.getElementById("examples"), "margin-top").replace("px", "")); // around select height
    examplesMarginBottom = Number(getStyleValue(document.getElementById("examples"), "margin-bottom").replace("px", "")); // around select height

    let rightcolElement = document.getElementById("rightcolumn");
    let codeAreaElement = document.getElementById("codeArea");
    let codeAreaRightPadding = Number(getStyleValue(document.getElementById("codeArea"), "padding-right").replace("px", ""));

    /* dragbar attribute setting */
    document.getElementById("dragbarleft").style.width = "5px";
    document.getElementById("dragbarright").style.width = "5px";

    let dropbarwidthleft = Number(getStyleValue(document.getElementById("dragbarleft"), "width").replace("px", ""));
    let dropbarwidthright = Number(getStyleValue(document.getElementById("dragbarright"), "width").replace("px", ""));

    let dragleft = referenceWidth + refLeftPadding + (refLeftPadding / 2) - (dropbarwidthleft / 2);
    let dragright = exampleWidth + codeAreaRightPadding + (codeAreaRightPadding / 2) + (dropbarwidthright / 2);

    document.getElementById("dragbarleft").style.top = containertop + "px";
    document.getElementById("dragbarleft").style.left = dragleft + "px";
    document.getElementById("dragbarleft").style.height = workAreaHeight + "px";/*referenceheight;*/
    document.getElementById("dragbarleft").style.cursor = "col-resize";

    document.getElementById("dragbarright").style.top = containertop + "px";
    document.getElementById("dragbarright").style.right = dragright + "px";
    document.getElementById("dragbarright").style.height = workAreaHeight + "px";/*referenceheight;*/
    document.getElementById("dragbarright").style.cursor = "col-resize";


    /* left attribute setting */

    refElement.style.height = workAreaHeight - refTitleHeight -10 + "px";
    leftcolElement.style.height = workAreaHeight + "px";
    //console.log ("overallheight",overallHeight, "workAreaHeight", workAreaHeight)


    /* center attribute setting */
    imagecanvas.width = canvasWidth;
    imagecanvas.height = canvasHeight;
    కుంచికcanvas.width = canvasWidth;
    కుంచికcanvas.height = canvasHeight;
    document.getElementById("canvaswrapper").style.height = canvasHeight +8+ "px";
    //console.log("midWidth:", midWidth, midLeftPadding, midRightPadding);

    let midcolElement = document.getElementById("midcolumn")
    midcolElement.style.height = workAreaHeight + "px";


    /* right attribute setting */

    rightcolElement.style.height = workAreaHeight + "px";
    codeAreaElement.style.height = (workAreaHeight - examplesHeight - examplesMarginTop - examplesMarginBottom - 45) + "px";

}

/*************************************************************************
 * dragStartLeft -- handler for start of drag with left button
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function dragstartleft(e) {
    e.preventDefault();
    draggingleft = true;
}

/*************************************************************************
 * dragStartRight -- handler for start of drag with right button
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function dragstartright(e) {
    e.preventDefault();
    draggingright = true;
}

/*************************************************************************
 * dragMove -- handler for moving a drag button
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function dragmove(e) {
    if (draggingleft)
    {
        let rect = document.getElementById("dragbarright").getBoundingClientRect();
        //console.log("dragBarRight:", rect.top, rect.right, rect.bottom, rect.left);
        //console.log("window width:", window.innerWidth);
        let rightPercentage = 100 - (rect.left / window.innerWidth) * 100;

        leftPercentage = (e.pageX / window.innerWidth) * 100;
        if (leftPercentage > 1 && leftPercentage < 98) {
            let centerPercentage = 100-leftPercentage-rightPercentage;
            //console.log("left:", leftPercentage, centerPercentage, rightPercentage);
            document.getElementById("leftcolumncontainer").style.width = leftPercentage + "%";
            document.getElementById("midcolumncontainer").style.width = centerPercentage + "%";
            fixDragButton();
        }
    }

    if (draggingright)
    {
        let rect = document.getElementById("dragbarleft").getBoundingClientRect();
        //console.log("dragBarLeft:", rect.top, rect.right, rect.bottom, rect.left);
        //console.log("width:", window.innerWidth);
        let leftPercentage = (rect.right / window.innerWidth) * 100;
        //console.log("leftPercentage:", leftPercentage);

        let rightPercentage = 100 - (e.pageX / window.innerWidth) * 100;
        //console.log("rightPercentage:", rightPercentage);

        if (rightPercentage > 1 && rightPercentage < 98 - leftPercentage) {
            let centerPercentage = 100-rightPercentage-leftPercentage;
            //console.log("right:", leftPercentage, centerPercentage, rightPercentage);
            document.getElementById("rightcolumncontainer").style.width = rightPercentage + "%";
            document.getElementById("midcolumncontainer").style.width = centerPercentage + "%";
            fixDragButton();
        }
    }
}


/*************************************************************************
 * dragEnd -- handler for ending a drag move
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function dragend() {
    draggingleft = false;
    draggingright = false;
    if (window.editor) {
        window.editor.refresh();
    }
}


if (window.addEventListener) {
    document.getElementById("dragbarleft").addEventListener("mousedown", function(e) {dragstartleft(e);});
    document.getElementById("dragbarleft").addEventListener("touchstart", function(e) {dragstartleft(e);});
    document.getElementById("dragbarright").addEventListener("mousedown", function(e) {dragstartright(e);});
    document.getElementById("dragbarright").addEventListener("touchstart", function(e) {dragstartright(e);});
    window.addEventListener("mousemove", function(e) {dragmove(e);});
    window.addEventListener("touchmove", function(e) {dragmove(e);});
    window.addEventListener("mouseup", dragend);
    window.addEventListener("touchend", dragend);
    window.addEventListener("load", onWindowLoad);
}


/*************************************************************************
 * getStyleValue -- function
 *
 * arguments:
 *   elmnt: (object) pointer to object
 *   style: (string) name of the requested style
 *
 * returns:
 *   element style (string)
 *************************************************************************/
function getStyleValue(elmnt,style) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt,null).getPropertyValue(style);
    } else {
        return elmnt.currentStyle[style];
    }
}


//EVENT PROCESSING FUNCTIONS

/*************************************************************************
 * stopClicked -- handler for when stop button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function stopClicked() {
    //console.log("stop clicked")
    ఆట_ఆపు()
}


// set up command field to accept an ENTER without field modification
(() => {
    let command = document.getElementById("command");
    if (command.addEventListener) {
        command.addEventListener("keypress", function(e) {
            if (e.keyCode === 13) {
                commandChanged();
                e.preventDefault();
            }
        }, false);
    } else if (command.attachEvent) {
        command.attachEvent("onkeypress", function(e) {
            if (e.keyCode === 13) {
                commandChanged();
                return e.returnValue = false;
            }
        });
    }
})();

/*************************************************************************
 * resetClicked -- handler for when the reset button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function resetClicked() {
    let కుంచికభాషా = document.getElementById('kuncikaBhaShaa').value;
    const ప్రదర్శన_విధానము = ప్రదర్శన_విధానము_పేరు( కుంచికభాషా );
    cmd (ప్రదర్శన_విధానము); 
    ఆది_స్థితి()
}

/*************************************************************************
 * runClicked -- handler for when the run button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function runClicked() {
    let కుంచికభాషా = document.getElementById('kuncikaBhaShaa').value;
    const ప్రదర్శన_విధానము = ప్రదర్శన_విధానము_పేరు( కుంచికభాషా );
    cmd (ప్రదర్శన_విధానము); 
    commandChanged();
}


/*************************************************************************
 * uploadChanged(e) -- handler for when the upload file name changes
 *
 * arguments:
 *   e: (element object) input file element that has changed
 *
 * returns:
 *   None
 *************************************************************************/
function uploadChanged(e) {
    let file = e.target.files[0];
    if (!file) {
        return;
    }
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('codeArea').value = e.target.result;
    };
    reader.readAsText(file);
}


let get_blob = () => Blob;

/*************************************************************************
 * downloadClicked -- handler for when the download button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   false to prevent further processing
 *************************************************************************/
function downloadClicked(e) {
    e.preventDefault();
    let BB = get_blob();
    saveAs(
        new BB(
            [codeArea.value || codeArea.placeholder]
            , {type: "text/plain;charset=" + document.characterSet}
        )
        , (downloadFilename.value || downloadFilename.placeholder) + ".js"
    );
    return false;
}


/*************************************************************************
 * svgDownloadClicked -- handler for when the SVG download button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   false to prevent further processing
 *************************************************************************/
function svgDownloadClicked(e) {
    e.preventDefault();
    svgClose();
    let BB = get_blob();
    saveAs(
        new BB(
            svgBlob, {type: "text/plain;charset=" + document.characterSet}
        )
        , (downloadFilename.value || downloadFilename.placeholder) + ".svg"
    );
    return false;
}


/*************************************************************************
 * saveCanvasClicked -- handler for when the save canvas button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   false to prevent further processing
 *************************************************************************/
function saveCanvasClicked(e) {
    e.preventDefault();
    let BB = get_blob();
    saveAs(
        new BB(
            [codeArea.value || codeArea.placeholder]
            , {type: "text/plain;charset=" + document.characterSet}
        )
        , "కుంచిక_చిత్రము.png"
    );
    return false;
}


/*************************************************************************
 * clearClicked -- handler for when the చెరిపి_వేయి button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function clearClicked() {
    //console.log("చెరిపి_వేయి clicked")
    document.getElementById("codeArea").value = "";
}

/*************************************************************************
 * infoClicked -- handler for when the info button is clicked
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function infoClicked() {
    helpTextActive = !helpTextActive;
    if (helpTextActive) {
        document.getElementById("infoButton").style.color = "blue";
        document.getElementById("infoButton").style.borderColor = "blue";
    } else {
        document.getElementById("infoButton").style.color = "lightgray";
        document.getElementById("infoButton").style.borderColor = "lightgray";
    }
}

// Set up all reference code elements to be linked and have onclick functionality
let codeElements = document.querySelectorAll ("#reference code");
for (let i=0; i< codeElements.length; i++) {
    codeElements[i].className = "linked";
    codeElements[i].onclick = function () {
        cmd (this.innerHTML + ";");
        commandChanged();
    }
}

// Set up all color button elements to be linked and have onclick functionality
let colorCodeElements = document.querySelectorAll ("#reference button");
for (let i=0; i< colorCodeElements.length; i++) {
    //console.log(colorCodeElements[i].id)
    colorCodeElements[i].onclick = function () {
        cmd ("రంగు_మార్చు(\"" + this.id +"\");");
        commandChanged();
    }
}


//INITITALIZATION FUNCTIONS

// load the example code when the corresponding demo menu item is clicked
document.getElementById("examples").onchange = examplesChanged;
document.getElementById("kuncikaBhaShaa").onchange = languageChanged;
document.getElementById("command").onchange = commandChanged;

/*
--
on window load:
should the code auto run or not...
yes for the examples
yes for the samples
no for codeblock... override with command=ప్రదర్శన()
on window load?
   not loaded with examples
   reloaded with with samples
   reloaded with codeblock
                  document.getElementById('codeArea').value = eval(sel.value);
                    eval (document.getElementById("codeArea").value);
                      console.log("eval \"ప్రదర్శన()\"")
                      eval ("ప్రదర్శన();");
                //eval (document.getElementById("codeArea").value);
                //  eval (command + "();");
        //document.getElementById('codeArea').value = eval(sel.value);

examples
kirk

*/

function ప్రదర్శన_విధానము_పేరు( కుంచికభాషా ) {
    let demo_name = "ప్రదర్శన()";
    switch (కుంచికభాషా) {
        case "telugu":
            demo_name = "ప్రదర్శన()";
            break;
        case "kannada":
            demo_name = "ಪ್ರದರ್ಶನೆ()";
            break;    
        case "samskrutam":
            demo_name = "प्रदर्शन()";
            break;
        case "english":
            demo_name = "demo()";
            break;            
        default:
            demo_name = "ప్రదర్శన()";
            break;
    }
    return demo_name;
}

const telugu_labels= {
    'referenceTitle' : "కుంచిక భాషావలోకనము",
    'canvastitle' : "చిత్రపటము",
    'codeAreaName' : "విధి లేఖ",
    'resetButton' : "ఆది స్థితి",
    'runButton' : "ఆడించు",
    'downloadFilename' : "కుంచిక_చిత్రము",
    'examples' : `<option selected value="రంగవల్లీ">ఉదాహరణములు</option>
                    <option value="చతుర్భుజము">చతుర్భుజము</option>
                    <option value="చేప">చేప</option>
                    <option value="ఇష్టికా_ప్రస్తారము">ఇష్టికా_ప్రస్తారము</option>
                    <option value="అండాకారము">అండాకారము</option>
                    <option value="గడియారము">గడియారము</option>
                    <option value="రంగవల్లీ">రంగవల్లీ</option>
                    `
};

const kannada_labels= {
    'referenceTitle' : "ಕುಂಚಿಕ ಭಾಷಾವಲೋಕನ",
    'canvastitle' : "ಚಿತ್ರಪಟ",
    'codeAreaName' : "ವಿಧಿ ಲೇಖೆ",
    'resetButton' : "ಆದಿ ಸ್ಥಿತಿ",
    'runButton' : "ಆಡಿಸಿ",
    'downloadFilename' : "ಕುಂಚಿಕೆದ_ಚಿತ್ರ",
    'examples' : `<option selected value="ಚತುರ್ಭುಜ">ಉದಾಹರಣೆಗಳು</option>
    <option value="ಚತುರ್ಭುಜ">ಚತುರ್ಭುಜ</option>`
};

const samskrutam_labels= {
    'referenceTitle' : "कुंचिक भाषावलोकनम्",
    'canvastitle' : "चित्रपटम्",
    'codeAreaName' : "विधि लेख",
    'resetButton' : "आदि स्थिति",
    'runButton' : "चालय",
    'downloadFilename' : "कुंचिकाया:_चित्रम्",
    'examples' : `<option selected value=चतुर्भुजः>उदाहरणानि</option>
    <option value="चतुर्भुजः">चतुर्भुजः</option>`
};

const english_labels= {
    'referenceTitle' : "Kuncika language overview",
    'canvastitle' : "Canvas",
    'codeAreaName' : "Code",
    'resetButton' : "Initial State",
    'runButton' : "Run the code",
    'downloadFilename' : "Kuncika_picture",
    'examples' : `<option selected value=square>Examples</option>
    <option value=square>Square</option>`
};

const localized_labels = {
    'telugu' : telugu_labels,
    'kannada' : kannada_labels,
    'samskrutam' : samskrutam_labels,
    'english' : english_labels
};

// const localized_example_options = {
//     'telugu' : `<option selected value="చతుర్భుజము">ఉదాహరణములు</option>
//                 <option value="చతుర్భుజము">చతుర్భుజము</option>
//                 <option value="చేప">చేప</option>
//                 <option value="ఇష్టికా_ప్రస్తారము">ఇష్టికా_ప్రస్తారము</option>
//                 <option value="అండాకారము">అండాకారము</option>
//                 `,
//     'kannada' : `<option selected value="ಚತುರ್ಭುಜ">ಉದಾಹರಣೆಗಳು</option>
//     <option value="ಚತುರ್ಭುಜ">ಚತುರ್ಭುಜ</option>`,
//     'samskrutam' : `<option selected value=चतुर्भुजः>उदाहरणानि</option>
//     <option value="चतुर्भुजः">चतुर्भुजः</option>`,
//     'english' : `<option selected value=square>Examples</option>
//                     <option value=square>Square</option>`
// };


/*************************************************************************
 * languageChanged -- handler for when the Kuncika bhaSha select changed
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
 function languageChanged () {
    let codeArea = document.getElementById('codeArea')
    let examples = document.getElementById('examples')
    // get selected language
    let కుంచికభాషా = document.getElementById('kuncikaBhaShaa').value;
    const ప్రదర్శన_విధానము = ప్రదర్శన_విధానము_పేరు( కుంచికభాషా );
    console.log( కుంచికభాషా, ప్రదర్శన_విధానము );
    cmd (ప్రదర్శన_విధానము); 
    //  Stop currently playing example/ code.
    ఆట_ఆపు();
    ఆది_స్థితి();
    //  change all visible labels to that language

    const language_specific_labels = localized_labels[కుంచికభాషా]
    for (const key in language_specific_labels) {
        if (Object.hasOwnProperty.call(language_specific_labels, key)) {
            const local_label = language_specific_labels[key];
            let element = document.getElementById(key);
            if ( key === `downloadFilename` ) {
                element.placeholder = `${local_label}`;
            } else {
                element.innerHTML = `${local_label}`
            }
            console.log( కుంచికభాషా, ' :: ', key , " => ", local_label);
        }
    }
    

    // TODO(sdurbha): 
    examplesChanged ();

    //  change visible example to that language.
    //  Change documentation to the selected language.

}

// eye simulator
// fractals
// game of life
// analog clock
// Graphitti
// Heart
// Hilbert curve
// Random Stick Men
// Startburst
// Triangle Tunnel


//**************************************
//*****                           ******
//*****  BEWARE THE EVIL EVAL!!!  ******
//*****                           ******
//**************************************
//*** Boys and girls please don't use eval() functions at home. In general
//*** the evals are evil because 'anything' can be entered by the user and
//*** executed. This includes changing variables and functions. Things
//*** will break. Most problems can be overcome by reloading the page.
//*** eval is useful for this type of web page because we need the student
//*** to enter, try, and experiment with code. That is the point of all this.

/*************************************************************************
 * examplesChanged -- handler for when the example select changed
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function examplesChanged () {
    ఆట_ఆపు()
    let codeArea = document.getElementById('codeArea')
    let examples = document.getElementById('examples')
    let కుంచికభాషా = document.getElementById('kuncikaBhaShaa').value;
    try {
        codeArea.value = eval(examples.value);
    } catch (e) {
        showError(e)
    }
    const ప్రదర్శన_విధానము = ప్రదర్శన_విధానము_పేరు( కుంచికభాషా );
    cmd (ప్రదర్శన_విధానము); 
    commandChanged()
}

/*************************************************************************
 * commandChanged -- handler for when the command box is changed
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function commandChanged () {
    let commandText = document.getElementById("command").value;
    let codeAreaText = document.getElementById('codeArea').value;
    let కుంచికభాషా = document.getElementById('kuncikaBhaShaa').value;  
    const ప్రదర్శన_విధానము = ప్రదర్శన_విధానము_పేరు( కుంచికభాషా );
    errorFound = false
    ఆట_ఆపు();

    const kw_map = {
        "_ಇಲ್ಲಿ_" : "let",
        "_ಸರ್ವತ್ರ_" : "var",
        "_ಸರ್ವದಾ_" : "const",   
        "_ವಿಧಾನ_" : "function", 
        "_ಫಲ_" : "return",
        "_ఇక్కడ_" : "let",  
        "_అత్ర_" : "let",           
        "_సర్వత్ర_" : "var",          
        "_సర్వదా_" : "const",        
        "_విధానము_" : "function",    
        "_ఫలము_" : "return",
        "_अत्र_" : "let",           
        "_सर्वत्र_" : "var",          
        "_सर्वदा_" : "const",        
        "_विधानम्_" : "function",    
        "_फलम्_" : "return"        
    };
    try {
        // execute any code in the codeArea box
        console.log("cC codeArea")
        let replaced = codeAreaText
        Object.entries( kw_map).forEach( ([key,val],i) => {
            const key_pattern = new RegExp('(?<'+ key +'>' + key + ')', 'g' );
            console.log(" key = ", key, " key_pattern = ", key_pattern, " val = ", val);
            replaced = replaced.replaceAll( key_pattern, "/* " + key + " */ " + val )
            console.log( replaced );
        });
        console.log( codeAreaText )
        console.log( replaced );
        eval(replaced);
    } catch(e) {
        errorFound = true
        showError(e)
    }

    // execute the code in the command box
    // if (!errorFound && ( commandText !== "ప్రదర్శన()" ||
    //                      commandText !== "ప్రదర్శన();" ||
    //                      demo !== undefined)) {

    if (!errorFound && 
        ( commandText !== ప్రదర్శన_విధానము|| commandText !== ప్రదర్శన_విధానము+ ";" ||
          demo !== undefined
        )) {
        try {
            console.log("cC cmd: " + commandText + ".")
            let replaced = commandText
            Object.entries( kw_map).forEach( ([key,val],i) => {
                const key_pattern = new RegExp('(?<'+ key +'>' + key + ')', 'g' );
                replaced = replaced.replaceAll( key_pattern, "/* " + key + " */ " + val )
            });
            eval(replaced);        
        } catch(e) {
            errorFound = true
            showError(e)
            stopClicked()
        } finally {
            // చెరిపి_వేయి the command box
            this.value = "";
        }
    }
}


/*************************************************************************
 * showErrors -- show the trapped errors on the canvas
 *
 * arguments:
 *   e: (error object) error object
 *
 * returns:
 *   None
 *************************************************************************/
function showError(e) {
    //logTurtle("sEtop")
    saveTurtleState(కుంచికState)
    imageContext.save();
    //కుంచికState = కుంచిక;
    //logTurtle("sEtop")
    height=10 // points
    స్థానము_మార్చు(కనిష్ఠX(), కనిష్ఠY()+24+height/2 +2);
    కోణము(90);
     చుట్టొద్దు();

    // చెరిపి_వేయి the line for the error message
    కుంచికను_కింద_పెట్టు()
    రంగు_మార్చు( పసుపు )
    వెడల్పు(height+4)
    ముందుకు_జరుగు(గరిష్ఠY() * 2)
    స్థానము_మార్చు(కనిష్ఠX(), కనిష్ఠY()+24)

    // write the error message
    రంగు_మార్చు( ఎరుపు );
    అక్షరరూపము_స్థాపించు (height + "pt bold Helvetica, sans-serif")
    వ్రాయి(e.name + ": " + e.message);
    console.log(e.name + ": " + e.message );
    console.log( e );
    if (e.filename !== undefined) {

        // చెరిపి_వేయి the line for the file message
        height=10 // points
        రంగు_మార్చు( పసుపు )
        వెడల్పు(height+4)
        స్థానము_మార్చు(కనిష్ఠX(), కనిష్ఠY()+5+height/2 +2)
        ముందుకు_జరుగు(గరిష్ఠY() * 2)

        // write the file message
        రంగు_మార్చు( నీలము );
        అక్షరరూపము_స్థాపించు (height + "pt bold Helvetica, sans-serif")
        స్థానము_మార్చు(కనిష్ఠX(), కనిష్ఠY()+5)
        వ్రాయి(e.fileName.substr(-40) + " line: " + e.lineNumber);
        console.log("Error: " + e.fileName.substr(-40) + " line: " + e.lineNumber);
  }
  చిత్రీకరించు()
  restoreTurtleState(కుంచికState)
  imageContext.restore();
  చిత్రీకరించు()
  //logTurtle("sEbot")
}


/*************************************************************************
 * twoDigits -- convert a number to a two digit string
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function twoDigits(n) {
  n = n % 100; //in case over 100
  if (n <10) {
    n = "0" + n
  }
  return n
}

// set up the control buttons
document.getElementById("resetButton").onclick=resetClicked;
document.getElementById("runButton").onclick=runClicked
// document.getElementById("infoButton").onclick=infoClicked;
document.getElementById("body").onresize=fixDragButton;
document.getElementById("stopButton").onclick=stopClicked;
document.getElementById("stopButton").hidden=true;
document.getElementById("downloadButton").onclick=downloadClicked;
document.getElementById("saveSVG").onclick=svgDownloadClicked;
document.getElementById("uploadButton").onclick= function () {
    document.getElementById("uploadFile").click();
};
// document.getElementById("clearButton").onclick=clearClicked;
document.getElementById("saveCanvasButton").onclick=saveCanvasClicked;
saveCanvasLink = document.getElementById("saveCanvasButton");
saveCanvasLink.addEventListener('click', function(ev) {
    saveCanvasLink.href = imagecanvas.toDataURL();
    let d = new Date();
    let timestamp =
        "" +
        d.getFullYear() +
        twoDigits(d.getMonth()+1) +
        twoDigits(d.getDate()) +
        "_" +
        twoDigits(d.getHours()) +
        twoDigits(d.getMinutes()) +
        twoDigits(d.getSeconds())
    saveCanvasLink.download = "TurtleGraphics_" + timestamp + ".png";

}, false);


document.getElementById("uploadFile")
    .addEventListener('change', uploadChanged, false);


mouseOverElementIds = [ // list of elements with help text
                       "clearButton",
                       "codeArea",
                       "command",
                       "downloadButton",
                       "downloadFilename",
                       "dragbarright",
                       "dragbarleft",
                       "examples",
                       "infoButton",
                       "reference",
                       "resetButton",
                       "runButton",
                       "stopButton",
                       "కుంచికcanvas",
                       "uploadButton"
                       ];

let helpTextTimer; // global for delaying all help text
let helpDelay = 1000; // global delay in milliseconds for all help text
let bottomY = (window.innerHeight // global for lowest Y on page for tool tip
      || document.documentElement.clientHeight
      || document.body.clientHeight) // variations for cross browser support
      - 50; // bottom margin in pixels

// for (let i=0; i < mouseOverElementIds.length; i++) {
//     element = document.getElementById(mouseOverElementIds[i]);
//     element.onmouseenter = function (event) {
//         let tooltip = document.getElementById(this.id + "_help_text");
//         //console.log ( "hamburger: " + mouseOverElementIds[i]) + tooltip.innerHTML;
//         onHelpEnter(tooltip);
//         if (event.clientY < bottomY) {
//             tooltip.style.top = event.clientY + "px";
//         } else {
//             tooltip.style.top = bottomY + "px";
//         }
//         if (this.id === "examples" || this.id === "codeArea") { // do on left
//             tooltip.style.right = window.innerWidth - event.clientX + "px";
//         } else { // do on the right side
//             tooltip.style.left = event.clientX + "px";
//         }
//     }
//     element.onmouseleave = function () {
//         let tooltip = document.getElementById(this.id + "_help_text");
//         onHelpExit(tooltip);
//     }
// }


/*************************************************************************
 * onHelpEnter -- handler for when mouse enters an element with help text
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function onHelpEnter (helpTextElement) {
    if ((helpTextActive ||
           (helpTextElement == document.getElementById("infoButton_help_text"))) &&
           helpTextTimer === undefined) {
        helpTextTimer = setTimeout(onHelpTimeout,helpDelay, helpTextElement);
    }
}


/*************************************************************************
 * onHelpExit -- handler for when mouse leaves an element with help text
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function onHelpExit (helpTextElement) {
    if (helpTextTimer != undefined) {
        window.clearTimeout (helpTextTimer);
    }
    helpTextElement.style.display="none";
    helpTextTimer = undefined;
}


/*************************************************************************
 * onHelpTimeout -- handler for when mouse remains in element with help text
 *
 * arguments:
 *   None
 *
 * returns:
 *   None
 *************************************************************************/
function onHelpTimeout (helpTextElement) {
    helpTextElement.style.display="block";
    helpTextTimer = undefined;
}
