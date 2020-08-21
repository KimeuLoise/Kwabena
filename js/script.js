var dateOfBirth = prompt('please enter birth date');
var monthOfBirth = prompt('please enter birth month');
var yearOfBirth = prompt('please enter birth year');
alert('My Birthday is ' + [dateOfBirth] + '/' + [monthOfBirth] + '/' + [yearOfBirth]);

var century = parseInt(yearOfBirth[0]+yearOfBirth[1]);
var year = parseInt(yearOfBirth[2]+yearOfBirth[3]);
var month = parseInt(monthOfBirth);
var date = parseInt(dateOfBirth);
alert([century] + [year]);



