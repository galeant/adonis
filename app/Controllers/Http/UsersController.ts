// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import UserTransformer from "App/Transformer/UserTransformer";

export default class UsersController {
  private userTransformer:UserTransformer = new UserTransformer();

  public async index({request,response}) {
    const user = await User.query()
      .if(request.input('id'),(q)=>{
        q.where('id',request.input('id'));
      })

    response
      .status(400)
      .send(this.userTransformer.getList({
        data:user
      }))
  }

  public async create({request}) {
    return request.all();
  }
}
