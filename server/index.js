const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const { resolve } = require('path');

app.use(
  views(resolve(__dirname, './views'), {
    extension: 'pug'
  })
);
app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Kao',
    me: 'koa'
  });
});

app.listen(2333);
