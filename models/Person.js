var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
class Person extends Model {}

module.exports = Person;
Person.tableName = 'person';

Person.jsonSchema = {
  type: 'object',

  properties: {
    id: {type: 'integer'},
    first_name: {type: 'string', minLength: 1, maxLength: 255},
    last_name: {type: 'string', minLength: 1, maxLength: 255},
    user_name: {type: 'varchar', minLength: 1, maxLength: 255},
    password: {type: 'varchar', minLength: 1, maxLength: 255},
    email: {type: 'varchar', minLength: 1, maxLength: 255},
    country: {type: 'string', minLength: 1, maxLength: 255},
    job: {type: 'string', minLength: 1, maxLength: 255},

    address: {
      type: 'object',
      properties: {
        street: {type: 'string'},
        city: {type: 'string'},
        zipCode: {type: 'string'}
      }
    }
  }
};
