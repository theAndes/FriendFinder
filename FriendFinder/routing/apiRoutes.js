// ==============================================================================
// DEPENDENCIES
// Bring friends into the file
// ==============================================================================
const friends = require("../app/data/friends")

// ===============================================================================
// ROUTING
// ===============================================================================

//allowsfor export of this function
//in this app we will export to server.js
module.exports = function (app) {

    // ---------------------------------------------------------------------------
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    // ---------------------------------------------------------------------------
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // When a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out the frinds finder form... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(true);
    })
}





