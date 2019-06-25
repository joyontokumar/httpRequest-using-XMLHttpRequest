const getHTTP = new myHttpRequest;
// get data
getHTTP.get('https://jsonplaceholder.typicode.com/users', function (error, response) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(response);
  }
});

// post data
const mydata = {
  name: "joyonto",
  username: "joyontokumar",
  email: "demo@gmail.com"
}
getHTTP.post('https://jsonplaceholder.typicode.com/users', mydata, function (error, response) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(response);
  }
});

// put data or updata data
getHTTP.put('https://jsonplaceholder.typicode.com/users/1', mydata, function (error, response) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(response);
  }
});


// delete data

getHTTP.delete('https://jsonplaceholder.typicode.com/users/1', function (error, response) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(response);
  }
});
