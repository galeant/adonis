import Todo from 'App/Models/Todo'
import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import UserFactory from './UserFactory'
import { DateTime } from 'luxon'


const randNumber = (min,max) => {
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor( rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

export default Factory.define(Todo, async ({ faker }) => {
  const randData = 10;
  let user = await User.all();
  if(user.length == 0){
    user = await UserFactory.createMany(randData)
  }
  let number = randNumber(0,9);
  return {
    task_name: faker.internet.userName(),
    user_id: user[number].id,
    deadline: DateTime.now()
  }
})
.build()
