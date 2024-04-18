
const { SHELL, HOMEBREW_PREFIX } = process.env;
//console.table({SHELL, HOMEBREW_PREFIX});
export const characters = ['Flash', 'Superman', 'Batman'];
//const Batman = characters[2]
//Con desestructuración
//const [f,s,batman] = characters;
const [,,batman] = characters
//console.log(Batman)





