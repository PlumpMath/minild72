// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.input');
goog.require('cljs.core');
goog.require('pong.util');
pong.input.key_pressed = (function pong$input$key_pressed(state,event){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"w","w",354169001))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"paddle","paddle",35445907),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.dec);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"s","s",1705939918))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"paddle","paddle",35445907),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.inc);
} else {
return state;

}
}
});
pong.input.mouse = (function pong$input$mouse(state,event){
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event);
var court_height = new cljs.core.Keyword(null,"court-height","court-height",-1867353855).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(state));
var paddle_height = new cljs.core.Keyword(null,"paddle-height","paddle-height",1526614935).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(state));
var cy = pong.util.clamp.call(null,y,(0),(court_height - paddle_height));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"paddle","paddle",35445907),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cy);
});

//# sourceMappingURL=input.js.map