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


        //we will manipulate this array after sorting is complete
        const friendArr = []

        //let's reduce our score to do math
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        //reduce client score first
        let surveyNum = parseInt(req.body.scores.reduce(reducer))
        
        //this wil allow us to loop through the array of objects 
        for (friend in friends) {
            //reducing to scores in this piece of code
            let num = parseInt(friends[friend].scores.reduce(reducer));


            console.log(`${friends[friend].name} , ${num}`);
            
            //now we push into a new array to play with..
            //..oh and there is some math for the score
            friendArr.push({
                friend: friends[friend].name,
                image: friends[friend].photo,
                friendScore: Math.abs(num - surveyNum)
            })
        }

//this one will sort our new list in ascending order bassed on scores
        let friendsScoreSorted = friendArr.sort(function (a, b) { return a.friendScore - b.friendScore })

        console.log(friendsScoreSorted[0]);
//add new friend to list
        friends.push(req.body);


        //return data back to client
        //index 0 should be the best match
        res.json(
            {
              name: friendsScoreSorted[0].friend,
              photo: friendsScoreSorted[0].image
                      }
          );
    })
}



