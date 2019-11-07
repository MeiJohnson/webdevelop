#!/usr/local/bin/node

const person = {
  fname: 'El',
  lname: 'Goss',
  get getFullName(){
    return this.fname + ' ' + this.lname;
  }
};
console.log(person.getFullName);
