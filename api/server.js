// init project
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var textToImage = require("text-to-image");
var base64Img = require("base64-img");
var sizeOf = require("image-size");
const Canvas = require("canvas");
const tmp = "/tmp";

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function makeItSquare(imageB64) {
    var filepath = base64Img.imgSync(imageB64, tmp, "tmp");
    var dimensions = sizeOf(filepath);
    console.log("Image Dim:(before) " + JSON.stringify(dimensions));
    var squareDimension = Math.max(dimensions.width, dimensions.height) + 100;
    console.log("Square dim: " + squareDimension);
    var canvas = new Canvas.createCanvas(squareDimension, squareDimension);
    var img = new Canvas.Image();
    img.src = imageB64;
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 60;
    context.strokeRect(0, 0, squareDimension, squareDimension);
    context.fillStyle = "rgba(0,0,0,0.95)";
    context.fillRect(30, 30, squareDimension, squareDimension);
    // top text
    context.fillStyle = "white";
    context.font = "18px Helvetica";
    context.drawImage(
        img,
        (squareDimension - dimensions.width) / 2,
        squareDimension / 2 - dimensions.height / 2
    );
    return canvas.toDataURL();
}

app.get("/image/:text", function(req, res) {
    // res.send(`<a href="#">${req.params.text}</a>`);
    // text now available
    var username = req.body.credit ? req.body.credit : null;
    // TODO: figure out how to put url/username in different sizes

    console.log(req.query);

    var isRaw = req.query.raw == 1;
    var text = req.params.text;

    const fileName =
        text
            .substring(0, 15)
            .toLowerCase()
            .split(" ")
            .join("_")
            .split(",")
            .join("")
            .split(".")
            .join("") + ".png";

    console.log(fileName);

    if (username) text += "\n-" + username;

    var options = {
        debug: true,
        maxWidth: 400,
        fontSize: 28,
        margin: 20,
        bgColor: "rgba(0, 0, 0, 0.95)",
        textColor: "white"
    };

    textToImage
        .generate(text, options)
        .then((dataUrl) => {
            var finalImage = makeItSquare(dataUrl);
            if (isRaw) {
                console.log("israw");
                res.end(finalImage.substring(22), "base64");
            } else {
                console.log("else");
                res.status(200).send(
                    `<a href="${finalImage}" download="${fileName}"><img title="${fileName}" src="${finalImage}" /></a>`
                );
            }
            console.log(finalImage);
        })
        .catch((err) => {
            console.log(err);
        });
});

// listen for reqs :)
var listener = app.listen(process.env.PORT || 3101, function() {
    console.log("Your app is listening on port " + listener.address().port);
});