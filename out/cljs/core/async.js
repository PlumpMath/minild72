// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args10761 = [];
var len__7937__auto___10767 = arguments.length;
var i__7938__auto___10768 = (0);
while(true){
if((i__7938__auto___10768 < len__7937__auto___10767)){
args10761.push((arguments[i__7938__auto___10768]));

var G__10769 = (i__7938__auto___10768 + (1));
i__7938__auto___10768 = G__10769;
continue;
} else {
}
break;
}

var G__10763 = args10761.length;
switch (G__10763) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10761.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10764 = (function (f,blockable,meta10765){
this.f = f;
this.blockable = blockable;
this.meta10765 = meta10765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10766,meta10765__$1){
var self__ = this;
var _10766__$1 = this;
return (new cljs.core.async.t_cljs$core$async10764(self__.f,self__.blockable,meta10765__$1));
});

cljs.core.async.t_cljs$core$async10764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10766){
var self__ = this;
var _10766__$1 = this;
return self__.meta10765;
});

cljs.core.async.t_cljs$core$async10764.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10765","meta10765",-1701082650,null)], null);
});

cljs.core.async.t_cljs$core$async10764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10764";

cljs.core.async.t_cljs$core$async10764.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async10764");
});

cljs.core.async.__GT_t_cljs$core$async10764 = (function cljs$core$async$__GT_t_cljs$core$async10764(f__$1,blockable__$1,meta10765){
return (new cljs.core.async.t_cljs$core$async10764(f__$1,blockable__$1,meta10765));
});

}

return (new cljs.core.async.t_cljs$core$async10764(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args10773 = [];
var len__7937__auto___10776 = arguments.length;
var i__7938__auto___10777 = (0);
while(true){
if((i__7938__auto___10777 < len__7937__auto___10776)){
args10773.push((arguments[i__7938__auto___10777]));

var G__10778 = (i__7938__auto___10777 + (1));
i__7938__auto___10777 = G__10778;
continue;
} else {
}
break;
}

var G__10775 = args10773.length;
switch (G__10775) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10773.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args10780 = [];
var len__7937__auto___10783 = arguments.length;
var i__7938__auto___10784 = (0);
while(true){
if((i__7938__auto___10784 < len__7937__auto___10783)){
args10780.push((arguments[i__7938__auto___10784]));

var G__10785 = (i__7938__auto___10784 + (1));
i__7938__auto___10784 = G__10785;
continue;
} else {
}
break;
}

var G__10782 = args10780.length;
switch (G__10782) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10780.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args10787 = [];
var len__7937__auto___10790 = arguments.length;
var i__7938__auto___10791 = (0);
while(true){
if((i__7938__auto___10791 < len__7937__auto___10790)){
args10787.push((arguments[i__7938__auto___10791]));

var G__10792 = (i__7938__auto___10791 + (1));
i__7938__auto___10791 = G__10792;
continue;
} else {
}
break;
}

var G__10789 = args10787.length;
switch (G__10789) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10787.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10794 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10794);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10794,ret){
return (function (){
return fn1.call(null,val_10794);
});})(val_10794,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args10795 = [];
var len__7937__auto___10798 = arguments.length;
var i__7938__auto___10799 = (0);
while(true){
if((i__7938__auto___10799 < len__7937__auto___10798)){
args10795.push((arguments[i__7938__auto___10799]));

var G__10800 = (i__7938__auto___10799 + (1));
i__7938__auto___10799 = G__10800;
continue;
} else {
}
break;
}

var G__10797 = args10795.length;
switch (G__10797) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10795.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7747__auto___10802 = n;
var x_10803 = (0);
while(true){
if((x_10803 < n__7747__auto___10802)){
(a[x_10803] = (0));

var G__10804 = (x_10803 + (1));
x_10803 = G__10804;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10805 = (i + (1));
i = G__10805;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10809 = (function (flag,meta10810){
this.flag = flag;
this.meta10810 = meta10810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10811,meta10810__$1){
var self__ = this;
var _10811__$1 = this;
return (new cljs.core.async.t_cljs$core$async10809(self__.flag,meta10810__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10811){
var self__ = this;
var _10811__$1 = this;
return self__.meta10810;
});})(flag))
;

cljs.core.async.t_cljs$core$async10809.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10809.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10810","meta10810",447274590,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10809";

cljs.core.async.t_cljs$core$async10809.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async10809");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10809 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10809(flag__$1,meta10810){
return (new cljs.core.async.t_cljs$core$async10809(flag__$1,meta10810));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10809(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10815 = (function (flag,cb,meta10816){
this.flag = flag;
this.cb = cb;
this.meta10816 = meta10816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10817,meta10816__$1){
var self__ = this;
var _10817__$1 = this;
return (new cljs.core.async.t_cljs$core$async10815(self__.flag,self__.cb,meta10816__$1));
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10817){
var self__ = this;
var _10817__$1 = this;
return self__.meta10816;
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10816","meta10816",2076296862,null)], null);
});

cljs.core.async.t_cljs$core$async10815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10815";

cljs.core.async.t_cljs$core$async10815.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async10815");
});

cljs.core.async.__GT_t_cljs$core$async10815 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10815(flag__$1,cb__$1,meta10816){
return (new cljs.core.async.t_cljs$core$async10815(flag__$1,cb__$1,meta10816));
});

}

return (new cljs.core.async.t_cljs$core$async10815(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10818_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10818_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10819_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10819_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6824__auto__ = wport;
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10820 = (i + (1));
i = G__10820;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6824__auto__ = ret;
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6812__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6812__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7944__auto__ = [];
var len__7937__auto___10826 = arguments.length;
var i__7938__auto___10827 = (0);
while(true){
if((i__7938__auto___10827 < len__7937__auto___10826)){
args__7944__auto__.push((arguments[i__7938__auto___10827]));

var G__10828 = (i__7938__auto___10827 + (1));
i__7938__auto___10827 = G__10828;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10823){
var map__10824 = p__10823;
var map__10824__$1 = ((((!((map__10824 == null)))?((((map__10824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10824):map__10824);
var opts = map__10824__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10821){
var G__10822 = cljs.core.first.call(null,seq10821);
var seq10821__$1 = cljs.core.next.call(null,seq10821);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10822,seq10821__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args10829 = [];
var len__7937__auto___10879 = arguments.length;
var i__7938__auto___10880 = (0);
while(true){
if((i__7938__auto___10880 < len__7937__auto___10879)){
args10829.push((arguments[i__7938__auto___10880]));

var G__10881 = (i__7938__auto___10880 + (1));
i__7938__auto___10880 = G__10881;
continue;
} else {
}
break;
}

var G__10831 = args10829.length;
switch (G__10831) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10829.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10716__auto___10883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___10883){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___10883){
return (function (state_10855){
var state_val_10856 = (state_10855[(1)]);
if((state_val_10856 === (7))){
var inst_10851 = (state_10855[(2)]);
var state_10855__$1 = state_10855;
var statearr_10857_10884 = state_10855__$1;
(statearr_10857_10884[(2)] = inst_10851);

(statearr_10857_10884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (1))){
var state_10855__$1 = state_10855;
var statearr_10858_10885 = state_10855__$1;
(statearr_10858_10885[(2)] = null);

(statearr_10858_10885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (4))){
var inst_10834 = (state_10855[(7)]);
var inst_10834__$1 = (state_10855[(2)]);
var inst_10835 = (inst_10834__$1 == null);
var state_10855__$1 = (function (){var statearr_10859 = state_10855;
(statearr_10859[(7)] = inst_10834__$1);

return statearr_10859;
})();
if(cljs.core.truth_(inst_10835)){
var statearr_10860_10886 = state_10855__$1;
(statearr_10860_10886[(1)] = (5));

} else {
var statearr_10861_10887 = state_10855__$1;
(statearr_10861_10887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (13))){
var state_10855__$1 = state_10855;
var statearr_10862_10888 = state_10855__$1;
(statearr_10862_10888[(2)] = null);

(statearr_10862_10888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (6))){
var inst_10834 = (state_10855[(7)]);
var state_10855__$1 = state_10855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10855__$1,(11),to,inst_10834);
} else {
if((state_val_10856 === (3))){
var inst_10853 = (state_10855[(2)]);
var state_10855__$1 = state_10855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10855__$1,inst_10853);
} else {
if((state_val_10856 === (12))){
var state_10855__$1 = state_10855;
var statearr_10863_10889 = state_10855__$1;
(statearr_10863_10889[(2)] = null);

(statearr_10863_10889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (2))){
var state_10855__$1 = state_10855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10855__$1,(4),from);
} else {
if((state_val_10856 === (11))){
var inst_10844 = (state_10855[(2)]);
var state_10855__$1 = state_10855;
if(cljs.core.truth_(inst_10844)){
var statearr_10864_10890 = state_10855__$1;
(statearr_10864_10890[(1)] = (12));

} else {
var statearr_10865_10891 = state_10855__$1;
(statearr_10865_10891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (9))){
var state_10855__$1 = state_10855;
var statearr_10866_10892 = state_10855__$1;
(statearr_10866_10892[(2)] = null);

(statearr_10866_10892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (5))){
var state_10855__$1 = state_10855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10867_10893 = state_10855__$1;
(statearr_10867_10893[(1)] = (8));

} else {
var statearr_10868_10894 = state_10855__$1;
(statearr_10868_10894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (14))){
var inst_10849 = (state_10855[(2)]);
var state_10855__$1 = state_10855;
var statearr_10869_10895 = state_10855__$1;
(statearr_10869_10895[(2)] = inst_10849);

(statearr_10869_10895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (10))){
var inst_10841 = (state_10855[(2)]);
var state_10855__$1 = state_10855;
var statearr_10870_10896 = state_10855__$1;
(statearr_10870_10896[(2)] = inst_10841);

(statearr_10870_10896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10856 === (8))){
var inst_10838 = cljs.core.async.close_BANG_.call(null,to);
var state_10855__$1 = state_10855;
var statearr_10871_10897 = state_10855__$1;
(statearr_10871_10897[(2)] = inst_10838);

(statearr_10871_10897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___10883))
;
return ((function (switch__10604__auto__,c__10716__auto___10883){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_10875 = [null,null,null,null,null,null,null,null];
(statearr_10875[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_10875[(1)] = (1));

return statearr_10875;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_10855){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_10855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e10876){if((e10876 instanceof Object)){
var ex__10608__auto__ = e10876;
var statearr_10877_10898 = state_10855;
(statearr_10877_10898[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10899 = state_10855;
state_10855 = G__10899;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_10855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_10855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___10883))
})();
var state__10718__auto__ = (function (){var statearr_10878 = f__10717__auto__.call(null);
(statearr_10878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___10883);

return statearr_10878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___10883))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11087){
var vec__11088 = p__11087;
var v = cljs.core.nth.call(null,vec__11088,(0),null);
var p = cljs.core.nth.call(null,vec__11088,(1),null);
var job = vec__11088;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10716__auto___11274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___11274,res,vec__11088,v,p,job,jobs,results){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___11274,res,vec__11088,v,p,job,jobs,results){
return (function (state_11095){
var state_val_11096 = (state_11095[(1)]);
if((state_val_11096 === (1))){
var state_11095__$1 = state_11095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11095__$1,(2),res,v);
} else {
if((state_val_11096 === (2))){
var inst_11092 = (state_11095[(2)]);
var inst_11093 = cljs.core.async.close_BANG_.call(null,res);
var state_11095__$1 = (function (){var statearr_11097 = state_11095;
(statearr_11097[(7)] = inst_11092);

return statearr_11097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11095__$1,inst_11093);
} else {
return null;
}
}
});})(c__10716__auto___11274,res,vec__11088,v,p,job,jobs,results))
;
return ((function (switch__10604__auto__,c__10716__auto___11274,res,vec__11088,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0 = (function (){
var statearr_11101 = [null,null,null,null,null,null,null,null];
(statearr_11101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__);

(statearr_11101[(1)] = (1));

return statearr_11101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1 = (function (state_11095){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11102){if((e11102 instanceof Object)){
var ex__10608__auto__ = e11102;
var statearr_11103_11275 = state_11095;
(statearr_11103_11275[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11276 = state_11095;
state_11095 = G__11276;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = function(state_11095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1.call(this,state_11095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___11274,res,vec__11088,v,p,job,jobs,results))
})();
var state__10718__auto__ = (function (){var statearr_11104 = f__10717__auto__.call(null);
(statearr_11104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___11274);

return statearr_11104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___11274,res,vec__11088,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11105){
var vec__11106 = p__11105;
var v = cljs.core.nth.call(null,vec__11106,(0),null);
var p = cljs.core.nth.call(null,vec__11106,(1),null);
var job = vec__11106;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7747__auto___11277 = n;
var __11278 = (0);
while(true){
if((__11278 < n__7747__auto___11277)){
var G__11109_11279 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11109_11279) {
case "compute":
var c__10716__auto___11281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11278,c__10716__auto___11281,G__11109_11279,n__7747__auto___11277,jobs,results,process,async){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (__11278,c__10716__auto___11281,G__11109_11279,n__7747__auto___11277,jobs,results,process,async){
return (function (state_11122){
var state_val_11123 = (state_11122[(1)]);
if((state_val_11123 === (1))){
var state_11122__$1 = state_11122;
var statearr_11124_11282 = state_11122__$1;
(statearr_11124_11282[(2)] = null);

(statearr_11124_11282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (2))){
var state_11122__$1 = state_11122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11122__$1,(4),jobs);
} else {
if((state_val_11123 === (3))){
var inst_11120 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11122__$1,inst_11120);
} else {
if((state_val_11123 === (4))){
var inst_11112 = (state_11122[(2)]);
var inst_11113 = process.call(null,inst_11112);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11113)){
var statearr_11125_11283 = state_11122__$1;
(statearr_11125_11283[(1)] = (5));

} else {
var statearr_11126_11284 = state_11122__$1;
(statearr_11126_11284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (5))){
var state_11122__$1 = state_11122;
var statearr_11127_11285 = state_11122__$1;
(statearr_11127_11285[(2)] = null);

(statearr_11127_11285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (6))){
var state_11122__$1 = state_11122;
var statearr_11128_11286 = state_11122__$1;
(statearr_11128_11286[(2)] = null);

(statearr_11128_11286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (7))){
var inst_11118 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
var statearr_11129_11287 = state_11122__$1;
(statearr_11129_11287[(2)] = inst_11118);

(statearr_11129_11287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11278,c__10716__auto___11281,G__11109_11279,n__7747__auto___11277,jobs,results,process,async))
;
return ((function (__11278,switch__10604__auto__,c__10716__auto___11281,G__11109_11279,n__7747__auto___11277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0 = (function (){
var statearr_11133 = [null,null,null,null,null,null,null];
(statearr_11133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__);

(statearr_11133[(1)] = (1));

return statearr_11133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1 = (function (state_11122){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11134){if((e11134 instanceof Object)){
var ex__10608__auto__ = e11134;
var statearr_11135_11288 = state_11122;
(statearr_11135_11288[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11289 = state_11122;
state_11122 = G__11289;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = function(state_11122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1.call(this,state_11122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__;
})()
;})(__11278,switch__10604__auto__,c__10716__auto___11281,G__11109_11279,n__7747__auto___11277,jobs,results,process,async))
})();
var state__10718__auto__ = (function (){var statearr_11136 = f__10717__auto__.call(null);
(statearr_11136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___11281);

return statearr_11136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(__11278,c__10716__auto___11281,G__11109_11279,n__7747__auto___11277,jobs,results,process,async))
);


break;
case "async":
var c__10716__auto___11290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11278,c__10716__auto___11290,G__11109_11279,n__7747__auto___11277,jobs,results,process,async){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (__11278,c__10716__auto___11290,G__11109_11279,n__7747__auto___11277,jobs,results,process,async){
return (function (state_11149){
var state_val_11150 = (state_11149[(1)]);
if((state_val_11150 === (1))){
var state_11149__$1 = state_11149;
var statearr_11151_11291 = state_11149__$1;
(statearr_11151_11291[(2)] = null);

(statearr_11151_11291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (2))){
var state_11149__$1 = state_11149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11149__$1,(4),jobs);
} else {
if((state_val_11150 === (3))){
var inst_11147 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11149__$1,inst_11147);
} else {
if((state_val_11150 === (4))){
var inst_11139 = (state_11149[(2)]);
var inst_11140 = async.call(null,inst_11139);
var state_11149__$1 = state_11149;
if(cljs.core.truth_(inst_11140)){
var statearr_11152_11292 = state_11149__$1;
(statearr_11152_11292[(1)] = (5));

} else {
var statearr_11153_11293 = state_11149__$1;
(statearr_11153_11293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (5))){
var state_11149__$1 = state_11149;
var statearr_11154_11294 = state_11149__$1;
(statearr_11154_11294[(2)] = null);

(statearr_11154_11294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (6))){
var state_11149__$1 = state_11149;
var statearr_11155_11295 = state_11149__$1;
(statearr_11155_11295[(2)] = null);

(statearr_11155_11295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (7))){
var inst_11145 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
var statearr_11156_11296 = state_11149__$1;
(statearr_11156_11296[(2)] = inst_11145);

(statearr_11156_11296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11278,c__10716__auto___11290,G__11109_11279,n__7747__auto___11277,jobs,results,process,async))
;
return ((function (__11278,switch__10604__auto__,c__10716__auto___11290,G__11109_11279,n__7747__auto___11277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0 = (function (){
var statearr_11160 = [null,null,null,null,null,null,null];
(statearr_11160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__);

(statearr_11160[(1)] = (1));

return statearr_11160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1 = (function (state_11149){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11161){if((e11161 instanceof Object)){
var ex__10608__auto__ = e11161;
var statearr_11162_11297 = state_11149;
(statearr_11162_11297[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11298 = state_11149;
state_11149 = G__11298;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = function(state_11149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1.call(this,state_11149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__;
})()
;})(__11278,switch__10604__auto__,c__10716__auto___11290,G__11109_11279,n__7747__auto___11277,jobs,results,process,async))
})();
var state__10718__auto__ = (function (){var statearr_11163 = f__10717__auto__.call(null);
(statearr_11163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___11290);

return statearr_11163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(__11278,c__10716__auto___11290,G__11109_11279,n__7747__auto___11277,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__11299 = (__11278 + (1));
__11278 = G__11299;
continue;
} else {
}
break;
}

var c__10716__auto___11300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___11300,jobs,results,process,async){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___11300,jobs,results,process,async){
return (function (state_11185){
var state_val_11186 = (state_11185[(1)]);
if((state_val_11186 === (1))){
var state_11185__$1 = state_11185;
var statearr_11187_11301 = state_11185__$1;
(statearr_11187_11301[(2)] = null);

(statearr_11187_11301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (2))){
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11185__$1,(4),from);
} else {
if((state_val_11186 === (3))){
var inst_11183 = (state_11185[(2)]);
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11185__$1,inst_11183);
} else {
if((state_val_11186 === (4))){
var inst_11166 = (state_11185[(7)]);
var inst_11166__$1 = (state_11185[(2)]);
var inst_11167 = (inst_11166__$1 == null);
var state_11185__$1 = (function (){var statearr_11188 = state_11185;
(statearr_11188[(7)] = inst_11166__$1);

return statearr_11188;
})();
if(cljs.core.truth_(inst_11167)){
var statearr_11189_11302 = state_11185__$1;
(statearr_11189_11302[(1)] = (5));

} else {
var statearr_11190_11303 = state_11185__$1;
(statearr_11190_11303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (5))){
var inst_11169 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11185__$1 = state_11185;
var statearr_11191_11304 = state_11185__$1;
(statearr_11191_11304[(2)] = inst_11169);

(statearr_11191_11304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (6))){
var inst_11166 = (state_11185[(7)]);
var inst_11171 = (state_11185[(8)]);
var inst_11171__$1 = cljs.core.async.chan.call(null,(1));
var inst_11172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11173 = [inst_11166,inst_11171__$1];
var inst_11174 = (new cljs.core.PersistentVector(null,2,(5),inst_11172,inst_11173,null));
var state_11185__$1 = (function (){var statearr_11192 = state_11185;
(statearr_11192[(8)] = inst_11171__$1);

return statearr_11192;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11185__$1,(8),jobs,inst_11174);
} else {
if((state_val_11186 === (7))){
var inst_11181 = (state_11185[(2)]);
var state_11185__$1 = state_11185;
var statearr_11193_11305 = state_11185__$1;
(statearr_11193_11305[(2)] = inst_11181);

(statearr_11193_11305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11186 === (8))){
var inst_11171 = (state_11185[(8)]);
var inst_11176 = (state_11185[(2)]);
var state_11185__$1 = (function (){var statearr_11194 = state_11185;
(statearr_11194[(9)] = inst_11176);

return statearr_11194;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11185__$1,(9),results,inst_11171);
} else {
if((state_val_11186 === (9))){
var inst_11178 = (state_11185[(2)]);
var state_11185__$1 = (function (){var statearr_11195 = state_11185;
(statearr_11195[(10)] = inst_11178);

return statearr_11195;
})();
var statearr_11196_11306 = state_11185__$1;
(statearr_11196_11306[(2)] = null);

(statearr_11196_11306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___11300,jobs,results,process,async))
;
return ((function (switch__10604__auto__,c__10716__auto___11300,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0 = (function (){
var statearr_11200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__);

(statearr_11200[(1)] = (1));

return statearr_11200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1 = (function (state_11185){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11201){if((e11201 instanceof Object)){
var ex__10608__auto__ = e11201;
var statearr_11202_11307 = state_11185;
(statearr_11202_11307[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11308 = state_11185;
state_11185 = G__11308;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = function(state_11185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1.call(this,state_11185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___11300,jobs,results,process,async))
})();
var state__10718__auto__ = (function (){var statearr_11203 = f__10717__auto__.call(null);
(statearr_11203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___11300);

return statearr_11203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___11300,jobs,results,process,async))
);


var c__10716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto__,jobs,results,process,async){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto__,jobs,results,process,async){
return (function (state_11241){
var state_val_11242 = (state_11241[(1)]);
if((state_val_11242 === (7))){
var inst_11237 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
var statearr_11243_11309 = state_11241__$1;
(statearr_11243_11309[(2)] = inst_11237);

(statearr_11243_11309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (20))){
var state_11241__$1 = state_11241;
var statearr_11244_11310 = state_11241__$1;
(statearr_11244_11310[(2)] = null);

(statearr_11244_11310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (1))){
var state_11241__$1 = state_11241;
var statearr_11245_11311 = state_11241__$1;
(statearr_11245_11311[(2)] = null);

(statearr_11245_11311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (4))){
var inst_11206 = (state_11241[(7)]);
var inst_11206__$1 = (state_11241[(2)]);
var inst_11207 = (inst_11206__$1 == null);
var state_11241__$1 = (function (){var statearr_11246 = state_11241;
(statearr_11246[(7)] = inst_11206__$1);

return statearr_11246;
})();
if(cljs.core.truth_(inst_11207)){
var statearr_11247_11312 = state_11241__$1;
(statearr_11247_11312[(1)] = (5));

} else {
var statearr_11248_11313 = state_11241__$1;
(statearr_11248_11313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (15))){
var inst_11219 = (state_11241[(8)]);
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11241__$1,(18),to,inst_11219);
} else {
if((state_val_11242 === (21))){
var inst_11232 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
var statearr_11249_11314 = state_11241__$1;
(statearr_11249_11314[(2)] = inst_11232);

(statearr_11249_11314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (13))){
var inst_11234 = (state_11241[(2)]);
var state_11241__$1 = (function (){var statearr_11250 = state_11241;
(statearr_11250[(9)] = inst_11234);

return statearr_11250;
})();
var statearr_11251_11315 = state_11241__$1;
(statearr_11251_11315[(2)] = null);

(statearr_11251_11315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (6))){
var inst_11206 = (state_11241[(7)]);
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11241__$1,(11),inst_11206);
} else {
if((state_val_11242 === (17))){
var inst_11227 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
if(cljs.core.truth_(inst_11227)){
var statearr_11252_11316 = state_11241__$1;
(statearr_11252_11316[(1)] = (19));

} else {
var statearr_11253_11317 = state_11241__$1;
(statearr_11253_11317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (3))){
var inst_11239 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11241__$1,inst_11239);
} else {
if((state_val_11242 === (12))){
var inst_11216 = (state_11241[(10)]);
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11241__$1,(14),inst_11216);
} else {
if((state_val_11242 === (2))){
var state_11241__$1 = state_11241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11241__$1,(4),results);
} else {
if((state_val_11242 === (19))){
var state_11241__$1 = state_11241;
var statearr_11254_11318 = state_11241__$1;
(statearr_11254_11318[(2)] = null);

(statearr_11254_11318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (11))){
var inst_11216 = (state_11241[(2)]);
var state_11241__$1 = (function (){var statearr_11255 = state_11241;
(statearr_11255[(10)] = inst_11216);

return statearr_11255;
})();
var statearr_11256_11319 = state_11241__$1;
(statearr_11256_11319[(2)] = null);

(statearr_11256_11319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (9))){
var state_11241__$1 = state_11241;
var statearr_11257_11320 = state_11241__$1;
(statearr_11257_11320[(2)] = null);

(statearr_11257_11320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (5))){
var state_11241__$1 = state_11241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11258_11321 = state_11241__$1;
(statearr_11258_11321[(1)] = (8));

} else {
var statearr_11259_11322 = state_11241__$1;
(statearr_11259_11322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (14))){
var inst_11219 = (state_11241[(8)]);
var inst_11221 = (state_11241[(11)]);
var inst_11219__$1 = (state_11241[(2)]);
var inst_11220 = (inst_11219__$1 == null);
var inst_11221__$1 = cljs.core.not.call(null,inst_11220);
var state_11241__$1 = (function (){var statearr_11260 = state_11241;
(statearr_11260[(8)] = inst_11219__$1);

(statearr_11260[(11)] = inst_11221__$1);

return statearr_11260;
})();
if(inst_11221__$1){
var statearr_11261_11323 = state_11241__$1;
(statearr_11261_11323[(1)] = (15));

} else {
var statearr_11262_11324 = state_11241__$1;
(statearr_11262_11324[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (16))){
var inst_11221 = (state_11241[(11)]);
var state_11241__$1 = state_11241;
var statearr_11263_11325 = state_11241__$1;
(statearr_11263_11325[(2)] = inst_11221);

(statearr_11263_11325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (10))){
var inst_11213 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
var statearr_11264_11326 = state_11241__$1;
(statearr_11264_11326[(2)] = inst_11213);

(statearr_11264_11326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (18))){
var inst_11224 = (state_11241[(2)]);
var state_11241__$1 = state_11241;
var statearr_11265_11327 = state_11241__$1;
(statearr_11265_11327[(2)] = inst_11224);

(statearr_11265_11327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11242 === (8))){
var inst_11210 = cljs.core.async.close_BANG_.call(null,to);
var state_11241__$1 = state_11241;
var statearr_11266_11328 = state_11241__$1;
(statearr_11266_11328[(2)] = inst_11210);

(statearr_11266_11328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto__,jobs,results,process,async))
;
return ((function (switch__10604__auto__,c__10716__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0 = (function (){
var statearr_11270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__);

(statearr_11270[(1)] = (1));

return statearr_11270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1 = (function (state_11241){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11271){if((e11271 instanceof Object)){
var ex__10608__auto__ = e11271;
var statearr_11272_11329 = state_11241;
(statearr_11272_11329[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11330 = state_11241;
state_11241 = G__11330;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__ = function(state_11241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1.call(this,state_11241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto__,jobs,results,process,async))
})();
var state__10718__auto__ = (function (){var statearr_11273 = f__10717__auto__.call(null);
(statearr_11273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto__);

return statearr_11273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto__,jobs,results,process,async))
);

return c__10716__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args11331 = [];
var len__7937__auto___11334 = arguments.length;
var i__7938__auto___11335 = (0);
while(true){
if((i__7938__auto___11335 < len__7937__auto___11334)){
args11331.push((arguments[i__7938__auto___11335]));

var G__11336 = (i__7938__auto___11335 + (1));
i__7938__auto___11335 = G__11336;
continue;
} else {
}
break;
}

var G__11333 = args11331.length;
switch (G__11333) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11331.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args11338 = [];
var len__7937__auto___11341 = arguments.length;
var i__7938__auto___11342 = (0);
while(true){
if((i__7938__auto___11342 < len__7937__auto___11341)){
args11338.push((arguments[i__7938__auto___11342]));

var G__11343 = (i__7938__auto___11342 + (1));
i__7938__auto___11342 = G__11343;
continue;
} else {
}
break;
}

var G__11340 = args11338.length;
switch (G__11340) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11338.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args11345 = [];
var len__7937__auto___11398 = arguments.length;
var i__7938__auto___11399 = (0);
while(true){
if((i__7938__auto___11399 < len__7937__auto___11398)){
args11345.push((arguments[i__7938__auto___11399]));

var G__11400 = (i__7938__auto___11399 + (1));
i__7938__auto___11399 = G__11400;
continue;
} else {
}
break;
}

var G__11347 = args11345.length;
switch (G__11347) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11345.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10716__auto___11402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___11402,tc,fc){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___11402,tc,fc){
return (function (state_11373){
var state_val_11374 = (state_11373[(1)]);
if((state_val_11374 === (7))){
var inst_11369 = (state_11373[(2)]);
var state_11373__$1 = state_11373;
var statearr_11375_11403 = state_11373__$1;
(statearr_11375_11403[(2)] = inst_11369);

(statearr_11375_11403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (1))){
var state_11373__$1 = state_11373;
var statearr_11376_11404 = state_11373__$1;
(statearr_11376_11404[(2)] = null);

(statearr_11376_11404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (4))){
var inst_11350 = (state_11373[(7)]);
var inst_11350__$1 = (state_11373[(2)]);
var inst_11351 = (inst_11350__$1 == null);
var state_11373__$1 = (function (){var statearr_11377 = state_11373;
(statearr_11377[(7)] = inst_11350__$1);

return statearr_11377;
})();
if(cljs.core.truth_(inst_11351)){
var statearr_11378_11405 = state_11373__$1;
(statearr_11378_11405[(1)] = (5));

} else {
var statearr_11379_11406 = state_11373__$1;
(statearr_11379_11406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (13))){
var state_11373__$1 = state_11373;
var statearr_11380_11407 = state_11373__$1;
(statearr_11380_11407[(2)] = null);

(statearr_11380_11407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (6))){
var inst_11350 = (state_11373[(7)]);
var inst_11356 = p.call(null,inst_11350);
var state_11373__$1 = state_11373;
if(cljs.core.truth_(inst_11356)){
var statearr_11381_11408 = state_11373__$1;
(statearr_11381_11408[(1)] = (9));

} else {
var statearr_11382_11409 = state_11373__$1;
(statearr_11382_11409[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (3))){
var inst_11371 = (state_11373[(2)]);
var state_11373__$1 = state_11373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11373__$1,inst_11371);
} else {
if((state_val_11374 === (12))){
var state_11373__$1 = state_11373;
var statearr_11383_11410 = state_11373__$1;
(statearr_11383_11410[(2)] = null);

(statearr_11383_11410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (2))){
var state_11373__$1 = state_11373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11373__$1,(4),ch);
} else {
if((state_val_11374 === (11))){
var inst_11350 = (state_11373[(7)]);
var inst_11360 = (state_11373[(2)]);
var state_11373__$1 = state_11373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11373__$1,(8),inst_11360,inst_11350);
} else {
if((state_val_11374 === (9))){
var state_11373__$1 = state_11373;
var statearr_11384_11411 = state_11373__$1;
(statearr_11384_11411[(2)] = tc);

(statearr_11384_11411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (5))){
var inst_11353 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11354 = cljs.core.async.close_BANG_.call(null,fc);
var state_11373__$1 = (function (){var statearr_11385 = state_11373;
(statearr_11385[(8)] = inst_11353);

return statearr_11385;
})();
var statearr_11386_11412 = state_11373__$1;
(statearr_11386_11412[(2)] = inst_11354);

(statearr_11386_11412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (14))){
var inst_11367 = (state_11373[(2)]);
var state_11373__$1 = state_11373;
var statearr_11387_11413 = state_11373__$1;
(statearr_11387_11413[(2)] = inst_11367);

(statearr_11387_11413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (10))){
var state_11373__$1 = state_11373;
var statearr_11388_11414 = state_11373__$1;
(statearr_11388_11414[(2)] = fc);

(statearr_11388_11414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11374 === (8))){
var inst_11362 = (state_11373[(2)]);
var state_11373__$1 = state_11373;
if(cljs.core.truth_(inst_11362)){
var statearr_11389_11415 = state_11373__$1;
(statearr_11389_11415[(1)] = (12));

} else {
var statearr_11390_11416 = state_11373__$1;
(statearr_11390_11416[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___11402,tc,fc))
;
return ((function (switch__10604__auto__,c__10716__auto___11402,tc,fc){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_11394 = [null,null,null,null,null,null,null,null,null];
(statearr_11394[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_11394[(1)] = (1));

return statearr_11394;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_11373){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11395){if((e11395 instanceof Object)){
var ex__10608__auto__ = e11395;
var statearr_11396_11417 = state_11373;
(statearr_11396_11417[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11418 = state_11373;
state_11373 = G__11418;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_11373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_11373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___11402,tc,fc))
})();
var state__10718__auto__ = (function (){var statearr_11397 = f__10717__auto__.call(null);
(statearr_11397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___11402);

return statearr_11397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___11402,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto__){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto__){
return (function (state_11482){
var state_val_11483 = (state_11482[(1)]);
if((state_val_11483 === (7))){
var inst_11478 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11484_11505 = state_11482__$1;
(statearr_11484_11505[(2)] = inst_11478);

(statearr_11484_11505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (1))){
var inst_11462 = init;
var state_11482__$1 = (function (){var statearr_11485 = state_11482;
(statearr_11485[(7)] = inst_11462);

return statearr_11485;
})();
var statearr_11486_11506 = state_11482__$1;
(statearr_11486_11506[(2)] = null);

(statearr_11486_11506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (4))){
var inst_11465 = (state_11482[(8)]);
var inst_11465__$1 = (state_11482[(2)]);
var inst_11466 = (inst_11465__$1 == null);
var state_11482__$1 = (function (){var statearr_11487 = state_11482;
(statearr_11487[(8)] = inst_11465__$1);

return statearr_11487;
})();
if(cljs.core.truth_(inst_11466)){
var statearr_11488_11507 = state_11482__$1;
(statearr_11488_11507[(1)] = (5));

} else {
var statearr_11489_11508 = state_11482__$1;
(statearr_11489_11508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (6))){
var inst_11469 = (state_11482[(9)]);
var inst_11462 = (state_11482[(7)]);
var inst_11465 = (state_11482[(8)]);
var inst_11469__$1 = f.call(null,inst_11462,inst_11465);
var inst_11470 = cljs.core.reduced_QMARK_.call(null,inst_11469__$1);
var state_11482__$1 = (function (){var statearr_11490 = state_11482;
(statearr_11490[(9)] = inst_11469__$1);

return statearr_11490;
})();
if(inst_11470){
var statearr_11491_11509 = state_11482__$1;
(statearr_11491_11509[(1)] = (8));

} else {
var statearr_11492_11510 = state_11482__$1;
(statearr_11492_11510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (3))){
var inst_11480 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11482__$1,inst_11480);
} else {
if((state_val_11483 === (2))){
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11482__$1,(4),ch);
} else {
if((state_val_11483 === (9))){
var inst_11469 = (state_11482[(9)]);
var inst_11462 = inst_11469;
var state_11482__$1 = (function (){var statearr_11493 = state_11482;
(statearr_11493[(7)] = inst_11462);

return statearr_11493;
})();
var statearr_11494_11511 = state_11482__$1;
(statearr_11494_11511[(2)] = null);

(statearr_11494_11511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (5))){
var inst_11462 = (state_11482[(7)]);
var state_11482__$1 = state_11482;
var statearr_11495_11512 = state_11482__$1;
(statearr_11495_11512[(2)] = inst_11462);

(statearr_11495_11512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (10))){
var inst_11476 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11496_11513 = state_11482__$1;
(statearr_11496_11513[(2)] = inst_11476);

(statearr_11496_11513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (8))){
var inst_11469 = (state_11482[(9)]);
var inst_11472 = cljs.core.deref.call(null,inst_11469);
var state_11482__$1 = state_11482;
var statearr_11497_11514 = state_11482__$1;
(statearr_11497_11514[(2)] = inst_11472);

(statearr_11497_11514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto__))
;
return ((function (switch__10604__auto__,c__10716__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10605__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10605__auto____0 = (function (){
var statearr_11501 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11501[(0)] = cljs$core$async$reduce_$_state_machine__10605__auto__);

(statearr_11501[(1)] = (1));

return statearr_11501;
});
var cljs$core$async$reduce_$_state_machine__10605__auto____1 = (function (state_11482){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11502){if((e11502 instanceof Object)){
var ex__10608__auto__ = e11502;
var statearr_11503_11515 = state_11482;
(statearr_11503_11515[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11516 = state_11482;
state_11482 = G__11516;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10605__auto__ = function(state_11482){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10605__auto____1.call(this,state_11482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10605__auto____0;
cljs$core$async$reduce_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10605__auto____1;
return cljs$core$async$reduce_$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto__))
})();
var state__10718__auto__ = (function (){var statearr_11504 = f__10717__auto__.call(null);
(statearr_11504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto__);

return statearr_11504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto__))
);

return c__10716__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto__,f__$1){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto__,f__$1){
return (function (state_11536){
var state_val_11537 = (state_11536[(1)]);
if((state_val_11537 === (1))){
var inst_11531 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11536__$1 = state_11536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11536__$1,(2),inst_11531);
} else {
if((state_val_11537 === (2))){
var inst_11533 = (state_11536[(2)]);
var inst_11534 = f__$1.call(null,inst_11533);
var state_11536__$1 = state_11536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11536__$1,inst_11534);
} else {
return null;
}
}
});})(c__10716__auto__,f__$1))
;
return ((function (switch__10604__auto__,c__10716__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10605__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10605__auto____0 = (function (){
var statearr_11541 = [null,null,null,null,null,null,null];
(statearr_11541[(0)] = cljs$core$async$transduce_$_state_machine__10605__auto__);

(statearr_11541[(1)] = (1));

return statearr_11541;
});
var cljs$core$async$transduce_$_state_machine__10605__auto____1 = (function (state_11536){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11542){if((e11542 instanceof Object)){
var ex__10608__auto__ = e11542;
var statearr_11543_11545 = state_11536;
(statearr_11543_11545[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11546 = state_11536;
state_11536 = G__11546;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10605__auto__ = function(state_11536){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10605__auto____1.call(this,state_11536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10605__auto____0;
cljs$core$async$transduce_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10605__auto____1;
return cljs$core$async$transduce_$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto__,f__$1))
})();
var state__10718__auto__ = (function (){var statearr_11544 = f__10717__auto__.call(null);
(statearr_11544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto__);

return statearr_11544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto__,f__$1))
);

return c__10716__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args11547 = [];
var len__7937__auto___11599 = arguments.length;
var i__7938__auto___11600 = (0);
while(true){
if((i__7938__auto___11600 < len__7937__auto___11599)){
args11547.push((arguments[i__7938__auto___11600]));

var G__11601 = (i__7938__auto___11600 + (1));
i__7938__auto___11600 = G__11601;
continue;
} else {
}
break;
}

var G__11549 = args11547.length;
switch (G__11549) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11547.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto__){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto__){
return (function (state_11574){
var state_val_11575 = (state_11574[(1)]);
if((state_val_11575 === (7))){
var inst_11556 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
var statearr_11576_11603 = state_11574__$1;
(statearr_11576_11603[(2)] = inst_11556);

(statearr_11576_11603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (1))){
var inst_11550 = cljs.core.seq.call(null,coll);
var inst_11551 = inst_11550;
var state_11574__$1 = (function (){var statearr_11577 = state_11574;
(statearr_11577[(7)] = inst_11551);

return statearr_11577;
})();
var statearr_11578_11604 = state_11574__$1;
(statearr_11578_11604[(2)] = null);

(statearr_11578_11604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (4))){
var inst_11551 = (state_11574[(7)]);
var inst_11554 = cljs.core.first.call(null,inst_11551);
var state_11574__$1 = state_11574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11574__$1,(7),ch,inst_11554);
} else {
if((state_val_11575 === (13))){
var inst_11568 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
var statearr_11579_11605 = state_11574__$1;
(statearr_11579_11605[(2)] = inst_11568);

(statearr_11579_11605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (6))){
var inst_11559 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
if(cljs.core.truth_(inst_11559)){
var statearr_11580_11606 = state_11574__$1;
(statearr_11580_11606[(1)] = (8));

} else {
var statearr_11581_11607 = state_11574__$1;
(statearr_11581_11607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (3))){
var inst_11572 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11574__$1,inst_11572);
} else {
if((state_val_11575 === (12))){
var state_11574__$1 = state_11574;
var statearr_11582_11608 = state_11574__$1;
(statearr_11582_11608[(2)] = null);

(statearr_11582_11608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (2))){
var inst_11551 = (state_11574[(7)]);
var state_11574__$1 = state_11574;
if(cljs.core.truth_(inst_11551)){
var statearr_11583_11609 = state_11574__$1;
(statearr_11583_11609[(1)] = (4));

} else {
var statearr_11584_11610 = state_11574__$1;
(statearr_11584_11610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (11))){
var inst_11565 = cljs.core.async.close_BANG_.call(null,ch);
var state_11574__$1 = state_11574;
var statearr_11585_11611 = state_11574__$1;
(statearr_11585_11611[(2)] = inst_11565);

(statearr_11585_11611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (9))){
var state_11574__$1 = state_11574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11586_11612 = state_11574__$1;
(statearr_11586_11612[(1)] = (11));

} else {
var statearr_11587_11613 = state_11574__$1;
(statearr_11587_11613[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (5))){
var inst_11551 = (state_11574[(7)]);
var state_11574__$1 = state_11574;
var statearr_11588_11614 = state_11574__$1;
(statearr_11588_11614[(2)] = inst_11551);

(statearr_11588_11614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (10))){
var inst_11570 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
var statearr_11589_11615 = state_11574__$1;
(statearr_11589_11615[(2)] = inst_11570);

(statearr_11589_11615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (8))){
var inst_11551 = (state_11574[(7)]);
var inst_11561 = cljs.core.next.call(null,inst_11551);
var inst_11551__$1 = inst_11561;
var state_11574__$1 = (function (){var statearr_11590 = state_11574;
(statearr_11590[(7)] = inst_11551__$1);

return statearr_11590;
})();
var statearr_11591_11616 = state_11574__$1;
(statearr_11591_11616[(2)] = null);

(statearr_11591_11616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto__))
;
return ((function (switch__10604__auto__,c__10716__auto__){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_11595 = [null,null,null,null,null,null,null,null];
(statearr_11595[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_11595[(1)] = (1));

return statearr_11595;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_11574){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e11596){if((e11596 instanceof Object)){
var ex__10608__auto__ = e11596;
var statearr_11597_11617 = state_11574;
(statearr_11597_11617[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11618 = state_11574;
state_11574 = G__11618;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_11574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_11574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto__))
})();
var state__10718__auto__ = (function (){var statearr_11598 = f__10717__auto__.call(null);
(statearr_11598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto__);

return statearr_11598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto__))
);

return c__10716__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7492__auto__ = (((_ == null))?null:_);
var m__7493__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,_);
} else {
var m__7493__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7493__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m);
} else {
var m__7493__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11844 = (function (ch,cs,meta11845){
this.ch = ch;
this.cs = cs;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11846,meta11845__$1){
var self__ = this;
var _11846__$1 = this;
return (new cljs.core.async.t_cljs$core$async11844(self__.ch,self__.cs,meta11845__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11846){
var self__ = this;
var _11846__$1 = this;
return self__.meta11845;
});})(cs))
;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11844.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11845","meta11845",-1073878825,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11844";

cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async11844");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11844 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11844(ch__$1,cs__$1,meta11845){
return (new cljs.core.async.t_cljs$core$async11844(ch__$1,cs__$1,meta11845));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11844(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10716__auto___12069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___12069,cs,m,dchan,dctr,done){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___12069,cs,m,dchan,dctr,done){
return (function (state_11981){
var state_val_11982 = (state_11981[(1)]);
if((state_val_11982 === (7))){
var inst_11977 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_11983_12070 = state_11981__$1;
(statearr_11983_12070[(2)] = inst_11977);

(statearr_11983_12070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (20))){
var inst_11880 = (state_11981[(7)]);
var inst_11892 = cljs.core.first.call(null,inst_11880);
var inst_11893 = cljs.core.nth.call(null,inst_11892,(0),null);
var inst_11894 = cljs.core.nth.call(null,inst_11892,(1),null);
var state_11981__$1 = (function (){var statearr_11984 = state_11981;
(statearr_11984[(8)] = inst_11893);

return statearr_11984;
})();
if(cljs.core.truth_(inst_11894)){
var statearr_11985_12071 = state_11981__$1;
(statearr_11985_12071[(1)] = (22));

} else {
var statearr_11986_12072 = state_11981__$1;
(statearr_11986_12072[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (27))){
var inst_11929 = (state_11981[(9)]);
var inst_11922 = (state_11981[(10)]);
var inst_11849 = (state_11981[(11)]);
var inst_11924 = (state_11981[(12)]);
var inst_11929__$1 = cljs.core._nth.call(null,inst_11922,inst_11924);
var inst_11930 = cljs.core.async.put_BANG_.call(null,inst_11929__$1,inst_11849,done);
var state_11981__$1 = (function (){var statearr_11987 = state_11981;
(statearr_11987[(9)] = inst_11929__$1);

return statearr_11987;
})();
if(cljs.core.truth_(inst_11930)){
var statearr_11988_12073 = state_11981__$1;
(statearr_11988_12073[(1)] = (30));

} else {
var statearr_11989_12074 = state_11981__$1;
(statearr_11989_12074[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (1))){
var state_11981__$1 = state_11981;
var statearr_11990_12075 = state_11981__$1;
(statearr_11990_12075[(2)] = null);

(statearr_11990_12075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (24))){
var inst_11880 = (state_11981[(7)]);
var inst_11899 = (state_11981[(2)]);
var inst_11900 = cljs.core.next.call(null,inst_11880);
var inst_11858 = inst_11900;
var inst_11859 = null;
var inst_11860 = (0);
var inst_11861 = (0);
var state_11981__$1 = (function (){var statearr_11991 = state_11981;
(statearr_11991[(13)] = inst_11858);

(statearr_11991[(14)] = inst_11899);

(statearr_11991[(15)] = inst_11860);

(statearr_11991[(16)] = inst_11861);

(statearr_11991[(17)] = inst_11859);

return statearr_11991;
})();
var statearr_11992_12076 = state_11981__$1;
(statearr_11992_12076[(2)] = null);

(statearr_11992_12076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (39))){
var state_11981__$1 = state_11981;
var statearr_11996_12077 = state_11981__$1;
(statearr_11996_12077[(2)] = null);

(statearr_11996_12077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (4))){
var inst_11849 = (state_11981[(11)]);
var inst_11849__$1 = (state_11981[(2)]);
var inst_11850 = (inst_11849__$1 == null);
var state_11981__$1 = (function (){var statearr_11997 = state_11981;
(statearr_11997[(11)] = inst_11849__$1);

return statearr_11997;
})();
if(cljs.core.truth_(inst_11850)){
var statearr_11998_12078 = state_11981__$1;
(statearr_11998_12078[(1)] = (5));

} else {
var statearr_11999_12079 = state_11981__$1;
(statearr_11999_12079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (15))){
var inst_11858 = (state_11981[(13)]);
var inst_11860 = (state_11981[(15)]);
var inst_11861 = (state_11981[(16)]);
var inst_11859 = (state_11981[(17)]);
var inst_11876 = (state_11981[(2)]);
var inst_11877 = (inst_11861 + (1));
var tmp11993 = inst_11858;
var tmp11994 = inst_11860;
var tmp11995 = inst_11859;
var inst_11858__$1 = tmp11993;
var inst_11859__$1 = tmp11995;
var inst_11860__$1 = tmp11994;
var inst_11861__$1 = inst_11877;
var state_11981__$1 = (function (){var statearr_12000 = state_11981;
(statearr_12000[(13)] = inst_11858__$1);

(statearr_12000[(15)] = inst_11860__$1);

(statearr_12000[(16)] = inst_11861__$1);

(statearr_12000[(18)] = inst_11876);

(statearr_12000[(17)] = inst_11859__$1);

return statearr_12000;
})();
var statearr_12001_12080 = state_11981__$1;
(statearr_12001_12080[(2)] = null);

(statearr_12001_12080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (21))){
var inst_11903 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12005_12081 = state_11981__$1;
(statearr_12005_12081[(2)] = inst_11903);

(statearr_12005_12081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (31))){
var inst_11929 = (state_11981[(9)]);
var inst_11933 = done.call(null,null);
var inst_11934 = cljs.core.async.untap_STAR_.call(null,m,inst_11929);
var state_11981__$1 = (function (){var statearr_12006 = state_11981;
(statearr_12006[(19)] = inst_11933);

return statearr_12006;
})();
var statearr_12007_12082 = state_11981__$1;
(statearr_12007_12082[(2)] = inst_11934);

(statearr_12007_12082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (32))){
var inst_11922 = (state_11981[(10)]);
var inst_11923 = (state_11981[(20)]);
var inst_11921 = (state_11981[(21)]);
var inst_11924 = (state_11981[(12)]);
var inst_11936 = (state_11981[(2)]);
var inst_11937 = (inst_11924 + (1));
var tmp12002 = inst_11922;
var tmp12003 = inst_11923;
var tmp12004 = inst_11921;
var inst_11921__$1 = tmp12004;
var inst_11922__$1 = tmp12002;
var inst_11923__$1 = tmp12003;
var inst_11924__$1 = inst_11937;
var state_11981__$1 = (function (){var statearr_12008 = state_11981;
(statearr_12008[(22)] = inst_11936);

(statearr_12008[(10)] = inst_11922__$1);

(statearr_12008[(20)] = inst_11923__$1);

(statearr_12008[(21)] = inst_11921__$1);

(statearr_12008[(12)] = inst_11924__$1);

return statearr_12008;
})();
var statearr_12009_12083 = state_11981__$1;
(statearr_12009_12083[(2)] = null);

(statearr_12009_12083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (40))){
var inst_11949 = (state_11981[(23)]);
var inst_11953 = done.call(null,null);
var inst_11954 = cljs.core.async.untap_STAR_.call(null,m,inst_11949);
var state_11981__$1 = (function (){var statearr_12010 = state_11981;
(statearr_12010[(24)] = inst_11953);

return statearr_12010;
})();
var statearr_12011_12084 = state_11981__$1;
(statearr_12011_12084[(2)] = inst_11954);

(statearr_12011_12084[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (33))){
var inst_11940 = (state_11981[(25)]);
var inst_11942 = cljs.core.chunked_seq_QMARK_.call(null,inst_11940);
var state_11981__$1 = state_11981;
if(inst_11942){
var statearr_12012_12085 = state_11981__$1;
(statearr_12012_12085[(1)] = (36));

} else {
var statearr_12013_12086 = state_11981__$1;
(statearr_12013_12086[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (13))){
var inst_11870 = (state_11981[(26)]);
var inst_11873 = cljs.core.async.close_BANG_.call(null,inst_11870);
var state_11981__$1 = state_11981;
var statearr_12014_12087 = state_11981__$1;
(statearr_12014_12087[(2)] = inst_11873);

(statearr_12014_12087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (22))){
var inst_11893 = (state_11981[(8)]);
var inst_11896 = cljs.core.async.close_BANG_.call(null,inst_11893);
var state_11981__$1 = state_11981;
var statearr_12015_12088 = state_11981__$1;
(statearr_12015_12088[(2)] = inst_11896);

(statearr_12015_12088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (36))){
var inst_11940 = (state_11981[(25)]);
var inst_11944 = cljs.core.chunk_first.call(null,inst_11940);
var inst_11945 = cljs.core.chunk_rest.call(null,inst_11940);
var inst_11946 = cljs.core.count.call(null,inst_11944);
var inst_11921 = inst_11945;
var inst_11922 = inst_11944;
var inst_11923 = inst_11946;
var inst_11924 = (0);
var state_11981__$1 = (function (){var statearr_12016 = state_11981;
(statearr_12016[(10)] = inst_11922);

(statearr_12016[(20)] = inst_11923);

(statearr_12016[(21)] = inst_11921);

(statearr_12016[(12)] = inst_11924);

return statearr_12016;
})();
var statearr_12017_12089 = state_11981__$1;
(statearr_12017_12089[(2)] = null);

(statearr_12017_12089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (41))){
var inst_11940 = (state_11981[(25)]);
var inst_11956 = (state_11981[(2)]);
var inst_11957 = cljs.core.next.call(null,inst_11940);
var inst_11921 = inst_11957;
var inst_11922 = null;
var inst_11923 = (0);
var inst_11924 = (0);
var state_11981__$1 = (function (){var statearr_12018 = state_11981;
(statearr_12018[(10)] = inst_11922);

(statearr_12018[(20)] = inst_11923);

(statearr_12018[(27)] = inst_11956);

(statearr_12018[(21)] = inst_11921);

(statearr_12018[(12)] = inst_11924);

return statearr_12018;
})();
var statearr_12019_12090 = state_11981__$1;
(statearr_12019_12090[(2)] = null);

(statearr_12019_12090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (43))){
var state_11981__$1 = state_11981;
var statearr_12020_12091 = state_11981__$1;
(statearr_12020_12091[(2)] = null);

(statearr_12020_12091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (29))){
var inst_11965 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12021_12092 = state_11981__$1;
(statearr_12021_12092[(2)] = inst_11965);

(statearr_12021_12092[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (44))){
var inst_11974 = (state_11981[(2)]);
var state_11981__$1 = (function (){var statearr_12022 = state_11981;
(statearr_12022[(28)] = inst_11974);

return statearr_12022;
})();
var statearr_12023_12093 = state_11981__$1;
(statearr_12023_12093[(2)] = null);

(statearr_12023_12093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (6))){
var inst_11913 = (state_11981[(29)]);
var inst_11912 = cljs.core.deref.call(null,cs);
var inst_11913__$1 = cljs.core.keys.call(null,inst_11912);
var inst_11914 = cljs.core.count.call(null,inst_11913__$1);
var inst_11915 = cljs.core.reset_BANG_.call(null,dctr,inst_11914);
var inst_11920 = cljs.core.seq.call(null,inst_11913__$1);
var inst_11921 = inst_11920;
var inst_11922 = null;
var inst_11923 = (0);
var inst_11924 = (0);
var state_11981__$1 = (function (){var statearr_12024 = state_11981;
(statearr_12024[(30)] = inst_11915);

(statearr_12024[(10)] = inst_11922);

(statearr_12024[(20)] = inst_11923);

(statearr_12024[(21)] = inst_11921);

(statearr_12024[(29)] = inst_11913__$1);

(statearr_12024[(12)] = inst_11924);

return statearr_12024;
})();
var statearr_12025_12094 = state_11981__$1;
(statearr_12025_12094[(2)] = null);

(statearr_12025_12094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (28))){
var inst_11940 = (state_11981[(25)]);
var inst_11921 = (state_11981[(21)]);
var inst_11940__$1 = cljs.core.seq.call(null,inst_11921);
var state_11981__$1 = (function (){var statearr_12026 = state_11981;
(statearr_12026[(25)] = inst_11940__$1);

return statearr_12026;
})();
if(inst_11940__$1){
var statearr_12027_12095 = state_11981__$1;
(statearr_12027_12095[(1)] = (33));

} else {
var statearr_12028_12096 = state_11981__$1;
(statearr_12028_12096[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (25))){
var inst_11923 = (state_11981[(20)]);
var inst_11924 = (state_11981[(12)]);
var inst_11926 = (inst_11924 < inst_11923);
var inst_11927 = inst_11926;
var state_11981__$1 = state_11981;
if(cljs.core.truth_(inst_11927)){
var statearr_12029_12097 = state_11981__$1;
(statearr_12029_12097[(1)] = (27));

} else {
var statearr_12030_12098 = state_11981__$1;
(statearr_12030_12098[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (34))){
var state_11981__$1 = state_11981;
var statearr_12031_12099 = state_11981__$1;
(statearr_12031_12099[(2)] = null);

(statearr_12031_12099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (17))){
var state_11981__$1 = state_11981;
var statearr_12032_12100 = state_11981__$1;
(statearr_12032_12100[(2)] = null);

(statearr_12032_12100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (3))){
var inst_11979 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11981__$1,inst_11979);
} else {
if((state_val_11982 === (12))){
var inst_11908 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12033_12101 = state_11981__$1;
(statearr_12033_12101[(2)] = inst_11908);

(statearr_12033_12101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (2))){
var state_11981__$1 = state_11981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11981__$1,(4),ch);
} else {
if((state_val_11982 === (23))){
var state_11981__$1 = state_11981;
var statearr_12034_12102 = state_11981__$1;
(statearr_12034_12102[(2)] = null);

(statearr_12034_12102[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (35))){
var inst_11963 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12035_12103 = state_11981__$1;
(statearr_12035_12103[(2)] = inst_11963);

(statearr_12035_12103[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (19))){
var inst_11880 = (state_11981[(7)]);
var inst_11884 = cljs.core.chunk_first.call(null,inst_11880);
var inst_11885 = cljs.core.chunk_rest.call(null,inst_11880);
var inst_11886 = cljs.core.count.call(null,inst_11884);
var inst_11858 = inst_11885;
var inst_11859 = inst_11884;
var inst_11860 = inst_11886;
var inst_11861 = (0);
var state_11981__$1 = (function (){var statearr_12036 = state_11981;
(statearr_12036[(13)] = inst_11858);

(statearr_12036[(15)] = inst_11860);

(statearr_12036[(16)] = inst_11861);

(statearr_12036[(17)] = inst_11859);

return statearr_12036;
})();
var statearr_12037_12104 = state_11981__$1;
(statearr_12037_12104[(2)] = null);

(statearr_12037_12104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (11))){
var inst_11858 = (state_11981[(13)]);
var inst_11880 = (state_11981[(7)]);
var inst_11880__$1 = cljs.core.seq.call(null,inst_11858);
var state_11981__$1 = (function (){var statearr_12038 = state_11981;
(statearr_12038[(7)] = inst_11880__$1);

return statearr_12038;
})();
if(inst_11880__$1){
var statearr_12039_12105 = state_11981__$1;
(statearr_12039_12105[(1)] = (16));

} else {
var statearr_12040_12106 = state_11981__$1;
(statearr_12040_12106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (9))){
var inst_11910 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12041_12107 = state_11981__$1;
(statearr_12041_12107[(2)] = inst_11910);

(statearr_12041_12107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (5))){
var inst_11856 = cljs.core.deref.call(null,cs);
var inst_11857 = cljs.core.seq.call(null,inst_11856);
var inst_11858 = inst_11857;
var inst_11859 = null;
var inst_11860 = (0);
var inst_11861 = (0);
var state_11981__$1 = (function (){var statearr_12042 = state_11981;
(statearr_12042[(13)] = inst_11858);

(statearr_12042[(15)] = inst_11860);

(statearr_12042[(16)] = inst_11861);

(statearr_12042[(17)] = inst_11859);

return statearr_12042;
})();
var statearr_12043_12108 = state_11981__$1;
(statearr_12043_12108[(2)] = null);

(statearr_12043_12108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (14))){
var state_11981__$1 = state_11981;
var statearr_12044_12109 = state_11981__$1;
(statearr_12044_12109[(2)] = null);

(statearr_12044_12109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (45))){
var inst_11971 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12045_12110 = state_11981__$1;
(statearr_12045_12110[(2)] = inst_11971);

(statearr_12045_12110[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (26))){
var inst_11913 = (state_11981[(29)]);
var inst_11967 = (state_11981[(2)]);
var inst_11968 = cljs.core.seq.call(null,inst_11913);
var state_11981__$1 = (function (){var statearr_12046 = state_11981;
(statearr_12046[(31)] = inst_11967);

return statearr_12046;
})();
if(inst_11968){
var statearr_12047_12111 = state_11981__$1;
(statearr_12047_12111[(1)] = (42));

} else {
var statearr_12048_12112 = state_11981__$1;
(statearr_12048_12112[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (16))){
var inst_11880 = (state_11981[(7)]);
var inst_11882 = cljs.core.chunked_seq_QMARK_.call(null,inst_11880);
var state_11981__$1 = state_11981;
if(inst_11882){
var statearr_12049_12113 = state_11981__$1;
(statearr_12049_12113[(1)] = (19));

} else {
var statearr_12050_12114 = state_11981__$1;
(statearr_12050_12114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (38))){
var inst_11960 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12051_12115 = state_11981__$1;
(statearr_12051_12115[(2)] = inst_11960);

(statearr_12051_12115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (30))){
var state_11981__$1 = state_11981;
var statearr_12052_12116 = state_11981__$1;
(statearr_12052_12116[(2)] = null);

(statearr_12052_12116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (10))){
var inst_11861 = (state_11981[(16)]);
var inst_11859 = (state_11981[(17)]);
var inst_11869 = cljs.core._nth.call(null,inst_11859,inst_11861);
var inst_11870 = cljs.core.nth.call(null,inst_11869,(0),null);
var inst_11871 = cljs.core.nth.call(null,inst_11869,(1),null);
var state_11981__$1 = (function (){var statearr_12053 = state_11981;
(statearr_12053[(26)] = inst_11870);

return statearr_12053;
})();
if(cljs.core.truth_(inst_11871)){
var statearr_12054_12117 = state_11981__$1;
(statearr_12054_12117[(1)] = (13));

} else {
var statearr_12055_12118 = state_11981__$1;
(statearr_12055_12118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (18))){
var inst_11906 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_12056_12119 = state_11981__$1;
(statearr_12056_12119[(2)] = inst_11906);

(statearr_12056_12119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (42))){
var state_11981__$1 = state_11981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11981__$1,(45),dchan);
} else {
if((state_val_11982 === (37))){
var inst_11949 = (state_11981[(23)]);
var inst_11940 = (state_11981[(25)]);
var inst_11849 = (state_11981[(11)]);
var inst_11949__$1 = cljs.core.first.call(null,inst_11940);
var inst_11950 = cljs.core.async.put_BANG_.call(null,inst_11949__$1,inst_11849,done);
var state_11981__$1 = (function (){var statearr_12057 = state_11981;
(statearr_12057[(23)] = inst_11949__$1);

return statearr_12057;
})();
if(cljs.core.truth_(inst_11950)){
var statearr_12058_12120 = state_11981__$1;
(statearr_12058_12120[(1)] = (39));

} else {
var statearr_12059_12121 = state_11981__$1;
(statearr_12059_12121[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (8))){
var inst_11860 = (state_11981[(15)]);
var inst_11861 = (state_11981[(16)]);
var inst_11863 = (inst_11861 < inst_11860);
var inst_11864 = inst_11863;
var state_11981__$1 = state_11981;
if(cljs.core.truth_(inst_11864)){
var statearr_12060_12122 = state_11981__$1;
(statearr_12060_12122[(1)] = (10));

} else {
var statearr_12061_12123 = state_11981__$1;
(statearr_12061_12123[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___12069,cs,m,dchan,dctr,done))
;
return ((function (switch__10604__auto__,c__10716__auto___12069,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10605__auto__ = null;
var cljs$core$async$mult_$_state_machine__10605__auto____0 = (function (){
var statearr_12065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12065[(0)] = cljs$core$async$mult_$_state_machine__10605__auto__);

(statearr_12065[(1)] = (1));

return statearr_12065;
});
var cljs$core$async$mult_$_state_machine__10605__auto____1 = (function (state_11981){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_11981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e12066){if((e12066 instanceof Object)){
var ex__10608__auto__ = e12066;
var statearr_12067_12124 = state_11981;
(statearr_12067_12124[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12125 = state_11981;
state_11981 = G__12125;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10605__auto__ = function(state_11981){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10605__auto____1.call(this,state_11981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10605__auto____0;
cljs$core$async$mult_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10605__auto____1;
return cljs$core$async$mult_$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___12069,cs,m,dchan,dctr,done))
})();
var state__10718__auto__ = (function (){var statearr_12068 = f__10717__auto__.call(null);
(statearr_12068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___12069);

return statearr_12068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___12069,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12126 = [];
var len__7937__auto___12129 = arguments.length;
var i__7938__auto___12130 = (0);
while(true){
if((i__7938__auto___12130 < len__7937__auto___12129)){
args12126.push((arguments[i__7938__auto___12130]));

var G__12131 = (i__7938__auto___12130 + (1));
i__7938__auto___12130 = G__12131;
continue;
} else {
}
break;
}

var G__12128 = args12126.length;
switch (G__12128) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12126.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m);
} else {
var m__7493__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,state_map);
} else {
var m__7493__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,mode);
} else {
var m__7493__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7944__auto__ = [];
var len__7937__auto___12143 = arguments.length;
var i__7938__auto___12144 = (0);
while(true){
if((i__7938__auto___12144 < len__7937__auto___12143)){
args__7944__auto__.push((arguments[i__7938__auto___12144]));

var G__12145 = (i__7938__auto___12144 + (1));
i__7938__auto___12144 = G__12145;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((3) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7945__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12137){
var map__12138 = p__12137;
var map__12138__$1 = ((((!((map__12138 == null)))?((((map__12138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12138):map__12138);
var opts = map__12138__$1;
var statearr_12140_12146 = state;
(statearr_12140_12146[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__12138,map__12138__$1,opts){
return (function (val){
var statearr_12141_12147 = state;
(statearr_12141_12147[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12138,map__12138__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_12142_12148 = state;
(statearr_12142_12148[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12133){
var G__12134 = cljs.core.first.call(null,seq12133);
var seq12133__$1 = cljs.core.next.call(null,seq12133);
var G__12135 = cljs.core.first.call(null,seq12133__$1);
var seq12133__$2 = cljs.core.next.call(null,seq12133__$1);
var G__12136 = cljs.core.first.call(null,seq12133__$2);
var seq12133__$3 = cljs.core.next.call(null,seq12133__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12134,G__12135,G__12136,seq12133__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12316 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta12317){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta12317 = meta12317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12318,meta12317__$1){
var self__ = this;
var _12318__$1 = this;
return (new cljs.core.async.t_cljs$core$async12316(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta12317__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12318){
var self__ = this;
var _12318__$1 = this;
return self__.meta12317;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta12317","meta12317",669325007,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12316";

cljs.core.async.t_cljs$core$async12316.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12316");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12316 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12316(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta12317){
return (new cljs.core.async.t_cljs$core$async12316(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta12317));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12316(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10716__auto___12483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___12483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___12483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12420){
var state_val_12421 = (state_12420[(1)]);
if((state_val_12421 === (7))){
var inst_12335 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
var statearr_12422_12484 = state_12420__$1;
(statearr_12422_12484[(2)] = inst_12335);

(statearr_12422_12484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (20))){
var inst_12347 = (state_12420[(7)]);
var state_12420__$1 = state_12420;
var statearr_12423_12485 = state_12420__$1;
(statearr_12423_12485[(2)] = inst_12347);

(statearr_12423_12485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (27))){
var state_12420__$1 = state_12420;
var statearr_12424_12486 = state_12420__$1;
(statearr_12424_12486[(2)] = null);

(statearr_12424_12486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (1))){
var inst_12322 = (state_12420[(8)]);
var inst_12322__$1 = calc_state.call(null);
var inst_12324 = (inst_12322__$1 == null);
var inst_12325 = cljs.core.not.call(null,inst_12324);
var state_12420__$1 = (function (){var statearr_12425 = state_12420;
(statearr_12425[(8)] = inst_12322__$1);

return statearr_12425;
})();
if(inst_12325){
var statearr_12426_12487 = state_12420__$1;
(statearr_12426_12487[(1)] = (2));

} else {
var statearr_12427_12488 = state_12420__$1;
(statearr_12427_12488[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (24))){
var inst_12380 = (state_12420[(9)]);
var inst_12394 = (state_12420[(10)]);
var inst_12371 = (state_12420[(11)]);
var inst_12394__$1 = inst_12371.call(null,inst_12380);
var state_12420__$1 = (function (){var statearr_12428 = state_12420;
(statearr_12428[(10)] = inst_12394__$1);

return statearr_12428;
})();
if(cljs.core.truth_(inst_12394__$1)){
var statearr_12429_12489 = state_12420__$1;
(statearr_12429_12489[(1)] = (29));

} else {
var statearr_12430_12490 = state_12420__$1;
(statearr_12430_12490[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (4))){
var inst_12338 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12338)){
var statearr_12431_12491 = state_12420__$1;
(statearr_12431_12491[(1)] = (8));

} else {
var statearr_12432_12492 = state_12420__$1;
(statearr_12432_12492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (15))){
var inst_12365 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12365)){
var statearr_12433_12493 = state_12420__$1;
(statearr_12433_12493[(1)] = (19));

} else {
var statearr_12434_12494 = state_12420__$1;
(statearr_12434_12494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (21))){
var inst_12370 = (state_12420[(12)]);
var inst_12370__$1 = (state_12420[(2)]);
var inst_12371 = cljs.core.get.call(null,inst_12370__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12372 = cljs.core.get.call(null,inst_12370__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12373 = cljs.core.get.call(null,inst_12370__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12420__$1 = (function (){var statearr_12435 = state_12420;
(statearr_12435[(13)] = inst_12372);

(statearr_12435[(12)] = inst_12370__$1);

(statearr_12435[(11)] = inst_12371);

return statearr_12435;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12420__$1,(22),inst_12373);
} else {
if((state_val_12421 === (31))){
var inst_12402 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12402)){
var statearr_12436_12495 = state_12420__$1;
(statearr_12436_12495[(1)] = (32));

} else {
var statearr_12437_12496 = state_12420__$1;
(statearr_12437_12496[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (32))){
var inst_12379 = (state_12420[(14)]);
var state_12420__$1 = state_12420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12420__$1,(35),out,inst_12379);
} else {
if((state_val_12421 === (33))){
var inst_12370 = (state_12420[(12)]);
var inst_12347 = inst_12370;
var state_12420__$1 = (function (){var statearr_12438 = state_12420;
(statearr_12438[(7)] = inst_12347);

return statearr_12438;
})();
var statearr_12439_12497 = state_12420__$1;
(statearr_12439_12497[(2)] = null);

(statearr_12439_12497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (13))){
var inst_12347 = (state_12420[(7)]);
var inst_12354 = inst_12347.cljs$lang$protocol_mask$partition0$;
var inst_12355 = (inst_12354 & (64));
var inst_12356 = inst_12347.cljs$core$ISeq$;
var inst_12357 = (cljs.core.PROTOCOL_SENTINEL === inst_12356);
var inst_12358 = (inst_12355) || (inst_12357);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12358)){
var statearr_12440_12498 = state_12420__$1;
(statearr_12440_12498[(1)] = (16));

} else {
var statearr_12441_12499 = state_12420__$1;
(statearr_12441_12499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (22))){
var inst_12379 = (state_12420[(14)]);
var inst_12380 = (state_12420[(9)]);
var inst_12378 = (state_12420[(2)]);
var inst_12379__$1 = cljs.core.nth.call(null,inst_12378,(0),null);
var inst_12380__$1 = cljs.core.nth.call(null,inst_12378,(1),null);
var inst_12381 = (inst_12379__$1 == null);
var inst_12382 = cljs.core._EQ_.call(null,inst_12380__$1,change);
var inst_12383 = (inst_12381) || (inst_12382);
var state_12420__$1 = (function (){var statearr_12442 = state_12420;
(statearr_12442[(14)] = inst_12379__$1);

(statearr_12442[(9)] = inst_12380__$1);

return statearr_12442;
})();
if(cljs.core.truth_(inst_12383)){
var statearr_12443_12500 = state_12420__$1;
(statearr_12443_12500[(1)] = (23));

} else {
var statearr_12444_12501 = state_12420__$1;
(statearr_12444_12501[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (36))){
var inst_12370 = (state_12420[(12)]);
var inst_12347 = inst_12370;
var state_12420__$1 = (function (){var statearr_12445 = state_12420;
(statearr_12445[(7)] = inst_12347);

return statearr_12445;
})();
var statearr_12446_12502 = state_12420__$1;
(statearr_12446_12502[(2)] = null);

(statearr_12446_12502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (29))){
var inst_12394 = (state_12420[(10)]);
var state_12420__$1 = state_12420;
var statearr_12447_12503 = state_12420__$1;
(statearr_12447_12503[(2)] = inst_12394);

(statearr_12447_12503[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (6))){
var state_12420__$1 = state_12420;
var statearr_12448_12504 = state_12420__$1;
(statearr_12448_12504[(2)] = false);

(statearr_12448_12504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (28))){
var inst_12390 = (state_12420[(2)]);
var inst_12391 = calc_state.call(null);
var inst_12347 = inst_12391;
var state_12420__$1 = (function (){var statearr_12449 = state_12420;
(statearr_12449[(15)] = inst_12390);

(statearr_12449[(7)] = inst_12347);

return statearr_12449;
})();
var statearr_12450_12505 = state_12420__$1;
(statearr_12450_12505[(2)] = null);

(statearr_12450_12505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (25))){
var inst_12416 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
var statearr_12451_12506 = state_12420__$1;
(statearr_12451_12506[(2)] = inst_12416);

(statearr_12451_12506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (34))){
var inst_12414 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
var statearr_12452_12507 = state_12420__$1;
(statearr_12452_12507[(2)] = inst_12414);

(statearr_12452_12507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (17))){
var state_12420__$1 = state_12420;
var statearr_12453_12508 = state_12420__$1;
(statearr_12453_12508[(2)] = false);

(statearr_12453_12508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (3))){
var state_12420__$1 = state_12420;
var statearr_12454_12509 = state_12420__$1;
(statearr_12454_12509[(2)] = false);

(statearr_12454_12509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (12))){
var inst_12418 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12420__$1,inst_12418);
} else {
if((state_val_12421 === (2))){
var inst_12322 = (state_12420[(8)]);
var inst_12327 = inst_12322.cljs$lang$protocol_mask$partition0$;
var inst_12328 = (inst_12327 & (64));
var inst_12329 = inst_12322.cljs$core$ISeq$;
var inst_12330 = (cljs.core.PROTOCOL_SENTINEL === inst_12329);
var inst_12331 = (inst_12328) || (inst_12330);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12331)){
var statearr_12455_12510 = state_12420__$1;
(statearr_12455_12510[(1)] = (5));

} else {
var statearr_12456_12511 = state_12420__$1;
(statearr_12456_12511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (23))){
var inst_12379 = (state_12420[(14)]);
var inst_12385 = (inst_12379 == null);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12385)){
var statearr_12457_12512 = state_12420__$1;
(statearr_12457_12512[(1)] = (26));

} else {
var statearr_12458_12513 = state_12420__$1;
(statearr_12458_12513[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (35))){
var inst_12405 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12405)){
var statearr_12459_12514 = state_12420__$1;
(statearr_12459_12514[(1)] = (36));

} else {
var statearr_12460_12515 = state_12420__$1;
(statearr_12460_12515[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (19))){
var inst_12347 = (state_12420[(7)]);
var inst_12367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12347);
var state_12420__$1 = state_12420;
var statearr_12461_12516 = state_12420__$1;
(statearr_12461_12516[(2)] = inst_12367);

(statearr_12461_12516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (11))){
var inst_12347 = (state_12420[(7)]);
var inst_12351 = (inst_12347 == null);
var inst_12352 = cljs.core.not.call(null,inst_12351);
var state_12420__$1 = state_12420;
if(inst_12352){
var statearr_12462_12517 = state_12420__$1;
(statearr_12462_12517[(1)] = (13));

} else {
var statearr_12463_12518 = state_12420__$1;
(statearr_12463_12518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (9))){
var inst_12322 = (state_12420[(8)]);
var state_12420__$1 = state_12420;
var statearr_12464_12519 = state_12420__$1;
(statearr_12464_12519[(2)] = inst_12322);

(statearr_12464_12519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (5))){
var state_12420__$1 = state_12420;
var statearr_12465_12520 = state_12420__$1;
(statearr_12465_12520[(2)] = true);

(statearr_12465_12520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (14))){
var state_12420__$1 = state_12420;
var statearr_12466_12521 = state_12420__$1;
(statearr_12466_12521[(2)] = false);

(statearr_12466_12521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (26))){
var inst_12380 = (state_12420[(9)]);
var inst_12387 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12380);
var state_12420__$1 = state_12420;
var statearr_12467_12522 = state_12420__$1;
(statearr_12467_12522[(2)] = inst_12387);

(statearr_12467_12522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (16))){
var state_12420__$1 = state_12420;
var statearr_12468_12523 = state_12420__$1;
(statearr_12468_12523[(2)] = true);

(statearr_12468_12523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (38))){
var inst_12410 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
var statearr_12469_12524 = state_12420__$1;
(statearr_12469_12524[(2)] = inst_12410);

(statearr_12469_12524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (30))){
var inst_12372 = (state_12420[(13)]);
var inst_12380 = (state_12420[(9)]);
var inst_12371 = (state_12420[(11)]);
var inst_12397 = cljs.core.empty_QMARK_.call(null,inst_12371);
var inst_12398 = inst_12372.call(null,inst_12380);
var inst_12399 = cljs.core.not.call(null,inst_12398);
var inst_12400 = (inst_12397) && (inst_12399);
var state_12420__$1 = state_12420;
var statearr_12470_12525 = state_12420__$1;
(statearr_12470_12525[(2)] = inst_12400);

(statearr_12470_12525[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (10))){
var inst_12322 = (state_12420[(8)]);
var inst_12343 = (state_12420[(2)]);
var inst_12344 = cljs.core.get.call(null,inst_12343,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12345 = cljs.core.get.call(null,inst_12343,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12346 = cljs.core.get.call(null,inst_12343,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12347 = inst_12322;
var state_12420__$1 = (function (){var statearr_12471 = state_12420;
(statearr_12471[(16)] = inst_12346);

(statearr_12471[(7)] = inst_12347);

(statearr_12471[(17)] = inst_12344);

(statearr_12471[(18)] = inst_12345);

return statearr_12471;
})();
var statearr_12472_12526 = state_12420__$1;
(statearr_12472_12526[(2)] = null);

(statearr_12472_12526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (18))){
var inst_12362 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
var statearr_12473_12527 = state_12420__$1;
(statearr_12473_12527[(2)] = inst_12362);

(statearr_12473_12527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (37))){
var state_12420__$1 = state_12420;
var statearr_12474_12528 = state_12420__$1;
(statearr_12474_12528[(2)] = null);

(statearr_12474_12528[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (8))){
var inst_12322 = (state_12420[(8)]);
var inst_12340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12322);
var state_12420__$1 = state_12420;
var statearr_12475_12529 = state_12420__$1;
(statearr_12475_12529[(2)] = inst_12340);

(statearr_12475_12529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___12483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10604__auto__,c__10716__auto___12483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10605__auto__ = null;
var cljs$core$async$mix_$_state_machine__10605__auto____0 = (function (){
var statearr_12479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12479[(0)] = cljs$core$async$mix_$_state_machine__10605__auto__);

(statearr_12479[(1)] = (1));

return statearr_12479;
});
var cljs$core$async$mix_$_state_machine__10605__auto____1 = (function (state_12420){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_12420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e12480){if((e12480 instanceof Object)){
var ex__10608__auto__ = e12480;
var statearr_12481_12530 = state_12420;
(statearr_12481_12530[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12531 = state_12420;
state_12420 = G__12531;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10605__auto__ = function(state_12420){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10605__auto____1.call(this,state_12420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10605__auto____0;
cljs$core$async$mix_$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10605__auto____1;
return cljs$core$async$mix_$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___12483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10718__auto__ = (function (){var statearr_12482 = f__10717__auto__.call(null);
(statearr_12482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___12483);

return statearr_12482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___12483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7493__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p,v,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12532 = [];
var len__7937__auto___12535 = arguments.length;
var i__7938__auto___12536 = (0);
while(true){
if((i__7938__auto___12536 < len__7937__auto___12535)){
args12532.push((arguments[i__7938__auto___12536]));

var G__12537 = (i__7938__auto___12536 + (1));
i__7938__auto___12536 = G__12537;
continue;
} else {
}
break;
}

var G__12534 = args12532.length;
switch (G__12534) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12532.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p);
} else {
var m__7493__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p,v);
} else {
var m__7493__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args12540 = [];
var len__7937__auto___12665 = arguments.length;
var i__7938__auto___12666 = (0);
while(true){
if((i__7938__auto___12666 < len__7937__auto___12665)){
args12540.push((arguments[i__7938__auto___12666]));

var G__12667 = (i__7938__auto___12666 + (1));
i__7938__auto___12666 = G__12667;
continue;
} else {
}
break;
}

var G__12542 = args12540.length;
switch (G__12542) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12540.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6824__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6824__auto__,mults){
return (function (p1__12539_SHARP_){
if(cljs.core.truth_(p1__12539_SHARP_.call(null,topic))){
return p1__12539_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12539_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6824__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12543 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12544){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12544 = meta12544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12545,meta12544__$1){
var self__ = this;
var _12545__$1 = this;
return (new cljs.core.async.t_cljs$core$async12543(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12544__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12545){
var self__ = this;
var _12545__$1 = this;
return self__.meta12544;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12544","meta12544",-1732057132,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12543";

cljs.core.async.t_cljs$core$async12543.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12543");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12543 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12543(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12544){
return (new cljs.core.async.t_cljs$core$async12543(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12544));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12543(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10716__auto___12669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___12669,mults,ensure_mult,p){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___12669,mults,ensure_mult,p){
return (function (state_12617){
var state_val_12618 = (state_12617[(1)]);
if((state_val_12618 === (7))){
var inst_12613 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12619_12670 = state_12617__$1;
(statearr_12619_12670[(2)] = inst_12613);

(statearr_12619_12670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (20))){
var state_12617__$1 = state_12617;
var statearr_12620_12671 = state_12617__$1;
(statearr_12620_12671[(2)] = null);

(statearr_12620_12671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (1))){
var state_12617__$1 = state_12617;
var statearr_12621_12672 = state_12617__$1;
(statearr_12621_12672[(2)] = null);

(statearr_12621_12672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (24))){
var inst_12596 = (state_12617[(7)]);
var inst_12605 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12596);
var state_12617__$1 = state_12617;
var statearr_12622_12673 = state_12617__$1;
(statearr_12622_12673[(2)] = inst_12605);

(statearr_12622_12673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (4))){
var inst_12548 = (state_12617[(8)]);
var inst_12548__$1 = (state_12617[(2)]);
var inst_12549 = (inst_12548__$1 == null);
var state_12617__$1 = (function (){var statearr_12623 = state_12617;
(statearr_12623[(8)] = inst_12548__$1);

return statearr_12623;
})();
if(cljs.core.truth_(inst_12549)){
var statearr_12624_12674 = state_12617__$1;
(statearr_12624_12674[(1)] = (5));

} else {
var statearr_12625_12675 = state_12617__$1;
(statearr_12625_12675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (15))){
var inst_12590 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12626_12676 = state_12617__$1;
(statearr_12626_12676[(2)] = inst_12590);

(statearr_12626_12676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (21))){
var inst_12610 = (state_12617[(2)]);
var state_12617__$1 = (function (){var statearr_12627 = state_12617;
(statearr_12627[(9)] = inst_12610);

return statearr_12627;
})();
var statearr_12628_12677 = state_12617__$1;
(statearr_12628_12677[(2)] = null);

(statearr_12628_12677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (13))){
var inst_12572 = (state_12617[(10)]);
var inst_12574 = cljs.core.chunked_seq_QMARK_.call(null,inst_12572);
var state_12617__$1 = state_12617;
if(inst_12574){
var statearr_12629_12678 = state_12617__$1;
(statearr_12629_12678[(1)] = (16));

} else {
var statearr_12630_12679 = state_12617__$1;
(statearr_12630_12679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (22))){
var inst_12602 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
if(cljs.core.truth_(inst_12602)){
var statearr_12631_12680 = state_12617__$1;
(statearr_12631_12680[(1)] = (23));

} else {
var statearr_12632_12681 = state_12617__$1;
(statearr_12632_12681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (6))){
var inst_12548 = (state_12617[(8)]);
var inst_12598 = (state_12617[(11)]);
var inst_12596 = (state_12617[(7)]);
var inst_12596__$1 = topic_fn.call(null,inst_12548);
var inst_12597 = cljs.core.deref.call(null,mults);
var inst_12598__$1 = cljs.core.get.call(null,inst_12597,inst_12596__$1);
var state_12617__$1 = (function (){var statearr_12633 = state_12617;
(statearr_12633[(11)] = inst_12598__$1);

(statearr_12633[(7)] = inst_12596__$1);

return statearr_12633;
})();
if(cljs.core.truth_(inst_12598__$1)){
var statearr_12634_12682 = state_12617__$1;
(statearr_12634_12682[(1)] = (19));

} else {
var statearr_12635_12683 = state_12617__$1;
(statearr_12635_12683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (25))){
var inst_12607 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12636_12684 = state_12617__$1;
(statearr_12636_12684[(2)] = inst_12607);

(statearr_12636_12684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (17))){
var inst_12572 = (state_12617[(10)]);
var inst_12581 = cljs.core.first.call(null,inst_12572);
var inst_12582 = cljs.core.async.muxch_STAR_.call(null,inst_12581);
var inst_12583 = cljs.core.async.close_BANG_.call(null,inst_12582);
var inst_12584 = cljs.core.next.call(null,inst_12572);
var inst_12558 = inst_12584;
var inst_12559 = null;
var inst_12560 = (0);
var inst_12561 = (0);
var state_12617__$1 = (function (){var statearr_12637 = state_12617;
(statearr_12637[(12)] = inst_12558);

(statearr_12637[(13)] = inst_12583);

(statearr_12637[(14)] = inst_12559);

(statearr_12637[(15)] = inst_12561);

(statearr_12637[(16)] = inst_12560);

return statearr_12637;
})();
var statearr_12638_12685 = state_12617__$1;
(statearr_12638_12685[(2)] = null);

(statearr_12638_12685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (3))){
var inst_12615 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12617__$1,inst_12615);
} else {
if((state_val_12618 === (12))){
var inst_12592 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12639_12686 = state_12617__$1;
(statearr_12639_12686[(2)] = inst_12592);

(statearr_12639_12686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (2))){
var state_12617__$1 = state_12617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12617__$1,(4),ch);
} else {
if((state_val_12618 === (23))){
var state_12617__$1 = state_12617;
var statearr_12640_12687 = state_12617__$1;
(statearr_12640_12687[(2)] = null);

(statearr_12640_12687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (19))){
var inst_12548 = (state_12617[(8)]);
var inst_12598 = (state_12617[(11)]);
var inst_12600 = cljs.core.async.muxch_STAR_.call(null,inst_12598);
var state_12617__$1 = state_12617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12617__$1,(22),inst_12600,inst_12548);
} else {
if((state_val_12618 === (11))){
var inst_12572 = (state_12617[(10)]);
var inst_12558 = (state_12617[(12)]);
var inst_12572__$1 = cljs.core.seq.call(null,inst_12558);
var state_12617__$1 = (function (){var statearr_12641 = state_12617;
(statearr_12641[(10)] = inst_12572__$1);

return statearr_12641;
})();
if(inst_12572__$1){
var statearr_12642_12688 = state_12617__$1;
(statearr_12642_12688[(1)] = (13));

} else {
var statearr_12643_12689 = state_12617__$1;
(statearr_12643_12689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (9))){
var inst_12594 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12644_12690 = state_12617__$1;
(statearr_12644_12690[(2)] = inst_12594);

(statearr_12644_12690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (5))){
var inst_12555 = cljs.core.deref.call(null,mults);
var inst_12556 = cljs.core.vals.call(null,inst_12555);
var inst_12557 = cljs.core.seq.call(null,inst_12556);
var inst_12558 = inst_12557;
var inst_12559 = null;
var inst_12560 = (0);
var inst_12561 = (0);
var state_12617__$1 = (function (){var statearr_12645 = state_12617;
(statearr_12645[(12)] = inst_12558);

(statearr_12645[(14)] = inst_12559);

(statearr_12645[(15)] = inst_12561);

(statearr_12645[(16)] = inst_12560);

return statearr_12645;
})();
var statearr_12646_12691 = state_12617__$1;
(statearr_12646_12691[(2)] = null);

(statearr_12646_12691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (14))){
var state_12617__$1 = state_12617;
var statearr_12650_12692 = state_12617__$1;
(statearr_12650_12692[(2)] = null);

(statearr_12650_12692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (16))){
var inst_12572 = (state_12617[(10)]);
var inst_12576 = cljs.core.chunk_first.call(null,inst_12572);
var inst_12577 = cljs.core.chunk_rest.call(null,inst_12572);
var inst_12578 = cljs.core.count.call(null,inst_12576);
var inst_12558 = inst_12577;
var inst_12559 = inst_12576;
var inst_12560 = inst_12578;
var inst_12561 = (0);
var state_12617__$1 = (function (){var statearr_12651 = state_12617;
(statearr_12651[(12)] = inst_12558);

(statearr_12651[(14)] = inst_12559);

(statearr_12651[(15)] = inst_12561);

(statearr_12651[(16)] = inst_12560);

return statearr_12651;
})();
var statearr_12652_12693 = state_12617__$1;
(statearr_12652_12693[(2)] = null);

(statearr_12652_12693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (10))){
var inst_12558 = (state_12617[(12)]);
var inst_12559 = (state_12617[(14)]);
var inst_12561 = (state_12617[(15)]);
var inst_12560 = (state_12617[(16)]);
var inst_12566 = cljs.core._nth.call(null,inst_12559,inst_12561);
var inst_12567 = cljs.core.async.muxch_STAR_.call(null,inst_12566);
var inst_12568 = cljs.core.async.close_BANG_.call(null,inst_12567);
var inst_12569 = (inst_12561 + (1));
var tmp12647 = inst_12558;
var tmp12648 = inst_12559;
var tmp12649 = inst_12560;
var inst_12558__$1 = tmp12647;
var inst_12559__$1 = tmp12648;
var inst_12560__$1 = tmp12649;
var inst_12561__$1 = inst_12569;
var state_12617__$1 = (function (){var statearr_12653 = state_12617;
(statearr_12653[(17)] = inst_12568);

(statearr_12653[(12)] = inst_12558__$1);

(statearr_12653[(14)] = inst_12559__$1);

(statearr_12653[(15)] = inst_12561__$1);

(statearr_12653[(16)] = inst_12560__$1);

return statearr_12653;
})();
var statearr_12654_12694 = state_12617__$1;
(statearr_12654_12694[(2)] = null);

(statearr_12654_12694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (18))){
var inst_12587 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12655_12695 = state_12617__$1;
(statearr_12655_12695[(2)] = inst_12587);

(statearr_12655_12695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (8))){
var inst_12561 = (state_12617[(15)]);
var inst_12560 = (state_12617[(16)]);
var inst_12563 = (inst_12561 < inst_12560);
var inst_12564 = inst_12563;
var state_12617__$1 = state_12617;
if(cljs.core.truth_(inst_12564)){
var statearr_12656_12696 = state_12617__$1;
(statearr_12656_12696[(1)] = (10));

} else {
var statearr_12657_12697 = state_12617__$1;
(statearr_12657_12697[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___12669,mults,ensure_mult,p))
;
return ((function (switch__10604__auto__,c__10716__auto___12669,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_12661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12661[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_12661[(1)] = (1));

return statearr_12661;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_12617){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_12617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e12662){if((e12662 instanceof Object)){
var ex__10608__auto__ = e12662;
var statearr_12663_12698 = state_12617;
(statearr_12663_12698[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12699 = state_12617;
state_12617 = G__12699;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_12617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_12617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___12669,mults,ensure_mult,p))
})();
var state__10718__auto__ = (function (){var statearr_12664 = f__10717__auto__.call(null);
(statearr_12664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___12669);

return statearr_12664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___12669,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args12700 = [];
var len__7937__auto___12703 = arguments.length;
var i__7938__auto___12704 = (0);
while(true){
if((i__7938__auto___12704 < len__7937__auto___12703)){
args12700.push((arguments[i__7938__auto___12704]));

var G__12705 = (i__7938__auto___12704 + (1));
i__7938__auto___12704 = G__12705;
continue;
} else {
}
break;
}

var G__12702 = args12700.length;
switch (G__12702) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12700.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args12707 = [];
var len__7937__auto___12710 = arguments.length;
var i__7938__auto___12711 = (0);
while(true){
if((i__7938__auto___12711 < len__7937__auto___12710)){
args12707.push((arguments[i__7938__auto___12711]));

var G__12712 = (i__7938__auto___12711 + (1));
i__7938__auto___12711 = G__12712;
continue;
} else {
}
break;
}

var G__12709 = args12707.length;
switch (G__12709) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12707.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args12714 = [];
var len__7937__auto___12785 = arguments.length;
var i__7938__auto___12786 = (0);
while(true){
if((i__7938__auto___12786 < len__7937__auto___12785)){
args12714.push((arguments[i__7938__auto___12786]));

var G__12787 = (i__7938__auto___12786 + (1));
i__7938__auto___12786 = G__12787;
continue;
} else {
}
break;
}

var G__12716 = args12714.length;
switch (G__12716) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12714.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10716__auto___12789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___12789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___12789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12755){
var state_val_12756 = (state_12755[(1)]);
if((state_val_12756 === (7))){
var state_12755__$1 = state_12755;
var statearr_12757_12790 = state_12755__$1;
(statearr_12757_12790[(2)] = null);

(statearr_12757_12790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (1))){
var state_12755__$1 = state_12755;
var statearr_12758_12791 = state_12755__$1;
(statearr_12758_12791[(2)] = null);

(statearr_12758_12791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (4))){
var inst_12719 = (state_12755[(7)]);
var inst_12721 = (inst_12719 < cnt);
var state_12755__$1 = state_12755;
if(cljs.core.truth_(inst_12721)){
var statearr_12759_12792 = state_12755__$1;
(statearr_12759_12792[(1)] = (6));

} else {
var statearr_12760_12793 = state_12755__$1;
(statearr_12760_12793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (15))){
var inst_12751 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12761_12794 = state_12755__$1;
(statearr_12761_12794[(2)] = inst_12751);

(statearr_12761_12794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (13))){
var inst_12744 = cljs.core.async.close_BANG_.call(null,out);
var state_12755__$1 = state_12755;
var statearr_12762_12795 = state_12755__$1;
(statearr_12762_12795[(2)] = inst_12744);

(statearr_12762_12795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (6))){
var state_12755__$1 = state_12755;
var statearr_12763_12796 = state_12755__$1;
(statearr_12763_12796[(2)] = null);

(statearr_12763_12796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (3))){
var inst_12753 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12755__$1,inst_12753);
} else {
if((state_val_12756 === (12))){
var inst_12741 = (state_12755[(8)]);
var inst_12741__$1 = (state_12755[(2)]);
var inst_12742 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12741__$1);
var state_12755__$1 = (function (){var statearr_12764 = state_12755;
(statearr_12764[(8)] = inst_12741__$1);

return statearr_12764;
})();
if(cljs.core.truth_(inst_12742)){
var statearr_12765_12797 = state_12755__$1;
(statearr_12765_12797[(1)] = (13));

} else {
var statearr_12766_12798 = state_12755__$1;
(statearr_12766_12798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (2))){
var inst_12718 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12719 = (0);
var state_12755__$1 = (function (){var statearr_12767 = state_12755;
(statearr_12767[(9)] = inst_12718);

(statearr_12767[(7)] = inst_12719);

return statearr_12767;
})();
var statearr_12768_12799 = state_12755__$1;
(statearr_12768_12799[(2)] = null);

(statearr_12768_12799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (11))){
var inst_12719 = (state_12755[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12755,(10),Object,null,(9));
var inst_12728 = chs__$1.call(null,inst_12719);
var inst_12729 = done.call(null,inst_12719);
var inst_12730 = cljs.core.async.take_BANG_.call(null,inst_12728,inst_12729);
var state_12755__$1 = state_12755;
var statearr_12769_12800 = state_12755__$1;
(statearr_12769_12800[(2)] = inst_12730);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12755__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (9))){
var inst_12719 = (state_12755[(7)]);
var inst_12732 = (state_12755[(2)]);
var inst_12733 = (inst_12719 + (1));
var inst_12719__$1 = inst_12733;
var state_12755__$1 = (function (){var statearr_12770 = state_12755;
(statearr_12770[(10)] = inst_12732);

(statearr_12770[(7)] = inst_12719__$1);

return statearr_12770;
})();
var statearr_12771_12801 = state_12755__$1;
(statearr_12771_12801[(2)] = null);

(statearr_12771_12801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (5))){
var inst_12739 = (state_12755[(2)]);
var state_12755__$1 = (function (){var statearr_12772 = state_12755;
(statearr_12772[(11)] = inst_12739);

return statearr_12772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12755__$1,(12),dchan);
} else {
if((state_val_12756 === (14))){
var inst_12741 = (state_12755[(8)]);
var inst_12746 = cljs.core.apply.call(null,f,inst_12741);
var state_12755__$1 = state_12755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12755__$1,(16),out,inst_12746);
} else {
if((state_val_12756 === (16))){
var inst_12748 = (state_12755[(2)]);
var state_12755__$1 = (function (){var statearr_12773 = state_12755;
(statearr_12773[(12)] = inst_12748);

return statearr_12773;
})();
var statearr_12774_12802 = state_12755__$1;
(statearr_12774_12802[(2)] = null);

(statearr_12774_12802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (10))){
var inst_12723 = (state_12755[(2)]);
var inst_12724 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12755__$1 = (function (){var statearr_12775 = state_12755;
(statearr_12775[(13)] = inst_12723);

return statearr_12775;
})();
var statearr_12776_12803 = state_12755__$1;
(statearr_12776_12803[(2)] = inst_12724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12755__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (8))){
var inst_12737 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12777_12804 = state_12755__$1;
(statearr_12777_12804[(2)] = inst_12737);

(statearr_12777_12804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___12789,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10604__auto__,c__10716__auto___12789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_12781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12781[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_12781[(1)] = (1));

return statearr_12781;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_12755){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_12755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e12782){if((e12782 instanceof Object)){
var ex__10608__auto__ = e12782;
var statearr_12783_12805 = state_12755;
(statearr_12783_12805[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12806 = state_12755;
state_12755 = G__12806;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_12755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_12755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___12789,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10718__auto__ = (function (){var statearr_12784 = f__10717__auto__.call(null);
(statearr_12784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___12789);

return statearr_12784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___12789,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args12808 = [];
var len__7937__auto___12866 = arguments.length;
var i__7938__auto___12867 = (0);
while(true){
if((i__7938__auto___12867 < len__7937__auto___12866)){
args12808.push((arguments[i__7938__auto___12867]));

var G__12868 = (i__7938__auto___12867 + (1));
i__7938__auto___12867 = G__12868;
continue;
} else {
}
break;
}

var G__12810 = args12808.length;
switch (G__12810) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12808.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10716__auto___12870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___12870,out){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___12870,out){
return (function (state_12842){
var state_val_12843 = (state_12842[(1)]);
if((state_val_12843 === (7))){
var inst_12821 = (state_12842[(7)]);
var inst_12822 = (state_12842[(8)]);
var inst_12821__$1 = (state_12842[(2)]);
var inst_12822__$1 = cljs.core.nth.call(null,inst_12821__$1,(0),null);
var inst_12823 = cljs.core.nth.call(null,inst_12821__$1,(1),null);
var inst_12824 = (inst_12822__$1 == null);
var state_12842__$1 = (function (){var statearr_12844 = state_12842;
(statearr_12844[(9)] = inst_12823);

(statearr_12844[(7)] = inst_12821__$1);

(statearr_12844[(8)] = inst_12822__$1);

return statearr_12844;
})();
if(cljs.core.truth_(inst_12824)){
var statearr_12845_12871 = state_12842__$1;
(statearr_12845_12871[(1)] = (8));

} else {
var statearr_12846_12872 = state_12842__$1;
(statearr_12846_12872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12843 === (1))){
var inst_12811 = cljs.core.vec.call(null,chs);
var inst_12812 = inst_12811;
var state_12842__$1 = (function (){var statearr_12847 = state_12842;
(statearr_12847[(10)] = inst_12812);

return statearr_12847;
})();
var statearr_12848_12873 = state_12842__$1;
(statearr_12848_12873[(2)] = null);

(statearr_12848_12873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12843 === (4))){
var inst_12812 = (state_12842[(10)]);
var state_12842__$1 = state_12842;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12842__$1,(7),inst_12812);
} else {
if((state_val_12843 === (6))){
var inst_12838 = (state_12842[(2)]);
var state_12842__$1 = state_12842;
var statearr_12849_12874 = state_12842__$1;
(statearr_12849_12874[(2)] = inst_12838);

(statearr_12849_12874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12843 === (3))){
var inst_12840 = (state_12842[(2)]);
var state_12842__$1 = state_12842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12842__$1,inst_12840);
} else {
if((state_val_12843 === (2))){
var inst_12812 = (state_12842[(10)]);
var inst_12814 = cljs.core.count.call(null,inst_12812);
var inst_12815 = (inst_12814 > (0));
var state_12842__$1 = state_12842;
if(cljs.core.truth_(inst_12815)){
var statearr_12851_12875 = state_12842__$1;
(statearr_12851_12875[(1)] = (4));

} else {
var statearr_12852_12876 = state_12842__$1;
(statearr_12852_12876[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12843 === (11))){
var inst_12812 = (state_12842[(10)]);
var inst_12831 = (state_12842[(2)]);
var tmp12850 = inst_12812;
var inst_12812__$1 = tmp12850;
var state_12842__$1 = (function (){var statearr_12853 = state_12842;
(statearr_12853[(11)] = inst_12831);

(statearr_12853[(10)] = inst_12812__$1);

return statearr_12853;
})();
var statearr_12854_12877 = state_12842__$1;
(statearr_12854_12877[(2)] = null);

(statearr_12854_12877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12843 === (9))){
var inst_12822 = (state_12842[(8)]);
var state_12842__$1 = state_12842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12842__$1,(11),out,inst_12822);
} else {
if((state_val_12843 === (5))){
var inst_12836 = cljs.core.async.close_BANG_.call(null,out);
var state_12842__$1 = state_12842;
var statearr_12855_12878 = state_12842__$1;
(statearr_12855_12878[(2)] = inst_12836);

(statearr_12855_12878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12843 === (10))){
var inst_12834 = (state_12842[(2)]);
var state_12842__$1 = state_12842;
var statearr_12856_12879 = state_12842__$1;
(statearr_12856_12879[(2)] = inst_12834);

(statearr_12856_12879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12843 === (8))){
var inst_12823 = (state_12842[(9)]);
var inst_12821 = (state_12842[(7)]);
var inst_12812 = (state_12842[(10)]);
var inst_12822 = (state_12842[(8)]);
var inst_12826 = (function (){var cs = inst_12812;
var vec__12817 = inst_12821;
var v = inst_12822;
var c = inst_12823;
return ((function (cs,vec__12817,v,c,inst_12823,inst_12821,inst_12812,inst_12822,state_val_12843,c__10716__auto___12870,out){
return (function (p1__12807_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12807_SHARP_);
});
;})(cs,vec__12817,v,c,inst_12823,inst_12821,inst_12812,inst_12822,state_val_12843,c__10716__auto___12870,out))
})();
var inst_12827 = cljs.core.filterv.call(null,inst_12826,inst_12812);
var inst_12812__$1 = inst_12827;
var state_12842__$1 = (function (){var statearr_12857 = state_12842;
(statearr_12857[(10)] = inst_12812__$1);

return statearr_12857;
})();
var statearr_12858_12880 = state_12842__$1;
(statearr_12858_12880[(2)] = null);

(statearr_12858_12880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___12870,out))
;
return ((function (switch__10604__auto__,c__10716__auto___12870,out){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_12862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12862[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_12862[(1)] = (1));

return statearr_12862;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_12842){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_12842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e12863){if((e12863 instanceof Object)){
var ex__10608__auto__ = e12863;
var statearr_12864_12881 = state_12842;
(statearr_12864_12881[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12882 = state_12842;
state_12842 = G__12882;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_12842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_12842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___12870,out))
})();
var state__10718__auto__ = (function (){var statearr_12865 = f__10717__auto__.call(null);
(statearr_12865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___12870);

return statearr_12865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___12870,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args12883 = [];
var len__7937__auto___12932 = arguments.length;
var i__7938__auto___12933 = (0);
while(true){
if((i__7938__auto___12933 < len__7937__auto___12932)){
args12883.push((arguments[i__7938__auto___12933]));

var G__12934 = (i__7938__auto___12933 + (1));
i__7938__auto___12933 = G__12934;
continue;
} else {
}
break;
}

var G__12885 = args12883.length;
switch (G__12885) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12883.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10716__auto___12936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___12936,out){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___12936,out){
return (function (state_12909){
var state_val_12910 = (state_12909[(1)]);
if((state_val_12910 === (7))){
var inst_12891 = (state_12909[(7)]);
var inst_12891__$1 = (state_12909[(2)]);
var inst_12892 = (inst_12891__$1 == null);
var inst_12893 = cljs.core.not.call(null,inst_12892);
var state_12909__$1 = (function (){var statearr_12911 = state_12909;
(statearr_12911[(7)] = inst_12891__$1);

return statearr_12911;
})();
if(inst_12893){
var statearr_12912_12937 = state_12909__$1;
(statearr_12912_12937[(1)] = (8));

} else {
var statearr_12913_12938 = state_12909__$1;
(statearr_12913_12938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (1))){
var inst_12886 = (0);
var state_12909__$1 = (function (){var statearr_12914 = state_12909;
(statearr_12914[(8)] = inst_12886);

return statearr_12914;
})();
var statearr_12915_12939 = state_12909__$1;
(statearr_12915_12939[(2)] = null);

(statearr_12915_12939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (4))){
var state_12909__$1 = state_12909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12909__$1,(7),ch);
} else {
if((state_val_12910 === (6))){
var inst_12904 = (state_12909[(2)]);
var state_12909__$1 = state_12909;
var statearr_12916_12940 = state_12909__$1;
(statearr_12916_12940[(2)] = inst_12904);

(statearr_12916_12940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (3))){
var inst_12906 = (state_12909[(2)]);
var inst_12907 = cljs.core.async.close_BANG_.call(null,out);
var state_12909__$1 = (function (){var statearr_12917 = state_12909;
(statearr_12917[(9)] = inst_12906);

return statearr_12917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12909__$1,inst_12907);
} else {
if((state_val_12910 === (2))){
var inst_12886 = (state_12909[(8)]);
var inst_12888 = (inst_12886 < n);
var state_12909__$1 = state_12909;
if(cljs.core.truth_(inst_12888)){
var statearr_12918_12941 = state_12909__$1;
(statearr_12918_12941[(1)] = (4));

} else {
var statearr_12919_12942 = state_12909__$1;
(statearr_12919_12942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (11))){
var inst_12886 = (state_12909[(8)]);
var inst_12896 = (state_12909[(2)]);
var inst_12897 = (inst_12886 + (1));
var inst_12886__$1 = inst_12897;
var state_12909__$1 = (function (){var statearr_12920 = state_12909;
(statearr_12920[(10)] = inst_12896);

(statearr_12920[(8)] = inst_12886__$1);

return statearr_12920;
})();
var statearr_12921_12943 = state_12909__$1;
(statearr_12921_12943[(2)] = null);

(statearr_12921_12943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (9))){
var state_12909__$1 = state_12909;
var statearr_12922_12944 = state_12909__$1;
(statearr_12922_12944[(2)] = null);

(statearr_12922_12944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (5))){
var state_12909__$1 = state_12909;
var statearr_12923_12945 = state_12909__$1;
(statearr_12923_12945[(2)] = null);

(statearr_12923_12945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (10))){
var inst_12901 = (state_12909[(2)]);
var state_12909__$1 = state_12909;
var statearr_12924_12946 = state_12909__$1;
(statearr_12924_12946[(2)] = inst_12901);

(statearr_12924_12946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (8))){
var inst_12891 = (state_12909[(7)]);
var state_12909__$1 = state_12909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12909__$1,(11),out,inst_12891);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___12936,out))
;
return ((function (switch__10604__auto__,c__10716__auto___12936,out){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_12928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12928[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_12928[(1)] = (1));

return statearr_12928;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_12909){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_12909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e12929){if((e12929 instanceof Object)){
var ex__10608__auto__ = e12929;
var statearr_12930_12947 = state_12909;
(statearr_12930_12947[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12948 = state_12909;
state_12909 = G__12948;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_12909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_12909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___12936,out))
})();
var state__10718__auto__ = (function (){var statearr_12931 = f__10717__auto__.call(null);
(statearr_12931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___12936);

return statearr_12931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___12936,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12956 = (function (f,ch,meta12957){
this.f = f;
this.ch = ch;
this.meta12957 = meta12957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12958,meta12957__$1){
var self__ = this;
var _12958__$1 = this;
return (new cljs.core.async.t_cljs$core$async12956(self__.f,self__.ch,meta12957__$1));
});

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12958){
var self__ = this;
var _12958__$1 = this;
return self__.meta12957;
});

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12959 = (function (f,ch,meta12957,_,fn1,meta12960){
this.f = f;
this.ch = ch;
this.meta12957 = meta12957;
this._ = _;
this.fn1 = fn1;
this.meta12960 = meta12960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12961,meta12960__$1){
var self__ = this;
var _12961__$1 = this;
return (new cljs.core.async.t_cljs$core$async12959(self__.f,self__.ch,self__.meta12957,self__._,self__.fn1,meta12960__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12961){
var self__ = this;
var _12961__$1 = this;
return self__.meta12960;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12949_SHARP_){
return f1.call(null,(((p1__12949_SHARP_ == null))?null:self__.f.call(null,p1__12949_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12959.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12957","meta12957",1902092429,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12956","cljs.core.async/t_cljs$core$async12956",-2056434074,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12960","meta12960",82391352,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12959";

cljs.core.async.t_cljs$core$async12959.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12959");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12959 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12959(f__$1,ch__$1,meta12957__$1,___$2,fn1__$1,meta12960){
return (new cljs.core.async.t_cljs$core$async12959(f__$1,ch__$1,meta12957__$1,___$2,fn1__$1,meta12960));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12959(self__.f,self__.ch,self__.meta12957,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6812__auto__ = ret;
if(cljs.core.truth_(and__6812__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6812__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12956.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12957","meta12957",1902092429,null)], null);
});

cljs.core.async.t_cljs$core$async12956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12956";

cljs.core.async.t_cljs$core$async12956.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12956");
});

cljs.core.async.__GT_t_cljs$core$async12956 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12956(f__$1,ch__$1,meta12957){
return (new cljs.core.async.t_cljs$core$async12956(f__$1,ch__$1,meta12957));
});

}

return (new cljs.core.async.t_cljs$core$async12956(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12965 = (function (f,ch,meta12966){
this.f = f;
this.ch = ch;
this.meta12966 = meta12966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12967,meta12966__$1){
var self__ = this;
var _12967__$1 = this;
return (new cljs.core.async.t_cljs$core$async12965(self__.f,self__.ch,meta12966__$1));
});

cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12967){
var self__ = this;
var _12967__$1 = this;
return self__.meta12966;
});

cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12966","meta12966",-526685399,null)], null);
});

cljs.core.async.t_cljs$core$async12965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12965";

cljs.core.async.t_cljs$core$async12965.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12965");
});

cljs.core.async.__GT_t_cljs$core$async12965 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12965(f__$1,ch__$1,meta12966){
return (new cljs.core.async.t_cljs$core$async12965(f__$1,ch__$1,meta12966));
});

}

return (new cljs.core.async.t_cljs$core$async12965(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12971 = (function (p,ch,meta12972){
this.p = p;
this.ch = ch;
this.meta12972 = meta12972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12973,meta12972__$1){
var self__ = this;
var _12973__$1 = this;
return (new cljs.core.async.t_cljs$core$async12971(self__.p,self__.ch,meta12972__$1));
});

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12973){
var self__ = this;
var _12973__$1 = this;
return self__.meta12972;
});

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12972","meta12972",-771042767,null)], null);
});

cljs.core.async.t_cljs$core$async12971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12971";

cljs.core.async.t_cljs$core$async12971.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12971");
});

cljs.core.async.__GT_t_cljs$core$async12971 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12971(p__$1,ch__$1,meta12972){
return (new cljs.core.async.t_cljs$core$async12971(p__$1,ch__$1,meta12972));
});

}

return (new cljs.core.async.t_cljs$core$async12971(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args12974 = [];
var len__7937__auto___13018 = arguments.length;
var i__7938__auto___13019 = (0);
while(true){
if((i__7938__auto___13019 < len__7937__auto___13018)){
args12974.push((arguments[i__7938__auto___13019]));

var G__13020 = (i__7938__auto___13019 + (1));
i__7938__auto___13019 = G__13020;
continue;
} else {
}
break;
}

var G__12976 = args12974.length;
switch (G__12976) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12974.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10716__auto___13022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___13022,out){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___13022,out){
return (function (state_12997){
var state_val_12998 = (state_12997[(1)]);
if((state_val_12998 === (7))){
var inst_12993 = (state_12997[(2)]);
var state_12997__$1 = state_12997;
var statearr_12999_13023 = state_12997__$1;
(statearr_12999_13023[(2)] = inst_12993);

(statearr_12999_13023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (1))){
var state_12997__$1 = state_12997;
var statearr_13000_13024 = state_12997__$1;
(statearr_13000_13024[(2)] = null);

(statearr_13000_13024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (4))){
var inst_12979 = (state_12997[(7)]);
var inst_12979__$1 = (state_12997[(2)]);
var inst_12980 = (inst_12979__$1 == null);
var state_12997__$1 = (function (){var statearr_13001 = state_12997;
(statearr_13001[(7)] = inst_12979__$1);

return statearr_13001;
})();
if(cljs.core.truth_(inst_12980)){
var statearr_13002_13025 = state_12997__$1;
(statearr_13002_13025[(1)] = (5));

} else {
var statearr_13003_13026 = state_12997__$1;
(statearr_13003_13026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (6))){
var inst_12979 = (state_12997[(7)]);
var inst_12984 = p.call(null,inst_12979);
var state_12997__$1 = state_12997;
if(cljs.core.truth_(inst_12984)){
var statearr_13004_13027 = state_12997__$1;
(statearr_13004_13027[(1)] = (8));

} else {
var statearr_13005_13028 = state_12997__$1;
(statearr_13005_13028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (3))){
var inst_12995 = (state_12997[(2)]);
var state_12997__$1 = state_12997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12997__$1,inst_12995);
} else {
if((state_val_12998 === (2))){
var state_12997__$1 = state_12997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12997__$1,(4),ch);
} else {
if((state_val_12998 === (11))){
var inst_12987 = (state_12997[(2)]);
var state_12997__$1 = state_12997;
var statearr_13006_13029 = state_12997__$1;
(statearr_13006_13029[(2)] = inst_12987);

(statearr_13006_13029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (9))){
var state_12997__$1 = state_12997;
var statearr_13007_13030 = state_12997__$1;
(statearr_13007_13030[(2)] = null);

(statearr_13007_13030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (5))){
var inst_12982 = cljs.core.async.close_BANG_.call(null,out);
var state_12997__$1 = state_12997;
var statearr_13008_13031 = state_12997__$1;
(statearr_13008_13031[(2)] = inst_12982);

(statearr_13008_13031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (10))){
var inst_12990 = (state_12997[(2)]);
var state_12997__$1 = (function (){var statearr_13009 = state_12997;
(statearr_13009[(8)] = inst_12990);

return statearr_13009;
})();
var statearr_13010_13032 = state_12997__$1;
(statearr_13010_13032[(2)] = null);

(statearr_13010_13032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (8))){
var inst_12979 = (state_12997[(7)]);
var state_12997__$1 = state_12997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12997__$1,(11),out,inst_12979);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___13022,out))
;
return ((function (switch__10604__auto__,c__10716__auto___13022,out){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_13014 = [null,null,null,null,null,null,null,null,null];
(statearr_13014[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_13014[(1)] = (1));

return statearr_13014;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_12997){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_12997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e13015){if((e13015 instanceof Object)){
var ex__10608__auto__ = e13015;
var statearr_13016_13033 = state_12997;
(statearr_13016_13033[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13034 = state_12997;
state_12997 = G__13034;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_12997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_12997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___13022,out))
})();
var state__10718__auto__ = (function (){var statearr_13017 = f__10717__auto__.call(null);
(statearr_13017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___13022);

return statearr_13017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___13022,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13035 = [];
var len__7937__auto___13038 = arguments.length;
var i__7938__auto___13039 = (0);
while(true){
if((i__7938__auto___13039 < len__7937__auto___13038)){
args13035.push((arguments[i__7938__auto___13039]));

var G__13040 = (i__7938__auto___13039 + (1));
i__7938__auto___13039 = G__13040;
continue;
} else {
}
break;
}

var G__13037 = args13035.length;
switch (G__13037) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13035.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto__){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto__){
return (function (state_13207){
var state_val_13208 = (state_13207[(1)]);
if((state_val_13208 === (7))){
var inst_13203 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
var statearr_13209_13250 = state_13207__$1;
(statearr_13209_13250[(2)] = inst_13203);

(statearr_13209_13250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (20))){
var inst_13173 = (state_13207[(7)]);
var inst_13184 = (state_13207[(2)]);
var inst_13185 = cljs.core.next.call(null,inst_13173);
var inst_13159 = inst_13185;
var inst_13160 = null;
var inst_13161 = (0);
var inst_13162 = (0);
var state_13207__$1 = (function (){var statearr_13210 = state_13207;
(statearr_13210[(8)] = inst_13159);

(statearr_13210[(9)] = inst_13184);

(statearr_13210[(10)] = inst_13161);

(statearr_13210[(11)] = inst_13160);

(statearr_13210[(12)] = inst_13162);

return statearr_13210;
})();
var statearr_13211_13251 = state_13207__$1;
(statearr_13211_13251[(2)] = null);

(statearr_13211_13251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (1))){
var state_13207__$1 = state_13207;
var statearr_13212_13252 = state_13207__$1;
(statearr_13212_13252[(2)] = null);

(statearr_13212_13252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (4))){
var inst_13148 = (state_13207[(13)]);
var inst_13148__$1 = (state_13207[(2)]);
var inst_13149 = (inst_13148__$1 == null);
var state_13207__$1 = (function (){var statearr_13213 = state_13207;
(statearr_13213[(13)] = inst_13148__$1);

return statearr_13213;
})();
if(cljs.core.truth_(inst_13149)){
var statearr_13214_13253 = state_13207__$1;
(statearr_13214_13253[(1)] = (5));

} else {
var statearr_13215_13254 = state_13207__$1;
(statearr_13215_13254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (15))){
var state_13207__$1 = state_13207;
var statearr_13219_13255 = state_13207__$1;
(statearr_13219_13255[(2)] = null);

(statearr_13219_13255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (21))){
var state_13207__$1 = state_13207;
var statearr_13220_13256 = state_13207__$1;
(statearr_13220_13256[(2)] = null);

(statearr_13220_13256[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (13))){
var inst_13159 = (state_13207[(8)]);
var inst_13161 = (state_13207[(10)]);
var inst_13160 = (state_13207[(11)]);
var inst_13162 = (state_13207[(12)]);
var inst_13169 = (state_13207[(2)]);
var inst_13170 = (inst_13162 + (1));
var tmp13216 = inst_13159;
var tmp13217 = inst_13161;
var tmp13218 = inst_13160;
var inst_13159__$1 = tmp13216;
var inst_13160__$1 = tmp13218;
var inst_13161__$1 = tmp13217;
var inst_13162__$1 = inst_13170;
var state_13207__$1 = (function (){var statearr_13221 = state_13207;
(statearr_13221[(8)] = inst_13159__$1);

(statearr_13221[(10)] = inst_13161__$1);

(statearr_13221[(11)] = inst_13160__$1);

(statearr_13221[(12)] = inst_13162__$1);

(statearr_13221[(14)] = inst_13169);

return statearr_13221;
})();
var statearr_13222_13257 = state_13207__$1;
(statearr_13222_13257[(2)] = null);

(statearr_13222_13257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (22))){
var state_13207__$1 = state_13207;
var statearr_13223_13258 = state_13207__$1;
(statearr_13223_13258[(2)] = null);

(statearr_13223_13258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (6))){
var inst_13148 = (state_13207[(13)]);
var inst_13157 = f.call(null,inst_13148);
var inst_13158 = cljs.core.seq.call(null,inst_13157);
var inst_13159 = inst_13158;
var inst_13160 = null;
var inst_13161 = (0);
var inst_13162 = (0);
var state_13207__$1 = (function (){var statearr_13224 = state_13207;
(statearr_13224[(8)] = inst_13159);

(statearr_13224[(10)] = inst_13161);

(statearr_13224[(11)] = inst_13160);

(statearr_13224[(12)] = inst_13162);

return statearr_13224;
})();
var statearr_13225_13259 = state_13207__$1;
(statearr_13225_13259[(2)] = null);

(statearr_13225_13259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (17))){
var inst_13173 = (state_13207[(7)]);
var inst_13177 = cljs.core.chunk_first.call(null,inst_13173);
var inst_13178 = cljs.core.chunk_rest.call(null,inst_13173);
var inst_13179 = cljs.core.count.call(null,inst_13177);
var inst_13159 = inst_13178;
var inst_13160 = inst_13177;
var inst_13161 = inst_13179;
var inst_13162 = (0);
var state_13207__$1 = (function (){var statearr_13226 = state_13207;
(statearr_13226[(8)] = inst_13159);

(statearr_13226[(10)] = inst_13161);

(statearr_13226[(11)] = inst_13160);

(statearr_13226[(12)] = inst_13162);

return statearr_13226;
})();
var statearr_13227_13260 = state_13207__$1;
(statearr_13227_13260[(2)] = null);

(statearr_13227_13260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (3))){
var inst_13205 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13207__$1,inst_13205);
} else {
if((state_val_13208 === (12))){
var inst_13193 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
var statearr_13228_13261 = state_13207__$1;
(statearr_13228_13261[(2)] = inst_13193);

(statearr_13228_13261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (2))){
var state_13207__$1 = state_13207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13207__$1,(4),in$);
} else {
if((state_val_13208 === (23))){
var inst_13201 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
var statearr_13229_13262 = state_13207__$1;
(statearr_13229_13262[(2)] = inst_13201);

(statearr_13229_13262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (19))){
var inst_13188 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
var statearr_13230_13263 = state_13207__$1;
(statearr_13230_13263[(2)] = inst_13188);

(statearr_13230_13263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (11))){
var inst_13159 = (state_13207[(8)]);
var inst_13173 = (state_13207[(7)]);
var inst_13173__$1 = cljs.core.seq.call(null,inst_13159);
var state_13207__$1 = (function (){var statearr_13231 = state_13207;
(statearr_13231[(7)] = inst_13173__$1);

return statearr_13231;
})();
if(inst_13173__$1){
var statearr_13232_13264 = state_13207__$1;
(statearr_13232_13264[(1)] = (14));

} else {
var statearr_13233_13265 = state_13207__$1;
(statearr_13233_13265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (9))){
var inst_13195 = (state_13207[(2)]);
var inst_13196 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13207__$1 = (function (){var statearr_13234 = state_13207;
(statearr_13234[(15)] = inst_13195);

return statearr_13234;
})();
if(cljs.core.truth_(inst_13196)){
var statearr_13235_13266 = state_13207__$1;
(statearr_13235_13266[(1)] = (21));

} else {
var statearr_13236_13267 = state_13207__$1;
(statearr_13236_13267[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (5))){
var inst_13151 = cljs.core.async.close_BANG_.call(null,out);
var state_13207__$1 = state_13207;
var statearr_13237_13268 = state_13207__$1;
(statearr_13237_13268[(2)] = inst_13151);

(statearr_13237_13268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (14))){
var inst_13173 = (state_13207[(7)]);
var inst_13175 = cljs.core.chunked_seq_QMARK_.call(null,inst_13173);
var state_13207__$1 = state_13207;
if(inst_13175){
var statearr_13238_13269 = state_13207__$1;
(statearr_13238_13269[(1)] = (17));

} else {
var statearr_13239_13270 = state_13207__$1;
(statearr_13239_13270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (16))){
var inst_13191 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
var statearr_13240_13271 = state_13207__$1;
(statearr_13240_13271[(2)] = inst_13191);

(statearr_13240_13271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (10))){
var inst_13160 = (state_13207[(11)]);
var inst_13162 = (state_13207[(12)]);
var inst_13167 = cljs.core._nth.call(null,inst_13160,inst_13162);
var state_13207__$1 = state_13207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13207__$1,(13),out,inst_13167);
} else {
if((state_val_13208 === (18))){
var inst_13173 = (state_13207[(7)]);
var inst_13182 = cljs.core.first.call(null,inst_13173);
var state_13207__$1 = state_13207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13207__$1,(20),out,inst_13182);
} else {
if((state_val_13208 === (8))){
var inst_13161 = (state_13207[(10)]);
var inst_13162 = (state_13207[(12)]);
var inst_13164 = (inst_13162 < inst_13161);
var inst_13165 = inst_13164;
var state_13207__$1 = state_13207;
if(cljs.core.truth_(inst_13165)){
var statearr_13241_13272 = state_13207__$1;
(statearr_13241_13272[(1)] = (10));

} else {
var statearr_13242_13273 = state_13207__$1;
(statearr_13242_13273[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto__))
;
return ((function (switch__10604__auto__,c__10716__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10605__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10605__auto____0 = (function (){
var statearr_13246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13246[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10605__auto__);

(statearr_13246[(1)] = (1));

return statearr_13246;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10605__auto____1 = (function (state_13207){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_13207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e13247){if((e13247 instanceof Object)){
var ex__10608__auto__ = e13247;
var statearr_13248_13274 = state_13207;
(statearr_13248_13274[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13275 = state_13207;
state_13207 = G__13275;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10605__auto__ = function(state_13207){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10605__auto____1.call(this,state_13207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10605__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10605__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto__))
})();
var state__10718__auto__ = (function (){var statearr_13249 = f__10717__auto__.call(null);
(statearr_13249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto__);

return statearr_13249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto__))
);

return c__10716__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13276 = [];
var len__7937__auto___13279 = arguments.length;
var i__7938__auto___13280 = (0);
while(true){
if((i__7938__auto___13280 < len__7937__auto___13279)){
args13276.push((arguments[i__7938__auto___13280]));

var G__13281 = (i__7938__auto___13280 + (1));
i__7938__auto___13280 = G__13281;
continue;
} else {
}
break;
}

var G__13278 = args13276.length;
switch (G__13278) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13276.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args13283 = [];
var len__7937__auto___13286 = arguments.length;
var i__7938__auto___13287 = (0);
while(true){
if((i__7938__auto___13287 < len__7937__auto___13286)){
args13283.push((arguments[i__7938__auto___13287]));

var G__13288 = (i__7938__auto___13287 + (1));
i__7938__auto___13287 = G__13288;
continue;
} else {
}
break;
}

var G__13285 = args13283.length;
switch (G__13285) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13283.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args13290 = [];
var len__7937__auto___13341 = arguments.length;
var i__7938__auto___13342 = (0);
while(true){
if((i__7938__auto___13342 < len__7937__auto___13341)){
args13290.push((arguments[i__7938__auto___13342]));

var G__13343 = (i__7938__auto___13342 + (1));
i__7938__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var G__13292 = args13290.length;
switch (G__13292) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13290.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10716__auto___13345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___13345,out){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___13345,out){
return (function (state_13316){
var state_val_13317 = (state_13316[(1)]);
if((state_val_13317 === (7))){
var inst_13311 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
var statearr_13318_13346 = state_13316__$1;
(statearr_13318_13346[(2)] = inst_13311);

(statearr_13318_13346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (1))){
var inst_13293 = null;
var state_13316__$1 = (function (){var statearr_13319 = state_13316;
(statearr_13319[(7)] = inst_13293);

return statearr_13319;
})();
var statearr_13320_13347 = state_13316__$1;
(statearr_13320_13347[(2)] = null);

(statearr_13320_13347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (4))){
var inst_13296 = (state_13316[(8)]);
var inst_13296__$1 = (state_13316[(2)]);
var inst_13297 = (inst_13296__$1 == null);
var inst_13298 = cljs.core.not.call(null,inst_13297);
var state_13316__$1 = (function (){var statearr_13321 = state_13316;
(statearr_13321[(8)] = inst_13296__$1);

return statearr_13321;
})();
if(inst_13298){
var statearr_13322_13348 = state_13316__$1;
(statearr_13322_13348[(1)] = (5));

} else {
var statearr_13323_13349 = state_13316__$1;
(statearr_13323_13349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (6))){
var state_13316__$1 = state_13316;
var statearr_13324_13350 = state_13316__$1;
(statearr_13324_13350[(2)] = null);

(statearr_13324_13350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (3))){
var inst_13313 = (state_13316[(2)]);
var inst_13314 = cljs.core.async.close_BANG_.call(null,out);
var state_13316__$1 = (function (){var statearr_13325 = state_13316;
(statearr_13325[(9)] = inst_13313);

return statearr_13325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13316__$1,inst_13314);
} else {
if((state_val_13317 === (2))){
var state_13316__$1 = state_13316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13316__$1,(4),ch);
} else {
if((state_val_13317 === (11))){
var inst_13296 = (state_13316[(8)]);
var inst_13305 = (state_13316[(2)]);
var inst_13293 = inst_13296;
var state_13316__$1 = (function (){var statearr_13326 = state_13316;
(statearr_13326[(7)] = inst_13293);

(statearr_13326[(10)] = inst_13305);

return statearr_13326;
})();
var statearr_13327_13351 = state_13316__$1;
(statearr_13327_13351[(2)] = null);

(statearr_13327_13351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (9))){
var inst_13296 = (state_13316[(8)]);
var state_13316__$1 = state_13316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13316__$1,(11),out,inst_13296);
} else {
if((state_val_13317 === (5))){
var inst_13293 = (state_13316[(7)]);
var inst_13296 = (state_13316[(8)]);
var inst_13300 = cljs.core._EQ_.call(null,inst_13296,inst_13293);
var state_13316__$1 = state_13316;
if(inst_13300){
var statearr_13329_13352 = state_13316__$1;
(statearr_13329_13352[(1)] = (8));

} else {
var statearr_13330_13353 = state_13316__$1;
(statearr_13330_13353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (10))){
var inst_13308 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
var statearr_13331_13354 = state_13316__$1;
(statearr_13331_13354[(2)] = inst_13308);

(statearr_13331_13354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (8))){
var inst_13293 = (state_13316[(7)]);
var tmp13328 = inst_13293;
var inst_13293__$1 = tmp13328;
var state_13316__$1 = (function (){var statearr_13332 = state_13316;
(statearr_13332[(7)] = inst_13293__$1);

return statearr_13332;
})();
var statearr_13333_13355 = state_13316__$1;
(statearr_13333_13355[(2)] = null);

(statearr_13333_13355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___13345,out))
;
return ((function (switch__10604__auto__,c__10716__auto___13345,out){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_13337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13337[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_13337[(1)] = (1));

return statearr_13337;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_13316){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_13316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e13338){if((e13338 instanceof Object)){
var ex__10608__auto__ = e13338;
var statearr_13339_13356 = state_13316;
(statearr_13339_13356[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13357 = state_13316;
state_13316 = G__13357;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_13316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_13316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___13345,out))
})();
var state__10718__auto__ = (function (){var statearr_13340 = f__10717__auto__.call(null);
(statearr_13340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___13345);

return statearr_13340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___13345,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13358 = [];
var len__7937__auto___13428 = arguments.length;
var i__7938__auto___13429 = (0);
while(true){
if((i__7938__auto___13429 < len__7937__auto___13428)){
args13358.push((arguments[i__7938__auto___13429]));

var G__13430 = (i__7938__auto___13429 + (1));
i__7938__auto___13429 = G__13430;
continue;
} else {
}
break;
}

var G__13360 = args13358.length;
switch (G__13360) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13358.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10716__auto___13432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___13432,out){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___13432,out){
return (function (state_13398){
var state_val_13399 = (state_13398[(1)]);
if((state_val_13399 === (7))){
var inst_13394 = (state_13398[(2)]);
var state_13398__$1 = state_13398;
var statearr_13400_13433 = state_13398__$1;
(statearr_13400_13433[(2)] = inst_13394);

(statearr_13400_13433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (1))){
var inst_13361 = (new Array(n));
var inst_13362 = inst_13361;
var inst_13363 = (0);
var state_13398__$1 = (function (){var statearr_13401 = state_13398;
(statearr_13401[(7)] = inst_13363);

(statearr_13401[(8)] = inst_13362);

return statearr_13401;
})();
var statearr_13402_13434 = state_13398__$1;
(statearr_13402_13434[(2)] = null);

(statearr_13402_13434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (4))){
var inst_13366 = (state_13398[(9)]);
var inst_13366__$1 = (state_13398[(2)]);
var inst_13367 = (inst_13366__$1 == null);
var inst_13368 = cljs.core.not.call(null,inst_13367);
var state_13398__$1 = (function (){var statearr_13403 = state_13398;
(statearr_13403[(9)] = inst_13366__$1);

return statearr_13403;
})();
if(inst_13368){
var statearr_13404_13435 = state_13398__$1;
(statearr_13404_13435[(1)] = (5));

} else {
var statearr_13405_13436 = state_13398__$1;
(statearr_13405_13436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (15))){
var inst_13388 = (state_13398[(2)]);
var state_13398__$1 = state_13398;
var statearr_13406_13437 = state_13398__$1;
(statearr_13406_13437[(2)] = inst_13388);

(statearr_13406_13437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (13))){
var state_13398__$1 = state_13398;
var statearr_13407_13438 = state_13398__$1;
(statearr_13407_13438[(2)] = null);

(statearr_13407_13438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (6))){
var inst_13363 = (state_13398[(7)]);
var inst_13384 = (inst_13363 > (0));
var state_13398__$1 = state_13398;
if(cljs.core.truth_(inst_13384)){
var statearr_13408_13439 = state_13398__$1;
(statearr_13408_13439[(1)] = (12));

} else {
var statearr_13409_13440 = state_13398__$1;
(statearr_13409_13440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (3))){
var inst_13396 = (state_13398[(2)]);
var state_13398__$1 = state_13398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13398__$1,inst_13396);
} else {
if((state_val_13399 === (12))){
var inst_13362 = (state_13398[(8)]);
var inst_13386 = cljs.core.vec.call(null,inst_13362);
var state_13398__$1 = state_13398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13398__$1,(15),out,inst_13386);
} else {
if((state_val_13399 === (2))){
var state_13398__$1 = state_13398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13398__$1,(4),ch);
} else {
if((state_val_13399 === (11))){
var inst_13378 = (state_13398[(2)]);
var inst_13379 = (new Array(n));
var inst_13362 = inst_13379;
var inst_13363 = (0);
var state_13398__$1 = (function (){var statearr_13410 = state_13398;
(statearr_13410[(10)] = inst_13378);

(statearr_13410[(7)] = inst_13363);

(statearr_13410[(8)] = inst_13362);

return statearr_13410;
})();
var statearr_13411_13441 = state_13398__$1;
(statearr_13411_13441[(2)] = null);

(statearr_13411_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (9))){
var inst_13362 = (state_13398[(8)]);
var inst_13376 = cljs.core.vec.call(null,inst_13362);
var state_13398__$1 = state_13398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13398__$1,(11),out,inst_13376);
} else {
if((state_val_13399 === (5))){
var inst_13366 = (state_13398[(9)]);
var inst_13363 = (state_13398[(7)]);
var inst_13362 = (state_13398[(8)]);
var inst_13371 = (state_13398[(11)]);
var inst_13370 = (inst_13362[inst_13363] = inst_13366);
var inst_13371__$1 = (inst_13363 + (1));
var inst_13372 = (inst_13371__$1 < n);
var state_13398__$1 = (function (){var statearr_13412 = state_13398;
(statearr_13412[(12)] = inst_13370);

(statearr_13412[(11)] = inst_13371__$1);

return statearr_13412;
})();
if(cljs.core.truth_(inst_13372)){
var statearr_13413_13442 = state_13398__$1;
(statearr_13413_13442[(1)] = (8));

} else {
var statearr_13414_13443 = state_13398__$1;
(statearr_13414_13443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (14))){
var inst_13391 = (state_13398[(2)]);
var inst_13392 = cljs.core.async.close_BANG_.call(null,out);
var state_13398__$1 = (function (){var statearr_13416 = state_13398;
(statearr_13416[(13)] = inst_13391);

return statearr_13416;
})();
var statearr_13417_13444 = state_13398__$1;
(statearr_13417_13444[(2)] = inst_13392);

(statearr_13417_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (10))){
var inst_13382 = (state_13398[(2)]);
var state_13398__$1 = state_13398;
var statearr_13418_13445 = state_13398__$1;
(statearr_13418_13445[(2)] = inst_13382);

(statearr_13418_13445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13399 === (8))){
var inst_13362 = (state_13398[(8)]);
var inst_13371 = (state_13398[(11)]);
var tmp13415 = inst_13362;
var inst_13362__$1 = tmp13415;
var inst_13363 = inst_13371;
var state_13398__$1 = (function (){var statearr_13419 = state_13398;
(statearr_13419[(7)] = inst_13363);

(statearr_13419[(8)] = inst_13362__$1);

return statearr_13419;
})();
var statearr_13420_13446 = state_13398__$1;
(statearr_13420_13446[(2)] = null);

(statearr_13420_13446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___13432,out))
;
return ((function (switch__10604__auto__,c__10716__auto___13432,out){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_13424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13424[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_13424[(1)] = (1));

return statearr_13424;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_13398){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_13398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e13425){if((e13425 instanceof Object)){
var ex__10608__auto__ = e13425;
var statearr_13426_13447 = state_13398;
(statearr_13426_13447[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13448 = state_13398;
state_13398 = G__13448;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_13398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_13398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___13432,out))
})();
var state__10718__auto__ = (function (){var statearr_13427 = f__10717__auto__.call(null);
(statearr_13427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___13432);

return statearr_13427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___13432,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13449 = [];
var len__7937__auto___13523 = arguments.length;
var i__7938__auto___13524 = (0);
while(true){
if((i__7938__auto___13524 < len__7937__auto___13523)){
args13449.push((arguments[i__7938__auto___13524]));

var G__13525 = (i__7938__auto___13524 + (1));
i__7938__auto___13524 = G__13525;
continue;
} else {
}
break;
}

var G__13451 = args13449.length;
switch (G__13451) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13449.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10716__auto___13527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10716__auto___13527,out){
return (function (){
var f__10717__auto__ = (function (){var switch__10604__auto__ = ((function (c__10716__auto___13527,out){
return (function (state_13493){
var state_val_13494 = (state_13493[(1)]);
if((state_val_13494 === (7))){
var inst_13489 = (state_13493[(2)]);
var state_13493__$1 = state_13493;
var statearr_13495_13528 = state_13493__$1;
(statearr_13495_13528[(2)] = inst_13489);

(statearr_13495_13528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (1))){
var inst_13452 = [];
var inst_13453 = inst_13452;
var inst_13454 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13493__$1 = (function (){var statearr_13496 = state_13493;
(statearr_13496[(7)] = inst_13454);

(statearr_13496[(8)] = inst_13453);

return statearr_13496;
})();
var statearr_13497_13529 = state_13493__$1;
(statearr_13497_13529[(2)] = null);

(statearr_13497_13529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (4))){
var inst_13457 = (state_13493[(9)]);
var inst_13457__$1 = (state_13493[(2)]);
var inst_13458 = (inst_13457__$1 == null);
var inst_13459 = cljs.core.not.call(null,inst_13458);
var state_13493__$1 = (function (){var statearr_13498 = state_13493;
(statearr_13498[(9)] = inst_13457__$1);

return statearr_13498;
})();
if(inst_13459){
var statearr_13499_13530 = state_13493__$1;
(statearr_13499_13530[(1)] = (5));

} else {
var statearr_13500_13531 = state_13493__$1;
(statearr_13500_13531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (15))){
var inst_13483 = (state_13493[(2)]);
var state_13493__$1 = state_13493;
var statearr_13501_13532 = state_13493__$1;
(statearr_13501_13532[(2)] = inst_13483);

(statearr_13501_13532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (13))){
var state_13493__$1 = state_13493;
var statearr_13502_13533 = state_13493__$1;
(statearr_13502_13533[(2)] = null);

(statearr_13502_13533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (6))){
var inst_13453 = (state_13493[(8)]);
var inst_13478 = inst_13453.length;
var inst_13479 = (inst_13478 > (0));
var state_13493__$1 = state_13493;
if(cljs.core.truth_(inst_13479)){
var statearr_13503_13534 = state_13493__$1;
(statearr_13503_13534[(1)] = (12));

} else {
var statearr_13504_13535 = state_13493__$1;
(statearr_13504_13535[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (3))){
var inst_13491 = (state_13493[(2)]);
var state_13493__$1 = state_13493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13493__$1,inst_13491);
} else {
if((state_val_13494 === (12))){
var inst_13453 = (state_13493[(8)]);
var inst_13481 = cljs.core.vec.call(null,inst_13453);
var state_13493__$1 = state_13493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13493__$1,(15),out,inst_13481);
} else {
if((state_val_13494 === (2))){
var state_13493__$1 = state_13493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13493__$1,(4),ch);
} else {
if((state_val_13494 === (11))){
var inst_13461 = (state_13493[(10)]);
var inst_13457 = (state_13493[(9)]);
var inst_13471 = (state_13493[(2)]);
var inst_13472 = [];
var inst_13473 = inst_13472.push(inst_13457);
var inst_13453 = inst_13472;
var inst_13454 = inst_13461;
var state_13493__$1 = (function (){var statearr_13505 = state_13493;
(statearr_13505[(7)] = inst_13454);

(statearr_13505[(11)] = inst_13471);

(statearr_13505[(8)] = inst_13453);

(statearr_13505[(12)] = inst_13473);

return statearr_13505;
})();
var statearr_13506_13536 = state_13493__$1;
(statearr_13506_13536[(2)] = null);

(statearr_13506_13536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (9))){
var inst_13453 = (state_13493[(8)]);
var inst_13469 = cljs.core.vec.call(null,inst_13453);
var state_13493__$1 = state_13493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13493__$1,(11),out,inst_13469);
} else {
if((state_val_13494 === (5))){
var inst_13454 = (state_13493[(7)]);
var inst_13461 = (state_13493[(10)]);
var inst_13457 = (state_13493[(9)]);
var inst_13461__$1 = f.call(null,inst_13457);
var inst_13462 = cljs.core._EQ_.call(null,inst_13461__$1,inst_13454);
var inst_13463 = cljs.core.keyword_identical_QMARK_.call(null,inst_13454,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13464 = (inst_13462) || (inst_13463);
var state_13493__$1 = (function (){var statearr_13507 = state_13493;
(statearr_13507[(10)] = inst_13461__$1);

return statearr_13507;
})();
if(cljs.core.truth_(inst_13464)){
var statearr_13508_13537 = state_13493__$1;
(statearr_13508_13537[(1)] = (8));

} else {
var statearr_13509_13538 = state_13493__$1;
(statearr_13509_13538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (14))){
var inst_13486 = (state_13493[(2)]);
var inst_13487 = cljs.core.async.close_BANG_.call(null,out);
var state_13493__$1 = (function (){var statearr_13511 = state_13493;
(statearr_13511[(13)] = inst_13486);

return statearr_13511;
})();
var statearr_13512_13539 = state_13493__$1;
(statearr_13512_13539[(2)] = inst_13487);

(statearr_13512_13539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (10))){
var inst_13476 = (state_13493[(2)]);
var state_13493__$1 = state_13493;
var statearr_13513_13540 = state_13493__$1;
(statearr_13513_13540[(2)] = inst_13476);

(statearr_13513_13540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13494 === (8))){
var inst_13453 = (state_13493[(8)]);
var inst_13461 = (state_13493[(10)]);
var inst_13457 = (state_13493[(9)]);
var inst_13466 = inst_13453.push(inst_13457);
var tmp13510 = inst_13453;
var inst_13453__$1 = tmp13510;
var inst_13454 = inst_13461;
var state_13493__$1 = (function (){var statearr_13514 = state_13493;
(statearr_13514[(7)] = inst_13454);

(statearr_13514[(8)] = inst_13453__$1);

(statearr_13514[(14)] = inst_13466);

return statearr_13514;
})();
var statearr_13515_13541 = state_13493__$1;
(statearr_13515_13541[(2)] = null);

(statearr_13515_13541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10716__auto___13527,out))
;
return ((function (switch__10604__auto__,c__10716__auto___13527,out){
return (function() {
var cljs$core$async$state_machine__10605__auto__ = null;
var cljs$core$async$state_machine__10605__auto____0 = (function (){
var statearr_13519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13519[(0)] = cljs$core$async$state_machine__10605__auto__);

(statearr_13519[(1)] = (1));

return statearr_13519;
});
var cljs$core$async$state_machine__10605__auto____1 = (function (state_13493){
while(true){
var ret_value__10606__auto__ = (function (){try{while(true){
var result__10607__auto__ = switch__10604__auto__.call(null,state_13493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10607__auto__;
}
break;
}
}catch (e13520){if((e13520 instanceof Object)){
var ex__10608__auto__ = e13520;
var statearr_13521_13542 = state_13493;
(statearr_13521_13542[(5)] = ex__10608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13543 = state_13493;
state_13493 = G__13543;
continue;
} else {
return ret_value__10606__auto__;
}
break;
}
});
cljs$core$async$state_machine__10605__auto__ = function(state_13493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10605__auto____1.call(this,state_13493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10605__auto____0;
cljs$core$async$state_machine__10605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10605__auto____1;
return cljs$core$async$state_machine__10605__auto__;
})()
;})(switch__10604__auto__,c__10716__auto___13527,out))
})();
var state__10718__auto__ = (function (){var statearr_13522 = f__10717__auto__.call(null);
(statearr_13522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10716__auto___13527);

return statearr_13522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10718__auto__);
});})(c__10716__auto___13527,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map