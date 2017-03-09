// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.bot');
goog.require('cljs.core');
goog.require('pong.util');
pong.bot.move = (function pong$bot$move(state){
var ball = new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(state);
var paddle_height = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state)));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) - (paddle_height / (2)));
var y1 = (y + (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(ball) / (2)));
var court_height = new cljs.core.Keyword(null,"court-height","court-height",-1867353855).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(state));
var dy = pong.util.clamp.call(null,y1,(0),(court_height - paddle_height));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"paddle","paddle",35445907),new cljs.core.Keyword(null,"y","y",-1757859776)], null),dy);
});

//# sourceMappingURL=bot.js.map