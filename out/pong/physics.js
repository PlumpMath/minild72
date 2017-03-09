// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.physics');
goog.require('cljs.core');
goog.require('pong.util');
goog.require('pong.setup');
goog.require('pong.audio');
goog.require('pong.leaderboard');
goog.require('pong.dom');
pong.physics.collision_factor = (function pong$physics$collision_factor(paddle,ball){
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(paddle)) / new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(paddle)) - 0.5);
});
pong.physics.collision = (function pong$physics$collision(state){
var ball = new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(state);
var ball_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball);
var ball_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball);
var paddle_player = new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var paddle_bot = new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state));
var court_height = new cljs.core.Keyword(null,"court-height","court-height",-1867353855).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(state));
var court_width = new cljs.core.Keyword(null,"court-width","court-width",1624770567).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(state));
if(((ball_y > (court_height - new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(ball)))) || ((ball_y < (0)))){
pong.audio.beep_wall.call(null);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),((function (ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p__16861){
var vec__16862 = p__16861;
var x = cljs.core.nth.call(null,vec__16862,(0),null);
var y = cljs.core.nth.call(null,vec__16862,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(- y)], null);
});})(ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
);
} else {
if(cljs.core.truth_(pong.util.rect_intersects_QMARK_.call(null,paddle_player,ball))){
var t = pong.physics.collision_factor.call(null,paddle_player,ball);
pong.audio.beep_paddle.call(null);

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),((function (t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p__16865){
var vec__16866 = p__16865;
var x = cljs.core.nth.call(null,vec__16866,(0),null);
var _ = cljs.core.nth.call(null,vec__16866,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),t], null);
});})(t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hits","hits",-2120002930)], null),cljs.core.inc);
} else {
if(cljs.core.truth_(pong.util.rect_intersects_QMARK_.call(null,paddle_bot,ball))){
var t = pong.physics.collision_factor.call(null,paddle_bot,ball);
pong.audio.beep_paddle.call(null);

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),((function (t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p__16869){
var vec__16870 = p__16869;
var x = cljs.core.nth.call(null,vec__16870,(0),null);
var _ = cljs.core.nth.call(null,vec__16870,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),t], null);
});})(t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"hits","hits",-2120002930)], null),cljs.core.inc);
} else {
if((ball_x > court_width)){
pong.leaderboard.leaderboard.call(null,state);

pong.dom.show_high_score.call(null);

cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),pong.setup.ball),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),pong.setup.ball_dir);

return cljs.core.PersistentArrayMap.EMPTY;
} else {
if((ball_x < (0))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),pong.setup.ball),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),pong.setup.ball_dir);
} else {
return state;

}
}
}
}
}
});

//# sourceMappingURL=physics.js.map