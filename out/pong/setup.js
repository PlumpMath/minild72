// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.setup');
goog.require('cljs.core');
goog.require('quil.core');
pong.setup.log = console.log;
pong.setup.court_width = (450);
pong.setup.paddle_height = (70);
pong.setup.pb_width = (10);
pong.setup.court_height = (pong.setup.paddle_height * (3));
pong.setup.y = (function pong$setup$y(thing_height){
return ((pong.setup.court_height / (2)) - (thing_height / (2)));
});
pong.setup.base_paddle = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),pong.setup.y.call(null,pong.setup.paddle_height),new cljs.core.Keyword(null,"w","w",354169001),pong.setup.pb_width,new cljs.core.Keyword(null,"h","h",1109658740),pong.setup.paddle_height,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)], null);
pong.setup.paddle_bot = cljs.core.assoc.call(null,pong.setup.base_paddle,new cljs.core.Keyword(null,"x","x",2099068185),pong.setup.pb_width);
pong.setup.paddle_player = cljs.core.assoc.call(null,pong.setup.base_paddle,new cljs.core.Keyword(null,"x","x",2099068185),(pong.setup.court_width - (pong.setup.pb_width * (2))));
pong.setup.ball = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(pong.setup.court_width / 1.5),new cljs.core.Keyword(null,"y","y",-1757859776),pong.setup.y.call(null,pong.setup.pb_width),new cljs.core.Keyword(null,"w","w",354169001),pong.setup.pb_width,new cljs.core.Keyword(null,"h","h",1109658740),pong.setup.pb_width,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)], null);
pong.setup.ball_dir = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
pong.setup.score_pos_bot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((pong.setup.court_width / (2)) - (pong.setup.court_width / (4))),new cljs.core.Keyword(null,"y","y",-1757859776),(pong.setup.court_height / (6))], null);
pong.setup.score_pos_player = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((pong.setup.court_width / (2)) + (pong.setup.court_width / (4))),new cljs.core.Keyword(null,"y","y",-1757859776),(pong.setup.court_height / (6))], null);
pong.setup.frame_rate = (60);
pong.setup.wall = (function pong$setup$wall(x,y){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),pong.setup.pb_width,new cljs.core.Keyword(null,"h","h",1109658740),pong.setup.pb_width,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(255),(255)], null)], null);
});
pong.setup.setup = (function pong$setup$setup(){
quil.core.smooth.call(null);

quil.core.no_stroke.call(null);

quil.core.frame_rate.call(null,pong.setup.frame_rate);

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"paddle","paddle",35445907),pong.setup.paddle_bot,new cljs.core.Keyword(null,"hits","hits",-2120002930),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"score-pos","score-pos",575600256),pong.setup.score_pos_bot], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"paddle","paddle",35445907),pong.setup.paddle_player,new cljs.core.Keyword(null,"hits","hits",-2120002930),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"score-pos","score-pos",575600256),pong.setup.score_pos_player], null),new cljs.core.Keyword(null,"ball","ball",542859139),pong.setup.ball,new cljs.core.Keyword(null,"ball-dir","ball-dir",491270907),pong.setup.ball_dir,new cljs.core.Keyword(null,"reset-ball","reset-ball",870766660),true,new cljs.core.Keyword(null,"walls","walls",-268788818),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.setup.wall.call(null,(200),(60)),pong.setup.wall.call(null,(220),(120)),pong.setup.wall.call(null,(180),(180))], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"court-height","court-height",-1867353855),pong.setup.court_height,new cljs.core.Keyword(null,"court-width","court-width",1624770567),pong.setup.court_width], null)], null);
});

//# sourceMappingURL=setup.js.map