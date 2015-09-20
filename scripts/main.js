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
        var userFound = false;

        if(!emailString && !passwordString) {

        }
        else if(!emailString) {
            $emailErr.text('You must enter your email address');
            console.log('no email');
        }
        else if(!passwordString) {
            $pwErr.text('You must enter a password');
            console.log('no password');
        }

        users.forEach(function(user, index) {
            if(user.email !== emailString && user.email !== '') {
                $emailErr.text('Username not found');
                return;
            }
            else if(user.email === emailString && user.password !== passwordString) {
               $pwErr.text('Incorrect password');
               return;
            }
            else if(user.email === emailString && user.password === passwordString) {
                userFound = true;
            }
        });

        if(userFound) {
            $emailErr.text('');
            $pwErr.text('');
            window.location.href = 'http://www.theironyard.com';
        }
    };

    // add event listeners
    $('.footer-box').submit(onSubmitButton);
    // clear username input area when clicked
    $email.click(function() {
        $email.text('');
    });
});
