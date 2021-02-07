import Koa from 'koa'

export const App = () => {
  return new Koa()
    .use(async (ctx, next) => {
      console.log(ctx.request.toJSON())
      await next()
      console.log(ctx.response.toJSON())
    })
}
