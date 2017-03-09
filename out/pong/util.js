// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.util');
goog.require('cljs.core');
pong.util.rect_intersects_QMARK_ = (function pong$util$rect_intersects_QMARK_(a,b){
var top_left_corner_a_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a);
var top_left_corner_a_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a);
var bottom_right_corner_a_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(a));
var bottom_right_corner_a_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(a));
var top_left_corner_b_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b);
var top_left_corner_b_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b);
var bottom_right_corner_b_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(b));
var bottom_right_corner_b_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(b));
if(((top_left_corner_a_x <= bottom_right_corner_b_x)) && ((bottom_right_corner_a_x >= top_left_corner_b_x)) && ((top_left_corner_a_y <= bottom_right_corner_b_y)) && ((bottom_right_corner_a_y >= top_left_corner_b_y))){
return true;
} else {
return false;

}
});
pong.util.clamp = (function pong$util$clamp(x,min,max){
if((x > max)){
return max;
} else {
if((x < min)){
return min;
} else {
return x;

}
}
});

//# sourceMappingURL=util.js.map