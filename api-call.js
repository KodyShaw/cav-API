const orm = require("./config/axios-orm");
const api = require("./config/axios-instance");
const fs = require("fs")

//hardcoded user name untill a better method of serching only via Exact match is posible 
let cavName = "Shaw.K";

//responds with the current amount of active users & finds ID for now
orm.axiosGet(api.cavRequest, "users/active", function (response) {
    // data = JSON.stringify(response.data, null, 4);

    //Work-around to find ID of user via exact match as i have no other way of knowing.
    let ID;

    for (let i = 0; i < response.data.users.length; i++) {
        if (response.data.users[i].username == cavName) {
            console.log(response.data.users[i]);
            ID = response.data.users[i].user_id;
            console.log(ID);
        }
    }


    let userCounter = 0;

    for (let i = 0; i < response.data.users.length; i++) {
        userCounter++;
    }

    console.log("Current Active 7thcav Members: " + userCounter);

    //callbacks for Millpac And Record of User ID
    cavMilpac(ID);
    cavRecord(ID);
});

function cavMilpac(ID) {
    //Returns JSON data of a specific User via an ID
    orm.axiosGet(api.cavRequest, "user/" + ID + "/milpac", function (response) {
        console.log(response.data);
    });
}

function cavRecord(ID) {
    //Returns JSON data of a specific User's record via an ID
    orm.axiosGet(api.cavRequest, "user/" + ID + "/records", function (response) {
        console.log(response.data);
    });
}