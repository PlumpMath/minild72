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
return quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r));
});
pong.core.draw_str = (function pong$core$draw_str(s,point){
return quil.core.text.call(null,s,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point));
});
pong.core.next_ball = (function pong$core$next_ball(state,ball,p__16367){
var vec__16371 = p__16367;
var dx = cljs.core.nth.call(null,vec__16371,(0),null);
var dy = cljs.core.nth.call(null,vec__16371,(1),null);
var hits = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var vel_bump = ((hits / (5)) + (1));
return cljs.core.assoc.call(null,ball,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball) + (dx * vel_bump)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) + dy));
});
pong.core.update_fn = (function pong$core$update_fn(state){
return pong.fairydust.paddles.call(null,pong.physics.collision.call(null,pong.bot.move.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),pong.core.next_ball.call(null,state,new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907).cljs$core$IFn$_invoke$arity$1(state))))));
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
var G__16374__delegate = function (args){
return cljs.core.apply.call(null,pong.input.mouse,args);
};
var G__16374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16375__i = 0, G__16375__a = new Array(arguments.length -  0);
while (G__16375__i < G__16375__a.length) {G__16375__a[G__16375__i] = arguments[G__16375__i + 0]; ++G__16375__i;}
  args = new cljs.core.IndexedSeq(G__16375__a,0);
} 
return G__16374__delegate.call(this,args);};
G__16374.cljs$lang$maxFixedArity = 0;
G__16374.cljs$lang$applyTo = (function (arglist__16376){
var args = cljs.core.seq(arglist__16376);
return G__16374__delegate(args);
});
G__16374.cljs$core$IFn$_invoke$arity$variadic = G__16374__delegate;
return G__16374;
})()
:pong.input.mouse),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,pong.core.update_fn))?(function() { 
var G__16377__delegate = function (args){
return cljs.core.apply.call(null,pong.core.update_fn,args);
};
var G__16377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16378__i = 0, G__16378__a = new Array(arguments.length -  0);
while (G__16378__i < G__16378__a.length) {G__16378__a[G__16378__i] = arguments[G__16378__i + 0]; ++G__16378__i;}
  args = new cljs.core.IndexedSeq(G__16378__a,0);
} 
return G__16377__delegate.call(this,args);};
G__16377.cljs$lang$maxFixedArity = 0;
G__16377.cljs$lang$applyTo = (function (arglist__16379){
var args = cljs.core.seq(arglist__16379);
return G__16377__delegate(args);
});
G__16377.cljs$core$IFn$_invoke$arity$variadic = G__16377__delegate;
return G__16377;
})()
:pong.core.update_fn),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.setup.court_width,pong.setup.court_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,pong.setup.setup))?(function() { 
var G__16380__delegate = function (args){
return cljs.core.apply.call(null,pong.setup.setup,args);
};
var G__16380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16381__i = 0, G__16381__a = new Array(arguments.length -  0);
while (G__16381__i < G__16381__a.length) {G__16381__a[G__16381__i] = arguments[G__16381__i + 0]; ++G__16381__i;}
  args = new cljs.core.IndexedSeq(G__16381__a,0);
} 
return G__16380__delegate.call(this,args);};
G__16380.cljs$lang$maxFixedArity = 0;
G__16380.cljs$lang$applyTo = (function (arglist__16382){
var args = cljs.core.seq(arglist__16382);
return G__16380__delegate(args);
});
G__16380.cljs$core$IFn$_invoke$arity$variadic = G__16380__delegate;
return G__16380;
})()
:pong.setup.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,pong.core.draw))?(function() { 
var G__16383__delegate = function (args){
return cljs.core.apply.call(null,pong.core.draw,args);
};
var G__16383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16384__i = 0, G__16384__a = new Array(arguments.length -  0);
while (G__16384__i < G__16384__a.length) {G__16384__a[G__16384__i] = arguments[G__16384__i + 0]; ++G__16384__i;}
  args = new cljs.core.IndexedSeq(G__16384__a,0);
} 
return G__16383__delegate.call(this,args);};
G__16383.cljs$lang$maxFixedArity = 0;
G__16383.cljs$lang$applyTo = (function (arglist__16385){
var args = cljs.core.seq(arglist__16385);
return G__16383__delegate(args);
});
G__16383.cljs$core$IFn$_invoke$arity$variadic = G__16383__delegate;
return G__16383;
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