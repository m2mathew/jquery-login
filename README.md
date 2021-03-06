# Build a login form with jQuery

Assignment from The Iron Yard-Austin

Week 4 - day 14

## Description
Using jQuery, build a login form. The form should check to ensure that the username and password are filled in before checking to see if the username/password combination is in the list below.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how do form validation in jQuery.


### Performance Objectives

After completing this assignment, you be able to effectively use

* $.val()
* $.html()
* $.on()
* $.css()
* $.show()
* $.hide()

## Details

### Deliverables

* A repo containing at least:
  * `index.html`
  * `scripts/main.js`
  * `package.json`

### Requirements

* No JSHint warnings or errors


## Normal Mode

* The login form should display the following errors to the user if their input is invalid:
	* Please enter an email address before logging in.
	* Please enter a password before logging in.
	* Your user was not found.
	* The password you entered is incorrect.
* If the user logs in successfully they should be redirected to http://theironyard.com
* The email address field should not allow non-email address input.
* The password address field should have the letters obfuscated.
* The form should submit if the user types enter or clicks the submit button.
* Valid username / password combinations should be:
	* aaron@theironyard.com / password123
	* admin@google.com / pandas
	* <your email address> / honeycrisp

## Hard Mode

Style your login form to look like this:
![Designed](https://github.com/TIY-Austin-Front-End-Engineering/jquery-login/blob/master/login.png)

The Logo used can be [found here](https://github.com/TIY-Austin-Front-End-Engineering/jquery-login/blob/master/treemoLabs-logo.png). The background patterns can be found [here](https://github.com/TIY-Austin-Front-End-Engineering/jquery-login/blob/master/bg-login-top.png) and [here](https://github.com/TIY-Austin-Front-End-Engineering/jquery-login/blob/master/bg-login.png).

## Insane Mode
Use tiny pizza server (or sails) and jQuery to check the username and password combination against a list retrieved from the server instead of from a hard-coded list. Log each login attempt on the tiny pizza server for later lookup.

## Notes

Hints: For email address validation use the HTML5 type="email" attribute. To get the form to submit properly on enter and clicking submit use the ng-submit directive on wrapping form element.
