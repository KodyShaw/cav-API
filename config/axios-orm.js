//ORM to be used with the axios call functions.
const orm = {
    axiosGet: function (request, query, callbackFunction) {
        request.get(query).then(res => {
            callbackFunction(res.data);
        }).catch(err => {
            console.log("API Call Error");
            if (!err.response) {
                console.log(err);
            }else {
                console.log("Status code: " + err.response.status);
                console.log("API Message: " + err.response.data.message);
            }
        });
    }
}

// Exports the orm for other files to use
module.exports = orm;