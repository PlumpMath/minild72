// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.dom');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
pong.dom.add_menu_link_goog_BANG_ = (function pong$dom$add_menu_link_goog_BANG_(link,link_text){
var links = (goog.dom.query("#update")[(0)]);
var a = goog.dom.createElement("a");
a.href = link;

goog.dom.setTextContent(a,link_text);

goog.dom.removeChildren(links);

return goog.dom.appendChild(links,a);
});
pong.dom.show_high_score = (function pong$dom$show_high_score(){
var url = window.location;
return pong.dom.add_menu_link_goog_BANG_.call(null,url,">> play again");
});

//# sourceMappingURL=dom.js.map