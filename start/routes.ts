/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

Route.post('register','AuthController.register');
Route.post('login','AuthController.login')

Route.group(()=>{
  Route.get('profile','AuthController.profile')
}).middleware('auth:api');



// Route.group(()=>{
//   Route.get('/','UsersController.index');
//   Route.post('/','UsersController.create');
//   Route.get('/:id/detail','UserController.detail');
//   Route.post('/:id/update','UserController.update');
//   Route.get('/:id/delete','UserController.delete');
// }).prefix('user');
