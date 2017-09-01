Ext.data.JsonP.BasiGX_util_Caching({"tagname":"class","name":"BasiGX.util.Caching","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Caching.js","href":"Caching.html#BasiGX-util-Caching"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["BasiGX.util.Map"],"uses":[],"members":[{"name":"getExtentOfCoveringTileGrid","tagname":"method","owner":"BasiGX.util.Caching","id":"static-method-getExtentOfCoveringTileGrid","meta":{"static":true}},{"name":"getGeoWebCacheConfig","tagname":"method","owner":"BasiGX.util.Caching","id":"static-method-getGeoWebCacheConfig","meta":{"static":true}},{"name":"getTileOrigin","tagname":"method","owner":"BasiGX.util.Caching","id":"static-method-getTileOrigin","meta":{"static":true}},{"name":"sanitizeExtent","tagname":"method","owner":"BasiGX.util.Caching","id":"static-method-sanitizeExtent","meta":{"private":true,"static":true}},{"name":"sanitizeTileSize","tagname":"method","owner":"BasiGX.util.Caching","id":"static-method-sanitizeTileSize","meta":{"private":true,"static":true}},{"name":"sanitizeView","tagname":"method","owner":"BasiGX.util.Caching","id":"static-method-sanitizeView","meta":{"private":true,"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.Caching","short_doc":"Caching Util\n\nSome methods that may be helpful in case of caching, e.g. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.Caching</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Map' rel='BasiGX.util.Map' class='docClass'>BasiGX.util.Map</a></div><h4>Files</h4><div class='dependency'><a href='source/Caching.html#BasiGX-util-Caching' target='_blank'>Caching.js</a></div></pre><div class='doc-contents'><p>Caching Util</p>\n\n<p>Some methods that may be helpful in case of caching, e.g. with GeoWebCache</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-getExtentOfCoveringTileGrid' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Caching'>BasiGX.util.Caching</span><br/><a href='source/Caching.html#BasiGX-util-Caching-static-method-getExtentOfCoveringTileGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Caching-static-method-getExtentOfCoveringTileGrid' class='name expandable'>getExtentOfCoveringTileGrid</a>( <span class='pre'>tileSize, maxResolution, extent</span> ) : Array<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Computes an extent that completely covers the given extent\nfor tiles of maxResolution and with the specified tileSize. ...</div><div class='long'><p>Computes an extent that completely covers the given extent\nfor tiles of maxResolution and with the specified tileSize.</p>\n\n<pre><code>+------------------+\n|                  | computed extent\n|----------------+ |\n|                | |\n|     passed     | |\n|     extent     | |\n|                | |\n+----------------+-+\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tileSize</span> : Number|Array&lt;Number&gt;<div class='sub-desc'><p>The tile size in pixels. Can\n    be passed as number or as array of two numbers.</p>\n</div></li><li><span class='pre'>maxResolution</span> : Number<div class='sub-desc'><p>The max resolution of the view.</p>\n</div></li><li><span class='pre'>extent</span> : Array<div class='sub-desc'><p>The extent to use for the gridset.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>The array with two elements representing the\n    tileOrigin coordinate (the upper left coordinate of the\n    covering extent).</p>\n</div></li></ul></div></div></div><div id='static-method-getGeoWebCacheConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Caching'>BasiGX.util.Caching</span><br/><a href='source/Caching.html#BasiGX-util-Caching-static-method-getGeoWebCacheConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Caching-static-method-getGeoWebCacheConfig' class='name expandable'>getGeoWebCacheConfig</a>( <span class='pre'>[view], [tileSize], [extent]</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Call this function from the console (in one of your applications)\nand it returns config information that may be used ...</div><div class='long'><p>Call this function from the console (in one of your applications)\nand it returns config information that may be used to quickly setup a\nmatching GWC gridset in the GeoServer.</p>\n\n<p>Note: If the extent is not passed to this function, the ol.view of\nthe ol.map should have explicitly set an 'extent' property!</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : ol.View (optional)<div class='sub-desc'><p>The OpenLayers map view. If not passed it\n    will be guessed.</p>\n</div></li><li><span class='pre'>tileSize</span> : Array&lt;Number&gt; (optional)<div class='sub-desc'><p>The tile size in pixels. If not\n    passed we'll assume a 256×256 pixel tile size.</p>\n</div></li><li><span class='pre'>extent</span> : Array (optional)<div class='sub-desc'><p>The extent to use for the gridSet. If not\n    passed, we'll take the validity extent of the projection of the\n    view.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with information to quickly setup a GWC\n    gridset in GeoServer.</p>\n</div></li></ul></div></div></div><div id='static-method-getTileOrigin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Caching'>BasiGX.util.Caching</span><br/><a href='source/Caching.html#BasiGX-util-Caching-static-method-getTileOrigin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Caching-static-method-getTileOrigin' class='name expandable'>getTileOrigin</a>( <span class='pre'>tileSize, maxResolution, extent</span> ) : Array<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Computes the tile origin (top left) for a given extent\n(lower left/upper right bbox), maxResolution and tileSize that...</div><div class='long'><p>Computes the tile origin (top left) for a given extent\n(lower left/upper right bbox), maxResolution and tileSize that\ncan be set as the origin on a ol.tilegrid.TileGrid instance to\nmatch a GWC gridset configured in a GeoServer. GetMap requests\nshould use the parameter tiled=true to make use of the cache.</p>\n\n<pre><code>Top-left\nX------------------+\n|                  |\n|----------------+ |\n|                | |\n|     passed     | |\n|     extent     | |\n|                | |\n+----------------+-+\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tileSize</span> : Number|Array&lt;Number&gt;<div class='sub-desc'><p>The tile size in pixels. Can\n    be passed as number or as array of two numbers.</p>\n</div></li><li><span class='pre'>maxResolution</span> : Number<div class='sub-desc'><p>The max resolution of the view.</p>\n</div></li><li><span class='pre'>extent</span> : Array<div class='sub-desc'><p>The extent to use for the gridset.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>The array with two elements representing the\n    tileOrigin coordinate (the upper left coordinate of the\n    covering extent).</p>\n</div></li></ul></div></div></div><div id='static-method-sanitizeExtent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Caching'>BasiGX.util.Caching</span><br/><a href='source/Caching.html#BasiGX-util-Caching-static-method-sanitizeExtent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Caching-static-method-sanitizeExtent' class='name expandable'>sanitizeExtent</a>( <span class='pre'>[extent], [view]</span> ) : Array&lt;Number&gt;<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Sanitizes the passed extent, potentially taking into account the\npassed ol.View. ...</div><div class='long'><p>Sanitizes the passed extent, potentially taking into account the\npassed <code>ol.View</code>. A valid extent (minX, minY, maxX, maxY) will\nbe returned unchanged. When the passed extent is falsy, the view\nwill be queried for a property <code>extent</code>, and the checking of the\nvalidity will use this extent. If we consider the extent invalid,\nthe view will be asked to provide us the validity extent of its\nprojection, and we'll use that.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>extent</span> : Array&lt;Number&gt; (optional)<div class='sub-desc'><p>The extent we want to sanitize.</p>\n</div></li><li><span class='pre'>view</span> : ol.View (optional)<div class='sub-desc'><p>Will be used to in case the passed extent is\n    falsy or otherwise unexpected. First we check if there is a\n    property 'extent' on the view, and finally we'll return the\n    validity extent from the projection of the view. Please note that\n    this might be <code>undefined</code> as well.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array&lt;Number&gt;</span><div class='sub-desc'><p>The normalized extent or <code>undefined</code>.</p>\n</div></li></ul></div></div></div><div id='static-method-sanitizeTileSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Caching'>BasiGX.util.Caching</span><br/><a href='source/Caching.html#BasiGX-util-Caching-static-method-sanitizeTileSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Caching-static-method-sanitizeTileSize' class='name expandable'>sanitizeTileSize</a>( <span class='pre'>[tileSize]</span> ) : Array&lt;Number&gt;<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Sanitizes the passed tile size. ...</div><div class='long'><p>Sanitizes the passed tile size. If a number is passed, this method\nwill assume a rectangular tile and return an array of <code>[in, in]</code>. If\nan array of two numbers is passed, the tile size will be returned\nunchanged. Anything else will result in the default tile size of\n<code>[256, 256]</code> being returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tileSize</span> : Number|Array&lt;Number&gt; (optional)<div class='sub-desc'><p>The tile size in pixels. Can\n    be passed as number or as array of two numbers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array&lt;Number&gt;</span><div class='sub-desc'><p>The sanitized tile size as array of two\n    numbers or <code>[256, 256]</code> if we received something unexpected.</p>\n</div></li></ul></div></div></div><div id='static-method-sanitizeView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Caching'>BasiGX.util.Caching</span><br/><a href='source/Caching.html#BasiGX-util-Caching-static-method-sanitizeView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Caching-static-method-sanitizeView' class='name expandable'>sanitizeView</a>( <span class='pre'>[view]</span> ) : ol.View<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Sanitizes the passed view. ...</div><div class='long'><p>Sanitizes the passed view. If a falsy value is passed or the passed\nview is not an instance of <code>ol.View</code>, guess the map component on the\npage and return the view of its map.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : ol.View (optional)<div class='sub-desc'><p>The OpenLayers map view. If not passed it\n    will be guessed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.View</span><div class='sub-desc'><p>A view or undefined if the view could not be\n    sanitized.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});