// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.leaderboard');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri');
pong.leaderboard.leaderboard = (function pong$leaderboard$leaderboard(state){
var url = window.location.href;
var url__$1 = (new goog.Uri(url));
var user = url__$1.getParameterValue("name");
var score = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://hooks.zapier.com/hooks/catch/175623/mqwd5m/?user="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&score="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''));
});

//# sourceMappingURL=leaderboard.js.map