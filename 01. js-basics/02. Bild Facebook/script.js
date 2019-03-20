var database = [
    {
        username: "yulia",
        password: "supetsecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingred",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Boby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Saly",
        timeline: "Javascript is sooo cool to write"
    }
];

var sayUserName = prompt('What\'s your username is');
var sayPassword = prompt('What\'s your password?');

function isUserValid (user, pass){
    for (var i=0; i < database.length; i++){
        if(database[i].username === user &&
            database[i].password === pass){
            return true;
        }
    }
    return false;
}

function signIn(user, pass){
    if(isUserValid(user, pass)){
        console.log(newsFeed);
    } else {
        alert('wrong Username and Password!')
    }
}

signIn(sayUserName, sayPassword);
