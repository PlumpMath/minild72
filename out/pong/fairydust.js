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
pong.fairydust.wall = (function pong$fairydust$wall(x,y){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),pong.setup.pb_width,new cljs.core.Keyword(null,"h","h",1109658740),pong.setup.pb_width,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(255),(255)], null)], null);
});
pong.fairydust.wallxy = (function pong$fairydust$wallxy(courtwh){
var spaced = (pong.setup.pb_width + (2));
return (spaced * cljs.core.rand_int.call(null,((courtwh - spaced) / spaced)));
});
pong.fairydust.wallx = (function pong$fairydust$wallx(){
return pong.fairydust.wallxy.call(null,pong.setup.court_width);
});
pong.fairydust.wally = (function pong$fairydust$wally(){
return pong.fairydust.wallxy.call(null,pong.setup.court_height);
});
pong.fairydust.add_wall = (function pong$fairydust$add_wall(walls){
return cljs.core.conj.call(null,walls,pong.fairydust.wall.call(null,pong.fairydust.wallx.call(null),pong.fairydust.wally.call(null)));
});
pong.fairydust.append_n_walls = (function pong$fairydust$append_n_walls(state,n,walls){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"walls-added","walls-added",-319664267).cljs$core$IFn$_invoke$arity$1(state),n)){
return walls;
} else {
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.repeat.call(null,n,pong.fairydust.add_wall)).call(null,walls);

}
});
pong.fairydust.place_walls = (function pong$fairydust$place_walls(state){
var hits = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,hits,(5)),(0))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walls","walls",-268788818)], null),((function (hits){
return (function (w){
return pong.fairydust.append_n_walls.call(null,state,(hits / (5)),w);
});})(hits))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walls-added","walls-added",-319664267)], null),((function (hits){
return (function (coll){
return cljs.core.conj.call(null,coll,(hits / (5)));
});})(hits))
);
} else {
return state;

}
});
pong.fairydust.sprinkle = (function pong$fairydust$sprinkle(state){
return pong.fairydust.paddles_color.call(null,pong.fairydust.paddles_height.call(null,pong.fairydust.place_walls.call(null,state)));
});

//# sourceMappingURL=fairydust.js.map