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
pong.core.next_ball = (function pong$core$next_ball(state,ball,p__20798){
var vec__20802 = p__20798;
var dx = cljs.core.nth.call(null,vec__20802,(0),null);
var dy = cljs.core.nth.call(null,vec__20802,(1),null);
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"over","over",192553051))){
return pong.core.draw_str.call(null,"GAME _VER",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(pong.setup.court_width / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(pong.setup.court_height / (2))], null));
} else {
var seq__20809_20813 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"walls","walls",-268788818).cljs$core$IFn$_invoke$arity$1(state));
var chunk__20810_20814 = null;
var count__20811_20815 = (0);
var i__20812_20816 = (0);
while(true){
if((i__20812_20816 < count__20811_20815)){
var wall_20817 = cljs.core._nth.call(null,chunk__20810_20814,i__20812_20816);
pong.core.draw_rect.call(null,wall_20817);

var G__20818 = seq__20809_20813;
var G__20819 = chunk__20810_20814;
var G__20820 = count__20811_20815;
var G__20821 = (i__20812_20816 + (1));
seq__20809_20813 = G__20818;
chunk__20810_20814 = G__20819;
count__20811_20815 = G__20820;
i__20812_20816 = G__20821;
continue;
} else {
var temp__4657__auto___20822 = cljs.core.seq.call(null,seq__20809_20813);
if(temp__4657__auto___20822){
var seq__20809_20823__$1 = temp__4657__auto___20822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20809_20823__$1)){
var c__7643__auto___20824 = cljs.core.chunk_first.call(null,seq__20809_20823__$1);
var G__20825 = cljs.core.chunk_rest.call(null,seq__20809_20823__$1);
var G__20826 = c__7643__auto___20824;
var G__20827 = cljs.core.count.call(null,c__7643__auto___20824);
var G__20828 = (0);
seq__20809_20813 = G__20825;
chunk__20810_20814 = G__20826;
count__20811_20815 = G__20827;
i__20812_20816 = G__20828;
continue;
} else {
var wall_20829 = cljs.core.first.call(null,seq__20809_20823__$1);
pong.core.draw_rect.call(null,wall_20829);

var G__20830 = cljs.core.next.call(null,seq__20809_20823__$1);
var G__20831 = null;
var G__20832 = (0);
var G__20833 = (0);
seq__20809_20813 = G__20830;
chunk__20810_20814 = G__20831;
count__20811_20815 = G__20832;
i__20812_20816 = G__20833;
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
var G__20834__delegate = function (args){
return cljs.core.apply.call(null,pong.input.mouse,args);
};
var G__20834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20835__i = 0, G__20835__a = new Array(arguments.length -  0);
while (G__20835__i < G__20835__a.length) {G__20835__a[G__20835__i] = arguments[G__20835__i + 0]; ++G__20835__i;}
  args = new cljs.core.IndexedSeq(G__20835__a,0);
} 
return G__20834__delegate.call(this,args);};
G__20834.cljs$lang$maxFixedArity = 0;
G__20834.cljs$lang$applyTo = (function (arglist__20836){
var args = cljs.core.seq(arglist__20836);
return G__20834__delegate(args);
});
G__20834.cljs$core$IFn$_invoke$arity$variadic = G__20834__delegate;
return G__20834;
})()
:pong.input.mouse),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,pong.core.update_fn))?(function() { 
var G__20837__delegate = function (args){
return cljs.core.apply.call(null,pong.core.update_fn,args);
};
var G__20837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20838__i = 0, G__20838__a = new Array(arguments.length -  0);
while (G__20838__i < G__20838__a.length) {G__20838__a[G__20838__i] = arguments[G__20838__i + 0]; ++G__20838__i;}
  args = new cljs.core.IndexedSeq(G__20838__a,0);
} 
return G__20837__delegate.call(this,args);};
G__20837.cljs$lang$maxFixedArity = 0;
G__20837.cljs$lang$applyTo = (function (arglist__20839){
var args = cljs.core.seq(arglist__20839);
return G__20837__delegate(args);
});
G__20837.cljs$core$IFn$_invoke$arity$variadic = G__20837__delegate;
return G__20837;
})()
:pong.core.update_fn),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.setup.court_width,pong.setup.court_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,pong.setup.setup))?(function() { 
var G__20840__delegate = function (args){
return cljs.core.apply.call(null,pong.setup.setup,args);
};
var G__20840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20841__i = 0, G__20841__a = new Array(arguments.length -  0);
while (G__20841__i < G__20841__a.length) {G__20841__a[G__20841__i] = arguments[G__20841__i + 0]; ++G__20841__i;}
  args = new cljs.core.IndexedSeq(G__20841__a,0);
} 
return G__20840__delegate.call(this,args);};
G__20840.cljs$lang$maxFixedArity = 0;
G__20840.cljs$lang$applyTo = (function (arglist__20842){
var args = cljs.core.seq(arglist__20842);
return G__20840__delegate(args);
});
G__20840.cljs$core$IFn$_invoke$arity$variadic = G__20840__delegate;
return G__20840;
})()
:pong.setup.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,pong.core.draw))?(function() { 
var G__20843__delegate = function (args){
return cljs.core.apply.call(null,pong.core.draw,args);
};
var G__20843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20844__i = 0, G__20844__a = new Array(arguments.length -  0);
while (G__20844__i < G__20844__a.length) {G__20844__a[G__20844__i] = arguments[G__20844__i + 0]; ++G__20844__i;}
  args = new cljs.core.IndexedSeq(G__20844__a,0);
} 
return G__20843__delegate.call(this,args);};
G__20843.cljs$lang$maxFixedArity = 0;
G__20843.cljs$lang$applyTo = (function (arglist__20845){
var args = cljs.core.seq(arglist__20845);
return G__20843__delegate(args);
});
G__20843.cljs$core$IFn$_invoke$arity$variadic = G__20843__delegate;
return G__20843;
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