import firebase from "firebase";

export interface LoginStatus {
  signedIn: boolean;
  displayName: string;
  email: string;
  uid: string;
}

export function handleSignIn(email: string, password: string) {
  if (email.length < 4) {
    alert("Please enter an email address.");
    return;
  }
  if (password.length < 4) {
    alert("Please enter a password.");
    return;
  }
  // Sign in with email and pass.
  // [START authwithemail]
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  // [END authwithemail]
}

export function handleSignOut() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  }
}

export function handleSignUp(email: string, password: string) {
  if (email.length < 4) {
    alert("Please enter an email address.");
    return;
  }
  if (password.length < 6) {
    alert("Please enter a password. Has to be more than 6 characters.");
    return;
  }
  // Create user with email and pass.
  // [START createwithemail]
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  // [END createwithemail]
}
