function fillhtmltablewithnumbers(table) {
    $(table).find("td").each(function(){
        $(this).html(Math.floor(Math.random() * 100));
    });
}

function calculatethesumoftwonumbers(number1, number2) {
    return number1 + number2;
}





function calculatedistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function calculatecorrelation(x1, x2, y1, y2) {
    return (x1 * y1 + x2 * y2) / (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2));
}

function loginwithfirebase(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function rotateimage(image, angle) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var width = image.width;
    var height = image.height;
    var radians = angle * (Math.PI / 180);
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    canvas.width = width * cos - height * sin;
    canvas.height = width * sin + height * cos;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(radians);
    ctx.drawImage(image, -width / 2, -height / 2);
    return canvas.toDataURL("image/png");
}

function p5jsconnect() {
    var p5 = new p5(function(sketch) {
        sketch.setup = function() {
            sketch.createCanvas(400, 400);
        };
        sketch.draw = function() {
            sketch.background(0);
            sketch.ellipse(sketch.mouseX, sketch.mouseY, 10, 10);
        };
    });
}

function resizeimagepng(image, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL("image/png");
}






function adddata(table) {
    var html = "";
    var inicial=0;
    var final=0;

    for (var i = 0; i < 10; i++) {

        html += "<tr>";
        

            for (var j = inicial; j < inicial+10; j++)
            {
                 html +="0"+
                "<td>"+ (j+1) + "</td>";
               

            }

            inicial = inicial+10;

        html += "</tr>"; 
    }    
$("#tabla1").html(html);


}

    

