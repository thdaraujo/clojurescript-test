// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11983 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11983 = (function (f,fn_handler,meta11984){
this.f = f;
this.fn_handler = fn_handler;
this.meta11984 = meta11984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11983.cljs$lang$type = true;
cljs.core.async.t11983.cljs$lang$ctorStr = "cljs.core.async/t11983";
cljs.core.async.t11983.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t11983");
});
cljs.core.async.t11983.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11985){var self__ = this;
var _11985__$1 = this;return self__.meta11984;
});
cljs.core.async.t11983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11985,meta11984__$1){var self__ = this;
var _11985__$1 = this;return (new cljs.core.async.t11983(self__.f,self__.fn_handler,meta11984__$1));
});
cljs.core.async.__GT_t11983 = (function __GT_t11983(f__$1,fn_handler__$1,meta11984){return (new cljs.core.async.t11983(f__$1,fn_handler__$1,meta11984));
});
}
return (new cljs.core.async.t11983(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11987 = buff;if(G__11987)
{var bit__4253__auto__ = null;if(cljs.core.truth_((function (){var or__3589__auto__ = bit__4253__auto__;if(cljs.core.truth_(or__3589__auto__))
{return or__3589__auto__;
} else
{return G__11987.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11987.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11987);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11987);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11988 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11988);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11988,ret){
return (function (){return fn1.call(null,val_11988);
});})(val_11988,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4404__auto__))
{var ret = temp__4404__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4404__auto__))
{var retb = temp__4404__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4404__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4404__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4459__auto___11989 = n;var x_11990 = (0);while(true){
if((x_11990 < n__4459__auto___11989))
{(a[x_11990] = (0));
{
var G__11991 = (x_11990 + (1));
x_11990 = G__11991;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11992 = (i + (1));
i = G__11992;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11996 = (function (flag,alt_flag,meta11997){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11997 = meta11997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11996.cljs$lang$type = true;
cljs.core.async.t11996.cljs$lang$ctorStr = "cljs.core.async/t11996";
cljs.core.async.t11996.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t11996");
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11998){var self__ = this;
var _11998__$1 = this;return self__.meta11997;
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11998,meta11997__$1){var self__ = this;
var _11998__$1 = this;return (new cljs.core.async.t11996(self__.flag,self__.alt_flag,meta11997__$1));
});})(flag))
;
cljs.core.async.__GT_t11996 = ((function (flag){
return (function __GT_t11996(flag__$1,alt_flag__$1,meta11997){return (new cljs.core.async.t11996(flag__$1,alt_flag__$1,meta11997));
});})(flag))
;
}
return (new cljs.core.async.t11996(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12002 = (function (cb,flag,alt_handler,meta12003){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12003 = meta12003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12002.cljs$lang$type = true;
cljs.core.async.t12002.cljs$lang$ctorStr = "cljs.core.async/t12002";
cljs.core.async.t12002.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t12002");
});
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12004){var self__ = this;
var _12004__$1 = this;return self__.meta12003;
});
cljs.core.async.t12002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12004,meta12003__$1){var self__ = this;
var _12004__$1 = this;return (new cljs.core.async.t12002(self__.cb,self__.flag,self__.alt_handler,meta12003__$1));
});
cljs.core.async.__GT_t12002 = (function __GT_t12002(cb__$1,flag__$1,alt_handler__$1,meta12003){return (new cljs.core.async.t12002(cb__$1,flag__$1,alt_handler__$1,meta12003));
});
}
return (new cljs.core.async.t12002(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12005_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12005_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12006_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12006_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3589__auto__ = wport;if(cljs.core.truth_(or__3589__auto__))
{return or__3589__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12007 = (i + (1));
i = G__12007;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3589__auto__ = ret;if(cljs.core.truth_(or__3589__auto__))
{return or__3589__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4406__auto__ = (function (){var and__3577__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3577__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3577__auto__;
}
})();if(cljs.core.truth_(temp__4406__auto__))
{var got = temp__4406__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12008){var map__12010 = p__12008;var map__12010__$1 = ((cljs.core.seq_QMARK_.call(null,map__12010))?cljs.core.apply.call(null,cljs.core.hash_map,map__12010):map__12010);var opts = map__12010__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12008 = null;if (arguments.length > 1) {
  p__12008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12008);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12011){
var ports = cljs.core.first(arglist__12011);
var p__12008 = cljs.core.rest(arglist__12011);
return alts_BANG___delegate(ports,p__12008);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6429__auto___12106 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___12106){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___12106){
return (function (state_12082){var state_val_12083 = (state_12082[(1)]);if((state_val_12083 === (7)))
{var inst_12078 = (state_12082[(2)]);var state_12082__$1 = state_12082;var statearr_12084_12107 = state_12082__$1;(statearr_12084_12107[(2)] = inst_12078);
(statearr_12084_12107[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (1)))
{var state_12082__$1 = state_12082;var statearr_12085_12108 = state_12082__$1;(statearr_12085_12108[(2)] = null);
(statearr_12085_12108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (4)))
{var inst_12061 = (state_12082[(7)]);var inst_12061__$1 = (state_12082[(2)]);var inst_12062 = (inst_12061__$1 == null);var state_12082__$1 = (function (){var statearr_12086 = state_12082;(statearr_12086[(7)] = inst_12061__$1);
return statearr_12086;
})();if(cljs.core.truth_(inst_12062))
{var statearr_12087_12109 = state_12082__$1;(statearr_12087_12109[(1)] = (5));
} else
{var statearr_12088_12110 = state_12082__$1;(statearr_12088_12110[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (13)))
{var state_12082__$1 = state_12082;var statearr_12089_12111 = state_12082__$1;(statearr_12089_12111[(2)] = null);
(statearr_12089_12111[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (6)))
{var inst_12061 = (state_12082[(7)]);var state_12082__$1 = state_12082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12082__$1,(11),to,inst_12061);
} else
{if((state_val_12083 === (3)))
{var inst_12080 = (state_12082[(2)]);var state_12082__$1 = state_12082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12082__$1,inst_12080);
} else
{if((state_val_12083 === (12)))
{var state_12082__$1 = state_12082;var statearr_12090_12112 = state_12082__$1;(statearr_12090_12112[(2)] = null);
(statearr_12090_12112[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (2)))
{var state_12082__$1 = state_12082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12082__$1,(4),from);
} else
{if((state_val_12083 === (11)))
{var inst_12071 = (state_12082[(2)]);var state_12082__$1 = state_12082;if(cljs.core.truth_(inst_12071))
{var statearr_12091_12113 = state_12082__$1;(statearr_12091_12113[(1)] = (12));
} else
{var statearr_12092_12114 = state_12082__$1;(statearr_12092_12114[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (9)))
{var state_12082__$1 = state_12082;var statearr_12093_12115 = state_12082__$1;(statearr_12093_12115[(2)] = null);
(statearr_12093_12115[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (5)))
{var state_12082__$1 = state_12082;if(cljs.core.truth_(close_QMARK_))
{var statearr_12094_12116 = state_12082__$1;(statearr_12094_12116[(1)] = (8));
} else
{var statearr_12095_12117 = state_12082__$1;(statearr_12095_12117[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (14)))
{var inst_12076 = (state_12082[(2)]);var state_12082__$1 = state_12082;var statearr_12096_12118 = state_12082__$1;(statearr_12096_12118[(2)] = inst_12076);
(statearr_12096_12118[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (10)))
{var inst_12068 = (state_12082[(2)]);var state_12082__$1 = state_12082;var statearr_12097_12119 = state_12082__$1;(statearr_12097_12119[(2)] = inst_12068);
(statearr_12097_12119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12083 === (8)))
{var inst_12065 = cljs.core.async.close_BANG_.call(null,to);var state_12082__$1 = state_12082;var statearr_12098_12120 = state_12082__$1;(statearr_12098_12120[(2)] = inst_12065);
(statearr_12098_12120[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___12106))
;return ((function (switch__6414__auto__,c__6429__auto___12106){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12102 = [null,null,null,null,null,null,null,null];(statearr_12102[(0)] = state_machine__6415__auto__);
(statearr_12102[(1)] = (1));
return statearr_12102;
});
var state_machine__6415__auto____1 = (function (state_12082){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12103){if((e12103 instanceof Object))
{var ex__6418__auto__ = e12103;var statearr_12104_12121 = state_12082;(statearr_12104_12121[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12103;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12122 = state_12082;
state_12082 = G__12122;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12082){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___12106))
})();var state__6431__auto__ = (function (){var statearr_12105 = f__6430__auto__.call(null);(statearr_12105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___12106);
return statearr_12105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___12106))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12306){var vec__12307 = p__12306;var v = cljs.core.nth.call(null,vec__12307,(0),null);var p = cljs.core.nth.call(null,vec__12307,(1),null);var job = vec__12307;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6429__auto___12489 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___12489,res,vec__12307,v,p,job,jobs,results){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___12489,res,vec__12307,v,p,job,jobs,results){
return (function (state_12312){var state_val_12313 = (state_12312[(1)]);if((state_val_12313 === (2)))
{var inst_12309 = (state_12312[(2)]);var inst_12310 = cljs.core.async.close_BANG_.call(null,res);var state_12312__$1 = (function (){var statearr_12314 = state_12312;(statearr_12314[(7)] = inst_12309);
return statearr_12314;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12312__$1,inst_12310);
} else
{if((state_val_12313 === (1)))
{var state_12312__$1 = state_12312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12312__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6429__auto___12489,res,vec__12307,v,p,job,jobs,results))
;return ((function (switch__6414__auto__,c__6429__auto___12489,res,vec__12307,v,p,job,jobs,results){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12318 = [null,null,null,null,null,null,null,null];(statearr_12318[(0)] = state_machine__6415__auto__);
(statearr_12318[(1)] = (1));
return statearr_12318;
});
var state_machine__6415__auto____1 = (function (state_12312){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12319){if((e12319 instanceof Object))
{var ex__6418__auto__ = e12319;var statearr_12320_12490 = state_12312;(statearr_12320_12490[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12319;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12491 = state_12312;
state_12312 = G__12491;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12312){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___12489,res,vec__12307,v,p,job,jobs,results))
})();var state__6431__auto__ = (function (){var statearr_12321 = f__6430__auto__.call(null);(statearr_12321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___12489);
return statearr_12321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___12489,res,vec__12307,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12322){var vec__12323 = p__12322;var v = cljs.core.nth.call(null,vec__12323,(0),null);var p = cljs.core.nth.call(null,vec__12323,(1),null);var job = vec__12323;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4459__auto___12492 = n;var __12493 = (0);while(true){
if((__12493 < n__4459__auto___12492))
{var G__12324_12494 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12324_12494) {
case "async":
var c__6429__auto___12496 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12493,c__6429__auto___12496,G__12324_12494,n__4459__auto___12492,jobs,results,process,async){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (__12493,c__6429__auto___12496,G__12324_12494,n__4459__auto___12492,jobs,results,process,async){
return (function (state_12337){var state_val_12338 = (state_12337[(1)]);if((state_val_12338 === (7)))
{var inst_12333 = (state_12337[(2)]);var state_12337__$1 = state_12337;var statearr_12339_12497 = state_12337__$1;(statearr_12339_12497[(2)] = inst_12333);
(statearr_12339_12497[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12338 === (6)))
{var state_12337__$1 = state_12337;var statearr_12340_12498 = state_12337__$1;(statearr_12340_12498[(2)] = null);
(statearr_12340_12498[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12338 === (5)))
{var state_12337__$1 = state_12337;var statearr_12341_12499 = state_12337__$1;(statearr_12341_12499[(2)] = null);
(statearr_12341_12499[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12338 === (4)))
{var inst_12327 = (state_12337[(2)]);var inst_12328 = async.call(null,inst_12327);var state_12337__$1 = state_12337;if(cljs.core.truth_(inst_12328))
{var statearr_12342_12500 = state_12337__$1;(statearr_12342_12500[(1)] = (5));
} else
{var statearr_12343_12501 = state_12337__$1;(statearr_12343_12501[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12338 === (3)))
{var inst_12335 = (state_12337[(2)]);var state_12337__$1 = state_12337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12337__$1,inst_12335);
} else
{if((state_val_12338 === (2)))
{var state_12337__$1 = state_12337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12337__$1,(4),jobs);
} else
{if((state_val_12338 === (1)))
{var state_12337__$1 = state_12337;var statearr_12344_12502 = state_12337__$1;(statearr_12344_12502[(2)] = null);
(statearr_12344_12502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12493,c__6429__auto___12496,G__12324_12494,n__4459__auto___12492,jobs,results,process,async))
;return ((function (__12493,switch__6414__auto__,c__6429__auto___12496,G__12324_12494,n__4459__auto___12492,jobs,results,process,async){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12348 = [null,null,null,null,null,null,null];(statearr_12348[(0)] = state_machine__6415__auto__);
(statearr_12348[(1)] = (1));
return statearr_12348;
});
var state_machine__6415__auto____1 = (function (state_12337){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12337);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12349){if((e12349 instanceof Object))
{var ex__6418__auto__ = e12349;var statearr_12350_12503 = state_12337;(statearr_12350_12503[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12337);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12504 = state_12337;
state_12337 = G__12504;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12337){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(__12493,switch__6414__auto__,c__6429__auto___12496,G__12324_12494,n__4459__auto___12492,jobs,results,process,async))
})();var state__6431__auto__ = (function (){var statearr_12351 = f__6430__auto__.call(null);(statearr_12351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___12496);
return statearr_12351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(__12493,c__6429__auto___12496,G__12324_12494,n__4459__auto___12492,jobs,results,process,async))
);

break;
case "compute":
var c__6429__auto___12505 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12493,c__6429__auto___12505,G__12324_12494,n__4459__auto___12492,jobs,results,process,async){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (__12493,c__6429__auto___12505,G__12324_12494,n__4459__auto___12492,jobs,results,process,async){
return (function (state_12364){var state_val_12365 = (state_12364[(1)]);if((state_val_12365 === (7)))
{var inst_12360 = (state_12364[(2)]);var state_12364__$1 = state_12364;var statearr_12366_12506 = state_12364__$1;(statearr_12366_12506[(2)] = inst_12360);
(statearr_12366_12506[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12365 === (6)))
{var state_12364__$1 = state_12364;var statearr_12367_12507 = state_12364__$1;(statearr_12367_12507[(2)] = null);
(statearr_12367_12507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12365 === (5)))
{var state_12364__$1 = state_12364;var statearr_12368_12508 = state_12364__$1;(statearr_12368_12508[(2)] = null);
(statearr_12368_12508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12365 === (4)))
{var inst_12354 = (state_12364[(2)]);var inst_12355 = process.call(null,inst_12354);var state_12364__$1 = state_12364;if(cljs.core.truth_(inst_12355))
{var statearr_12369_12509 = state_12364__$1;(statearr_12369_12509[(1)] = (5));
} else
{var statearr_12370_12510 = state_12364__$1;(statearr_12370_12510[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12365 === (3)))
{var inst_12362 = (state_12364[(2)]);var state_12364__$1 = state_12364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12364__$1,inst_12362);
} else
{if((state_val_12365 === (2)))
{var state_12364__$1 = state_12364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12364__$1,(4),jobs);
} else
{if((state_val_12365 === (1)))
{var state_12364__$1 = state_12364;var statearr_12371_12511 = state_12364__$1;(statearr_12371_12511[(2)] = null);
(statearr_12371_12511[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12493,c__6429__auto___12505,G__12324_12494,n__4459__auto___12492,jobs,results,process,async))
;return ((function (__12493,switch__6414__auto__,c__6429__auto___12505,G__12324_12494,n__4459__auto___12492,jobs,results,process,async){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12375 = [null,null,null,null,null,null,null];(statearr_12375[(0)] = state_machine__6415__auto__);
(statearr_12375[(1)] = (1));
return statearr_12375;
});
var state_machine__6415__auto____1 = (function (state_12364){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12364);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12376){if((e12376 instanceof Object))
{var ex__6418__auto__ = e12376;var statearr_12377_12512 = state_12364;(statearr_12377_12512[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12376;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12513 = state_12364;
state_12364 = G__12513;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12364){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(__12493,switch__6414__auto__,c__6429__auto___12505,G__12324_12494,n__4459__auto___12492,jobs,results,process,async))
})();var state__6431__auto__ = (function (){var statearr_12378 = f__6430__auto__.call(null);(statearr_12378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___12505);
return statearr_12378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(__12493,c__6429__auto___12505,G__12324_12494,n__4459__auto___12492,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12514 = (__12493 + (1));
__12493 = G__12514;
continue;
}
} else
{}
break;
}
var c__6429__auto___12515 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___12515,jobs,results,process,async){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___12515,jobs,results,process,async){
return (function (state_12400){var state_val_12401 = (state_12400[(1)]);if((state_val_12401 === (9)))
{var inst_12393 = (state_12400[(2)]);var state_12400__$1 = (function (){var statearr_12402 = state_12400;(statearr_12402[(7)] = inst_12393);
return statearr_12402;
})();var statearr_12403_12516 = state_12400__$1;(statearr_12403_12516[(2)] = null);
(statearr_12403_12516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12401 === (8)))
{var inst_12386 = (state_12400[(8)]);var inst_12391 = (state_12400[(2)]);var state_12400__$1 = (function (){var statearr_12404 = state_12400;(statearr_12404[(9)] = inst_12391);
return statearr_12404;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12400__$1,(9),results,inst_12386);
} else
{if((state_val_12401 === (7)))
{var inst_12396 = (state_12400[(2)]);var state_12400__$1 = state_12400;var statearr_12405_12517 = state_12400__$1;(statearr_12405_12517[(2)] = inst_12396);
(statearr_12405_12517[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12401 === (6)))
{var inst_12386 = (state_12400[(8)]);var inst_12381 = (state_12400[(10)]);var inst_12386__$1 = cljs.core.async.chan.call(null,(1));var inst_12387 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12388 = [inst_12381,inst_12386__$1];var inst_12389 = (new cljs.core.PersistentVector(null,2,(5),inst_12387,inst_12388,null));var state_12400__$1 = (function (){var statearr_12406 = state_12400;(statearr_12406[(8)] = inst_12386__$1);
return statearr_12406;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12400__$1,(8),jobs,inst_12389);
} else
{if((state_val_12401 === (5)))
{var inst_12384 = cljs.core.async.close_BANG_.call(null,jobs);var state_12400__$1 = state_12400;var statearr_12407_12518 = state_12400__$1;(statearr_12407_12518[(2)] = inst_12384);
(statearr_12407_12518[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12401 === (4)))
{var inst_12381 = (state_12400[(10)]);var inst_12381__$1 = (state_12400[(2)]);var inst_12382 = (inst_12381__$1 == null);var state_12400__$1 = (function (){var statearr_12408 = state_12400;(statearr_12408[(10)] = inst_12381__$1);
return statearr_12408;
})();if(cljs.core.truth_(inst_12382))
{var statearr_12409_12519 = state_12400__$1;(statearr_12409_12519[(1)] = (5));
} else
{var statearr_12410_12520 = state_12400__$1;(statearr_12410_12520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12401 === (3)))
{var inst_12398 = (state_12400[(2)]);var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12400__$1,inst_12398);
} else
{if((state_val_12401 === (2)))
{var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12400__$1,(4),from);
} else
{if((state_val_12401 === (1)))
{var state_12400__$1 = state_12400;var statearr_12411_12521 = state_12400__$1;(statearr_12411_12521[(2)] = null);
(statearr_12411_12521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6429__auto___12515,jobs,results,process,async))
;return ((function (switch__6414__auto__,c__6429__auto___12515,jobs,results,process,async){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12415 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12415[(0)] = state_machine__6415__auto__);
(statearr_12415[(1)] = (1));
return statearr_12415;
});
var state_machine__6415__auto____1 = (function (state_12400){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12400);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12416){if((e12416 instanceof Object))
{var ex__6418__auto__ = e12416;var statearr_12417_12522 = state_12400;(statearr_12417_12522[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12416;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12523 = state_12400;
state_12400 = G__12523;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12400){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___12515,jobs,results,process,async))
})();var state__6431__auto__ = (function (){var statearr_12418 = f__6430__auto__.call(null);(statearr_12418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___12515);
return statearr_12418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___12515,jobs,results,process,async))
);
var c__6429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto__,jobs,results,process,async){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto__,jobs,results,process,async){
return (function (state_12456){var state_val_12457 = (state_12456[(1)]);if((state_val_12457 === (7)))
{var inst_12452 = (state_12456[(2)]);var state_12456__$1 = state_12456;var statearr_12458_12524 = state_12456__$1;(statearr_12458_12524[(2)] = inst_12452);
(statearr_12458_12524[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (20)))
{var state_12456__$1 = state_12456;var statearr_12459_12525 = state_12456__$1;(statearr_12459_12525[(2)] = null);
(statearr_12459_12525[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (1)))
{var state_12456__$1 = state_12456;var statearr_12460_12526 = state_12456__$1;(statearr_12460_12526[(2)] = null);
(statearr_12460_12526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (4)))
{var inst_12421 = (state_12456[(7)]);var inst_12421__$1 = (state_12456[(2)]);var inst_12422 = (inst_12421__$1 == null);var state_12456__$1 = (function (){var statearr_12461 = state_12456;(statearr_12461[(7)] = inst_12421__$1);
return statearr_12461;
})();if(cljs.core.truth_(inst_12422))
{var statearr_12462_12527 = state_12456__$1;(statearr_12462_12527[(1)] = (5));
} else
{var statearr_12463_12528 = state_12456__$1;(statearr_12463_12528[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (15)))
{var inst_12434 = (state_12456[(8)]);var state_12456__$1 = state_12456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12456__$1,(18),to,inst_12434);
} else
{if((state_val_12457 === (21)))
{var inst_12447 = (state_12456[(2)]);var state_12456__$1 = state_12456;var statearr_12464_12529 = state_12456__$1;(statearr_12464_12529[(2)] = inst_12447);
(statearr_12464_12529[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (13)))
{var inst_12449 = (state_12456[(2)]);var state_12456__$1 = (function (){var statearr_12465 = state_12456;(statearr_12465[(9)] = inst_12449);
return statearr_12465;
})();var statearr_12466_12530 = state_12456__$1;(statearr_12466_12530[(2)] = null);
(statearr_12466_12530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (6)))
{var inst_12421 = (state_12456[(7)]);var state_12456__$1 = state_12456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12456__$1,(11),inst_12421);
} else
{if((state_val_12457 === (17)))
{var inst_12442 = (state_12456[(2)]);var state_12456__$1 = state_12456;if(cljs.core.truth_(inst_12442))
{var statearr_12467_12531 = state_12456__$1;(statearr_12467_12531[(1)] = (19));
} else
{var statearr_12468_12532 = state_12456__$1;(statearr_12468_12532[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (3)))
{var inst_12454 = (state_12456[(2)]);var state_12456__$1 = state_12456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12456__$1,inst_12454);
} else
{if((state_val_12457 === (12)))
{var inst_12431 = (state_12456[(10)]);var state_12456__$1 = state_12456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12456__$1,(14),inst_12431);
} else
{if((state_val_12457 === (2)))
{var state_12456__$1 = state_12456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12456__$1,(4),results);
} else
{if((state_val_12457 === (19)))
{var state_12456__$1 = state_12456;var statearr_12469_12533 = state_12456__$1;(statearr_12469_12533[(2)] = null);
(statearr_12469_12533[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (11)))
{var inst_12431 = (state_12456[(2)]);var state_12456__$1 = (function (){var statearr_12470 = state_12456;(statearr_12470[(10)] = inst_12431);
return statearr_12470;
})();var statearr_12471_12534 = state_12456__$1;(statearr_12471_12534[(2)] = null);
(statearr_12471_12534[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (9)))
{var state_12456__$1 = state_12456;var statearr_12472_12535 = state_12456__$1;(statearr_12472_12535[(2)] = null);
(statearr_12472_12535[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (5)))
{var state_12456__$1 = state_12456;if(cljs.core.truth_(close_QMARK_))
{var statearr_12473_12536 = state_12456__$1;(statearr_12473_12536[(1)] = (8));
} else
{var statearr_12474_12537 = state_12456__$1;(statearr_12474_12537[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (14)))
{var inst_12436 = (state_12456[(11)]);var inst_12434 = (state_12456[(8)]);var inst_12434__$1 = (state_12456[(2)]);var inst_12435 = (inst_12434__$1 == null);var inst_12436__$1 = cljs.core.not.call(null,inst_12435);var state_12456__$1 = (function (){var statearr_12475 = state_12456;(statearr_12475[(11)] = inst_12436__$1);
(statearr_12475[(8)] = inst_12434__$1);
return statearr_12475;
})();if(inst_12436__$1)
{var statearr_12476_12538 = state_12456__$1;(statearr_12476_12538[(1)] = (15));
} else
{var statearr_12477_12539 = state_12456__$1;(statearr_12477_12539[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (16)))
{var inst_12436 = (state_12456[(11)]);var state_12456__$1 = state_12456;var statearr_12478_12540 = state_12456__$1;(statearr_12478_12540[(2)] = inst_12436);
(statearr_12478_12540[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (10)))
{var inst_12428 = (state_12456[(2)]);var state_12456__$1 = state_12456;var statearr_12479_12541 = state_12456__$1;(statearr_12479_12541[(2)] = inst_12428);
(statearr_12479_12541[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (18)))
{var inst_12439 = (state_12456[(2)]);var state_12456__$1 = state_12456;var statearr_12480_12542 = state_12456__$1;(statearr_12480_12542[(2)] = inst_12439);
(statearr_12480_12542[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12457 === (8)))
{var inst_12425 = cljs.core.async.close_BANG_.call(null,to);var state_12456__$1 = state_12456;var statearr_12481_12543 = state_12456__$1;(statearr_12481_12543[(2)] = inst_12425);
(statearr_12481_12543[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto__,jobs,results,process,async))
;return ((function (switch__6414__auto__,c__6429__auto__,jobs,results,process,async){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12485 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12485[(0)] = state_machine__6415__auto__);
(statearr_12485[(1)] = (1));
return statearr_12485;
});
var state_machine__6415__auto____1 = (function (state_12456){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12456);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12486){if((e12486 instanceof Object))
{var ex__6418__auto__ = e12486;var statearr_12487_12544 = state_12456;(statearr_12487_12544[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12486;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12545 = state_12456;
state_12456 = G__12545;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12456){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto__,jobs,results,process,async))
})();var state__6431__auto__ = (function (){var statearr_12488 = f__6430__auto__.call(null);(statearr_12488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto__);
return statearr_12488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto__,jobs,results,process,async))
);
return c__6429__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6429__auto___12646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___12646,tc,fc){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___12646,tc,fc){
return (function (state_12621){var state_val_12622 = (state_12621[(1)]);if((state_val_12622 === (7)))
{var inst_12617 = (state_12621[(2)]);var state_12621__$1 = state_12621;var statearr_12623_12647 = state_12621__$1;(statearr_12623_12647[(2)] = inst_12617);
(statearr_12623_12647[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (1)))
{var state_12621__$1 = state_12621;var statearr_12624_12648 = state_12621__$1;(statearr_12624_12648[(2)] = null);
(statearr_12624_12648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (4)))
{var inst_12598 = (state_12621[(7)]);var inst_12598__$1 = (state_12621[(2)]);var inst_12599 = (inst_12598__$1 == null);var state_12621__$1 = (function (){var statearr_12625 = state_12621;(statearr_12625[(7)] = inst_12598__$1);
return statearr_12625;
})();if(cljs.core.truth_(inst_12599))
{var statearr_12626_12649 = state_12621__$1;(statearr_12626_12649[(1)] = (5));
} else
{var statearr_12627_12650 = state_12621__$1;(statearr_12627_12650[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (13)))
{var state_12621__$1 = state_12621;var statearr_12628_12651 = state_12621__$1;(statearr_12628_12651[(2)] = null);
(statearr_12628_12651[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (6)))
{var inst_12598 = (state_12621[(7)]);var inst_12604 = p.call(null,inst_12598);var state_12621__$1 = state_12621;if(cljs.core.truth_(inst_12604))
{var statearr_12629_12652 = state_12621__$1;(statearr_12629_12652[(1)] = (9));
} else
{var statearr_12630_12653 = state_12621__$1;(statearr_12630_12653[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (3)))
{var inst_12619 = (state_12621[(2)]);var state_12621__$1 = state_12621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12621__$1,inst_12619);
} else
{if((state_val_12622 === (12)))
{var state_12621__$1 = state_12621;var statearr_12631_12654 = state_12621__$1;(statearr_12631_12654[(2)] = null);
(statearr_12631_12654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (2)))
{var state_12621__$1 = state_12621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12621__$1,(4),ch);
} else
{if((state_val_12622 === (11)))
{var inst_12598 = (state_12621[(7)]);var inst_12608 = (state_12621[(2)]);var state_12621__$1 = state_12621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12621__$1,(8),inst_12608,inst_12598);
} else
{if((state_val_12622 === (9)))
{var state_12621__$1 = state_12621;var statearr_12632_12655 = state_12621__$1;(statearr_12632_12655[(2)] = tc);
(statearr_12632_12655[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (5)))
{var inst_12601 = cljs.core.async.close_BANG_.call(null,tc);var inst_12602 = cljs.core.async.close_BANG_.call(null,fc);var state_12621__$1 = (function (){var statearr_12633 = state_12621;(statearr_12633[(8)] = inst_12601);
return statearr_12633;
})();var statearr_12634_12656 = state_12621__$1;(statearr_12634_12656[(2)] = inst_12602);
(statearr_12634_12656[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (14)))
{var inst_12615 = (state_12621[(2)]);var state_12621__$1 = state_12621;var statearr_12635_12657 = state_12621__$1;(statearr_12635_12657[(2)] = inst_12615);
(statearr_12635_12657[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (10)))
{var state_12621__$1 = state_12621;var statearr_12636_12658 = state_12621__$1;(statearr_12636_12658[(2)] = fc);
(statearr_12636_12658[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12622 === (8)))
{var inst_12610 = (state_12621[(2)]);var state_12621__$1 = state_12621;if(cljs.core.truth_(inst_12610))
{var statearr_12637_12659 = state_12621__$1;(statearr_12637_12659[(1)] = (12));
} else
{var statearr_12638_12660 = state_12621__$1;(statearr_12638_12660[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___12646,tc,fc))
;return ((function (switch__6414__auto__,c__6429__auto___12646,tc,fc){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12642 = [null,null,null,null,null,null,null,null,null];(statearr_12642[(0)] = state_machine__6415__auto__);
(statearr_12642[(1)] = (1));
return statearr_12642;
});
var state_machine__6415__auto____1 = (function (state_12621){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12621);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12643){if((e12643 instanceof Object))
{var ex__6418__auto__ = e12643;var statearr_12644_12661 = state_12621;(statearr_12644_12661[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12643;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12662 = state_12621;
state_12621 = G__12662;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12621){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___12646,tc,fc))
})();var state__6431__auto__ = (function (){var statearr_12645 = f__6430__auto__.call(null);(statearr_12645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___12646);
return statearr_12645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___12646,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto__){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto__){
return (function (state_12709){var state_val_12710 = (state_12709[(1)]);if((state_val_12710 === (7)))
{var inst_12705 = (state_12709[(2)]);var state_12709__$1 = state_12709;var statearr_12711_12727 = state_12709__$1;(statearr_12711_12727[(2)] = inst_12705);
(statearr_12711_12727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12710 === (6)))
{var inst_12695 = (state_12709[(7)]);var inst_12698 = (state_12709[(8)]);var inst_12702 = f.call(null,inst_12695,inst_12698);var inst_12695__$1 = inst_12702;var state_12709__$1 = (function (){var statearr_12712 = state_12709;(statearr_12712[(7)] = inst_12695__$1);
return statearr_12712;
})();var statearr_12713_12728 = state_12709__$1;(statearr_12713_12728[(2)] = null);
(statearr_12713_12728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12710 === (5)))
{var inst_12695 = (state_12709[(7)]);var state_12709__$1 = state_12709;var statearr_12714_12729 = state_12709__$1;(statearr_12714_12729[(2)] = inst_12695);
(statearr_12714_12729[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12710 === (4)))
{var inst_12698 = (state_12709[(8)]);var inst_12698__$1 = (state_12709[(2)]);var inst_12699 = (inst_12698__$1 == null);var state_12709__$1 = (function (){var statearr_12715 = state_12709;(statearr_12715[(8)] = inst_12698__$1);
return statearr_12715;
})();if(cljs.core.truth_(inst_12699))
{var statearr_12716_12730 = state_12709__$1;(statearr_12716_12730[(1)] = (5));
} else
{var statearr_12717_12731 = state_12709__$1;(statearr_12717_12731[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12710 === (3)))
{var inst_12707 = (state_12709[(2)]);var state_12709__$1 = state_12709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12709__$1,inst_12707);
} else
{if((state_val_12710 === (2)))
{var state_12709__$1 = state_12709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12709__$1,(4),ch);
} else
{if((state_val_12710 === (1)))
{var inst_12695 = init;var state_12709__$1 = (function (){var statearr_12718 = state_12709;(statearr_12718[(7)] = inst_12695);
return statearr_12718;
})();var statearr_12719_12732 = state_12709__$1;(statearr_12719_12732[(2)] = null);
(statearr_12719_12732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6429__auto__))
;return ((function (switch__6414__auto__,c__6429__auto__){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12723 = [null,null,null,null,null,null,null,null,null];(statearr_12723[(0)] = state_machine__6415__auto__);
(statearr_12723[(1)] = (1));
return statearr_12723;
});
var state_machine__6415__auto____1 = (function (state_12709){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12709);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12724){if((e12724 instanceof Object))
{var ex__6418__auto__ = e12724;var statearr_12725_12733 = state_12709;(statearr_12725_12733[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12709);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12724;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12734 = state_12709;
state_12709 = G__12734;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12709){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto__))
})();var state__6431__auto__ = (function (){var statearr_12726 = f__6430__auto__.call(null);(statearr_12726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto__);
return statearr_12726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto__))
);
return c__6429__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto__){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto__){
return (function (state_12808){var state_val_12809 = (state_12808[(1)]);if((state_val_12809 === (7)))
{var inst_12790 = (state_12808[(2)]);var state_12808__$1 = state_12808;var statearr_12810_12833 = state_12808__$1;(statearr_12810_12833[(2)] = inst_12790);
(statearr_12810_12833[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (1)))
{var inst_12784 = cljs.core.seq.call(null,coll);var inst_12785 = inst_12784;var state_12808__$1 = (function (){var statearr_12811 = state_12808;(statearr_12811[(7)] = inst_12785);
return statearr_12811;
})();var statearr_12812_12834 = state_12808__$1;(statearr_12812_12834[(2)] = null);
(statearr_12812_12834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (4)))
{var inst_12785 = (state_12808[(7)]);var inst_12788 = cljs.core.first.call(null,inst_12785);var state_12808__$1 = state_12808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12808__$1,(7),ch,inst_12788);
} else
{if((state_val_12809 === (13)))
{var inst_12802 = (state_12808[(2)]);var state_12808__$1 = state_12808;var statearr_12813_12835 = state_12808__$1;(statearr_12813_12835[(2)] = inst_12802);
(statearr_12813_12835[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (6)))
{var inst_12793 = (state_12808[(2)]);var state_12808__$1 = state_12808;if(cljs.core.truth_(inst_12793))
{var statearr_12814_12836 = state_12808__$1;(statearr_12814_12836[(1)] = (8));
} else
{var statearr_12815_12837 = state_12808__$1;(statearr_12815_12837[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (3)))
{var inst_12806 = (state_12808[(2)]);var state_12808__$1 = state_12808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12808__$1,inst_12806);
} else
{if((state_val_12809 === (12)))
{var state_12808__$1 = state_12808;var statearr_12816_12838 = state_12808__$1;(statearr_12816_12838[(2)] = null);
(statearr_12816_12838[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (2)))
{var inst_12785 = (state_12808[(7)]);var state_12808__$1 = state_12808;if(cljs.core.truth_(inst_12785))
{var statearr_12817_12839 = state_12808__$1;(statearr_12817_12839[(1)] = (4));
} else
{var statearr_12818_12840 = state_12808__$1;(statearr_12818_12840[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (11)))
{var inst_12799 = cljs.core.async.close_BANG_.call(null,ch);var state_12808__$1 = state_12808;var statearr_12819_12841 = state_12808__$1;(statearr_12819_12841[(2)] = inst_12799);
(statearr_12819_12841[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (9)))
{var state_12808__$1 = state_12808;if(cljs.core.truth_(close_QMARK_))
{var statearr_12820_12842 = state_12808__$1;(statearr_12820_12842[(1)] = (11));
} else
{var statearr_12821_12843 = state_12808__$1;(statearr_12821_12843[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (5)))
{var inst_12785 = (state_12808[(7)]);var state_12808__$1 = state_12808;var statearr_12822_12844 = state_12808__$1;(statearr_12822_12844[(2)] = inst_12785);
(statearr_12822_12844[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (10)))
{var inst_12804 = (state_12808[(2)]);var state_12808__$1 = state_12808;var statearr_12823_12845 = state_12808__$1;(statearr_12823_12845[(2)] = inst_12804);
(statearr_12823_12845[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (8)))
{var inst_12785 = (state_12808[(7)]);var inst_12795 = cljs.core.next.call(null,inst_12785);var inst_12785__$1 = inst_12795;var state_12808__$1 = (function (){var statearr_12824 = state_12808;(statearr_12824[(7)] = inst_12785__$1);
return statearr_12824;
})();var statearr_12825_12846 = state_12808__$1;(statearr_12825_12846[(2)] = null);
(statearr_12825_12846[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto__))
;return ((function (switch__6414__auto__,c__6429__auto__){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_12829 = [null,null,null,null,null,null,null,null];(statearr_12829[(0)] = state_machine__6415__auto__);
(statearr_12829[(1)] = (1));
return statearr_12829;
});
var state_machine__6415__auto____1 = (function (state_12808){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_12808);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e12830){if((e12830 instanceof Object))
{var ex__6418__auto__ = e12830;var statearr_12831_12847 = state_12808;(statearr_12831_12847[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12830;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12848 = state_12808;
state_12808 = G__12848;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_12808){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_12808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto__))
})();var state__6431__auto__ = (function (){var statearr_12832 = f__6430__auto__.call(null);(statearr_12832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto__);
return statearr_12832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto__))
);
return c__6429__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12850 = {};return obj12850;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3577__auto__ = _;if(and__3577__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3577__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4226__auto__ = (((_ == null))?null:_);return (function (){var or__3589__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12852 = {};return obj12852;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13074 = (function (cs,ch,mult,meta13075){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13075 = meta13075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13074.cljs$lang$type = true;
cljs.core.async.t13074.cljs$lang$ctorStr = "cljs.core.async/t13074";
cljs.core.async.t13074.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t13074");
});})(cs))
;
cljs.core.async.t13074.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13074.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13074.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13074.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13074.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13076){var self__ = this;
var _13076__$1 = this;return self__.meta13075;
});})(cs))
;
cljs.core.async.t13074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13076,meta13075__$1){var self__ = this;
var _13076__$1 = this;return (new cljs.core.async.t13074(self__.cs,self__.ch,self__.mult,meta13075__$1));
});})(cs))
;
cljs.core.async.__GT_t13074 = ((function (cs){
return (function __GT_t13074(cs__$1,ch__$1,mult__$1,meta13075){return (new cljs.core.async.t13074(cs__$1,ch__$1,mult__$1,meta13075));
});})(cs))
;
}
return (new cljs.core.async.t13074(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6429__auto___13295 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___13295,cs,m,dchan,dctr,done){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___13295,cs,m,dchan,dctr,done){
return (function (state_13207){var state_val_13208 = (state_13207[(1)]);if((state_val_13208 === (7)))
{var inst_13203 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13209_13296 = state_13207__$1;(statearr_13209_13296[(2)] = inst_13203);
(statearr_13209_13296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (20)))
{var inst_13108 = (state_13207[(7)]);var inst_13118 = cljs.core.first.call(null,inst_13108);var inst_13119 = cljs.core.nth.call(null,inst_13118,(0),null);var inst_13120 = cljs.core.nth.call(null,inst_13118,(1),null);var state_13207__$1 = (function (){var statearr_13210 = state_13207;(statearr_13210[(8)] = inst_13119);
return statearr_13210;
})();if(cljs.core.truth_(inst_13120))
{var statearr_13211_13297 = state_13207__$1;(statearr_13211_13297[(1)] = (22));
} else
{var statearr_13212_13298 = state_13207__$1;(statearr_13212_13298[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (27)))
{var inst_13079 = (state_13207[(9)]);var inst_13150 = (state_13207[(10)]);var inst_13148 = (state_13207[(11)]);var inst_13155 = (state_13207[(12)]);var inst_13155__$1 = cljs.core._nth.call(null,inst_13148,inst_13150);var inst_13156 = cljs.core.async.put_BANG_.call(null,inst_13155__$1,inst_13079,done);var state_13207__$1 = (function (){var statearr_13213 = state_13207;(statearr_13213[(12)] = inst_13155__$1);
return statearr_13213;
})();if(cljs.core.truth_(inst_13156))
{var statearr_13214_13299 = state_13207__$1;(statearr_13214_13299[(1)] = (30));
} else
{var statearr_13215_13300 = state_13207__$1;(statearr_13215_13300[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (1)))
{var state_13207__$1 = state_13207;var statearr_13216_13301 = state_13207__$1;(statearr_13216_13301[(2)] = null);
(statearr_13216_13301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (24)))
{var inst_13108 = (state_13207[(7)]);var inst_13125 = (state_13207[(2)]);var inst_13126 = cljs.core.next.call(null,inst_13108);var inst_13088 = inst_13126;var inst_13089 = null;var inst_13090 = (0);var inst_13091 = (0);var state_13207__$1 = (function (){var statearr_13217 = state_13207;(statearr_13217[(13)] = inst_13089);
(statearr_13217[(14)] = inst_13125);
(statearr_13217[(15)] = inst_13091);
(statearr_13217[(16)] = inst_13090);
(statearr_13217[(17)] = inst_13088);
return statearr_13217;
})();var statearr_13218_13302 = state_13207__$1;(statearr_13218_13302[(2)] = null);
(statearr_13218_13302[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (39)))
{var state_13207__$1 = state_13207;var statearr_13222_13303 = state_13207__$1;(statearr_13222_13303[(2)] = null);
(statearr_13222_13303[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (4)))
{var inst_13079 = (state_13207[(9)]);var inst_13079__$1 = (state_13207[(2)]);var inst_13080 = (inst_13079__$1 == null);var state_13207__$1 = (function (){var statearr_13223 = state_13207;(statearr_13223[(9)] = inst_13079__$1);
return statearr_13223;
})();if(cljs.core.truth_(inst_13080))
{var statearr_13224_13304 = state_13207__$1;(statearr_13224_13304[(1)] = (5));
} else
{var statearr_13225_13305 = state_13207__$1;(statearr_13225_13305[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (15)))
{var inst_13089 = (state_13207[(13)]);var inst_13091 = (state_13207[(15)]);var inst_13090 = (state_13207[(16)]);var inst_13088 = (state_13207[(17)]);var inst_13104 = (state_13207[(2)]);var inst_13105 = (inst_13091 + (1));var tmp13219 = inst_13089;var tmp13220 = inst_13090;var tmp13221 = inst_13088;var inst_13088__$1 = tmp13221;var inst_13089__$1 = tmp13219;var inst_13090__$1 = tmp13220;var inst_13091__$1 = inst_13105;var state_13207__$1 = (function (){var statearr_13226 = state_13207;(statearr_13226[(13)] = inst_13089__$1);
(statearr_13226[(18)] = inst_13104);
(statearr_13226[(15)] = inst_13091__$1);
(statearr_13226[(16)] = inst_13090__$1);
(statearr_13226[(17)] = inst_13088__$1);
return statearr_13226;
})();var statearr_13227_13306 = state_13207__$1;(statearr_13227_13306[(2)] = null);
(statearr_13227_13306[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (21)))
{var inst_13129 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13231_13307 = state_13207__$1;(statearr_13231_13307[(2)] = inst_13129);
(statearr_13231_13307[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (31)))
{var inst_13155 = (state_13207[(12)]);var inst_13159 = done.call(null,null);var inst_13160 = cljs.core.async.untap_STAR_.call(null,m,inst_13155);var state_13207__$1 = (function (){var statearr_13232 = state_13207;(statearr_13232[(19)] = inst_13159);
return statearr_13232;
})();var statearr_13233_13308 = state_13207__$1;(statearr_13233_13308[(2)] = inst_13160);
(statearr_13233_13308[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (32)))
{var inst_13150 = (state_13207[(10)]);var inst_13148 = (state_13207[(11)]);var inst_13149 = (state_13207[(20)]);var inst_13147 = (state_13207[(21)]);var inst_13162 = (state_13207[(2)]);var inst_13163 = (inst_13150 + (1));var tmp13228 = inst_13148;var tmp13229 = inst_13149;var tmp13230 = inst_13147;var inst_13147__$1 = tmp13230;var inst_13148__$1 = tmp13228;var inst_13149__$1 = tmp13229;var inst_13150__$1 = inst_13163;var state_13207__$1 = (function (){var statearr_13234 = state_13207;(statearr_13234[(22)] = inst_13162);
(statearr_13234[(10)] = inst_13150__$1);
(statearr_13234[(11)] = inst_13148__$1);
(statearr_13234[(20)] = inst_13149__$1);
(statearr_13234[(21)] = inst_13147__$1);
return statearr_13234;
})();var statearr_13235_13309 = state_13207__$1;(statearr_13235_13309[(2)] = null);
(statearr_13235_13309[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (40)))
{var inst_13175 = (state_13207[(23)]);var inst_13179 = done.call(null,null);var inst_13180 = cljs.core.async.untap_STAR_.call(null,m,inst_13175);var state_13207__$1 = (function (){var statearr_13236 = state_13207;(statearr_13236[(24)] = inst_13179);
return statearr_13236;
})();var statearr_13237_13310 = state_13207__$1;(statearr_13237_13310[(2)] = inst_13180);
(statearr_13237_13310[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (33)))
{var inst_13166 = (state_13207[(25)]);var inst_13168 = cljs.core.chunked_seq_QMARK_.call(null,inst_13166);var state_13207__$1 = state_13207;if(inst_13168)
{var statearr_13238_13311 = state_13207__$1;(statearr_13238_13311[(1)] = (36));
} else
{var statearr_13239_13312 = state_13207__$1;(statearr_13239_13312[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (13)))
{var inst_13098 = (state_13207[(26)]);var inst_13101 = cljs.core.async.close_BANG_.call(null,inst_13098);var state_13207__$1 = state_13207;var statearr_13240_13313 = state_13207__$1;(statearr_13240_13313[(2)] = inst_13101);
(statearr_13240_13313[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (22)))
{var inst_13119 = (state_13207[(8)]);var inst_13122 = cljs.core.async.close_BANG_.call(null,inst_13119);var state_13207__$1 = state_13207;var statearr_13241_13314 = state_13207__$1;(statearr_13241_13314[(2)] = inst_13122);
(statearr_13241_13314[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (36)))
{var inst_13166 = (state_13207[(25)]);var inst_13170 = cljs.core.chunk_first.call(null,inst_13166);var inst_13171 = cljs.core.chunk_rest.call(null,inst_13166);var inst_13172 = cljs.core.count.call(null,inst_13170);var inst_13147 = inst_13171;var inst_13148 = inst_13170;var inst_13149 = inst_13172;var inst_13150 = (0);var state_13207__$1 = (function (){var statearr_13242 = state_13207;(statearr_13242[(10)] = inst_13150);
(statearr_13242[(11)] = inst_13148);
(statearr_13242[(20)] = inst_13149);
(statearr_13242[(21)] = inst_13147);
return statearr_13242;
})();var statearr_13243_13315 = state_13207__$1;(statearr_13243_13315[(2)] = null);
(statearr_13243_13315[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (41)))
{var inst_13166 = (state_13207[(25)]);var inst_13182 = (state_13207[(2)]);var inst_13183 = cljs.core.next.call(null,inst_13166);var inst_13147 = inst_13183;var inst_13148 = null;var inst_13149 = (0);var inst_13150 = (0);var state_13207__$1 = (function (){var statearr_13244 = state_13207;(statearr_13244[(27)] = inst_13182);
(statearr_13244[(10)] = inst_13150);
(statearr_13244[(11)] = inst_13148);
(statearr_13244[(20)] = inst_13149);
(statearr_13244[(21)] = inst_13147);
return statearr_13244;
})();var statearr_13245_13316 = state_13207__$1;(statearr_13245_13316[(2)] = null);
(statearr_13245_13316[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (43)))
{var state_13207__$1 = state_13207;var statearr_13246_13317 = state_13207__$1;(statearr_13246_13317[(2)] = null);
(statearr_13246_13317[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (29)))
{var inst_13191 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13247_13318 = state_13207__$1;(statearr_13247_13318[(2)] = inst_13191);
(statearr_13247_13318[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (44)))
{var inst_13200 = (state_13207[(2)]);var state_13207__$1 = (function (){var statearr_13248 = state_13207;(statearr_13248[(28)] = inst_13200);
return statearr_13248;
})();var statearr_13249_13319 = state_13207__$1;(statearr_13249_13319[(2)] = null);
(statearr_13249_13319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (6)))
{var inst_13139 = (state_13207[(29)]);var inst_13138 = cljs.core.deref.call(null,cs);var inst_13139__$1 = cljs.core.keys.call(null,inst_13138);var inst_13140 = cljs.core.count.call(null,inst_13139__$1);var inst_13141 = cljs.core.reset_BANG_.call(null,dctr,inst_13140);var inst_13146 = cljs.core.seq.call(null,inst_13139__$1);var inst_13147 = inst_13146;var inst_13148 = null;var inst_13149 = (0);var inst_13150 = (0);var state_13207__$1 = (function (){var statearr_13250 = state_13207;(statearr_13250[(29)] = inst_13139__$1);
(statearr_13250[(10)] = inst_13150);
(statearr_13250[(11)] = inst_13148);
(statearr_13250[(30)] = inst_13141);
(statearr_13250[(20)] = inst_13149);
(statearr_13250[(21)] = inst_13147);
return statearr_13250;
})();var statearr_13251_13320 = state_13207__$1;(statearr_13251_13320[(2)] = null);
(statearr_13251_13320[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (28)))
{var inst_13166 = (state_13207[(25)]);var inst_13147 = (state_13207[(21)]);var inst_13166__$1 = cljs.core.seq.call(null,inst_13147);var state_13207__$1 = (function (){var statearr_13252 = state_13207;(statearr_13252[(25)] = inst_13166__$1);
return statearr_13252;
})();if(inst_13166__$1)
{var statearr_13253_13321 = state_13207__$1;(statearr_13253_13321[(1)] = (33));
} else
{var statearr_13254_13322 = state_13207__$1;(statearr_13254_13322[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (25)))
{var inst_13150 = (state_13207[(10)]);var inst_13149 = (state_13207[(20)]);var inst_13152 = (inst_13150 < inst_13149);var inst_13153 = inst_13152;var state_13207__$1 = state_13207;if(cljs.core.truth_(inst_13153))
{var statearr_13255_13323 = state_13207__$1;(statearr_13255_13323[(1)] = (27));
} else
{var statearr_13256_13324 = state_13207__$1;(statearr_13256_13324[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (34)))
{var state_13207__$1 = state_13207;var statearr_13257_13325 = state_13207__$1;(statearr_13257_13325[(2)] = null);
(statearr_13257_13325[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (17)))
{var state_13207__$1 = state_13207;var statearr_13258_13326 = state_13207__$1;(statearr_13258_13326[(2)] = null);
(statearr_13258_13326[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (3)))
{var inst_13205 = (state_13207[(2)]);var state_13207__$1 = state_13207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13207__$1,inst_13205);
} else
{if((state_val_13208 === (12)))
{var inst_13134 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13259_13327 = state_13207__$1;(statearr_13259_13327[(2)] = inst_13134);
(statearr_13259_13327[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (2)))
{var state_13207__$1 = state_13207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13207__$1,(4),ch);
} else
{if((state_val_13208 === (23)))
{var state_13207__$1 = state_13207;var statearr_13260_13328 = state_13207__$1;(statearr_13260_13328[(2)] = null);
(statearr_13260_13328[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (35)))
{var inst_13189 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13261_13329 = state_13207__$1;(statearr_13261_13329[(2)] = inst_13189);
(statearr_13261_13329[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (19)))
{var inst_13108 = (state_13207[(7)]);var inst_13112 = cljs.core.chunk_first.call(null,inst_13108);var inst_13113 = cljs.core.chunk_rest.call(null,inst_13108);var inst_13114 = cljs.core.count.call(null,inst_13112);var inst_13088 = inst_13113;var inst_13089 = inst_13112;var inst_13090 = inst_13114;var inst_13091 = (0);var state_13207__$1 = (function (){var statearr_13262 = state_13207;(statearr_13262[(13)] = inst_13089);
(statearr_13262[(15)] = inst_13091);
(statearr_13262[(16)] = inst_13090);
(statearr_13262[(17)] = inst_13088);
return statearr_13262;
})();var statearr_13263_13330 = state_13207__$1;(statearr_13263_13330[(2)] = null);
(statearr_13263_13330[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (11)))
{var inst_13108 = (state_13207[(7)]);var inst_13088 = (state_13207[(17)]);var inst_13108__$1 = cljs.core.seq.call(null,inst_13088);var state_13207__$1 = (function (){var statearr_13264 = state_13207;(statearr_13264[(7)] = inst_13108__$1);
return statearr_13264;
})();if(inst_13108__$1)
{var statearr_13265_13331 = state_13207__$1;(statearr_13265_13331[(1)] = (16));
} else
{var statearr_13266_13332 = state_13207__$1;(statearr_13266_13332[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (9)))
{var inst_13136 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13267_13333 = state_13207__$1;(statearr_13267_13333[(2)] = inst_13136);
(statearr_13267_13333[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (5)))
{var inst_13086 = cljs.core.deref.call(null,cs);var inst_13087 = cljs.core.seq.call(null,inst_13086);var inst_13088 = inst_13087;var inst_13089 = null;var inst_13090 = (0);var inst_13091 = (0);var state_13207__$1 = (function (){var statearr_13268 = state_13207;(statearr_13268[(13)] = inst_13089);
(statearr_13268[(15)] = inst_13091);
(statearr_13268[(16)] = inst_13090);
(statearr_13268[(17)] = inst_13088);
return statearr_13268;
})();var statearr_13269_13334 = state_13207__$1;(statearr_13269_13334[(2)] = null);
(statearr_13269_13334[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (14)))
{var state_13207__$1 = state_13207;var statearr_13270_13335 = state_13207__$1;(statearr_13270_13335[(2)] = null);
(statearr_13270_13335[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (45)))
{var inst_13197 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13271_13336 = state_13207__$1;(statearr_13271_13336[(2)] = inst_13197);
(statearr_13271_13336[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (26)))
{var inst_13139 = (state_13207[(29)]);var inst_13193 = (state_13207[(2)]);var inst_13194 = cljs.core.seq.call(null,inst_13139);var state_13207__$1 = (function (){var statearr_13272 = state_13207;(statearr_13272[(31)] = inst_13193);
return statearr_13272;
})();if(inst_13194)
{var statearr_13273_13337 = state_13207__$1;(statearr_13273_13337[(1)] = (42));
} else
{var statearr_13274_13338 = state_13207__$1;(statearr_13274_13338[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (16)))
{var inst_13108 = (state_13207[(7)]);var inst_13110 = cljs.core.chunked_seq_QMARK_.call(null,inst_13108);var state_13207__$1 = state_13207;if(inst_13110)
{var statearr_13275_13339 = state_13207__$1;(statearr_13275_13339[(1)] = (19));
} else
{var statearr_13276_13340 = state_13207__$1;(statearr_13276_13340[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (38)))
{var inst_13186 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13277_13341 = state_13207__$1;(statearr_13277_13341[(2)] = inst_13186);
(statearr_13277_13341[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (30)))
{var state_13207__$1 = state_13207;var statearr_13278_13342 = state_13207__$1;(statearr_13278_13342[(2)] = null);
(statearr_13278_13342[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (10)))
{var inst_13089 = (state_13207[(13)]);var inst_13091 = (state_13207[(15)]);var inst_13097 = cljs.core._nth.call(null,inst_13089,inst_13091);var inst_13098 = cljs.core.nth.call(null,inst_13097,(0),null);var inst_13099 = cljs.core.nth.call(null,inst_13097,(1),null);var state_13207__$1 = (function (){var statearr_13279 = state_13207;(statearr_13279[(26)] = inst_13098);
return statearr_13279;
})();if(cljs.core.truth_(inst_13099))
{var statearr_13280_13343 = state_13207__$1;(statearr_13280_13343[(1)] = (13));
} else
{var statearr_13281_13344 = state_13207__$1;(statearr_13281_13344[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (18)))
{var inst_13132 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13282_13345 = state_13207__$1;(statearr_13282_13345[(2)] = inst_13132);
(statearr_13282_13345[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (42)))
{var state_13207__$1 = state_13207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13207__$1,(45),dchan);
} else
{if((state_val_13208 === (37)))
{var inst_13166 = (state_13207[(25)]);var inst_13079 = (state_13207[(9)]);var inst_13175 = (state_13207[(23)]);var inst_13175__$1 = cljs.core.first.call(null,inst_13166);var inst_13176 = cljs.core.async.put_BANG_.call(null,inst_13175__$1,inst_13079,done);var state_13207__$1 = (function (){var statearr_13283 = state_13207;(statearr_13283[(23)] = inst_13175__$1);
return statearr_13283;
})();if(cljs.core.truth_(inst_13176))
{var statearr_13284_13346 = state_13207__$1;(statearr_13284_13346[(1)] = (39));
} else
{var statearr_13285_13347 = state_13207__$1;(statearr_13285_13347[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (8)))
{var inst_13091 = (state_13207[(15)]);var inst_13090 = (state_13207[(16)]);var inst_13093 = (inst_13091 < inst_13090);var inst_13094 = inst_13093;var state_13207__$1 = state_13207;if(cljs.core.truth_(inst_13094))
{var statearr_13286_13348 = state_13207__$1;(statearr_13286_13348[(1)] = (10));
} else
{var statearr_13287_13349 = state_13207__$1;(statearr_13287_13349[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___13295,cs,m,dchan,dctr,done))
;return ((function (switch__6414__auto__,c__6429__auto___13295,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_13291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13291[(0)] = state_machine__6415__auto__);
(statearr_13291[(1)] = (1));
return statearr_13291;
});
var state_machine__6415__auto____1 = (function (state_13207){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_13207);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e13292){if((e13292 instanceof Object))
{var ex__6418__auto__ = e13292;var statearr_13293_13350 = state_13207;(statearr_13293_13350[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13292;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13351 = state_13207;
state_13207 = G__13351;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_13207){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_13207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___13295,cs,m,dchan,dctr,done))
})();var state__6431__auto__ = (function (){var statearr_13294 = f__6430__auto__.call(null);(statearr_13294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___13295);
return statearr_13294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___13295,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13353 = {};return obj13353;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3577__auto__ = m;if(and__3577__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3577__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4226__auto__ = (((m == null))?null:m);return (function (){var or__3589__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13354){var map__13359 = p__13354;var map__13359__$1 = ((cljs.core.seq_QMARK_.call(null,map__13359))?cljs.core.apply.call(null,cljs.core.hash_map,map__13359):map__13359);var opts = map__13359__$1;var statearr_13360_13363 = state;(statearr_13360_13363[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__13359,map__13359__$1,opts){
return (function (val){var statearr_13361_13364 = state;(statearr_13361_13364[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13359,map__13359__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4406__auto__))
{var cb = temp__4406__auto__;var statearr_13362_13365 = state;(statearr_13362_13365[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13354 = null;if (arguments.length > 3) {
  p__13354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13354);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13366){
var state = cljs.core.first(arglist__13366);
arglist__13366 = cljs.core.next(arglist__13366);
var cont_block = cljs.core.first(arglist__13366);
arglist__13366 = cljs.core.next(arglist__13366);
var ports = cljs.core.first(arglist__13366);
var p__13354 = cljs.core.rest(arglist__13366);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13354);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13486 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13487){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13487 = meta13487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13486.cljs$lang$type = true;
cljs.core.async.t13486.cljs$lang$ctorStr = "cljs.core.async/t13486";
cljs.core.async.t13486.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t13486");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13488){var self__ = this;
var _13488__$1 = this;return self__.meta13487;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13488,meta13487__$1){var self__ = this;
var _13488__$1 = this;return (new cljs.core.async.t13486(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13487__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13486 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13486(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13487){return (new cljs.core.async.t13486(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13487));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13486(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6429__auto___13605 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___13605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___13605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13558){var state_val_13559 = (state_13558[(1)]);if((state_val_13559 === (7)))
{var inst_13502 = (state_13558[(7)]);var inst_13507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13502);var state_13558__$1 = state_13558;var statearr_13560_13606 = state_13558__$1;(statearr_13560_13606[(2)] = inst_13507);
(statearr_13560_13606[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (20)))
{var inst_13517 = (state_13558[(8)]);var state_13558__$1 = state_13558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13558__$1,(23),out,inst_13517);
} else
{if((state_val_13559 === (1)))
{var inst_13492 = (state_13558[(9)]);var inst_13492__$1 = calc_state.call(null);var inst_13493 = cljs.core.seq_QMARK_.call(null,inst_13492__$1);var state_13558__$1 = (function (){var statearr_13561 = state_13558;(statearr_13561[(9)] = inst_13492__$1);
return statearr_13561;
})();if(inst_13493)
{var statearr_13562_13607 = state_13558__$1;(statearr_13562_13607[(1)] = (2));
} else
{var statearr_13563_13608 = state_13558__$1;(statearr_13563_13608[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (24)))
{var inst_13510 = (state_13558[(10)]);var inst_13502 = inst_13510;var state_13558__$1 = (function (){var statearr_13564 = state_13558;(statearr_13564[(7)] = inst_13502);
return statearr_13564;
})();var statearr_13565_13609 = state_13558__$1;(statearr_13565_13609[(2)] = null);
(statearr_13565_13609[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (4)))
{var inst_13492 = (state_13558[(9)]);var inst_13498 = (state_13558[(2)]);var inst_13499 = cljs.core.get.call(null,inst_13498,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13500 = cljs.core.get.call(null,inst_13498,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13501 = cljs.core.get.call(null,inst_13498,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13502 = inst_13492;var state_13558__$1 = (function (){var statearr_13566 = state_13558;(statearr_13566[(11)] = inst_13500);
(statearr_13566[(7)] = inst_13502);
(statearr_13566[(12)] = inst_13499);
(statearr_13566[(13)] = inst_13501);
return statearr_13566;
})();var statearr_13567_13610 = state_13558__$1;(statearr_13567_13610[(2)] = null);
(statearr_13567_13610[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (15)))
{var state_13558__$1 = state_13558;var statearr_13568_13611 = state_13558__$1;(statearr_13568_13611[(2)] = null);
(statearr_13568_13611[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (21)))
{var inst_13510 = (state_13558[(10)]);var inst_13502 = inst_13510;var state_13558__$1 = (function (){var statearr_13569 = state_13558;(statearr_13569[(7)] = inst_13502);
return statearr_13569;
})();var statearr_13570_13612 = state_13558__$1;(statearr_13570_13612[(2)] = null);
(statearr_13570_13612[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (13)))
{var inst_13554 = (state_13558[(2)]);var state_13558__$1 = state_13558;var statearr_13571_13613 = state_13558__$1;(statearr_13571_13613[(2)] = inst_13554);
(statearr_13571_13613[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (22)))
{var inst_13552 = (state_13558[(2)]);var state_13558__$1 = state_13558;var statearr_13572_13614 = state_13558__$1;(statearr_13572_13614[(2)] = inst_13552);
(statearr_13572_13614[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (6)))
{var inst_13556 = (state_13558[(2)]);var state_13558__$1 = state_13558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13558__$1,inst_13556);
} else
{if((state_val_13559 === (25)))
{var state_13558__$1 = state_13558;var statearr_13573_13615 = state_13558__$1;(statearr_13573_13615[(2)] = null);
(statearr_13573_13615[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (17)))
{var inst_13532 = (state_13558[(14)]);var state_13558__$1 = state_13558;var statearr_13574_13616 = state_13558__$1;(statearr_13574_13616[(2)] = inst_13532);
(statearr_13574_13616[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (3)))
{var inst_13492 = (state_13558[(9)]);var state_13558__$1 = state_13558;var statearr_13575_13617 = state_13558__$1;(statearr_13575_13617[(2)] = inst_13492);
(statearr_13575_13617[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (12)))
{var inst_13532 = (state_13558[(14)]);var inst_13513 = (state_13558[(15)]);var inst_13518 = (state_13558[(16)]);var inst_13532__$1 = inst_13513.call(null,inst_13518);var state_13558__$1 = (function (){var statearr_13576 = state_13558;(statearr_13576[(14)] = inst_13532__$1);
return statearr_13576;
})();if(cljs.core.truth_(inst_13532__$1))
{var statearr_13577_13618 = state_13558__$1;(statearr_13577_13618[(1)] = (17));
} else
{var statearr_13578_13619 = state_13558__$1;(statearr_13578_13619[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (2)))
{var inst_13492 = (state_13558[(9)]);var inst_13495 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13492);var state_13558__$1 = state_13558;var statearr_13579_13620 = state_13558__$1;(statearr_13579_13620[(2)] = inst_13495);
(statearr_13579_13620[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (23)))
{var inst_13543 = (state_13558[(2)]);var state_13558__$1 = state_13558;if(cljs.core.truth_(inst_13543))
{var statearr_13580_13621 = state_13558__$1;(statearr_13580_13621[(1)] = (24));
} else
{var statearr_13581_13622 = state_13558__$1;(statearr_13581_13622[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (19)))
{var inst_13540 = (state_13558[(2)]);var state_13558__$1 = state_13558;if(cljs.core.truth_(inst_13540))
{var statearr_13582_13623 = state_13558__$1;(statearr_13582_13623[(1)] = (20));
} else
{var statearr_13583_13624 = state_13558__$1;(statearr_13583_13624[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (11)))
{var inst_13517 = (state_13558[(8)]);var inst_13523 = (inst_13517 == null);var state_13558__$1 = state_13558;if(cljs.core.truth_(inst_13523))
{var statearr_13584_13625 = state_13558__$1;(statearr_13584_13625[(1)] = (14));
} else
{var statearr_13585_13626 = state_13558__$1;(statearr_13585_13626[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (9)))
{var inst_13510 = (state_13558[(10)]);var inst_13510__$1 = (state_13558[(2)]);var inst_13511 = cljs.core.get.call(null,inst_13510__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13512 = cljs.core.get.call(null,inst_13510__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13513 = cljs.core.get.call(null,inst_13510__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13558__$1 = (function (){var statearr_13586 = state_13558;(statearr_13586[(10)] = inst_13510__$1);
(statearr_13586[(15)] = inst_13513);
(statearr_13586[(17)] = inst_13512);
return statearr_13586;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13558__$1,(10),inst_13511);
} else
{if((state_val_13559 === (5)))
{var inst_13502 = (state_13558[(7)]);var inst_13505 = cljs.core.seq_QMARK_.call(null,inst_13502);var state_13558__$1 = state_13558;if(inst_13505)
{var statearr_13587_13627 = state_13558__$1;(statearr_13587_13627[(1)] = (7));
} else
{var statearr_13588_13628 = state_13558__$1;(statearr_13588_13628[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (14)))
{var inst_13518 = (state_13558[(16)]);var inst_13525 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13518);var state_13558__$1 = state_13558;var statearr_13589_13629 = state_13558__$1;(statearr_13589_13629[(2)] = inst_13525);
(statearr_13589_13629[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (26)))
{var inst_13548 = (state_13558[(2)]);var state_13558__$1 = state_13558;var statearr_13590_13630 = state_13558__$1;(statearr_13590_13630[(2)] = inst_13548);
(statearr_13590_13630[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (16)))
{var inst_13528 = (state_13558[(2)]);var inst_13529 = calc_state.call(null);var inst_13502 = inst_13529;var state_13558__$1 = (function (){var statearr_13591 = state_13558;(statearr_13591[(7)] = inst_13502);
(statearr_13591[(18)] = inst_13528);
return statearr_13591;
})();var statearr_13592_13631 = state_13558__$1;(statearr_13592_13631[(2)] = null);
(statearr_13592_13631[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (10)))
{var inst_13517 = (state_13558[(8)]);var inst_13518 = (state_13558[(16)]);var inst_13516 = (state_13558[(2)]);var inst_13517__$1 = cljs.core.nth.call(null,inst_13516,(0),null);var inst_13518__$1 = cljs.core.nth.call(null,inst_13516,(1),null);var inst_13519 = (inst_13517__$1 == null);var inst_13520 = cljs.core._EQ_.call(null,inst_13518__$1,change);var inst_13521 = (inst_13519) || (inst_13520);var state_13558__$1 = (function (){var statearr_13593 = state_13558;(statearr_13593[(8)] = inst_13517__$1);
(statearr_13593[(16)] = inst_13518__$1);
return statearr_13593;
})();if(cljs.core.truth_(inst_13521))
{var statearr_13594_13632 = state_13558__$1;(statearr_13594_13632[(1)] = (11));
} else
{var statearr_13595_13633 = state_13558__$1;(statearr_13595_13633[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (18)))
{var inst_13513 = (state_13558[(15)]);var inst_13518 = (state_13558[(16)]);var inst_13512 = (state_13558[(17)]);var inst_13535 = cljs.core.empty_QMARK_.call(null,inst_13513);var inst_13536 = inst_13512.call(null,inst_13518);var inst_13537 = cljs.core.not.call(null,inst_13536);var inst_13538 = (inst_13535) && (inst_13537);var state_13558__$1 = state_13558;var statearr_13596_13634 = state_13558__$1;(statearr_13596_13634[(2)] = inst_13538);
(statearr_13596_13634[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13559 === (8)))
{var inst_13502 = (state_13558[(7)]);var state_13558__$1 = state_13558;var statearr_13597_13635 = state_13558__$1;(statearr_13597_13635[(2)] = inst_13502);
(statearr_13597_13635[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___13605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6414__auto__,c__6429__auto___13605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_13601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13601[(0)] = state_machine__6415__auto__);
(statearr_13601[(1)] = (1));
return statearr_13601;
});
var state_machine__6415__auto____1 = (function (state_13558){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_13558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e13602){if((e13602 instanceof Object))
{var ex__6418__auto__ = e13602;var statearr_13603_13636 = state_13558;(statearr_13603_13636[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13602;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13637 = state_13558;
state_13558 = G__13637;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_13558){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_13558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___13605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6431__auto__ = (function (){var statearr_13604 = f__6430__auto__.call(null);(statearr_13604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___13605);
return statearr_13604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___13605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13639 = {};return obj13639;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3577__auto__ = p;if(and__3577__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3577__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4226__auto__ = (((p == null))?null:p);return (function (){var or__3589__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3577__auto__ = p;if(and__3577__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3577__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4226__auto__ = (((p == null))?null:p);return (function (){var or__3589__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3577__auto__ = p;if(and__3577__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3577__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4226__auto__ = (((p == null))?null:p);return (function (){var or__3589__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3577__auto__ = p;if(and__3577__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3577__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4226__auto__ = (((p == null))?null:p);return (function (){var or__3589__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4226__auto__)]);if(or__3589__auto__)
{return or__3589__auto__;
} else
{var or__3589__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3589__auto____$1)
{return or__3589__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3589__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3589__auto__))
{return or__3589__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3589__auto__,mults){
return (function (p1__13640_SHARP_){if(cljs.core.truth_(p1__13640_SHARP_.call(null,topic)))
{return p1__13640_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13640_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3589__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13763 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13764){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13764 = meta13764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13763.cljs$lang$type = true;
cljs.core.async.t13763.cljs$lang$ctorStr = "cljs.core.async/t13763";
cljs.core.async.t13763.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t13763");
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4406__auto__))
{var m = temp__4406__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13765){var self__ = this;
var _13765__$1 = this;return self__.meta13764;
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13765,meta13764__$1){var self__ = this;
var _13765__$1 = this;return (new cljs.core.async.t13763(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13764__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13763 = ((function (mults,ensure_mult){
return (function __GT_t13763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13764){return (new cljs.core.async.t13763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13764));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13763(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6429__auto___13885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___13885,mults,ensure_mult,p){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___13885,mults,ensure_mult,p){
return (function (state_13837){var state_val_13838 = (state_13837[(1)]);if((state_val_13838 === (7)))
{var inst_13833 = (state_13837[(2)]);var state_13837__$1 = state_13837;var statearr_13839_13886 = state_13837__$1;(statearr_13839_13886[(2)] = inst_13833);
(statearr_13839_13886[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (20)))
{var state_13837__$1 = state_13837;var statearr_13840_13887 = state_13837__$1;(statearr_13840_13887[(2)] = null);
(statearr_13840_13887[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (1)))
{var state_13837__$1 = state_13837;var statearr_13841_13888 = state_13837__$1;(statearr_13841_13888[(2)] = null);
(statearr_13841_13888[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (24)))
{var inst_13816 = (state_13837[(7)]);var inst_13825 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13816);var state_13837__$1 = state_13837;var statearr_13842_13889 = state_13837__$1;(statearr_13842_13889[(2)] = inst_13825);
(statearr_13842_13889[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (4)))
{var inst_13768 = (state_13837[(8)]);var inst_13768__$1 = (state_13837[(2)]);var inst_13769 = (inst_13768__$1 == null);var state_13837__$1 = (function (){var statearr_13843 = state_13837;(statearr_13843[(8)] = inst_13768__$1);
return statearr_13843;
})();if(cljs.core.truth_(inst_13769))
{var statearr_13844_13890 = state_13837__$1;(statearr_13844_13890[(1)] = (5));
} else
{var statearr_13845_13891 = state_13837__$1;(statearr_13845_13891[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (15)))
{var inst_13810 = (state_13837[(2)]);var state_13837__$1 = state_13837;var statearr_13846_13892 = state_13837__$1;(statearr_13846_13892[(2)] = inst_13810);
(statearr_13846_13892[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (21)))
{var inst_13830 = (state_13837[(2)]);var state_13837__$1 = (function (){var statearr_13847 = state_13837;(statearr_13847[(9)] = inst_13830);
return statearr_13847;
})();var statearr_13848_13893 = state_13837__$1;(statearr_13848_13893[(2)] = null);
(statearr_13848_13893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (13)))
{var inst_13792 = (state_13837[(10)]);var inst_13794 = cljs.core.chunked_seq_QMARK_.call(null,inst_13792);var state_13837__$1 = state_13837;if(inst_13794)
{var statearr_13849_13894 = state_13837__$1;(statearr_13849_13894[(1)] = (16));
} else
{var statearr_13850_13895 = state_13837__$1;(statearr_13850_13895[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (22)))
{var inst_13822 = (state_13837[(2)]);var state_13837__$1 = state_13837;if(cljs.core.truth_(inst_13822))
{var statearr_13851_13896 = state_13837__$1;(statearr_13851_13896[(1)] = (23));
} else
{var statearr_13852_13897 = state_13837__$1;(statearr_13852_13897[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (6)))
{var inst_13818 = (state_13837[(11)]);var inst_13816 = (state_13837[(7)]);var inst_13768 = (state_13837[(8)]);var inst_13816__$1 = topic_fn.call(null,inst_13768);var inst_13817 = cljs.core.deref.call(null,mults);var inst_13818__$1 = cljs.core.get.call(null,inst_13817,inst_13816__$1);var state_13837__$1 = (function (){var statearr_13853 = state_13837;(statearr_13853[(11)] = inst_13818__$1);
(statearr_13853[(7)] = inst_13816__$1);
return statearr_13853;
})();if(cljs.core.truth_(inst_13818__$1))
{var statearr_13854_13898 = state_13837__$1;(statearr_13854_13898[(1)] = (19));
} else
{var statearr_13855_13899 = state_13837__$1;(statearr_13855_13899[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (25)))
{var inst_13827 = (state_13837[(2)]);var state_13837__$1 = state_13837;var statearr_13856_13900 = state_13837__$1;(statearr_13856_13900[(2)] = inst_13827);
(statearr_13856_13900[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (17)))
{var inst_13792 = (state_13837[(10)]);var inst_13801 = cljs.core.first.call(null,inst_13792);var inst_13802 = cljs.core.async.muxch_STAR_.call(null,inst_13801);var inst_13803 = cljs.core.async.close_BANG_.call(null,inst_13802);var inst_13804 = cljs.core.next.call(null,inst_13792);var inst_13778 = inst_13804;var inst_13779 = null;var inst_13780 = (0);var inst_13781 = (0);var state_13837__$1 = (function (){var statearr_13857 = state_13837;(statearr_13857[(12)] = inst_13778);
(statearr_13857[(13)] = inst_13781);
(statearr_13857[(14)] = inst_13803);
(statearr_13857[(15)] = inst_13779);
(statearr_13857[(16)] = inst_13780);
return statearr_13857;
})();var statearr_13858_13901 = state_13837__$1;(statearr_13858_13901[(2)] = null);
(statearr_13858_13901[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (3)))
{var inst_13835 = (state_13837[(2)]);var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13837__$1,inst_13835);
} else
{if((state_val_13838 === (12)))
{var inst_13812 = (state_13837[(2)]);var state_13837__$1 = state_13837;var statearr_13859_13902 = state_13837__$1;(statearr_13859_13902[(2)] = inst_13812);
(statearr_13859_13902[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (2)))
{var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13837__$1,(4),ch);
} else
{if((state_val_13838 === (23)))
{var state_13837__$1 = state_13837;var statearr_13860_13903 = state_13837__$1;(statearr_13860_13903[(2)] = null);
(statearr_13860_13903[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (19)))
{var inst_13818 = (state_13837[(11)]);var inst_13768 = (state_13837[(8)]);var inst_13820 = cljs.core.async.muxch_STAR_.call(null,inst_13818);var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13837__$1,(22),inst_13820,inst_13768);
} else
{if((state_val_13838 === (11)))
{var inst_13778 = (state_13837[(12)]);var inst_13792 = (state_13837[(10)]);var inst_13792__$1 = cljs.core.seq.call(null,inst_13778);var state_13837__$1 = (function (){var statearr_13861 = state_13837;(statearr_13861[(10)] = inst_13792__$1);
return statearr_13861;
})();if(inst_13792__$1)
{var statearr_13862_13904 = state_13837__$1;(statearr_13862_13904[(1)] = (13));
} else
{var statearr_13863_13905 = state_13837__$1;(statearr_13863_13905[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (9)))
{var inst_13814 = (state_13837[(2)]);var state_13837__$1 = state_13837;var statearr_13864_13906 = state_13837__$1;(statearr_13864_13906[(2)] = inst_13814);
(statearr_13864_13906[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (5)))
{var inst_13775 = cljs.core.deref.call(null,mults);var inst_13776 = cljs.core.vals.call(null,inst_13775);var inst_13777 = cljs.core.seq.call(null,inst_13776);var inst_13778 = inst_13777;var inst_13779 = null;var inst_13780 = (0);var inst_13781 = (0);var state_13837__$1 = (function (){var statearr_13865 = state_13837;(statearr_13865[(12)] = inst_13778);
(statearr_13865[(13)] = inst_13781);
(statearr_13865[(15)] = inst_13779);
(statearr_13865[(16)] = inst_13780);
return statearr_13865;
})();var statearr_13866_13907 = state_13837__$1;(statearr_13866_13907[(2)] = null);
(statearr_13866_13907[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (14)))
{var state_13837__$1 = state_13837;var statearr_13870_13908 = state_13837__$1;(statearr_13870_13908[(2)] = null);
(statearr_13870_13908[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (16)))
{var inst_13792 = (state_13837[(10)]);var inst_13796 = cljs.core.chunk_first.call(null,inst_13792);var inst_13797 = cljs.core.chunk_rest.call(null,inst_13792);var inst_13798 = cljs.core.count.call(null,inst_13796);var inst_13778 = inst_13797;var inst_13779 = inst_13796;var inst_13780 = inst_13798;var inst_13781 = (0);var state_13837__$1 = (function (){var statearr_13871 = state_13837;(statearr_13871[(12)] = inst_13778);
(statearr_13871[(13)] = inst_13781);
(statearr_13871[(15)] = inst_13779);
(statearr_13871[(16)] = inst_13780);
return statearr_13871;
})();var statearr_13872_13909 = state_13837__$1;(statearr_13872_13909[(2)] = null);
(statearr_13872_13909[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (10)))
{var inst_13778 = (state_13837[(12)]);var inst_13781 = (state_13837[(13)]);var inst_13779 = (state_13837[(15)]);var inst_13780 = (state_13837[(16)]);var inst_13786 = cljs.core._nth.call(null,inst_13779,inst_13781);var inst_13787 = cljs.core.async.muxch_STAR_.call(null,inst_13786);var inst_13788 = cljs.core.async.close_BANG_.call(null,inst_13787);var inst_13789 = (inst_13781 + (1));var tmp13867 = inst_13778;var tmp13868 = inst_13779;var tmp13869 = inst_13780;var inst_13778__$1 = tmp13867;var inst_13779__$1 = tmp13868;var inst_13780__$1 = tmp13869;var inst_13781__$1 = inst_13789;var state_13837__$1 = (function (){var statearr_13873 = state_13837;(statearr_13873[(12)] = inst_13778__$1);
(statearr_13873[(13)] = inst_13781__$1);
(statearr_13873[(15)] = inst_13779__$1);
(statearr_13873[(16)] = inst_13780__$1);
(statearr_13873[(17)] = inst_13788);
return statearr_13873;
})();var statearr_13874_13910 = state_13837__$1;(statearr_13874_13910[(2)] = null);
(statearr_13874_13910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (18)))
{var inst_13807 = (state_13837[(2)]);var state_13837__$1 = state_13837;var statearr_13875_13911 = state_13837__$1;(statearr_13875_13911[(2)] = inst_13807);
(statearr_13875_13911[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13838 === (8)))
{var inst_13781 = (state_13837[(13)]);var inst_13780 = (state_13837[(16)]);var inst_13783 = (inst_13781 < inst_13780);var inst_13784 = inst_13783;var state_13837__$1 = state_13837;if(cljs.core.truth_(inst_13784))
{var statearr_13876_13912 = state_13837__$1;(statearr_13876_13912[(1)] = (10));
} else
{var statearr_13877_13913 = state_13837__$1;(statearr_13877_13913[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___13885,mults,ensure_mult,p))
;return ((function (switch__6414__auto__,c__6429__auto___13885,mults,ensure_mult,p){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_13881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13881[(0)] = state_machine__6415__auto__);
(statearr_13881[(1)] = (1));
return statearr_13881;
});
var state_machine__6415__auto____1 = (function (state_13837){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_13837);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e13882){if((e13882 instanceof Object))
{var ex__6418__auto__ = e13882;var statearr_13883_13914 = state_13837;(statearr_13883_13914[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13882;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13915 = state_13837;
state_13837 = G__13915;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_13837){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_13837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___13885,mults,ensure_mult,p))
})();var state__6431__auto__ = (function (){var statearr_13884 = f__6430__auto__.call(null);(statearr_13884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___13885);
return statearr_13884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___13885,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6429__auto___14052 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___14052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___14052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14022){var state_val_14023 = (state_14022[(1)]);if((state_val_14023 === (7)))
{var state_14022__$1 = state_14022;var statearr_14024_14053 = state_14022__$1;(statearr_14024_14053[(2)] = null);
(statearr_14024_14053[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (1)))
{var state_14022__$1 = state_14022;var statearr_14025_14054 = state_14022__$1;(statearr_14025_14054[(2)] = null);
(statearr_14025_14054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (4)))
{var inst_13986 = (state_14022[(7)]);var inst_13988 = (inst_13986 < cnt);var state_14022__$1 = state_14022;if(cljs.core.truth_(inst_13988))
{var statearr_14026_14055 = state_14022__$1;(statearr_14026_14055[(1)] = (6));
} else
{var statearr_14027_14056 = state_14022__$1;(statearr_14027_14056[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (15)))
{var inst_14018 = (state_14022[(2)]);var state_14022__$1 = state_14022;var statearr_14028_14057 = state_14022__$1;(statearr_14028_14057[(2)] = inst_14018);
(statearr_14028_14057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (13)))
{var inst_14011 = cljs.core.async.close_BANG_.call(null,out);var state_14022__$1 = state_14022;var statearr_14029_14058 = state_14022__$1;(statearr_14029_14058[(2)] = inst_14011);
(statearr_14029_14058[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (6)))
{var state_14022__$1 = state_14022;var statearr_14030_14059 = state_14022__$1;(statearr_14030_14059[(2)] = null);
(statearr_14030_14059[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (3)))
{var inst_14020 = (state_14022[(2)]);var state_14022__$1 = state_14022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14022__$1,inst_14020);
} else
{if((state_val_14023 === (12)))
{var inst_14008 = (state_14022[(8)]);var inst_14008__$1 = (state_14022[(2)]);var inst_14009 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14008__$1);var state_14022__$1 = (function (){var statearr_14031 = state_14022;(statearr_14031[(8)] = inst_14008__$1);
return statearr_14031;
})();if(cljs.core.truth_(inst_14009))
{var statearr_14032_14060 = state_14022__$1;(statearr_14032_14060[(1)] = (13));
} else
{var statearr_14033_14061 = state_14022__$1;(statearr_14033_14061[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (2)))
{var inst_13985 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13986 = (0);var state_14022__$1 = (function (){var statearr_14034 = state_14022;(statearr_14034[(7)] = inst_13986);
(statearr_14034[(9)] = inst_13985);
return statearr_14034;
})();var statearr_14035_14062 = state_14022__$1;(statearr_14035_14062[(2)] = null);
(statearr_14035_14062[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (11)))
{var inst_13986 = (state_14022[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14022,(10),Object,null,(9));var inst_13995 = chs__$1.call(null,inst_13986);var inst_13996 = done.call(null,inst_13986);var inst_13997 = cljs.core.async.take_BANG_.call(null,inst_13995,inst_13996);var state_14022__$1 = state_14022;var statearr_14036_14063 = state_14022__$1;(statearr_14036_14063[(2)] = inst_13997);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14022__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (9)))
{var inst_13986 = (state_14022[(7)]);var inst_13999 = (state_14022[(2)]);var inst_14000 = (inst_13986 + (1));var inst_13986__$1 = inst_14000;var state_14022__$1 = (function (){var statearr_14037 = state_14022;(statearr_14037[(7)] = inst_13986__$1);
(statearr_14037[(10)] = inst_13999);
return statearr_14037;
})();var statearr_14038_14064 = state_14022__$1;(statearr_14038_14064[(2)] = null);
(statearr_14038_14064[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (5)))
{var inst_14006 = (state_14022[(2)]);var state_14022__$1 = (function (){var statearr_14039 = state_14022;(statearr_14039[(11)] = inst_14006);
return statearr_14039;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14022__$1,(12),dchan);
} else
{if((state_val_14023 === (14)))
{var inst_14008 = (state_14022[(8)]);var inst_14013 = cljs.core.apply.call(null,f,inst_14008);var state_14022__$1 = state_14022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14022__$1,(16),out,inst_14013);
} else
{if((state_val_14023 === (16)))
{var inst_14015 = (state_14022[(2)]);var state_14022__$1 = (function (){var statearr_14040 = state_14022;(statearr_14040[(12)] = inst_14015);
return statearr_14040;
})();var statearr_14041_14065 = state_14022__$1;(statearr_14041_14065[(2)] = null);
(statearr_14041_14065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (10)))
{var inst_13990 = (state_14022[(2)]);var inst_13991 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14022__$1 = (function (){var statearr_14042 = state_14022;(statearr_14042[(13)] = inst_13990);
return statearr_14042;
})();var statearr_14043_14066 = state_14022__$1;(statearr_14043_14066[(2)] = inst_13991);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14022__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14023 === (8)))
{var inst_14004 = (state_14022[(2)]);var state_14022__$1 = state_14022;var statearr_14044_14067 = state_14022__$1;(statearr_14044_14067[(2)] = inst_14004);
(statearr_14044_14067[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___14052,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6414__auto__,c__6429__auto___14052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_14048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14048[(0)] = state_machine__6415__auto__);
(statearr_14048[(1)] = (1));
return statearr_14048;
});
var state_machine__6415__auto____1 = (function (state_14022){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_14022);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e14049){if((e14049 instanceof Object))
{var ex__6418__auto__ = e14049;var statearr_14050_14068 = state_14022;(statearr_14050_14068[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14022);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14049;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14069 = state_14022;
state_14022 = G__14069;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_14022){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_14022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___14052,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6431__auto__ = (function (){var statearr_14051 = f__6430__auto__.call(null);(statearr_14051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___14052);
return statearr_14051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___14052,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6429__auto___14177 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___14177,out){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___14177,out){
return (function (state_14153){var state_val_14154 = (state_14153[(1)]);if((state_val_14154 === (7)))
{var inst_14133 = (state_14153[(7)]);var inst_14132 = (state_14153[(8)]);var inst_14132__$1 = (state_14153[(2)]);var inst_14133__$1 = cljs.core.nth.call(null,inst_14132__$1,(0),null);var inst_14134 = cljs.core.nth.call(null,inst_14132__$1,(1),null);var inst_14135 = (inst_14133__$1 == null);var state_14153__$1 = (function (){var statearr_14155 = state_14153;(statearr_14155[(9)] = inst_14134);
(statearr_14155[(7)] = inst_14133__$1);
(statearr_14155[(8)] = inst_14132__$1);
return statearr_14155;
})();if(cljs.core.truth_(inst_14135))
{var statearr_14156_14178 = state_14153__$1;(statearr_14156_14178[(1)] = (8));
} else
{var statearr_14157_14179 = state_14153__$1;(statearr_14157_14179[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (1)))
{var inst_14124 = cljs.core.vec.call(null,chs);var inst_14125 = inst_14124;var state_14153__$1 = (function (){var statearr_14158 = state_14153;(statearr_14158[(10)] = inst_14125);
return statearr_14158;
})();var statearr_14159_14180 = state_14153__$1;(statearr_14159_14180[(2)] = null);
(statearr_14159_14180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (4)))
{var inst_14125 = (state_14153[(10)]);var state_14153__$1 = state_14153;return cljs.core.async.ioc_alts_BANG_.call(null,state_14153__$1,(7),inst_14125);
} else
{if((state_val_14154 === (6)))
{var inst_14149 = (state_14153[(2)]);var state_14153__$1 = state_14153;var statearr_14160_14181 = state_14153__$1;(statearr_14160_14181[(2)] = inst_14149);
(statearr_14160_14181[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (3)))
{var inst_14151 = (state_14153[(2)]);var state_14153__$1 = state_14153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14153__$1,inst_14151);
} else
{if((state_val_14154 === (2)))
{var inst_14125 = (state_14153[(10)]);var inst_14127 = cljs.core.count.call(null,inst_14125);var inst_14128 = (inst_14127 > (0));var state_14153__$1 = state_14153;if(cljs.core.truth_(inst_14128))
{var statearr_14162_14182 = state_14153__$1;(statearr_14162_14182[(1)] = (4));
} else
{var statearr_14163_14183 = state_14153__$1;(statearr_14163_14183[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (11)))
{var inst_14125 = (state_14153[(10)]);var inst_14142 = (state_14153[(2)]);var tmp14161 = inst_14125;var inst_14125__$1 = tmp14161;var state_14153__$1 = (function (){var statearr_14164 = state_14153;(statearr_14164[(11)] = inst_14142);
(statearr_14164[(10)] = inst_14125__$1);
return statearr_14164;
})();var statearr_14165_14184 = state_14153__$1;(statearr_14165_14184[(2)] = null);
(statearr_14165_14184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (9)))
{var inst_14133 = (state_14153[(7)]);var state_14153__$1 = state_14153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14153__$1,(11),out,inst_14133);
} else
{if((state_val_14154 === (5)))
{var inst_14147 = cljs.core.async.close_BANG_.call(null,out);var state_14153__$1 = state_14153;var statearr_14166_14185 = state_14153__$1;(statearr_14166_14185[(2)] = inst_14147);
(statearr_14166_14185[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (10)))
{var inst_14145 = (state_14153[(2)]);var state_14153__$1 = state_14153;var statearr_14167_14186 = state_14153__$1;(statearr_14167_14186[(2)] = inst_14145);
(statearr_14167_14186[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (8)))
{var inst_14134 = (state_14153[(9)]);var inst_14133 = (state_14153[(7)]);var inst_14125 = (state_14153[(10)]);var inst_14132 = (state_14153[(8)]);var inst_14137 = (function (){var c = inst_14134;var v = inst_14133;var vec__14130 = inst_14132;var cs = inst_14125;return ((function (c,v,vec__14130,cs,inst_14134,inst_14133,inst_14125,inst_14132,state_val_14154,c__6429__auto___14177,out){
return (function (p1__14070_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14070_SHARP_);
});
;})(c,v,vec__14130,cs,inst_14134,inst_14133,inst_14125,inst_14132,state_val_14154,c__6429__auto___14177,out))
})();var inst_14138 = cljs.core.filterv.call(null,inst_14137,inst_14125);var inst_14125__$1 = inst_14138;var state_14153__$1 = (function (){var statearr_14168 = state_14153;(statearr_14168[(10)] = inst_14125__$1);
return statearr_14168;
})();var statearr_14169_14187 = state_14153__$1;(statearr_14169_14187[(2)] = null);
(statearr_14169_14187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___14177,out))
;return ((function (switch__6414__auto__,c__6429__auto___14177,out){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_14173 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14173[(0)] = state_machine__6415__auto__);
(statearr_14173[(1)] = (1));
return statearr_14173;
});
var state_machine__6415__auto____1 = (function (state_14153){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_14153);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e14174){if((e14174 instanceof Object))
{var ex__6418__auto__ = e14174;var statearr_14175_14188 = state_14153;(statearr_14175_14188[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14174;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14189 = state_14153;
state_14153 = G__14189;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_14153){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_14153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___14177,out))
})();var state__6431__auto__ = (function (){var statearr_14176 = f__6430__auto__.call(null);(statearr_14176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___14177);
return statearr_14176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___14177,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6429__auto___14282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___14282,out){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___14282,out){
return (function (state_14259){var state_val_14260 = (state_14259[(1)]);if((state_val_14260 === (7)))
{var inst_14241 = (state_14259[(7)]);var inst_14241__$1 = (state_14259[(2)]);var inst_14242 = (inst_14241__$1 == null);var inst_14243 = cljs.core.not.call(null,inst_14242);var state_14259__$1 = (function (){var statearr_14261 = state_14259;(statearr_14261[(7)] = inst_14241__$1);
return statearr_14261;
})();if(inst_14243)
{var statearr_14262_14283 = state_14259__$1;(statearr_14262_14283[(1)] = (8));
} else
{var statearr_14263_14284 = state_14259__$1;(statearr_14263_14284[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (1)))
{var inst_14236 = (0);var state_14259__$1 = (function (){var statearr_14264 = state_14259;(statearr_14264[(8)] = inst_14236);
return statearr_14264;
})();var statearr_14265_14285 = state_14259__$1;(statearr_14265_14285[(2)] = null);
(statearr_14265_14285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (4)))
{var state_14259__$1 = state_14259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14259__$1,(7),ch);
} else
{if((state_val_14260 === (6)))
{var inst_14254 = (state_14259[(2)]);var state_14259__$1 = state_14259;var statearr_14266_14286 = state_14259__$1;(statearr_14266_14286[(2)] = inst_14254);
(statearr_14266_14286[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (3)))
{var inst_14256 = (state_14259[(2)]);var inst_14257 = cljs.core.async.close_BANG_.call(null,out);var state_14259__$1 = (function (){var statearr_14267 = state_14259;(statearr_14267[(9)] = inst_14256);
return statearr_14267;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14259__$1,inst_14257);
} else
{if((state_val_14260 === (2)))
{var inst_14236 = (state_14259[(8)]);var inst_14238 = (inst_14236 < n);var state_14259__$1 = state_14259;if(cljs.core.truth_(inst_14238))
{var statearr_14268_14287 = state_14259__$1;(statearr_14268_14287[(1)] = (4));
} else
{var statearr_14269_14288 = state_14259__$1;(statearr_14269_14288[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (11)))
{var inst_14236 = (state_14259[(8)]);var inst_14246 = (state_14259[(2)]);var inst_14247 = (inst_14236 + (1));var inst_14236__$1 = inst_14247;var state_14259__$1 = (function (){var statearr_14270 = state_14259;(statearr_14270[(10)] = inst_14246);
(statearr_14270[(8)] = inst_14236__$1);
return statearr_14270;
})();var statearr_14271_14289 = state_14259__$1;(statearr_14271_14289[(2)] = null);
(statearr_14271_14289[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (9)))
{var state_14259__$1 = state_14259;var statearr_14272_14290 = state_14259__$1;(statearr_14272_14290[(2)] = null);
(statearr_14272_14290[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (5)))
{var state_14259__$1 = state_14259;var statearr_14273_14291 = state_14259__$1;(statearr_14273_14291[(2)] = null);
(statearr_14273_14291[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (10)))
{var inst_14251 = (state_14259[(2)]);var state_14259__$1 = state_14259;var statearr_14274_14292 = state_14259__$1;(statearr_14274_14292[(2)] = inst_14251);
(statearr_14274_14292[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14260 === (8)))
{var inst_14241 = (state_14259[(7)]);var state_14259__$1 = state_14259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14259__$1,(11),out,inst_14241);
} else
{return null;
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
});})(c__6429__auto___14282,out))
;return ((function (switch__6414__auto__,c__6429__auto___14282,out){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_14278 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14278[(0)] = state_machine__6415__auto__);
(statearr_14278[(1)] = (1));
return statearr_14278;
});
var state_machine__6415__auto____1 = (function (state_14259){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_14259);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e14279){if((e14279 instanceof Object))
{var ex__6418__auto__ = e14279;var statearr_14280_14293 = state_14259;(statearr_14280_14293[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14279;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14294 = state_14259;
state_14259 = G__14294;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_14259){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_14259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___14282,out))
})();var state__6431__auto__ = (function (){var statearr_14281 = f__6430__auto__.call(null);(statearr_14281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___14282);
return statearr_14281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___14282,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14302 = (function (ch,f,map_LT_,meta14303){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14303 = meta14303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14302.cljs$lang$type = true;
cljs.core.async.t14302.cljs$lang$ctorStr = "cljs.core.async/t14302";
cljs.core.async.t14302.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t14302");
});
cljs.core.async.t14302.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14302.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14305 = (function (fn1,_,meta14303,ch,f,map_LT_,meta14306){
this.fn1 = fn1;
this._ = _;
this.meta14303 = meta14303;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14306 = meta14306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14305.cljs$lang$type = true;
cljs.core.async.t14305.cljs$lang$ctorStr = "cljs.core.async/t14305";
cljs.core.async.t14305.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t14305");
});})(___$1))
;
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14295_SHARP_){return f1.call(null,(((p1__14295_SHARP_ == null))?null:self__.f.call(null,p1__14295_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14307){var self__ = this;
var _14307__$1 = this;return self__.meta14306;
});})(___$1))
;
cljs.core.async.t14305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14307,meta14306__$1){var self__ = this;
var _14307__$1 = this;return (new cljs.core.async.t14305(self__.fn1,self__._,self__.meta14303,self__.ch,self__.f,self__.map_LT_,meta14306__$1));
});})(___$1))
;
cljs.core.async.__GT_t14305 = ((function (___$1){
return (function __GT_t14305(fn1__$1,___$2,meta14303__$1,ch__$2,f__$2,map_LT___$2,meta14306){return (new cljs.core.async.t14305(fn1__$1,___$2,meta14303__$1,ch__$2,f__$2,map_LT___$2,meta14306));
});})(___$1))
;
}
return (new cljs.core.async.t14305(fn1,___$1,self__.meta14303,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3577__auto__ = ret;if(cljs.core.truth_(and__3577__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3577__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14302.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14304){var self__ = this;
var _14304__$1 = this;return self__.meta14303;
});
cljs.core.async.t14302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14304,meta14303__$1){var self__ = this;
var _14304__$1 = this;return (new cljs.core.async.t14302(self__.ch,self__.f,self__.map_LT_,meta14303__$1));
});
cljs.core.async.__GT_t14302 = (function __GT_t14302(ch__$1,f__$1,map_LT___$1,meta14303){return (new cljs.core.async.t14302(ch__$1,f__$1,map_LT___$1,meta14303));
});
}
return (new cljs.core.async.t14302(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14311 = (function (ch,f,map_GT_,meta14312){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14312 = meta14312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14311.cljs$lang$type = true;
cljs.core.async.t14311.cljs$lang$ctorStr = "cljs.core.async/t14311";
cljs.core.async.t14311.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t14311");
});
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14313){var self__ = this;
var _14313__$1 = this;return self__.meta14312;
});
cljs.core.async.t14311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14313,meta14312__$1){var self__ = this;
var _14313__$1 = this;return (new cljs.core.async.t14311(self__.ch,self__.f,self__.map_GT_,meta14312__$1));
});
cljs.core.async.__GT_t14311 = (function __GT_t14311(ch__$1,f__$1,map_GT___$1,meta14312){return (new cljs.core.async.t14311(ch__$1,f__$1,map_GT___$1,meta14312));
});
}
return (new cljs.core.async.t14311(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14317 = (function (ch,p,filter_GT_,meta14318){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14318 = meta14318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14317.cljs$lang$type = true;
cljs.core.async.t14317.cljs$lang$ctorStr = "cljs.core.async/t14317";
cljs.core.async.t14317.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cljs.core.async/t14317");
});
cljs.core.async.t14317.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14317.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14317.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14317.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14317.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14317.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14317.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14319){var self__ = this;
var _14319__$1 = this;return self__.meta14318;
});
cljs.core.async.t14317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14319,meta14318__$1){var self__ = this;
var _14319__$1 = this;return (new cljs.core.async.t14317(self__.ch,self__.p,self__.filter_GT_,meta14318__$1));
});
cljs.core.async.__GT_t14317 = (function __GT_t14317(ch__$1,p__$1,filter_GT___$1,meta14318){return (new cljs.core.async.t14317(ch__$1,p__$1,filter_GT___$1,meta14318));
});
}
return (new cljs.core.async.t14317(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6429__auto___14402 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___14402,out){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___14402,out){
return (function (state_14381){var state_val_14382 = (state_14381[(1)]);if((state_val_14382 === (7)))
{var inst_14377 = (state_14381[(2)]);var state_14381__$1 = state_14381;var statearr_14383_14403 = state_14381__$1;(statearr_14383_14403[(2)] = inst_14377);
(statearr_14383_14403[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (1)))
{var state_14381__$1 = state_14381;var statearr_14384_14404 = state_14381__$1;(statearr_14384_14404[(2)] = null);
(statearr_14384_14404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (4)))
{var inst_14363 = (state_14381[(7)]);var inst_14363__$1 = (state_14381[(2)]);var inst_14364 = (inst_14363__$1 == null);var state_14381__$1 = (function (){var statearr_14385 = state_14381;(statearr_14385[(7)] = inst_14363__$1);
return statearr_14385;
})();if(cljs.core.truth_(inst_14364))
{var statearr_14386_14405 = state_14381__$1;(statearr_14386_14405[(1)] = (5));
} else
{var statearr_14387_14406 = state_14381__$1;(statearr_14387_14406[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (6)))
{var inst_14363 = (state_14381[(7)]);var inst_14368 = p.call(null,inst_14363);var state_14381__$1 = state_14381;if(cljs.core.truth_(inst_14368))
{var statearr_14388_14407 = state_14381__$1;(statearr_14388_14407[(1)] = (8));
} else
{var statearr_14389_14408 = state_14381__$1;(statearr_14389_14408[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (3)))
{var inst_14379 = (state_14381[(2)]);var state_14381__$1 = state_14381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14381__$1,inst_14379);
} else
{if((state_val_14382 === (2)))
{var state_14381__$1 = state_14381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14381__$1,(4),ch);
} else
{if((state_val_14382 === (11)))
{var inst_14371 = (state_14381[(2)]);var state_14381__$1 = state_14381;var statearr_14390_14409 = state_14381__$1;(statearr_14390_14409[(2)] = inst_14371);
(statearr_14390_14409[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (9)))
{var state_14381__$1 = state_14381;var statearr_14391_14410 = state_14381__$1;(statearr_14391_14410[(2)] = null);
(statearr_14391_14410[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (5)))
{var inst_14366 = cljs.core.async.close_BANG_.call(null,out);var state_14381__$1 = state_14381;var statearr_14392_14411 = state_14381__$1;(statearr_14392_14411[(2)] = inst_14366);
(statearr_14392_14411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (10)))
{var inst_14374 = (state_14381[(2)]);var state_14381__$1 = (function (){var statearr_14393 = state_14381;(statearr_14393[(8)] = inst_14374);
return statearr_14393;
})();var statearr_14394_14412 = state_14381__$1;(statearr_14394_14412[(2)] = null);
(statearr_14394_14412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14382 === (8)))
{var inst_14363 = (state_14381[(7)]);var state_14381__$1 = state_14381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14381__$1,(11),out,inst_14363);
} else
{return null;
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
});})(c__6429__auto___14402,out))
;return ((function (switch__6414__auto__,c__6429__auto___14402,out){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_14398 = [null,null,null,null,null,null,null,null,null];(statearr_14398[(0)] = state_machine__6415__auto__);
(statearr_14398[(1)] = (1));
return statearr_14398;
});
var state_machine__6415__auto____1 = (function (state_14381){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_14381);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e14399){if((e14399 instanceof Object))
{var ex__6418__auto__ = e14399;var statearr_14400_14413 = state_14381;(statearr_14400_14413[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14399;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14414 = state_14381;
state_14381 = G__14414;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_14381){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_14381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___14402,out))
})();var state__6431__auto__ = (function (){var statearr_14401 = f__6430__auto__.call(null);(statearr_14401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___14402);
return statearr_14401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___14402,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto__){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto__){
return (function (state_14580){var state_val_14581 = (state_14580[(1)]);if((state_val_14581 === (7)))
{var inst_14576 = (state_14580[(2)]);var state_14580__$1 = state_14580;var statearr_14582_14623 = state_14580__$1;(statearr_14582_14623[(2)] = inst_14576);
(statearr_14582_14623[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (20)))
{var inst_14546 = (state_14580[(7)]);var inst_14557 = (state_14580[(2)]);var inst_14558 = cljs.core.next.call(null,inst_14546);var inst_14532 = inst_14558;var inst_14533 = null;var inst_14534 = (0);var inst_14535 = (0);var state_14580__$1 = (function (){var statearr_14583 = state_14580;(statearr_14583[(8)] = inst_14532);
(statearr_14583[(9)] = inst_14533);
(statearr_14583[(10)] = inst_14557);
(statearr_14583[(11)] = inst_14535);
(statearr_14583[(12)] = inst_14534);
return statearr_14583;
})();var statearr_14584_14624 = state_14580__$1;(statearr_14584_14624[(2)] = null);
(statearr_14584_14624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (1)))
{var state_14580__$1 = state_14580;var statearr_14585_14625 = state_14580__$1;(statearr_14585_14625[(2)] = null);
(statearr_14585_14625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (4)))
{var inst_14521 = (state_14580[(13)]);var inst_14521__$1 = (state_14580[(2)]);var inst_14522 = (inst_14521__$1 == null);var state_14580__$1 = (function (){var statearr_14586 = state_14580;(statearr_14586[(13)] = inst_14521__$1);
return statearr_14586;
})();if(cljs.core.truth_(inst_14522))
{var statearr_14587_14626 = state_14580__$1;(statearr_14587_14626[(1)] = (5));
} else
{var statearr_14588_14627 = state_14580__$1;(statearr_14588_14627[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (15)))
{var state_14580__$1 = state_14580;var statearr_14592_14628 = state_14580__$1;(statearr_14592_14628[(2)] = null);
(statearr_14592_14628[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (21)))
{var state_14580__$1 = state_14580;var statearr_14593_14629 = state_14580__$1;(statearr_14593_14629[(2)] = null);
(statearr_14593_14629[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (13)))
{var inst_14532 = (state_14580[(8)]);var inst_14533 = (state_14580[(9)]);var inst_14535 = (state_14580[(11)]);var inst_14534 = (state_14580[(12)]);var inst_14542 = (state_14580[(2)]);var inst_14543 = (inst_14535 + (1));var tmp14589 = inst_14532;var tmp14590 = inst_14533;var tmp14591 = inst_14534;var inst_14532__$1 = tmp14589;var inst_14533__$1 = tmp14590;var inst_14534__$1 = tmp14591;var inst_14535__$1 = inst_14543;var state_14580__$1 = (function (){var statearr_14594 = state_14580;(statearr_14594[(8)] = inst_14532__$1);
(statearr_14594[(9)] = inst_14533__$1);
(statearr_14594[(14)] = inst_14542);
(statearr_14594[(11)] = inst_14535__$1);
(statearr_14594[(12)] = inst_14534__$1);
return statearr_14594;
})();var statearr_14595_14630 = state_14580__$1;(statearr_14595_14630[(2)] = null);
(statearr_14595_14630[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (22)))
{var state_14580__$1 = state_14580;var statearr_14596_14631 = state_14580__$1;(statearr_14596_14631[(2)] = null);
(statearr_14596_14631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (6)))
{var inst_14521 = (state_14580[(13)]);var inst_14530 = f.call(null,inst_14521);var inst_14531 = cljs.core.seq.call(null,inst_14530);var inst_14532 = inst_14531;var inst_14533 = null;var inst_14534 = (0);var inst_14535 = (0);var state_14580__$1 = (function (){var statearr_14597 = state_14580;(statearr_14597[(8)] = inst_14532);
(statearr_14597[(9)] = inst_14533);
(statearr_14597[(11)] = inst_14535);
(statearr_14597[(12)] = inst_14534);
return statearr_14597;
})();var statearr_14598_14632 = state_14580__$1;(statearr_14598_14632[(2)] = null);
(statearr_14598_14632[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (17)))
{var inst_14546 = (state_14580[(7)]);var inst_14550 = cljs.core.chunk_first.call(null,inst_14546);var inst_14551 = cljs.core.chunk_rest.call(null,inst_14546);var inst_14552 = cljs.core.count.call(null,inst_14550);var inst_14532 = inst_14551;var inst_14533 = inst_14550;var inst_14534 = inst_14552;var inst_14535 = (0);var state_14580__$1 = (function (){var statearr_14599 = state_14580;(statearr_14599[(8)] = inst_14532);
(statearr_14599[(9)] = inst_14533);
(statearr_14599[(11)] = inst_14535);
(statearr_14599[(12)] = inst_14534);
return statearr_14599;
})();var statearr_14600_14633 = state_14580__$1;(statearr_14600_14633[(2)] = null);
(statearr_14600_14633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (3)))
{var inst_14578 = (state_14580[(2)]);var state_14580__$1 = state_14580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14580__$1,inst_14578);
} else
{if((state_val_14581 === (12)))
{var inst_14566 = (state_14580[(2)]);var state_14580__$1 = state_14580;var statearr_14601_14634 = state_14580__$1;(statearr_14601_14634[(2)] = inst_14566);
(statearr_14601_14634[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (2)))
{var state_14580__$1 = state_14580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14580__$1,(4),in$);
} else
{if((state_val_14581 === (23)))
{var inst_14574 = (state_14580[(2)]);var state_14580__$1 = state_14580;var statearr_14602_14635 = state_14580__$1;(statearr_14602_14635[(2)] = inst_14574);
(statearr_14602_14635[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (19)))
{var inst_14561 = (state_14580[(2)]);var state_14580__$1 = state_14580;var statearr_14603_14636 = state_14580__$1;(statearr_14603_14636[(2)] = inst_14561);
(statearr_14603_14636[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (11)))
{var inst_14532 = (state_14580[(8)]);var inst_14546 = (state_14580[(7)]);var inst_14546__$1 = cljs.core.seq.call(null,inst_14532);var state_14580__$1 = (function (){var statearr_14604 = state_14580;(statearr_14604[(7)] = inst_14546__$1);
return statearr_14604;
})();if(inst_14546__$1)
{var statearr_14605_14637 = state_14580__$1;(statearr_14605_14637[(1)] = (14));
} else
{var statearr_14606_14638 = state_14580__$1;(statearr_14606_14638[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (9)))
{var inst_14568 = (state_14580[(2)]);var inst_14569 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14580__$1 = (function (){var statearr_14607 = state_14580;(statearr_14607[(15)] = inst_14568);
return statearr_14607;
})();if(cljs.core.truth_(inst_14569))
{var statearr_14608_14639 = state_14580__$1;(statearr_14608_14639[(1)] = (21));
} else
{var statearr_14609_14640 = state_14580__$1;(statearr_14609_14640[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (5)))
{var inst_14524 = cljs.core.async.close_BANG_.call(null,out);var state_14580__$1 = state_14580;var statearr_14610_14641 = state_14580__$1;(statearr_14610_14641[(2)] = inst_14524);
(statearr_14610_14641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (14)))
{var inst_14546 = (state_14580[(7)]);var inst_14548 = cljs.core.chunked_seq_QMARK_.call(null,inst_14546);var state_14580__$1 = state_14580;if(inst_14548)
{var statearr_14611_14642 = state_14580__$1;(statearr_14611_14642[(1)] = (17));
} else
{var statearr_14612_14643 = state_14580__$1;(statearr_14612_14643[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (16)))
{var inst_14564 = (state_14580[(2)]);var state_14580__$1 = state_14580;var statearr_14613_14644 = state_14580__$1;(statearr_14613_14644[(2)] = inst_14564);
(statearr_14613_14644[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14581 === (10)))
{var inst_14533 = (state_14580[(9)]);var inst_14535 = (state_14580[(11)]);var inst_14540 = cljs.core._nth.call(null,inst_14533,inst_14535);var state_14580__$1 = state_14580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14580__$1,(13),out,inst_14540);
} else
{if((state_val_14581 === (18)))
{var inst_14546 = (state_14580[(7)]);var inst_14555 = cljs.core.first.call(null,inst_14546);var state_14580__$1 = state_14580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14580__$1,(20),out,inst_14555);
} else
{if((state_val_14581 === (8)))
{var inst_14535 = (state_14580[(11)]);var inst_14534 = (state_14580[(12)]);var inst_14537 = (inst_14535 < inst_14534);var inst_14538 = inst_14537;var state_14580__$1 = state_14580;if(cljs.core.truth_(inst_14538))
{var statearr_14614_14645 = state_14580__$1;(statearr_14614_14645[(1)] = (10));
} else
{var statearr_14615_14646 = state_14580__$1;(statearr_14615_14646[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto__))
;return ((function (switch__6414__auto__,c__6429__auto__){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_14619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14619[(0)] = state_machine__6415__auto__);
(statearr_14619[(1)] = (1));
return statearr_14619;
});
var state_machine__6415__auto____1 = (function (state_14580){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_14580);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e14620){if((e14620 instanceof Object))
{var ex__6418__auto__ = e14620;var statearr_14621_14647 = state_14580;(statearr_14621_14647[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14580);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14620;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14648 = state_14580;
state_14580 = G__14648;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_14580){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_14580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto__))
})();var state__6431__auto__ = (function (){var statearr_14622 = f__6430__auto__.call(null);(statearr_14622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto__);
return statearr_14622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto__))
);
return c__6429__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6429__auto___14745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___14745,out){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___14745,out){
return (function (state_14720){var state_val_14721 = (state_14720[(1)]);if((state_val_14721 === (7)))
{var inst_14715 = (state_14720[(2)]);var state_14720__$1 = state_14720;var statearr_14722_14746 = state_14720__$1;(statearr_14722_14746[(2)] = inst_14715);
(statearr_14722_14746[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14721 === (1)))
{var inst_14697 = null;var state_14720__$1 = (function (){var statearr_14723 = state_14720;(statearr_14723[(7)] = inst_14697);
return statearr_14723;
})();var statearr_14724_14747 = state_14720__$1;(statearr_14724_14747[(2)] = null);
(statearr_14724_14747[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14721 === (4)))
{var inst_14700 = (state_14720[(8)]);var inst_14700__$1 = (state_14720[(2)]);var inst_14701 = (inst_14700__$1 == null);var inst_14702 = cljs.core.not.call(null,inst_14701);var state_14720__$1 = (function (){var statearr_14725 = state_14720;(statearr_14725[(8)] = inst_14700__$1);
return statearr_14725;
})();if(inst_14702)
{var statearr_14726_14748 = state_14720__$1;(statearr_14726_14748[(1)] = (5));
} else
{var statearr_14727_14749 = state_14720__$1;(statearr_14727_14749[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14721 === (6)))
{var state_14720__$1 = state_14720;var statearr_14728_14750 = state_14720__$1;(statearr_14728_14750[(2)] = null);
(statearr_14728_14750[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14721 === (3)))
{var inst_14717 = (state_14720[(2)]);var inst_14718 = cljs.core.async.close_BANG_.call(null,out);var state_14720__$1 = (function (){var statearr_14729 = state_14720;(statearr_14729[(9)] = inst_14717);
return statearr_14729;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14720__$1,inst_14718);
} else
{if((state_val_14721 === (2)))
{var state_14720__$1 = state_14720;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14720__$1,(4),ch);
} else
{if((state_val_14721 === (11)))
{var inst_14700 = (state_14720[(8)]);var inst_14709 = (state_14720[(2)]);var inst_14697 = inst_14700;var state_14720__$1 = (function (){var statearr_14730 = state_14720;(statearr_14730[(7)] = inst_14697);
(statearr_14730[(10)] = inst_14709);
return statearr_14730;
})();var statearr_14731_14751 = state_14720__$1;(statearr_14731_14751[(2)] = null);
(statearr_14731_14751[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14721 === (9)))
{var inst_14700 = (state_14720[(8)]);var state_14720__$1 = state_14720;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14720__$1,(11),out,inst_14700);
} else
{if((state_val_14721 === (5)))
{var inst_14697 = (state_14720[(7)]);var inst_14700 = (state_14720[(8)]);var inst_14704 = cljs.core._EQ_.call(null,inst_14700,inst_14697);var state_14720__$1 = state_14720;if(inst_14704)
{var statearr_14733_14752 = state_14720__$1;(statearr_14733_14752[(1)] = (8));
} else
{var statearr_14734_14753 = state_14720__$1;(statearr_14734_14753[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14721 === (10)))
{var inst_14712 = (state_14720[(2)]);var state_14720__$1 = state_14720;var statearr_14735_14754 = state_14720__$1;(statearr_14735_14754[(2)] = inst_14712);
(statearr_14735_14754[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14721 === (8)))
{var inst_14697 = (state_14720[(7)]);var tmp14732 = inst_14697;var inst_14697__$1 = tmp14732;var state_14720__$1 = (function (){var statearr_14736 = state_14720;(statearr_14736[(7)] = inst_14697__$1);
return statearr_14736;
})();var statearr_14737_14755 = state_14720__$1;(statearr_14737_14755[(2)] = null);
(statearr_14737_14755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___14745,out))
;return ((function (switch__6414__auto__,c__6429__auto___14745,out){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_14741 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14741[(0)] = state_machine__6415__auto__);
(statearr_14741[(1)] = (1));
return statearr_14741;
});
var state_machine__6415__auto____1 = (function (state_14720){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_14720);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e14742){if((e14742 instanceof Object))
{var ex__6418__auto__ = e14742;var statearr_14743_14756 = state_14720;(statearr_14743_14756[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14720);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14742;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14757 = state_14720;
state_14720 = G__14757;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_14720){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_14720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___14745,out))
})();var state__6431__auto__ = (function (){var statearr_14744 = f__6430__auto__.call(null);(statearr_14744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___14745);
return statearr_14744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___14745,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6429__auto___14892 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___14892,out){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___14892,out){
return (function (state_14862){var state_val_14863 = (state_14862[(1)]);if((state_val_14863 === (7)))
{var inst_14858 = (state_14862[(2)]);var state_14862__$1 = state_14862;var statearr_14864_14893 = state_14862__$1;(statearr_14864_14893[(2)] = inst_14858);
(statearr_14864_14893[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (1)))
{var inst_14825 = (new Array(n));var inst_14826 = inst_14825;var inst_14827 = (0);var state_14862__$1 = (function (){var statearr_14865 = state_14862;(statearr_14865[(7)] = inst_14827);
(statearr_14865[(8)] = inst_14826);
return statearr_14865;
})();var statearr_14866_14894 = state_14862__$1;(statearr_14866_14894[(2)] = null);
(statearr_14866_14894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (4)))
{var inst_14830 = (state_14862[(9)]);var inst_14830__$1 = (state_14862[(2)]);var inst_14831 = (inst_14830__$1 == null);var inst_14832 = cljs.core.not.call(null,inst_14831);var state_14862__$1 = (function (){var statearr_14867 = state_14862;(statearr_14867[(9)] = inst_14830__$1);
return statearr_14867;
})();if(inst_14832)
{var statearr_14868_14895 = state_14862__$1;(statearr_14868_14895[(1)] = (5));
} else
{var statearr_14869_14896 = state_14862__$1;(statearr_14869_14896[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (15)))
{var inst_14852 = (state_14862[(2)]);var state_14862__$1 = state_14862;var statearr_14870_14897 = state_14862__$1;(statearr_14870_14897[(2)] = inst_14852);
(statearr_14870_14897[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (13)))
{var state_14862__$1 = state_14862;var statearr_14871_14898 = state_14862__$1;(statearr_14871_14898[(2)] = null);
(statearr_14871_14898[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (6)))
{var inst_14827 = (state_14862[(7)]);var inst_14848 = (inst_14827 > (0));var state_14862__$1 = state_14862;if(cljs.core.truth_(inst_14848))
{var statearr_14872_14899 = state_14862__$1;(statearr_14872_14899[(1)] = (12));
} else
{var statearr_14873_14900 = state_14862__$1;(statearr_14873_14900[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (3)))
{var inst_14860 = (state_14862[(2)]);var state_14862__$1 = state_14862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14862__$1,inst_14860);
} else
{if((state_val_14863 === (12)))
{var inst_14826 = (state_14862[(8)]);var inst_14850 = cljs.core.vec.call(null,inst_14826);var state_14862__$1 = state_14862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14862__$1,(15),out,inst_14850);
} else
{if((state_val_14863 === (2)))
{var state_14862__$1 = state_14862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14862__$1,(4),ch);
} else
{if((state_val_14863 === (11)))
{var inst_14842 = (state_14862[(2)]);var inst_14843 = (new Array(n));var inst_14826 = inst_14843;var inst_14827 = (0);var state_14862__$1 = (function (){var statearr_14874 = state_14862;(statearr_14874[(7)] = inst_14827);
(statearr_14874[(8)] = inst_14826);
(statearr_14874[(10)] = inst_14842);
return statearr_14874;
})();var statearr_14875_14901 = state_14862__$1;(statearr_14875_14901[(2)] = null);
(statearr_14875_14901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (9)))
{var inst_14826 = (state_14862[(8)]);var inst_14840 = cljs.core.vec.call(null,inst_14826);var state_14862__$1 = state_14862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14862__$1,(11),out,inst_14840);
} else
{if((state_val_14863 === (5)))
{var inst_14835 = (state_14862[(11)]);var inst_14827 = (state_14862[(7)]);var inst_14830 = (state_14862[(9)]);var inst_14826 = (state_14862[(8)]);var inst_14834 = (inst_14826[inst_14827] = inst_14830);var inst_14835__$1 = (inst_14827 + (1));var inst_14836 = (inst_14835__$1 < n);var state_14862__$1 = (function (){var statearr_14876 = state_14862;(statearr_14876[(11)] = inst_14835__$1);
(statearr_14876[(12)] = inst_14834);
return statearr_14876;
})();if(cljs.core.truth_(inst_14836))
{var statearr_14877_14902 = state_14862__$1;(statearr_14877_14902[(1)] = (8));
} else
{var statearr_14878_14903 = state_14862__$1;(statearr_14878_14903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (14)))
{var inst_14855 = (state_14862[(2)]);var inst_14856 = cljs.core.async.close_BANG_.call(null,out);var state_14862__$1 = (function (){var statearr_14880 = state_14862;(statearr_14880[(13)] = inst_14855);
return statearr_14880;
})();var statearr_14881_14904 = state_14862__$1;(statearr_14881_14904[(2)] = inst_14856);
(statearr_14881_14904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (10)))
{var inst_14846 = (state_14862[(2)]);var state_14862__$1 = state_14862;var statearr_14882_14905 = state_14862__$1;(statearr_14882_14905[(2)] = inst_14846);
(statearr_14882_14905[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14863 === (8)))
{var inst_14835 = (state_14862[(11)]);var inst_14826 = (state_14862[(8)]);var tmp14879 = inst_14826;var inst_14826__$1 = tmp14879;var inst_14827 = inst_14835;var state_14862__$1 = (function (){var statearr_14883 = state_14862;(statearr_14883[(7)] = inst_14827);
(statearr_14883[(8)] = inst_14826__$1);
return statearr_14883;
})();var statearr_14884_14906 = state_14862__$1;(statearr_14884_14906[(2)] = null);
(statearr_14884_14906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___14892,out))
;return ((function (switch__6414__auto__,c__6429__auto___14892,out){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_14888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14888[(0)] = state_machine__6415__auto__);
(statearr_14888[(1)] = (1));
return statearr_14888;
});
var state_machine__6415__auto____1 = (function (state_14862){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_14862);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e14889){if((e14889 instanceof Object))
{var ex__6418__auto__ = e14889;var statearr_14890_14907 = state_14862;(statearr_14890_14907[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14889;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14908 = state_14862;
state_14862 = G__14908;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_14862){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_14862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___14892,out))
})();var state__6431__auto__ = (function (){var statearr_14891 = f__6430__auto__.call(null);(statearr_14891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___14892);
return statearr_14891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___14892,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6429__auto___15051 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___15051,out){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___15051,out){
return (function (state_15021){var state_val_15022 = (state_15021[(1)]);if((state_val_15022 === (7)))
{var inst_15017 = (state_15021[(2)]);var state_15021__$1 = state_15021;var statearr_15023_15052 = state_15021__$1;(statearr_15023_15052[(2)] = inst_15017);
(statearr_15023_15052[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (1)))
{var inst_14980 = [];var inst_14981 = inst_14980;var inst_14982 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15021__$1 = (function (){var statearr_15024 = state_15021;(statearr_15024[(7)] = inst_14982);
(statearr_15024[(8)] = inst_14981);
return statearr_15024;
})();var statearr_15025_15053 = state_15021__$1;(statearr_15025_15053[(2)] = null);
(statearr_15025_15053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (4)))
{var inst_14985 = (state_15021[(9)]);var inst_14985__$1 = (state_15021[(2)]);var inst_14986 = (inst_14985__$1 == null);var inst_14987 = cljs.core.not.call(null,inst_14986);var state_15021__$1 = (function (){var statearr_15026 = state_15021;(statearr_15026[(9)] = inst_14985__$1);
return statearr_15026;
})();if(inst_14987)
{var statearr_15027_15054 = state_15021__$1;(statearr_15027_15054[(1)] = (5));
} else
{var statearr_15028_15055 = state_15021__$1;(statearr_15028_15055[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (15)))
{var inst_15011 = (state_15021[(2)]);var state_15021__$1 = state_15021;var statearr_15029_15056 = state_15021__$1;(statearr_15029_15056[(2)] = inst_15011);
(statearr_15029_15056[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (13)))
{var state_15021__$1 = state_15021;var statearr_15030_15057 = state_15021__$1;(statearr_15030_15057[(2)] = null);
(statearr_15030_15057[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (6)))
{var inst_14981 = (state_15021[(8)]);var inst_15006 = inst_14981.length;var inst_15007 = (inst_15006 > (0));var state_15021__$1 = state_15021;if(cljs.core.truth_(inst_15007))
{var statearr_15031_15058 = state_15021__$1;(statearr_15031_15058[(1)] = (12));
} else
{var statearr_15032_15059 = state_15021__$1;(statearr_15032_15059[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (3)))
{var inst_15019 = (state_15021[(2)]);var state_15021__$1 = state_15021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15021__$1,inst_15019);
} else
{if((state_val_15022 === (12)))
{var inst_14981 = (state_15021[(8)]);var inst_15009 = cljs.core.vec.call(null,inst_14981);var state_15021__$1 = state_15021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15021__$1,(15),out,inst_15009);
} else
{if((state_val_15022 === (2)))
{var state_15021__$1 = state_15021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15021__$1,(4),ch);
} else
{if((state_val_15022 === (11)))
{var inst_14989 = (state_15021[(10)]);var inst_14985 = (state_15021[(9)]);var inst_14999 = (state_15021[(2)]);var inst_15000 = [];var inst_15001 = inst_15000.push(inst_14985);var inst_14981 = inst_15000;var inst_14982 = inst_14989;var state_15021__$1 = (function (){var statearr_15033 = state_15021;(statearr_15033[(7)] = inst_14982);
(statearr_15033[(8)] = inst_14981);
(statearr_15033[(11)] = inst_15001);
(statearr_15033[(12)] = inst_14999);
return statearr_15033;
})();var statearr_15034_15060 = state_15021__$1;(statearr_15034_15060[(2)] = null);
(statearr_15034_15060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (9)))
{var inst_14981 = (state_15021[(8)]);var inst_14997 = cljs.core.vec.call(null,inst_14981);var state_15021__$1 = state_15021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15021__$1,(11),out,inst_14997);
} else
{if((state_val_15022 === (5)))
{var inst_14982 = (state_15021[(7)]);var inst_14989 = (state_15021[(10)]);var inst_14985 = (state_15021[(9)]);var inst_14989__$1 = f.call(null,inst_14985);var inst_14990 = cljs.core._EQ_.call(null,inst_14989__$1,inst_14982);var inst_14991 = cljs.core.keyword_identical_QMARK_.call(null,inst_14982,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14992 = (inst_14990) || (inst_14991);var state_15021__$1 = (function (){var statearr_15035 = state_15021;(statearr_15035[(10)] = inst_14989__$1);
return statearr_15035;
})();if(cljs.core.truth_(inst_14992))
{var statearr_15036_15061 = state_15021__$1;(statearr_15036_15061[(1)] = (8));
} else
{var statearr_15037_15062 = state_15021__$1;(statearr_15037_15062[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (14)))
{var inst_15014 = (state_15021[(2)]);var inst_15015 = cljs.core.async.close_BANG_.call(null,out);var state_15021__$1 = (function (){var statearr_15039 = state_15021;(statearr_15039[(13)] = inst_15014);
return statearr_15039;
})();var statearr_15040_15063 = state_15021__$1;(statearr_15040_15063[(2)] = inst_15015);
(statearr_15040_15063[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (10)))
{var inst_15004 = (state_15021[(2)]);var state_15021__$1 = state_15021;var statearr_15041_15064 = state_15021__$1;(statearr_15041_15064[(2)] = inst_15004);
(statearr_15041_15064[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15022 === (8)))
{var inst_14989 = (state_15021[(10)]);var inst_14985 = (state_15021[(9)]);var inst_14981 = (state_15021[(8)]);var inst_14994 = inst_14981.push(inst_14985);var tmp15038 = inst_14981;var inst_14981__$1 = tmp15038;var inst_14982 = inst_14989;var state_15021__$1 = (function (){var statearr_15042 = state_15021;(statearr_15042[(7)] = inst_14982);
(statearr_15042[(14)] = inst_14994);
(statearr_15042[(8)] = inst_14981__$1);
return statearr_15042;
})();var statearr_15043_15065 = state_15021__$1;(statearr_15043_15065[(2)] = null);
(statearr_15043_15065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6429__auto___15051,out))
;return ((function (switch__6414__auto__,c__6429__auto___15051,out){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_15047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15047[(0)] = state_machine__6415__auto__);
(statearr_15047[(1)] = (1));
return statearr_15047;
});
var state_machine__6415__auto____1 = (function (state_15021){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_15021);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e15048){if((e15048 instanceof Object))
{var ex__6418__auto__ = e15048;var statearr_15049_15066 = state_15021;(statearr_15049_15066[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15048;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15067 = state_15021;
state_15021 = G__15067;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_15021){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_15021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___15051,out))
})();var state__6431__auto__ = (function (){var statearr_15050 = f__6430__auto__.call(null);(statearr_15050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___15051);
return statearr_15050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___15051,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map