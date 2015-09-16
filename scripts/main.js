'use strict';

$(document).ready(function() {

    var emailArray = [];
    var pwArray = [];
    var noErrors = true;
    var storedData = [
        {
            username: 'aaron@theironyard.com',
            password: 'password123'
        },
        {
            username: 'admin@google.com',
            password: 'pandas'
        },
        {
            username: 'm2mathew@me.com',
            password: 'honeycrisp'
        }
    ];

    // target elements
    var $email = $('#email');
    var $password = $('#pass');
    var $button = $('#submit-button');
    var $error = $('#error');

    // create functions
    function onSubmitButton(e) {
        e.preventDefault();

        emailArray.push($email);
        console.log(emailArray[0].val());

        pwArray.push($password);
        console.log(pwArray[0].val());

        checkLength();
        checkData();

        if(noErrors === true) {
            window.location.href = "http://www.theironyard.com";
        }
    }

    function checkLength() {
        if(emailArray[0].val().length < 5) {
            $error.text('Please enter an email address before logging in.');
            noErrors = false;
        }
        else if(pwArray[0].val().length < 6) {
            $error.text('Please enter a password at least 6 digits long before logging in.');
            noErrors = false;
        }
        return noErrors;
    }

    function checkData() {
        var userMatch = false;
        var pwMatch = false;

        for(var i = 0; i < storedData.length; i++) {
            var userCompare = emailArray[0].filter( function( element ) {
                var passesThrough = (element === emailArray[0])
                console.log(userCompare);
                console.log(passesThrough);
                return passesThrough;
            });
        }

        if (userMatch === true || pwMatch === true) {
            noErrors = true;
        }
        return noErrors;
    }

    // add event listeners
    $('.footer-box').submit(onSubmitButton);
});
