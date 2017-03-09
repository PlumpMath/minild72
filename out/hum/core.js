// Compiled by ClojureScript 1.9.495 {}
goog.provide('hum.core');
goog.require('cljs.core');
hum.core.create_osc = (function hum$core$create_osc(var_args){
var args13627 = [];
var len__7937__auto___13630 = arguments.length;
var i__7938__auto___13631 = (0);
while(true){
if((i__7938__auto___13631 < len__7937__auto___13630)){
args13627.push((arguments[i__7938__auto___13631]));

var G__13632 = (i__7938__auto___13631 + (1));
i__7938__auto___13631 = G__13632;
continue;
} else {
}
break;
}

var G__13629 = args13627.length;
switch (G__13629) {
case 1:
return hum.core.create_osc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hum.core.create_osc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13627.length)].join('')));

}
});

hum.core.create_osc.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return ctx.createOscillator();
});

hum.core.create_osc.cljs$core$IFn$_invoke$arity$2 = (function (ctx,type){
var osc = ctx.createOscillator();
var osc_type = cljs.core.name.call(null,type);
osc.type = osc_type;

return osc;
});

hum.core.create_osc.cljs$lang$maxFixedArity = 2;

hum.core.set_gain_to = (function hum$core$set_gain_to(channel,val){
return channel.gain.value = val;
});
hum.core.create_gain = (function hum$core$create_gain(var_args){
var args13634 = [];
var len__7937__auto___13637 = arguments.length;
var i__7938__auto___13638 = (0);
while(true){
if((i__7938__auto___13638 < len__7937__auto___13637)){
args13634.push((arguments[i__7938__auto___13638]));

var G__13639 = (i__7938__auto___13638 + (1));
i__7938__auto___13638 = G__13639;
continue;
} else {
}
break;
}

var G__13636 = args13634.length;
switch (G__13636) {
case 1:
return hum.core.create_gain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hum.core.create_gain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13634.length)].join('')));

}
});

hum.core.create_gain.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return hum.core.create_gain.call(null,ctx,(0));
});

hum.core.create_gain.cljs$core$IFn$_invoke$arity$2 = (function (ctx,level){
var gain = ctx.createGain();
hum.core.set_gain_to.call(null,gain,level);

return gain;
});

hum.core.create_gain.cljs$lang$maxFixedArity = 2;

hum.core.set_buffer_to = (function hum$core$set_buffer_to(buffer_src,buffer){
return buffer_src.buffer = buffer;
});
hum.core.create_buffer_source = (function hum$core$create_buffer_source(var_args){
var args13641 = [];
var len__7937__auto___13644 = arguments.length;
var i__7938__auto___13645 = (0);
while(true){
if((i__7938__auto___13645 < len__7937__auto___13644)){
args13641.push((arguments[i__7938__auto___13645]));

var G__13646 = (i__7938__auto___13645 + (1));
i__7938__auto___13645 = G__13646;
continue;
} else {
}
break;
}

var G__13643 = args13641.length;
switch (G__13643) {
case 1:
return hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13641.length)].join('')));

}
});

hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return ctx.createBufferSource();
});

hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$2 = (function (ctx,buffer){
var buffer_src = hum.core.create_buffer_source.call(null,ctx);
hum.core.set_buffer_to.call(null,buffer_src,buffer);

return buffer_src;
});

hum.core.create_buffer_source.cljs$lang$maxFixedArity = 2;

hum.core.create_delay = (function hum$core$create_delay(ctx){
return ctx.createDelay();
});
hum.core.create_convolver = (function hum$core$create_convolver(ctx){
return ctx.createConvolver();
});
hum.core.create_dynamics_compressor = (function hum$core$create_dynamics_compressor(ctx){
return ctx.createDynamicsCompressor();
});
hum.core.create_biquad_filter = (function hum$core$create_biquad_filter(ctx){
var filter = ctx.createBiquadFilter();
return filter;
});
hum.core.connect = (function hum$core$connect(var_args){
var args__7944__auto__ = [];
var len__7937__auto___13653 = arguments.length;
var i__7938__auto___13654 = (0);
while(true){
if((i__7938__auto___13654 < len__7937__auto___13653)){
args__7944__auto__.push((arguments[i__7938__auto___13654]));

var G__13655 = (i__7938__auto___13654 + (1));
i__7938__auto___13654 = G__13655;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((0) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((0)),(0),null)):null);
return hum.core.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__7945__auto__);
});

hum.core.connect.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__13649){
var vec__13650 = p__13649;
var a = cljs.core.nth.call(null,vec__13650,(0),null);
var b = cljs.core.nth.call(null,vec__13650,(1),null);
return a.connect(b);
}),cljs.core.partition.call(null,(2),(1),nodes)));
});

hum.core.connect.cljs$lang$maxFixedArity = (0);

hum.core.connect.cljs$lang$applyTo = (function (seq13648){
return hum.core.connect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13648));
});

hum.core.ctx_for = (function hum$core$ctx_for(audio_node){
return audio_node.context;
});
hum.core.connect_output = (function hum$core$connect_output(output){
output.connect(hum.core.ctx_for.call(null,output).destination);

return output;
});
hum.core.freq = (function hum$core$freq(filter){
filter.frequency;

return filter;
});
hum.core.curr_time = (function hum$core$curr_time(ctx){
return ctx.currentTime;
});
hum.core.start_osc = (function hum$core$start_osc(osc){
return osc.start(hum.core.curr_time.call(null,hum.core.ctx_for.call(null,osc)));
});
hum.core.note_on = (function hum$core$note_on(var_args){
var args__7944__auto__ = [];
var len__7937__auto___13663 = arguments.length;
var i__7938__auto___13664 = (0);
while(true){
if((i__7938__auto___13664 < len__7937__auto___13663)){
args__7944__auto__.push((arguments[i__7938__auto___13664]));

var G__13665 = (i__7938__auto___13664 + (1));
i__7938__auto___13664 = G__13665;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((3) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((3)),(0),null)):null);
return hum.core.note_on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7945__auto__);
});

hum.core.note_on.cljs$core$IFn$_invoke$arity$variadic = (function (output,osc,freq,p__13660){
var map__13661 = p__13660;
var map__13661__$1 = ((((!((map__13661 == null)))?((((map__13661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13661):map__13661);
var time = cljs.core.get.call(null,map__13661__$1,new cljs.core.Keyword(null,"time","time",1385887882),hum.core.curr_time.call(null,hum.core.ctx_for.call(null,osc)));
var ramp_time = cljs.core.get.call(null,map__13661__$1,new cljs.core.Keyword(null,"ramp-time","ramp-time",-339037957),0.1);
osc.frequency.setValueAtTime(freq,time);

return output.gain.linearRampToValueAtTime(1.0,(time + ramp_time));
});

hum.core.note_on.cljs$lang$maxFixedArity = (3);

hum.core.note_on.cljs$lang$applyTo = (function (seq13656){
var G__13657 = cljs.core.first.call(null,seq13656);
var seq13656__$1 = cljs.core.next.call(null,seq13656);
var G__13658 = cljs.core.first.call(null,seq13656__$1);
var seq13656__$2 = cljs.core.next.call(null,seq13656__$1);
var G__13659 = cljs.core.first.call(null,seq13656__$2);
var seq13656__$3 = cljs.core.next.call(null,seq13656__$2);
return hum.core.note_on.cljs$core$IFn$_invoke$arity$variadic(G__13657,G__13658,G__13659,seq13656__$3);
});

hum.core.note_off = (function hum$core$note_off(var_args){
var args__7944__auto__ = [];
var len__7937__auto___13671 = arguments.length;
var i__7938__auto___13672 = (0);
while(true){
if((i__7938__auto___13672 < len__7937__auto___13671)){
args__7944__auto__.push((arguments[i__7938__auto___13672]));

var G__13673 = (i__7938__auto___13672 + (1));
i__7938__auto___13672 = G__13673;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return hum.core.note_off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

hum.core.note_off.cljs$core$IFn$_invoke$arity$variadic = (function (output,p__13668){
var map__13669 = p__13668;
var map__13669__$1 = ((((!((map__13669 == null)))?((((map__13669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13669):map__13669);
var time = cljs.core.get.call(null,map__13669__$1,new cljs.core.Keyword(null,"time","time",1385887882),hum.core.curr_time.call(null,hum.core.ctx_for.call(null,output)));
var ramp_time = cljs.core.get.call(null,map__13669__$1,new cljs.core.Keyword(null,"ramp-time","ramp-time",-339037957),0.1);
return output.gain.linearRampToValueAtTime(0.0,(time + ramp_time));
});

hum.core.note_off.cljs$lang$maxFixedArity = (1);

hum.core.note_off.cljs$lang$applyTo = (function (seq13666){
var G__13667 = cljs.core.first.call(null,seq13666);
var seq13666__$1 = cljs.core.next.call(null,seq13666);
return hum.core.note_off.cljs$core$IFn$_invoke$arity$variadic(G__13667,seq13666__$1);
});

hum.core.create_context = (function hum$core$create_context(){
var constructor$ = (function (){var or__6824__auto__ = window.AudioContext;
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return window.webkitAudioContext;
}
})();
return (new constructor$());
});

//# sourceMappingURL=core.js.map