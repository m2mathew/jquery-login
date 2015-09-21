'use strict';

$(document).ready(function() {

    var emailArray = [];
    var pwArray = [];
    var noErrors = false;
    var validMatch = false;
    var users = [
        { email: 'aaron@theironyard.com', password: 'password123' },
        { email: 'admin@google.com', password: 'pandas' },
        { email: 'm2mathew@me.com', password: 'honeycrisp' }
    ];

    // target elements
    var $email = $('#email');
    var $password = $('#pass');
    var $button = $('#submit-button');
    var $emailErr = $('.email-error');
    var $pwErr = $('.password-error');

    // create functions
    function onSubmitButton(e) {
        e.preventDefault();
        $emailErr.text('');
        $pwErr.text('');

        var emailString = $email.val();
        var passwordString = $password.val();
        var emailValid = false;
        var passwordValid = false;

        if(!emailString) {
            $emailErr.text('You must enter your email address');
            return;
        }
        else if(!passwordString) {
            $pwErr.text('You must enter a password');
            return;
        }

        users.forEach(function(user, index) {
            if(user.email === emailString && user.email.indexOf('@') !== -1) {
                $emailErr.text('');
                emailValid = true;
            }
            else {
                $emailErr.text('Username not found.');
                return;
            }
            if(user.password === passwordString) {
                $pwErr.text('');
                passwordValid = true;
            }
            else {
                $pwErr.text('Password is incorrect.');
                return;
            }

            if(emailValid === true && passwordValid === true) {
                $emailErr.text('');
                $pwErr.text('');
                window.location.href = 'http://www.theironyard.com';
            }
        });
    };

    // add event listeners
    $('.footer-box').submit(onSubmitButton);
});
