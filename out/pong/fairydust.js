// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.fairydust');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pong.setup');
pong.fairydust.paddles_height = (function pong$fairydust$paddles_height(state){
var paddle_player = new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var paddle_bot = new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state));
var hits = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
if(((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(paddle_player) > pong.setup.pb_width)) && (cljs.core._EQ_.call(null,cljs.core.mod.call(null,quil.core.frame_count.call(null),(pong.setup.frame_rate * (5))),(0)))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"paddle","paddle",35445907),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core.dec),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"paddle","paddle",35445907),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core.inc);
} else {
return state;

}
});
pong.fairydust.paddles_color = (function pong$fairydust$paddles_color(state){
var hits = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var c1 = cljs.core.mod.call(null,quil.core.frame_count.call(null),(256));
var c2 = ((128) + cljs.core.rand_int.call(null,(128)));
if((hits > (9))){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"paddle","paddle",35445907),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c2], null));
} else {
return state;

}
});
pong.fairydust.sprinkle = (function pong$fairydust$sprinkle(state){
return pong.fairydust.paddles_color.call(null,pong.fairydust.paddles_height.call(null,state));
});

//# sourceMappingURL=fairydust.js.map