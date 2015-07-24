// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__11686_11690 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__11687_11691 = null;var count__11688_11692 = (0);var i__11689_11693 = (0);while(true){
if((i__11689_11693 < count__11688_11692))
{var k_11694 = cljs.core._nth.call(null,chunk__11687_11691,i__11689_11693);var v_11695 = (b[k_11694]);(a[k_11694] = v_11695);
{
var G__11696 = seq__11686_11690;
var G__11697 = chunk__11687_11691;
var G__11698 = count__11688_11692;
var G__11699 = (i__11689_11693 + (1));
seq__11686_11690 = G__11696;
chunk__11687_11691 = G__11697;
count__11688_11692 = G__11698;
i__11689_11693 = G__11699;
continue;
}
} else
{var temp__4406__auto___11700 = cljs.core.seq.call(null,seq__11686_11690);if(temp__4406__auto___11700)
{var seq__11686_11701__$1 = temp__4406__auto___11700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11686_11701__$1))
{var c__4359__auto___11702 = cljs.core.chunk_first.call(null,seq__11686_11701__$1);{
var G__11703 = cljs.core.chunk_rest.call(null,seq__11686_11701__$1);
var G__11704 = c__4359__auto___11702;
var G__11705 = cljs.core.count.call(null,c__4359__auto___11702);
var G__11706 = (0);
seq__11686_11690 = G__11703;
chunk__11687_11691 = G__11704;
count__11688_11692 = G__11705;
i__11689_11693 = G__11706;
continue;
}
} else
{var k_11707 = cljs.core.first.call(null,seq__11686_11701__$1);var v_11708 = (b[k_11707]);(a[k_11707] = v_11708);
{
var G__11709 = cljs.core.next.call(null,seq__11686_11701__$1);
var G__11710 = null;
var G__11711 = (0);
var G__11712 = (0);
seq__11686_11690 = G__11709;
chunk__11687_11691 = G__11710;
count__11688_11692 = G__11711;
i__11689_11693 = G__11712;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__11713 = (i + (2));
var G__11714 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11713;
ret = G__11714;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11715_11719 = cljs.core.seq.call(null,v);var chunk__11716_11720 = null;var count__11717_11721 = (0);var i__11718_11722 = (0);while(true){
if((i__11718_11722 < count__11717_11721))
{var x_11723 = cljs.core._nth.call(null,chunk__11716_11720,i__11718_11722);ret.push(x_11723);
{
var G__11724 = seq__11715_11719;
var G__11725 = chunk__11716_11720;
var G__11726 = count__11717_11721;
var G__11727 = (i__11718_11722 + (1));
seq__11715_11719 = G__11724;
chunk__11716_11720 = G__11725;
count__11717_11721 = G__11726;
i__11718_11722 = G__11727;
continue;
}
} else
{var temp__4406__auto___11728 = cljs.core.seq.call(null,seq__11715_11719);if(temp__4406__auto___11728)
{var seq__11715_11729__$1 = temp__4406__auto___11728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11715_11729__$1))
{var c__4359__auto___11730 = cljs.core.chunk_first.call(null,seq__11715_11729__$1);{
var G__11731 = cljs.core.chunk_rest.call(null,seq__11715_11729__$1);
var G__11732 = c__4359__auto___11730;
var G__11733 = cljs.core.count.call(null,c__4359__auto___11730);
var G__11734 = (0);
seq__11715_11719 = G__11731;
chunk__11716_11720 = G__11732;
count__11717_11721 = G__11733;
i__11718_11722 = G__11734;
continue;
}
} else
{var x_11735 = cljs.core.first.call(null,seq__11715_11729__$1);ret.push(x_11735);
{
var G__11736 = cljs.core.next.call(null,seq__11715_11729__$1);
var G__11737 = null;
var G__11738 = (0);
var G__11739 = (0);
seq__11715_11719 = G__11736;
chunk__11716_11720 = G__11737;
count__11717_11721 = G__11738;
i__11718_11722 = G__11739;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11740_11744 = cljs.core.seq.call(null,v);var chunk__11741_11745 = null;var count__11742_11746 = (0);var i__11743_11747 = (0);while(true){
if((i__11743_11747 < count__11742_11746))
{var x_11748 = cljs.core._nth.call(null,chunk__11741_11745,i__11743_11747);ret.push(x_11748);
{
var G__11749 = seq__11740_11744;
var G__11750 = chunk__11741_11745;
var G__11751 = count__11742_11746;
var G__11752 = (i__11743_11747 + (1));
seq__11740_11744 = G__11749;
chunk__11741_11745 = G__11750;
count__11742_11746 = G__11751;
i__11743_11747 = G__11752;
continue;
}
} else
{var temp__4406__auto___11753 = cljs.core.seq.call(null,seq__11740_11744);if(temp__4406__auto___11753)
{var seq__11740_11754__$1 = temp__4406__auto___11753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11740_11754__$1))
{var c__4359__auto___11755 = cljs.core.chunk_first.call(null,seq__11740_11754__$1);{
var G__11756 = cljs.core.chunk_rest.call(null,seq__11740_11754__$1);
var G__11757 = c__4359__auto___11755;
var G__11758 = cljs.core.count.call(null,c__4359__auto___11755);
var G__11759 = (0);
seq__11740_11744 = G__11756;
chunk__11741_11745 = G__11757;
count__11742_11746 = G__11758;
i__11743_11747 = G__11759;
continue;
}
} else
{var x_11760 = cljs.core.first.call(null,seq__11740_11754__$1);ret.push(x_11760);
{
var G__11761 = cljs.core.next.call(null,seq__11740_11754__$1);
var G__11762 = null;
var G__11763 = (0);
var G__11764 = (0);
seq__11740_11744 = G__11761;
chunk__11741_11745 = G__11762;
count__11742_11746 = G__11763;
i__11743_11747 = G__11764;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11765_11769 = cljs.core.seq.call(null,v);var chunk__11766_11770 = null;var count__11767_11771 = (0);var i__11768_11772 = (0);while(true){
if((i__11768_11772 < count__11767_11771))
{var x_11773 = cljs.core._nth.call(null,chunk__11766_11770,i__11768_11772);ret.push(x_11773);
{
var G__11774 = seq__11765_11769;
var G__11775 = chunk__11766_11770;
var G__11776 = count__11767_11771;
var G__11777 = (i__11768_11772 + (1));
seq__11765_11769 = G__11774;
chunk__11766_11770 = G__11775;
count__11767_11771 = G__11776;
i__11768_11772 = G__11777;
continue;
}
} else
{var temp__4406__auto___11778 = cljs.core.seq.call(null,seq__11765_11769);if(temp__4406__auto___11778)
{var seq__11765_11779__$1 = temp__4406__auto___11778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11765_11779__$1))
{var c__4359__auto___11780 = cljs.core.chunk_first.call(null,seq__11765_11779__$1);{
var G__11781 = cljs.core.chunk_rest.call(null,seq__11765_11779__$1);
var G__11782 = c__4359__auto___11780;
var G__11783 = cljs.core.count.call(null,c__4359__auto___11780);
var G__11784 = (0);
seq__11765_11769 = G__11781;
chunk__11766_11770 = G__11782;
count__11767_11771 = G__11783;
i__11768_11772 = G__11784;
continue;
}
} else
{var x_11785 = cljs.core.first.call(null,seq__11765_11779__$1);ret.push(x_11785);
{
var G__11786 = cljs.core.next.call(null,seq__11765_11779__$1);
var G__11787 = null;
var G__11788 = (0);
var G__11789 = (0);
seq__11765_11769 = G__11786;
chunk__11766_11770 = G__11787;
count__11767_11771 = G__11788;
i__11768_11772 = G__11789;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x11799 = cljs.core.clone.call(null,handlers);x11799.forEach = ((function (x11799,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__11800 = cljs.core.seq.call(null,coll);var chunk__11801 = null;var count__11802 = (0);var i__11803 = (0);while(true){
if((i__11803 < count__11802))
{var vec__11804 = cljs.core._nth.call(null,chunk__11801,i__11803);var k = cljs.core.nth.call(null,vec__11804,(0),null);var v = cljs.core.nth.call(null,vec__11804,(1),null);f.call(null,v,k);
{
var G__11806 = seq__11800;
var G__11807 = chunk__11801;
var G__11808 = count__11802;
var G__11809 = (i__11803 + (1));
seq__11800 = G__11806;
chunk__11801 = G__11807;
count__11802 = G__11808;
i__11803 = G__11809;
continue;
}
} else
{var temp__4406__auto__ = cljs.core.seq.call(null,seq__11800);if(temp__4406__auto__)
{var seq__11800__$1 = temp__4406__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11800__$1))
{var c__4359__auto__ = cljs.core.chunk_first.call(null,seq__11800__$1);{
var G__11810 = cljs.core.chunk_rest.call(null,seq__11800__$1);
var G__11811 = c__4359__auto__;
var G__11812 = cljs.core.count.call(null,c__4359__auto__);
var G__11813 = (0);
seq__11800 = G__11810;
chunk__11801 = G__11811;
count__11802 = G__11812;
i__11803 = G__11813;
continue;
}
} else
{var vec__11805 = cljs.core.first.call(null,seq__11800__$1);var k = cljs.core.nth.call(null,vec__11805,(0),null);var v = cljs.core.nth.call(null,vec__11805,(1),null);f.call(null,v,k);
{
var G__11814 = cljs.core.next.call(null,seq__11800__$1);
var G__11815 = null;
var G__11816 = (0);
var G__11817 = (0);
seq__11800 = G__11814;
chunk__11801 = G__11815;
count__11802 = G__11816;
i__11803 = G__11817;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x11799,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x11799;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__11798 = obj;G__11798.push(kfn.call(null,k),vfn.call(null,v));
return G__11798;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t11821 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t11821 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta11822){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta11822 = meta11822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t11821.cljs$lang$type = true;
cognitect.transit.t11821.cljs$lang$ctorStr = "cognitect.transit/t11821";
cognitect.transit.t11821.cljs$lang$ctorPrWriter = (function (this__4166__auto__,writer__4167__auto__,opt__4168__auto__){return cljs.core._write.call(null,writer__4167__auto__,"cognitect.transit/t11821");
});
cognitect.transit.t11821.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t11821.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t11821.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t11821.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t11821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11823){var self__ = this;
var _11823__$1 = this;return self__.meta11822;
});
cognitect.transit.t11821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11823,meta11822__$1){var self__ = this;
var _11823__$1 = this;return (new cognitect.transit.t11821(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta11822__$1));
});
cognitect.transit.__GT_t11821 = (function __GT_t11821(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta11822){return (new cognitect.transit.t11821(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta11822));
});
}
return (new cognitect.transit.t11821(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map