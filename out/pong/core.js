// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('pong.setup');
goog.require('pong.input');
goog.require('pong.bot');
goog.require('pong.physics');
goog.require('pong.fairydust');
pong.core.draw_rect = (function pong$core$draw_rect(r){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(r));

return quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r));
});
pong.core.draw_str = (function pong$core$draw_str(s,point){
return quil.core.text.call(null,s,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point));
});
pong.core.next_ball = (function pong$core$next_ball(state,ball,p__17428){
var vec__17432 = p__17428;
var dx = cljs.core.nth.call(null,vec__17432,(0),null);
var dy = cljs.core.nth.call(null,vec__17432,(1),null);
var hits = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var vel_bump = ((hits / (5)) + (1));
return cljs.core.assoc.call(null,ball,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball) + (dx * vel_bump)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) + dy));
});
pong.core.update_fn = (function pong$core$update_fn(state){
return pong.fairydust.sprinkle.call(null,pong.physics.collision.call(null,pong.bot.move.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),pong.core.next_ball.call(null,state,new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907).cljs$core$IFn$_invoke$arity$1(state))))));
});
pong.core.draw = (function pong$core$draw(state){
quil.core.background_float.call(null,(32));

quil.core.fill.call(null,(255));

pong.core.draw_rect.call(null,new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state)));

pong.core.draw_rect.call(null,new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)));

pong.core.draw_rect.call(null,new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(state));

pong.core.draw_str.call(null,new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"score-pos","score-pos",575600256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state)));

return pong.core.draw_str.call(null,new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"score-pos","score-pos",575600256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)));
});
pong.core.pong = (function pong$core$pong(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pong",new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),((cljs.core.fn_QMARK_.call(null,pong.input.mouse))?(function() { 
var G__17435__delegate = function (args){
return cljs.core.apply.call(null,pong.input.mouse,args);
};
var G__17435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17436__i = 0, G__17436__a = new Array(arguments.length -  0);
while (G__17436__i < G__17436__a.length) {G__17436__a[G__17436__i] = arguments[G__17436__i + 0]; ++G__17436__i;}
  args = new cljs.core.IndexedSeq(G__17436__a,0);
} 
return G__17435__delegate.call(this,args);};
G__17435.cljs$lang$maxFixedArity = 0;
G__17435.cljs$lang$applyTo = (function (arglist__17437){
var args = cljs.core.seq(arglist__17437);
return G__17435__delegate(args);
});
G__17435.cljs$core$IFn$_invoke$arity$variadic = G__17435__delegate;
return G__17435;
})()
:pong.input.mouse),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,pong.core.update_fn))?(function() { 
var G__17438__delegate = function (args){
return cljs.core.apply.call(null,pong.core.update_fn,args);
};
var G__17438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17439__i = 0, G__17439__a = new Array(arguments.length -  0);
while (G__17439__i < G__17439__a.length) {G__17439__a[G__17439__i] = arguments[G__17439__i + 0]; ++G__17439__i;}
  args = new cljs.core.IndexedSeq(G__17439__a,0);
} 
return G__17438__delegate.call(this,args);};
G__17438.cljs$lang$maxFixedArity = 0;
G__17438.cljs$lang$applyTo = (function (arglist__17440){
var args = cljs.core.seq(arglist__17440);
return G__17438__delegate(args);
});
G__17438.cljs$core$IFn$_invoke$arity$variadic = G__17438__delegate;
return G__17438;
})()
:pong.core.update_fn),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.setup.court_width,pong.setup.court_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,pong.setup.setup))?(function() { 
var G__17441__delegate = function (args){
return cljs.core.apply.call(null,pong.setup.setup,args);
};
var G__17441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17442__i = 0, G__17442__a = new Array(arguments.length -  0);
while (G__17442__i < G__17442__a.length) {G__17442__a[G__17442__i] = arguments[G__17442__i + 0]; ++G__17442__i;}
  args = new cljs.core.IndexedSeq(G__17442__a,0);
} 
return G__17441__delegate.call(this,args);};
G__17441.cljs$lang$maxFixedArity = 0;
G__17441.cljs$lang$applyTo = (function (arglist__17443){
var args = cljs.core.seq(arglist__17443);
return G__17441__delegate(args);
});
G__17441.cljs$core$IFn$_invoke$arity$variadic = G__17441__delegate;
return G__17441;
})()
:pong.setup.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,pong.core.draw))?(function() { 
var G__17444__delegate = function (args){
return cljs.core.apply.call(null,pong.core.draw,args);
};
var G__17444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17445__i = 0, G__17445__a = new Array(arguments.length -  0);
while (G__17445__i < G__17445__a.length) {G__17445__a[G__17445__i] = arguments[G__17445__i + 0]; ++G__17445__i;}
  args = new cljs.core.IndexedSeq(G__17445__a,0);
} 
return G__17444__delegate.call(this,args);};
G__17444.cljs$lang$maxFixedArity = 0;
G__17444.cljs$lang$applyTo = (function (arglist__17446){
var args = cljs.core.seq(arglist__17446);
return G__17444__delegate(args);
});
G__17444.cljs$core$IFn$_invoke$arity$variadic = G__17444__delegate;
return G__17444;
})()
:pong.core.draw));
});
goog.exportSymbol('pong.core.pong', pong.core.pong);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8157__8158__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8157__8158__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),pong.core.pong,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pong"], null));
}

//# sourceMappingURL=core.js.map