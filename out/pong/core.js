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
pong.core.next_ball = (function pong$core$next_ball(state,ball,p__23306){
var vec__23310 = p__23306;
var dx = cljs.core.nth.call(null,vec__23310,(0),null);
var dy = cljs.core.nth.call(null,vec__23310,(1),null);
var hits = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var vel_bump = ((hits / (5)) + (1));
return cljs.core.assoc.call(null,ball,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball) + (dx * vel_bump)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) + dy));
});
pong.core.update_fn = (function pong$core$update_fn(state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"over","over",192553051))){
return state;
} else {
return pong.fairydust.sprinkle.call(null,pong.physics.collision.call(null,pong.bot.move.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),pong.core.next_ball.call(null,state,new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907).cljs$core$IFn$_invoke$arity$1(state))))));

}
});
pong.core.draw = (function pong$core$draw(state){
quil.core.background_float.call(null,(32));

quil.core.fill.call(null,(255));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"over","over",192553051))){
return pong.core.draw_str.call(null,"GAME _VER",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(pong.setup.court_width / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(pong.setup.court_height / (2))], null));
} else {
var seq__23317_23321 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"walls","walls",-268788818).cljs$core$IFn$_invoke$arity$1(state));
var chunk__23318_23322 = null;
var count__23319_23323 = (0);
var i__23320_23324 = (0);
while(true){
if((i__23320_23324 < count__23319_23323)){
var wall_23325 = cljs.core._nth.call(null,chunk__23318_23322,i__23320_23324);
pong.core.draw_rect.call(null,wall_23325);

var G__23326 = seq__23317_23321;
var G__23327 = chunk__23318_23322;
var G__23328 = count__23319_23323;
var G__23329 = (i__23320_23324 + (1));
seq__23317_23321 = G__23326;
chunk__23318_23322 = G__23327;
count__23319_23323 = G__23328;
i__23320_23324 = G__23329;
continue;
} else {
var temp__4657__auto___23330 = cljs.core.seq.call(null,seq__23317_23321);
if(temp__4657__auto___23330){
var seq__23317_23331__$1 = temp__4657__auto___23330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23317_23331__$1)){
var c__7643__auto___23332 = cljs.core.chunk_first.call(null,seq__23317_23331__$1);
var G__23333 = cljs.core.chunk_rest.call(null,seq__23317_23331__$1);
var G__23334 = c__7643__auto___23332;
var G__23335 = cljs.core.count.call(null,c__7643__auto___23332);
var G__23336 = (0);
seq__23317_23321 = G__23333;
chunk__23318_23322 = G__23334;
count__23319_23323 = G__23335;
i__23320_23324 = G__23336;
continue;
} else {
var wall_23337 = cljs.core.first.call(null,seq__23317_23331__$1);
pong.core.draw_rect.call(null,wall_23337);

var G__23338 = cljs.core.next.call(null,seq__23317_23331__$1);
var G__23339 = null;
var G__23340 = (0);
var G__23341 = (0);
seq__23317_23321 = G__23338;
chunk__23318_23322 = G__23339;
count__23319_23323 = G__23340;
i__23320_23324 = G__23341;
continue;
}
} else {
}
}
break;
}

pong.core.draw_rect.call(null,new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state)));

pong.core.draw_rect.call(null,new cljs.core.Keyword(null,"paddle","paddle",35445907).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)));

pong.core.draw_rect.call(null,new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(state));

pong.core.draw_str.call(null,new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"score-pos","score-pos",575600256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bot","bot",-950896508).cljs$core$IFn$_invoke$arity$1(state)));

return pong.core.draw_str.call(null,new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"score-pos","score-pos",575600256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)));
}
});
pong.core.pong = (function pong$core$pong(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pong",new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),((cljs.core.fn_QMARK_.call(null,pong.input.mouse))?(function() { 
var G__23342__delegate = function (args){
return cljs.core.apply.call(null,pong.input.mouse,args);
};
var G__23342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23343__i = 0, G__23343__a = new Array(arguments.length -  0);
while (G__23343__i < G__23343__a.length) {G__23343__a[G__23343__i] = arguments[G__23343__i + 0]; ++G__23343__i;}
  args = new cljs.core.IndexedSeq(G__23343__a,0);
} 
return G__23342__delegate.call(this,args);};
G__23342.cljs$lang$maxFixedArity = 0;
G__23342.cljs$lang$applyTo = (function (arglist__23344){
var args = cljs.core.seq(arglist__23344);
return G__23342__delegate(args);
});
G__23342.cljs$core$IFn$_invoke$arity$variadic = G__23342__delegate;
return G__23342;
})()
:pong.input.mouse),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,pong.core.update_fn))?(function() { 
var G__23345__delegate = function (args){
return cljs.core.apply.call(null,pong.core.update_fn,args);
};
var G__23345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23346__i = 0, G__23346__a = new Array(arguments.length -  0);
while (G__23346__i < G__23346__a.length) {G__23346__a[G__23346__i] = arguments[G__23346__i + 0]; ++G__23346__i;}
  args = new cljs.core.IndexedSeq(G__23346__a,0);
} 
return G__23345__delegate.call(this,args);};
G__23345.cljs$lang$maxFixedArity = 0;
G__23345.cljs$lang$applyTo = (function (arglist__23347){
var args = cljs.core.seq(arglist__23347);
return G__23345__delegate(args);
});
G__23345.cljs$core$IFn$_invoke$arity$variadic = G__23345__delegate;
return G__23345;
})()
:pong.core.update_fn),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.setup.court_width,pong.setup.court_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,pong.setup.setup))?(function() { 
var G__23348__delegate = function (args){
return cljs.core.apply.call(null,pong.setup.setup,args);
};
var G__23348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23349__i = 0, G__23349__a = new Array(arguments.length -  0);
while (G__23349__i < G__23349__a.length) {G__23349__a[G__23349__i] = arguments[G__23349__i + 0]; ++G__23349__i;}
  args = new cljs.core.IndexedSeq(G__23349__a,0);
} 
return G__23348__delegate.call(this,args);};
G__23348.cljs$lang$maxFixedArity = 0;
G__23348.cljs$lang$applyTo = (function (arglist__23350){
var args = cljs.core.seq(arglist__23350);
return G__23348__delegate(args);
});
G__23348.cljs$core$IFn$_invoke$arity$variadic = G__23348__delegate;
return G__23348;
})()
:pong.setup.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,pong.core.draw))?(function() { 
var G__23351__delegate = function (args){
return cljs.core.apply.call(null,pong.core.draw,args);
};
var G__23351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23352__i = 0, G__23352__a = new Array(arguments.length -  0);
while (G__23352__i < G__23352__a.length) {G__23352__a[G__23352__i] = arguments[G__23352__i + 0]; ++G__23352__i;}
  args = new cljs.core.IndexedSeq(G__23352__a,0);
} 
return G__23351__delegate.call(this,args);};
G__23351.cljs$lang$maxFixedArity = 0;
G__23351.cljs$lang$applyTo = (function (arglist__23353){
var args = cljs.core.seq(arglist__23353);
return G__23351__delegate(args);
});
G__23351.cljs$core$IFn$_invoke$arity$variadic = G__23351__delegate;
return G__23351;
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