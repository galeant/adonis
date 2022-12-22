import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TodoFactory from 'Database/factories/TodoFactory';

export default class extends BaseSeeder {
  public async run () {
    await TodoFactory.createMany(10);
    // Write your database queries inside the run method
  }
}
