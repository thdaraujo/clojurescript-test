// Compiled by ClojureScript 0.0-2371
goog.provide('acme.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
acme.core.fetch_widgets = (function fetch_widgets(url){var c = cljs.core.async.chan.call(null);var c__6429__auto___10135 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto___10135,c){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto___10135,c){
return (function (state_10121){var state_val_10122 = (state_10121[(1)]);if((state_val_10122 === (6)))
{var inst_10119 = (state_10121[(2)]);var state_10121__$1 = state_10121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10121__$1,inst_10119);
} else
{if((state_val_10122 === (5)))
{var inst_10115 = (state_10121[(2)]);var inst_10116 = cljs.core.get.call(null,inst_10115,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_10117 = cljs.core.vec.call(null,inst_10116);var state_10121__$1 = state_10121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10121__$1,(6),c,inst_10117);
} else
{if((state_val_10122 === (4)))
{var inst_10109 = (state_10121[(7)]);var state_10121__$1 = state_10121;var statearr_10123_10136 = state_10121__$1;(statearr_10123_10136[(2)] = inst_10109);
(statearr_10123_10136[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10122 === (3)))
{var inst_10109 = (state_10121[(7)]);var inst_10112 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10109);var state_10121__$1 = state_10121;var statearr_10124_10137 = state_10121__$1;(statearr_10124_10137[(2)] = inst_10112);
(statearr_10124_10137[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10122 === (2)))
{var inst_10109 = (state_10121[(7)]);var inst_10109__$1 = (state_10121[(2)]);var inst_10110 = cljs.core.seq_QMARK_.call(null,inst_10109__$1);var state_10121__$1 = (function (){var statearr_10125 = state_10121;(statearr_10125[(7)] = inst_10109__$1);
return statearr_10125;
})();if(inst_10110)
{var statearr_10126_10138 = state_10121__$1;(statearr_10126_10138[(1)] = (3));
} else
{var statearr_10127_10139 = state_10121__$1;(statearr_10127_10139[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10122 === (1)))
{var inst_10107 = cljs_http.client.get.call(null,url);var state_10121__$1 = state_10121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10121__$1,(2),inst_10107);
} else
{return null;
}
}
}
}
}
}
});})(c__6429__auto___10135,c))
;return ((function (switch__6414__auto__,c__6429__auto___10135,c){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_10131 = [null,null,null,null,null,null,null,null];(statearr_10131[(0)] = state_machine__6415__auto__);
(statearr_10131[(1)] = (1));
return statearr_10131;
});
var state_machine__6415__auto____1 = (function (state_10121){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_10121);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e10132){if((e10132 instanceof Object))
{var ex__6418__auto__ = e10132;var statearr_10133_10140 = state_10121;(statearr_10133_10140[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10121);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10132;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10141 = state_10121;
state_10121 = G__10141;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_10121){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_10121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto___10135,c))
})();var state__6431__auto__ = (function (){var statearr_10134 = f__6430__auto__.call(null);(statearr_10134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto___10135);
return statearr_10134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto___10135,c))
);
return c;
});
acme.core.widget = (function widget(p__10142,owner,opts){var map__10147 = p__10142;var map__10147__$1 = ((cljs.core.seq_QMARK_.call(null,map__10147))?cljs.core.apply.call(null,cljs.core.hash_map,map__10147):map__10147);var name = cljs.core.get.call(null,map__10147__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof acme.core.t10148 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t10148 = (function (name,map__10147,opts,owner,p__10142,widget,meta10149){
this.name = name;
this.map__10147 = map__10147;
this.opts = opts;
this.owner = owner;
this.p__10142 = p__10142;
this.widget = widget;
this.meta10149 = meta10149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10148.cljs$lang$type = true;
acme.core.t10148.cljs$lang$ctorStr = "acme.core/t10148";
acme.core.t10148.cljs$lang$ctorPrWriter = ((function (map__10147,map__10147__$1,name){
return (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"acme.core/t10148");
});})(map__10147,map__10147__$1,name))
;
acme.core.t10148.prototype.om$core$IRender$ = true;
acme.core.t10148.prototype.om$core$IRender$render$arity$1 = ((function (map__10147,map__10147__$1,name){
return (function (this__5191__auto__){var self__ = this;
var this__5191__auto____$1 = this;return React.DOM.li(null,self__.name);
});})(map__10147,map__10147__$1,name))
;
acme.core.t10148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10147,map__10147__$1,name){
return (function (_10150){var self__ = this;
var _10150__$1 = this;return self__.meta10149;
});})(map__10147,map__10147__$1,name))
;
acme.core.t10148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10147,map__10147__$1,name){
return (function (_10150,meta10149__$1){var self__ = this;
var _10150__$1 = this;return (new acme.core.t10148(self__.name,self__.map__10147,self__.opts,self__.owner,self__.p__10142,self__.widget,meta10149__$1));
});})(map__10147,map__10147__$1,name))
;
acme.core.__GT_t10148 = ((function (map__10147,map__10147__$1,name){
return (function __GT_t10148(name__$1,map__10147__$2,opts__$1,owner__$1,p__10142__$1,widget__$1,meta10149){return (new acme.core.t10148(name__$1,map__10147__$2,opts__$1,owner__$1,p__10142__$1,widget__$1,meta10149));
});})(map__10147,map__10147__$1,name))
;
}
return (new acme.core.t10148(name,map__10147__$1,opts,owner,p__10142,widget,null));
});
acme.core.widget_list = (function widget_list(p__10151){var map__10156 = p__10151;var map__10156__$1 = ((cljs.core.seq_QMARK_.call(null,map__10156))?cljs.core.apply.call(null,cljs.core.hash_map,map__10156):map__10156);var widgets = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));if(typeof acme.core.t10157 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t10157 = (function (widgets,map__10156,p__10151,widget_list,meta10158){
this.widgets = widgets;
this.map__10156 = map__10156;
this.p__10151 = p__10151;
this.widget_list = widget_list;
this.meta10158 = meta10158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10157.cljs$lang$type = true;
acme.core.t10157.cljs$lang$ctorStr = "acme.core/t10157";
acme.core.t10157.cljs$lang$ctorPrWriter = ((function (map__10156,map__10156__$1,widgets){
return (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"acme.core/t10157");
});})(map__10156,map__10156__$1,widgets))
;
acme.core.t10157.prototype.om$core$IRender$ = true;
acme.core.t10157.prototype.om$core$IRender$render$arity$1 = ((function (map__10156,map__10156__$1,widgets){
return (function (this__5191__auto__){var self__ = this;
var this__5191__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,acme.core.widget,self__.widgets));
});})(map__10156,map__10156__$1,widgets))
;
acme.core.t10157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10156,map__10156__$1,widgets){
return (function (_10159){var self__ = this;
var _10159__$1 = this;return self__.meta10158;
});})(map__10156,map__10156__$1,widgets))
;
acme.core.t10157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10156,map__10156__$1,widgets){
return (function (_10159,meta10158__$1){var self__ = this;
var _10159__$1 = this;return (new acme.core.t10157(self__.widgets,self__.map__10156,self__.p__10151,self__.widget_list,meta10158__$1));
});})(map__10156,map__10156__$1,widgets))
;
acme.core.__GT_t10157 = ((function (map__10156,map__10156__$1,widgets){
return (function __GT_t10157(widgets__$1,map__10156__$2,p__10151__$1,widget_list__$1,meta10158){return (new acme.core.t10157(widgets__$1,map__10156__$2,p__10151__$1,widget_list__$1,meta10158));
});})(map__10156,map__10156__$1,widgets))
;
}
return (new acme.core.t10157(widgets,map__10156__$1,p__10151,widget_list,null));
});
acme.core.widget_box = (function widget_box(app,owner,opts){if(typeof acme.core.t10202 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t10202 = (function (opts,owner,app,widget_box,meta10203){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta10203 = meta10203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10202.cljs$lang$type = true;
acme.core.t10202.cljs$lang$ctorStr = "acme.core/t10202";
acme.core.t10202.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"acme.core/t10202");
});
acme.core.t10202.prototype.om$core$IRender$ = true;
acme.core.t10202.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;React.DOM.h1(null,"Widgets");
return om.core.build.call(null,acme.core.widget_list,self__.app);
});
acme.core.t10202.prototype.om$core$IWillMount$ = true;
acme.core.t10202.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978)], null),((function (___$1){
return (function (){return cljs.core.PersistentVector.EMPTY;
});})(___$1))
);
var c__6429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6429__auto__,___$1){
return (function (){var f__6430__auto__ = (function (){var switch__6414__auto__ = ((function (c__6429__auto__,___$1){
return (function (state_10226){var state_val_10227 = (state_10226[(1)]);if((state_val_10227 === (8)))
{var inst_10218 = (state_10226[(2)]);var state_10226__$1 = (function (){var statearr_10228 = state_10226;(statearr_10228[(7)] = inst_10218);
return statearr_10228;
})();var statearr_10229_10243 = state_10226__$1;(statearr_10229_10243[(2)] = null);
(statearr_10229_10243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10227 === (7)))
{var inst_10210 = (state_10226[(2)]);var inst_10211 = cljs.core.pr_str.call(null,inst_10210);var inst_10212 = console.log(inst_10211);var inst_10213 = (function (){var widgets = inst_10210;return ((function (widgets,inst_10210,inst_10211,inst_10212,state_val_10227,c__6429__auto__,___$1){
return (function (p1__10160_SHARP_){return cljs.core.assoc.call(null,p1__10160_SHARP_,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
});
;})(widgets,inst_10210,inst_10211,inst_10212,state_val_10227,c__6429__auto__,___$1))
})();var inst_10214 = om.core.update_BANG_.call(null,self__.app,inst_10213);var inst_10215 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10216 = cljs.core.async.timeout.call(null,inst_10215);var state_10226__$1 = (function (){var statearr_10230 = state_10226;(statearr_10230[(8)] = inst_10212);
(statearr_10230[(9)] = inst_10214);
return statearr_10230;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10226__$1,(8),inst_10216);
} else
{if((state_val_10227 === (6)))
{var inst_10222 = (state_10226[(2)]);var state_10226__$1 = state_10226;var statearr_10231_10244 = state_10226__$1;(statearr_10231_10244[(2)] = inst_10222);
(statearr_10231_10244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10227 === (5)))
{var state_10226__$1 = state_10226;var statearr_10232_10245 = state_10226__$1;(statearr_10232_10245[(2)] = null);
(statearr_10232_10245[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10227 === (4)))
{var inst_10207 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10208 = acme.core.fetch_widgets.call(null,inst_10207);var state_10226__$1 = state_10226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10226__$1,(7),inst_10208);
} else
{if((state_val_10227 === (3)))
{var inst_10224 = (state_10226[(2)]);var state_10226__$1 = state_10226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10226__$1,inst_10224);
} else
{if((state_val_10227 === (2)))
{var state_10226__$1 = state_10226;var statearr_10233_10246 = state_10226__$1;(statearr_10233_10246[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10227 === (1)))
{var state_10226__$1 = state_10226;var statearr_10235_10247 = state_10226__$1;(statearr_10235_10247[(2)] = null);
(statearr_10235_10247[(1)] = (2));
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
});})(c__6429__auto__,___$1))
;return ((function (switch__6414__auto__,c__6429__auto__,___$1){
return (function() {
var state_machine__6415__auto__ = null;
var state_machine__6415__auto____0 = (function (){var statearr_10239 = [null,null,null,null,null,null,null,null,null,null];(statearr_10239[(0)] = state_machine__6415__auto__);
(statearr_10239[(1)] = (1));
return statearr_10239;
});
var state_machine__6415__auto____1 = (function (state_10226){while(true){
var ret_value__6416__auto__ = (function (){try{while(true){
var result__6417__auto__ = switch__6414__auto__.call(null,state_10226);if(cljs.core.keyword_identical_QMARK_.call(null,result__6417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6417__auto__;
}
break;
}
}catch (e10240){if((e10240 instanceof Object))
{var ex__6418__auto__ = e10240;var statearr_10241_10248 = state_10226;(statearr_10241_10248[(5)] = ex__6418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10249 = state_10226;
state_10226 = G__10249;
continue;
}
} else
{return ret_value__6416__auto__;
}
break;
}
});
state_machine__6415__auto__ = function(state_10226){
switch(arguments.length){
case 0:
return state_machine__6415__auto____0.call(this);
case 1:
return state_machine__6415__auto____1.call(this,state_10226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6415__auto____0;
state_machine__6415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6415__auto____1;
return state_machine__6415__auto__;
})()
;})(switch__6414__auto__,c__6429__auto__,___$1))
})();var state__6431__auto__ = (function (){var statearr_10242 = f__6430__auto__.call(null);(statearr_10242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6429__auto__);
return statearr_10242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6431__auto__);
});})(c__6429__auto__,___$1))
);
return c__6429__auto__;
});
acme.core.t10202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10204){var self__ = this;
var _10204__$1 = this;return self__.meta10203;
});
acme.core.t10202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10204,meta10203__$1){var self__ = this;
var _10204__$1 = this;return (new acme.core.t10202(self__.opts,self__.owner,self__.app,self__.widget_box,meta10203__$1));
});
acme.core.__GT_t10202 = (function __GT_t10202(opts__$1,owner__$1,app__$1,widget_box__$1,meta10203){return (new acme.core.t10202(opts__$1,owner__$1,app__$1,widget_box__$1,meta10203));
});
}
return (new acme.core.t10202(opts,owner,app,widget_box,null));
});
acme.core.om_app = (function om_app(app,owner){if(typeof acme.core.t10253 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t10253 = (function (owner,app,om_app,meta10254){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta10254 = meta10254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10253.cljs$lang$type = true;
acme.core.t10253.cljs$lang$ctorStr = "acme.core/t10253";
acme.core.t10253.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"acme.core/t10253");
});
acme.core.t10253.prototype.om$core$IRender$ = true;
acme.core.t10253.prototype.om$core$IRender$render$arity$1 = (function (this__5191__auto__){var self__ = this;
var this__5191__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,acme.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null)));
});
acme.core.t10253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10255){var self__ = this;
var _10255__$1 = this;return self__.meta10254;
});
acme.core.t10253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10255,meta10254__$1){var self__ = this;
var _10255__$1 = this;return (new acme.core.t10253(self__.owner,self__.app,self__.om_app,meta10254__$1));
});
acme.core.__GT_t10253 = (function __GT_t10253(owner__$1,app__$1,om_app__$1,meta10254){return (new acme.core.t10253(owner__$1,app__$1,om_app__$1,meta10254));
});
}
return (new acme.core.t10253(owner,app,om_app,null));
});
acme.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.root.call(null,acme.core.app_state,acme.core.om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map