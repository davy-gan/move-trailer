const Koa = require('koa');
const app = new Koa();
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl');
const ejs = require('ejs');
const pug = require('pug');

app.use(async (ctx, next) => {
  ctx.type = 'text/html;charset=utf-8';
  //   ctx.body = htmlTpl;
  //   ctx.body = ejs.render(ejsTpl, {
  //     you: 'Koa',
  //     me: 'Koa'
  //   });
  ctx.body = pug.render(pugTpl, {
    you: 'Koa',
    me: 'Koa'
  });
});

app.listen(2333);
