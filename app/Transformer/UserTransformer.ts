
export default class UserTransformer {

  public getList({data,message = 'Success',code = 200}) {
    return {
      code,
      message,
      data
    }
  }

}
