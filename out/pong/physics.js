// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.physics');
goog.require('cljs.core');
goog.require('pong.util');
goog.require('pong.setup');
goog.require('pong.audio');
goog.require('pong.leaderboard');
goog.require('pong.dom');
pong.physics.collision_factor_x = (function pong$physics$collision_factor_x(paddle,ball){
var t = (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(paddle)) / new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(paddle)) - 0.5);
return t;
});
pong.physics.collision_factor = (function pong$physics$collision_factor(paddle,ball){
var t = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(paddle)) / new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(paddle));
if((t > 0.5)){
return t;
} else {
return (t - (1));
}
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
return (function (p__20780){
var vec__20781 = p__20780;
var x = cljs.core.nth.call(null,vec__20781,(0),null);
var y = cljs.core.nth.call(null,vec__20781,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(- y)], null);
});})(ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
);
} else {
if(cljs.core.truth_(pong.util.rect_intersects_QMARK_.call(null,paddle_player,ball))){
var t = pong.physics.collision_factor.call(null,paddle_player,ball);
pong.audio.beep_paddle.call(null);

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),((function (t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p__20784){
var vec__20785 = p__20784;
var x = cljs.core.nth.call(null,vec__20785,(0),null);
var _ = cljs.core.nth.call(null,vec__20785,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),t], null);
});})(t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hits","hits",-2120002930)], null),cljs.core.inc);
} else {
if(cljs.core.truth_(pong.util.rect_intersects_QMARK_.call(null,paddle_bot,ball))){
var t = pong.physics.collision_factor.call(null,paddle_bot,ball);
pong.audio.beep_paddle.call(null);

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),((function (t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p__20788){
var vec__20789 = p__20788;
var x = cljs.core.nth.call(null,vec__20789,(0),null);
var _ = cljs.core.nth.call(null,vec__20789,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),t], null);
});})(t,ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"hits","hits",-2120002930)], null),cljs.core.inc);
} else {
if((ball_x > court_width)){
pong.leaderboard.leaderboard.call(null,state);

pong.dom.show_high_score.call(null);

cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),pong.setup.ball),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),pong.setup.ball_dir);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"over","over",192553051)], null);
} else {
if((ball_x < (0))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),pong.setup.ball),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),pong.setup.ball_dir);
} else {
if(cljs.core.truth_(cljs.core.first.call(null,cljs.core.filter.call(null,((function (ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p1__20762_SHARP_){
return pong.util.rect_intersects_QMARK_.call(null,ball,p1__20762_SHARP_);
});})(ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
,new cljs.core.Keyword(null,"walls","walls",-268788818).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walls","walls",-268788818)], null),cljs.core.remove.call(null,((function (ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p1__20763_SHARP_){
return pong.util.rect_intersects_QMARK_.call(null,ball,p1__20763_SHARP_);
});})(ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
,new cljs.core.Keyword(null,"walls","walls",-268788818).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907)], null),((function (ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width){
return (function (p__20792){
var vec__20793 = p__20792;
var x = cljs.core.nth.call(null,vec__20793,(0),null);
var _ = cljs.core.nth.call(null,vec__20793,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),0.3], null);
});})(ball,ball_y,ball_x,paddle_player,paddle_bot,court_height,court_width))
);
} else {
return state;

}
}
}
}
}
}
});

//# sourceMappingURL=physics.js.map