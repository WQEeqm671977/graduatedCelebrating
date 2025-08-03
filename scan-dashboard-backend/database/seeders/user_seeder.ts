import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        email: faker.internet.email({ firstName: 'John', lastName: 'Doe' }),
        password: '12345678',
      },
      {
        email: faker.internet.email({ firstName: 'Jane', lastName: 'Smith' }),
        password: '12345678',
      },
      {
        email: faker.internet.email({ firstName: 'Alice', lastName: 'Johnson' }),
        password: '12345678',
      },
      {
        email: faker.internet.email({ firstName: 'Bob', lastName: 'Brown' }),
        password: '12345678',
      },
      {
        email: faker.internet.email({ firstName: 'Charlie', lastName: 'Wilson' }),
        password: '12345678',
      },
    ])
  }
}
