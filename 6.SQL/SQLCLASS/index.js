const { faker } = require('@faker-js/faker');
const { error } = require('console');
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Rajia@143'
});


let getUser = () => {
    return [
       faker.string.uuid(),
       faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];

}


let data = [];
for(let i=1;i<=100;i++){
    data.push(getUser());
}
let q = ` INSERT INTO user (id, username, email, password) VALUES ?`;

try {
    connection.query(q,[data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();



/*let createRandomUser = () => {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }
  console.log(createRandomUser());
  */



