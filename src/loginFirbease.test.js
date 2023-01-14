const loginFirebase = require("./loginFirebase.js");
// const auth = loginFirebase.auth;
// const loginfunc = loginFirebase.signInWithEmailAndPassword;
const newtest = loginFirebase.onAuthStateChanged;
// const utils = require("../utills.js");
const testuser = {
  email: "ffgtf12@gmail.com",
  password: "123123",
};
test("Login to user", () => {
  expect(newtest(a)).toBe("User status changed");
});
