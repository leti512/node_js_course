const { getAge, getUUID } = require('./plugins'); 
// const { buildMakePerson } = require('./js-foundation/05-factory');

const getPokemonById = require ('./js-foundation/06-promises');

const { buildLogger } =  require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es algo malo')





// getPokemonById(4)
//     .then(( pokemon ) => console.log({ pokemon }))
//     .catch(( err ) => console.error( err ))
//     .finally( () => console.log('Finalmente'));



// ! referencia a la factory y uso
// const makePerson = buildMakePerson({getUUID, getAge})

// const obj = {name: 'Jhon', birthdate: '1985-10-21'};

// const jhon = makePerson( obj );
// console.log({ jhon })




