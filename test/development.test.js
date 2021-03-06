import assert from 'assert';
import fetch from "node-fetch";
import config from "config";

const loginUrl = config.get("pitch59-url") + "/api/account/login";


it(`Testing to see if we can signin`, async () => {
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      emailId: "myfriend@gmail.com",
      password: "YoDaddy"
    })
  };

  let errorWasCaught = false;
  let errorCaught = null;
  let json = null;
  try {
    const response = await fetch(loginUrl, options);
    json = await response.json();
    console.log("Response", json);
  } 
  
  catch (exception) {
    errorCaught = exception;
    errorWasCaught = true;
    throw console.log(errorCaught);
  }

  assert.equal(errorWasCaught,false);
  console.log(json.code);
  assert.equal(json.code,2012);
});