import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import TodoFactory from './TodoFactory'

export default Factory.define(User, async ({ faker }) => {
  return {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
  }
})
.relation('todos', () => TodoFactory)
.build()
