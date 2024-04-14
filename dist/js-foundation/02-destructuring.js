"use strict";
const { SHELL, HOMEBREW_PREFIX } = process.env;
//console.table({SHELL, HOMEBREW_PREFIX});
const characters = ['Flash', 'otro', 'Superman', 'Batman'];
//const Batman = characters[2]
//Con desestructuración
//const [f,s,batman] = characters;
const [, , batman] = characters;
//console.log(Batman)
