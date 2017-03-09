// Compiled by ClojureScript 1.9.495 {}
goog.provide('pong.audio');
goog.require('cljs.core');
goog.require('hum.core');
goog.require('cljs.core.async');
pong.audio.ctx = hum.core.create_context.call(null);
pong.audio.vco = hum.core.create_osc.call(null,pong.audio.ctx,new cljs.core.Keyword(null,"sawtooth","sawtooth",1033236133));
pong.audio.vcf = hum.core.create_biquad_filter.call(null,pong.audio.ctx);
pong.audio.output = hum.core.create_gain.call(null,pong.audio.ctx);
hum.core.connect.call(null,pong.audio.vco,pong.audio.vcf,pong.audio.output);
hum.core.start_osc.call(null,pong.audio.vco);
hum.core.connect_output.call(null,pong.audio.output);
hum.core.note_on.call(null,pong.audio.output,pong.audio.vco,(440));

hum.core.note_off.call(null,pong.audio.output);
pong.audio.timeout = (function pong$audio$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
pong.audio.beep = (function pong$audio$beep(var_args){
var args__7944__auto__ = [];
var len__7937__auto___14397 = arguments.length;
var i__7938__auto___14398 = (0);
while(true){
if((i__7938__auto___14398 < len__7937__auto___14397)){
args__7944__auto__.push((arguments[i__7938__auto___14398]));

var G__14399 = (i__7938__auto___14398 + (1));
i__7938__auto___14398 = G__14399;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return pong.audio.beep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

pong.audio.beep.cljs$core$IFn$_invoke$arity$variadic = (function (freq,p__14377){
var map__14378 = p__14377;
var map__14378__$1 = ((((!((map__14378 == null)))?((((map__14378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14378):map__14378);
var duration = cljs.core.get.call(null,map__14378__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(100));
var c__10716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto__,map__14378,map__14378__$1,duration){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto__,map__14378,map__14378__$1,duration){
return (function (state_14386){
var state_val_14387 = (state_14386[(1)]);
if((state_val_14387 === (1))){
var inst_14380 = hum.core.note_on.call(null,pong.audio.output,pong.audio.vco,freq);
var inst_14381 = pong.audio.timeout.call(null,duration);
var state_14386__$1 = (function (){var statearr_14388 = state_14386;
(statearr_14388[(7)] = inst_14380);

return statearr_14388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14386__$1,(2),inst_14381);
} else {
if((state_val_14387 === (2))){
var inst_14383 = (state_14386[(2)]);
var inst_14384 = hum.core.note_off.call(null,pong.audio.output);
var state_14386__$1 = (function (){var statearr_14389 = state_14386;
(statearr_14389[(8)] = inst_14383);

return statearr_14389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14386__$1,inst_14384);
} else {
return null;
}
}
});})(c__10716__auto__,map__14378,map__14378__$1,duration))
;
return ((function (switch__10604__auto__,c__10716__auto__,map__14378,map__14378__$1,duration){
return (function() {
var pong$audio$state_machine__10605__auto__ = null;
var pong$audio$state_machine__10605__auto____0 = (function (){
var statearr_14393 = [null,null,null,null,null,null,null,null,null];
(statearr_14393[(0)] = pong$audio$state_machine__10605__auto__);

(statearr_14393[(1)] = (1));

return statearr_14393;
});
var pong$audio$state_machine__10605__auto____1 = (function (state_14386){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_14386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e14394){if((e14394 instanceof Object)){
var ex__10608__auto__ = e14394;
var statearr_14395_14400 = state_14386;
(statearr_14395_14400[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14401 = state_14386;
state_14386 = G__14401;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
pong$audio$state_machine__10605__auto__ = function(state_14386){
switch(arguments.length){
case 0:
return pong$audio$state_machine__10605__auto____0.call(this);
case 1:
return pong$audio$state_machine__10605__auto____1.call(this,state_14386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pong$audio$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = pong$audio$state_machine__10605__auto____0;
pong$audio$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = pong$audio$state_machine__10605__auto____1;
return pong$audio$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto__,map__14378,map__14378__$1,duration))
})();
var state__10718__auto__ = (function (){var statearr_14396 = f__10717__auto__.call(null);
(statearr_14396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto__);

return statearr_14396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto__,map__14378,map__14378__$1,duration))
);

return c__10716__auto__;
});

pong.audio.beep.cljs$lang$maxFixedArity = (1);

pong.audio.beep.cljs$lang$applyTo = (function (seq14375){
var G__14376 = cljs.core.first.call(null,seq14375);
var seq14375__$1 = cljs.core.next.call(null,seq14375);
return pong.audio.beep.cljs$core$IFn$_invoke$arity$variadic(G__14376,seq14375__$1);
});

pong.audio.note_num_to_frequency = (function pong$audio$note_num_to_frequency(note_num){
var expt_numerator = (note_num - (49));
var expt_denominator = (12);
var expt = (expt_numerator / expt_denominator);
var multiplier = Math.pow((2),expt);
var a = (440);
return (multiplier * a);
});
pong.audio.beep_paddle = (function pong$audio$beep_paddle(){
return pong.audio.beep.call(null,pong.audio.note_num_to_frequency.call(null,((30) + cljs.core.rand_int.call(null,(20)))));
});
pong.audio.beep_wall = (function pong$audio$beep_wall(){
return pong.audio.beep.call(null,pong.audio.note_num_to_frequency.call(null,(15)),new cljs.core.Keyword(null,"duration","duration",1444101068),(10));
});

//# sourceMappingURL=audio.js.map