// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from "App/Validators/RegisterValidator";\
import User from "App/Models/User";
import LoginValidator from "App/Validators/LoginValidator";
import { Exception, Response } from "@adonisjs/core/build/standalone";

export default class AuthController {

  public async register({request,response}){
    await request.validate(RegisterValidator)

    const {name,email,password} = request.all()
    await User.create({
      name,
      email,
      password
    })
    return response.json({
      msg:'Success'
    })
  }

  public async login({auth,request,response}){
    await request.validate(LoginValidator)
    const {email,password} = request.all()
    const user = await User.findBy('email',email);

    if(!user){
      return response
        .status(401)
        .json({
          msg:'Email not found'
        },500)
    }
    const token = await auth.use('api').attempt(email, password)
    return response.json({
      user,
      token
    })

  }

  public async profile({auth,response}){
    const logUser = auth.use('api').user;
    const user = await User.query().where({
      id:logUser.id
    })
    .preload('todos')
    .first();
    throw new Exception('kadal');
    return response.json({
      user
    });
  }
}
