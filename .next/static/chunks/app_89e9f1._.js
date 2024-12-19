(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_89e9f1._.js", {

"[project]/app/components/VideoPlayer/Loop.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RepeatOne$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/RepeatOne.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const Loop = ()=>{
    _s();
    const { toggleLoop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const onLoop = ()=>toggleLoop(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn",
            onClick: onLoop,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RepeatOne$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "icon"
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Loop.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/VideoPlayer/Loop.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/VideoPlayer/Loop.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
_s(Loop, "SnVRJ7uDwhGWkRAolvKmh085bNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"]
    ];
});
_c = Loop;
const wiggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
`;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        position: relative;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        margin-left: 20px; /* Adjust margin as needed */
    }

    .btn::after {
        content: "Loop this Video";
        white-space: nowrap;
        position: absolute;
        font-size: 15px;
        color: white;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s linear, top 0.2s linear;
        top: 115%; /* Position the text below the button */
    }

    .btn:hover::after {
        opacity: 1;
        visibility: visible;
        top: 105%; /* Position adjustment on hover */
    }

    .icon {
        fill: black;
        height: 28px;
        width: 28px;
        transition: fill 0.4s ease-in-out;
    }

    .btn:hover > .icon {
        transform: scale(1.2); /* Scale effect on hover */
        fill: rgb(255, 255, 255);
    }

    .btn:active > .icon {
        animation: ${wiggle} 0.5s ease; /* Wiggle effect on click */
    }
`;
_c1 = StyledWrapper;
const __TURBOPACK__default__export__ = Loop;
var _c, _c1;
__turbopack_refresh__.register(_c, "Loop");
__turbopack_refresh__.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/hooks/useDebounce.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useDebounce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
function useDebounce(value, delay = 300) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const timeout = setTimeout({
                "useDebounce.useEffect.timeout": ()=>{
                    setDebouncedValue(value);
                }
            }["useDebounce.useEffect.timeout"], delay);
            return ({
                "useDebounce.useEffect": ()=>clearTimeout(timeout)
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/hooks/useClickOutside.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useClickOutside)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
function useClickOutside(clickRef, setState, eventTypes = [
    "click"
], onOutsideClick// Optional callback for custom behavior on outside click
) {
    _s();
    const handleClickOutside = (e)=>{
        if (clickRef.current && !clickRef.current.contains(e.target)) {
            setState(false);
            if (onOutsideClick) {
                onOutsideClick();
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClickOutside.useEffect": ()=>{
            const eventListener = {
                "useClickOutside.useEffect.eventListener": (e)=>handleClickOutside(e)
            }["useClickOutside.useEffect.eventListener"];
            eventTypes.forEach({
                "useClickOutside.useEffect": (eventType)=>{
                    document.addEventListener(eventType, eventListener, true);
                }
            }["useClickOutside.useEffect"]);
            return ({
                "useClickOutside.useEffect": ()=>{
                    eventTypes.forEach({
                        "useClickOutside.useEffect": (eventType)=>{
                            document.removeEventListener(eventType, eventListener, true);
                        }
                    }["useClickOutside.useEffect"]);
                }
            })["useClickOutside.useEffect"];
        }
    }["useClickOutside.useEffect"], [
        eventTypes,
        clickRef
    ]);
}
_s(useClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/hooks/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/hooks/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/hooks/useDebounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/hooks/useClickOutside.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/hooks/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/hooks/useClickOutside.ts [app-client] (ecmascript) <export default as useClickOutside>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useClickOutside": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/hooks/useClickOutside.ts [app-client] (ecmascript)");
}}),
"[project]/app/components/VideoPlayer/Queue.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Queue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/hooks/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useClickOutside$3e$__ = __turbopack_import__("[project]/app/hooks/useClickOutside.ts [app-client] (ecmascript) <export default as useClickOutside>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/MoreVert.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function Queue({ isPlaylistActive }) {
    _s();
    const clickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tooltipVisible, setTooltipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setYoutubeVideo, setSliderValue, duration } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const [activeVideoIndex, setActiveVideoIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { queueVideos, currentVideo, removeFromQueue, setCurrentVideo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const onVideoClick = async (url)=>{};
    const handleTooltipClick = (index)=>{};
    const handleRemoveVideo = async (videoIndex)=>{};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useClickOutside$3e$__["useClickOutside"])(clickRef, setTooltipVisible, [
        "click"
    ], {
        "Queue.useClickOutside": ()=>{
            console.log("Clicked outside");
        }
    }["Queue.useClickOutside"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-[850px] w-full pt-2 p-4 flex flex-col justify-start bg-transparent rounded-lg shadow-lg",
        style: {
            minWidth: "500px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl text-center font-semibold text-gray-700 mb-4 mt-4",
                children: isPlaylistActive ? 'Songs' : 'Queue'
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2",
                children: queueVideos.map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: `cursor-pointer p-2 rounded-md flex items-center space-x-4
                            ${currentVideo?.url === video?.url ? "bg-stone-300 " : "bg-gray-100 hover:bg-gray-300"}`,
                        onClick: ()=>onVideoClick(video?.url),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: video?.thumbnail || "https://i.imgur.com/Dr1IZF3.jpeg",
                                alt: video?.title,
                                className: "w-16 h-16 object-cover rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        children: video?.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: video?.creator
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                onClick: (e)=>{
                                    e.stopPropagation(); // Prevents click from closing tooltip immediately
                                    handleTooltipClick(index); // Toggle tooltip visibility for the clicked video
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "w-5 h-5 text-gray-600 hover:text-gray-900"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, this),
                                    tooltipVisible && activeVideoIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: clickRef,
                                        className: "absolute right-0 z-10 w-40 bg-white border border-gray-300 rounded-md shadow-lg mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "block w-full px-4 py-2 text-left text-sm hover:bg-gray-200",
                                                onClick: (e)=>{
                                                    e.stopPropagation(); // Stop propagation for button click only
                                                    handleRemoveVideo(index); // Call remove function
                                                },
                                                children: "Remove from Queue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                                lineNumber: 64,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "block w-full px-4 py-2 text-left text-sm hover:bg-gray-200",
                                                onClick: (e)=>{
                                                    e.stopPropagation(); // Stop propagation for button click only
                                                // handleDownload(video.url); // Call download function
                                                },
                                                children: "Download"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                                lineNumber: 73,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                        lineNumber: 63,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/VideoPlayer/Queue.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(Queue, "fKS7j1qih6cUL3PA82CbBv6eOZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useClickOutside$3e$__["useClickOutside"]
    ];
});
_c = Queue;
var _c;
__turbopack_refresh__.register(_c, "Queue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/formatTime.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "formatTime": (()=>formatTime)
});
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = Math.round(seconds % 60);
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    } else {
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/randomCodeGenerator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>randomCodeGenerator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
;
function randomCodeGenerator() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 6;
    const code = Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(length)).map((byte)=>characters[byte % characters.length]).join("");
    const minutes = 10;
    const timelimit = minutes * 60 * 1000;
    const expirationDate = Date.now() + timelimit;
    return {
        code,
        expirationDate
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/createSearchParams.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createSearchParams": (()=>createSearchParams)
});
function createSearchParams(params) {
    const searchParams = new URLSearchParams();
    setTimeout(()=>{
        Object.entries(params).forEach(([key, value])=>{
            searchParams.set(key, value);
        });
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        if (window.location.search !== `?${searchParams.toString()}`) {
            window.history.replaceState(null, "", newUrl);
        }
    }, 1000);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/Email/sendVerificationEmail.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "sendVerificationEmail": (()=>sendVerificationEmail)
});
async function sendVerificationEmail(email) {
    try {
        const response = await fetch("/api/emails/verification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });
        if (response.ok) {
            const { data, code, expirationDate } = await response.json();
            return {
                success: true,
                data,
                code,
                expirationDate
            };
        } else {
            const errorData = await response.json();
            return {
                success: false,
                error: errorData.error || "Failed to send email"
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/setNewVideo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>setNewVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
async function setNewVideo(setYoutubeVideo, setTiktokVideo, isPlaylistActive, setSliderValue, playlistID) {
    _s();
    const { playlistVideos, queueVideos, currentVideo, setCurrentVideo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const activeVideos = isPlaylistActive ? playlistVideos : queueVideos;
    console.log("Active Videos:", activeVideos); // Check active videos
    console.log(currentVideo);
    if (!currentVideo || activeVideos.length === 0) return;
    const currentIndex = activeVideos.findIndex((video)=>video?.videoID === currentVideo.videoID);
    const nextIndex = (currentIndex + 1) % activeVideos.length;
    const nextVideo = activeVideos[nextIndex];
    console.log("Current Video:", currentVideo); // Check current video
    console.log("Next Video:", nextVideo); // Check next video
    if (nextVideo && nextVideo.platform === "youtube" || nextVideo && nextVideo.url.includes("youtube")) {
        setTiktokVideo(null);
        setYoutubeVideo({
            ...nextVideo,
            index: nextIndex.toString()
        });
        setCurrentVideo({
            ...nextVideo,
            index: nextIndex.toString()
        });
        console.log("Current video set to:", nextVideo); // Log current video after setting
        const { start, end } = nextVideo;
        setTimeout(()=>{
            if (start && end) {
                setSliderValue([
                    parseInt(start),
                    parseInt(end)
                ]);
            }
        }, 500);
    } else if (nextVideo && nextVideo.platform === "tiktok" || nextVideo && nextVideo.url.includes("tiktok")) {
        console.log("Setting TikTok video:", nextVideo.videoID); // Log next TikTok video
        setYoutubeVideo(null);
        setTiktokVideo({
            ...nextVideo,
            index: nextIndex.toString()
        });
        setCurrentVideo({
            ...nextVideo,
            index: nextIndex.toString()
        });
        console.log("Current video set to:", nextVideo); // Log current video after setting
        const index = nextVideo?.index?.toString();
        if (playlistID && index) {
            const newSearchParams = {
                tVideoID: currentVideo.videoID,
                list: playlistID,
                index
            };
            console.log(newSearchParams);
        // createSearchParams(newSearchParams);
        }
    }
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// const result = await getVideoDetails(url);
// if (!result) return;
// const videoDetails = result.soundCloudVideoDetails || result.tiktokVideoDetails || result.youtubeVideoDetails;
// if (!videoDetails) return;
// const { index, video } = containsVideoID(videos, videoDetails.videoID);
// if (!index || !video) return;
// const ccurrentVideo = videos[index];
// if (!currentVideo) return;
// const list = playlistID;
// const { start, end } = currentVideo;
// if (result.youtubeVideoDetails) {
//     if (start && end) {
//         if (!list || !index) {
//             setSliderValue([parseInt(start), parseInt(end)]);
//         } else {
//             setTimeout(() => {
//                 setSliderValue([parseInt(start), parseInt(end)]);
//             }, 500);
//         }
//     } else {
//         setSliderValue([0, duration]);
//     }
//     const extendedVideo: Player = {
//         ...currentVideo,
//         list: playlistID,
//         index: index.toString(),
//     };
//     setTiktokVideo(null);
//     setYoutubeVideo(extendedVideo);
// } else if (result.tiktokVideoDetails) {
//     const extendedVideo: Player = {
//         ...currentVideo,
//         list: playlistID,
//         index: index.toString(),
//     };
//     setYoutubeVideo(null);
//     setTiktokVideo(extendedVideo);
// }
// if (videos[index]) setCurrentVideo(videos[index]);
}
_s(setNewVideo, "5JLvs9M/NljDgw9FzpVTy0z+8b4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/sanitizeURLs.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "sanitizeEmbeddedYoutubeURL": (()=>sanitizeEmbeddedYoutubeURL),
    "sanitizeTiktokURL": (()=>sanitizeTiktokURL),
    "sanitizeYoutubeShortsURL": (()=>sanitizeYoutubeShortsURL),
    "sanitizeYoutubeURL": (()=>sanitizeYoutubeURL)
});
function sanitizeTiktokURL(url) {
    const match = url.match(/\/video\/(\d+)/); // Regex to match the video ID
    return match ? match[1] : null;
}
function sanitizeYoutubeShortsURL(url) {
    const match = url.match(/\/shorts\/([\w-]+)/);
    return match ? match[1] : null;
}
function sanitizeYoutubeURL(url) {
    const match = url.match(/(?:v=)([^"&?/\s]{11})/);
    return match ? match[1] : null;
}
function sanitizeEmbeddedYoutubeURL(url) {
    const match = url.match(/youtu\.be\/([^"&?/\s]{11})/);
    return match ? match[1] : null;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/getVideoID.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getVideoID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/sanitizeURLs.ts [app-client] (ecmascript)");
;
function getVideoID(platform, url) {
    if (platform === "Youtube") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeYoutubeURL"])(url);
    else if (platform === 'Youtube Shorts') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeYoutubeShortsURL"])(url);
    else if (platform === 'Youtu.be') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeEmbeddedYoutubeURL"])(url);
    else if (platform === 'Tiktok') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeTiktokURL"])(url);
    else if (platform === 'SoundCloud') return 'SoundCloud';
    else return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/getPlatform.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getPlatform)
});
function getPlatform(url) {
    const supportedPlatforms = [
        {
            regex: /youtu\.be/i,
            name: "Youtu.be"
        },
        {
            regex: /tiktok\.com/i,
            name: "Tiktok"
        },
        {
            regex: /youtube\.com/i,
            name: "Youtube"
        },
        {
            regex: /twitter\.com/i,
            name: "Twitter"
        },
        {
            regex: /instagram\.com/i,
            name: "Instagram"
        },
        {
            regex: /soundcloud\.com/i,
            name: "SoundCloud"
        }
    ];
    for (const platform of supportedPlatforms){
        if (platform.regex.test(url)) {
            if (platform.name === "Youtube" && url.includes("shorts")) return "Youtube Shorts";
            return platform.name;
        }
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getYoutubeVideoDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const YOUTUBE_API_KEY = ("TURBOPACK compile-time value", "AIzaSyB07-q_W3W_ny__TQoe3QPQopxPVDJ1SOM");
async function getYoutubeVideoDetails(videoID) {
    try {
        const result = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${YOUTUBE_API_KEY}`);
        if (!result.ok) throw new Error(`Failed to fetch video details: ${result.statusText}`);
        const data = await result.json();
        if (data.items && data.items.length < 0) throw new Error(`No video Found`);
        const video = data.items[0].snippet;
        return {
            success: true,
            error: null,
            title: video.title,
            creator: video.channelTitle,
            thumbnail: video.thumbnails?.high?.url || video.thumbnails?.medium?.url || video.thumbnails?.default?.url
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            title: null,
            creator: null,
            thumbnail: null
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>fetchTiktokVideoDetails)
});
async function fetchTiktokVideoDetails(url) {
    try {
        const response = await fetch(`/api/tiktok/video?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return {
            success: true,
            error: null,
            data
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            data: null
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getVideoDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoID$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoID.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getPlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getPlatform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-client] (ecmascript)");
;
;
;
;
async function getVideoDetails(url) {
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getPlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(url);
    if (!platform) return null;
    const videoID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoID$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(platform, url);
    if (!videoID) return null;
    const PlayerDetails = {
        tiktokVideoDetails: null,
        youtubeVideoDetails: null,
        soundCloudVideoDetails: null
    };
    if (platform === "Youtube") {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(videoID);
        if (result.error) return null;
        const { thumbnail, title, creator } = result;
        return {
            ...PlayerDetails,
            youtubeVideoDetails: {
                title,
                videoID,
                thumbnail,
                creator,
                url: `https://www.youtube.com/watch?v=${videoID}`
            }
        };
    } else if (platform === "Tiktok") {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(url);
        if (result.error) return null;
        const { creator, title, thumbnail } = result.data;
        const creatorAndID = `${creator}+${videoID}`;
        return {
            ...PlayerDetails,
            tiktokVideoDetails: {
                url,
                title,
                creator,
                thumbnail,
                videoID: creatorAndID
            }
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/createVideoObject.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createVideoObject)
});
function createVideoObject(duration, tiktokVideo, youtubeVideo, soundCloudVideo) {
    const video = tiktokVideo || youtubeVideo || soundCloudVideo;
    if (!video) return null;
    // Fetch url params
    const params = new URLSearchParams(window.location.search);
    const soundCloudVideoID = params.get("sVideoID");
    const youtubeVideoID = params.get("yVideoID");
    const tiktokVideoID = params.get("tVideoID");
    const start = params.get("start");
    const index = params.get("index");
    const list = params.get("list");
    const end = params.get("end");
    return {
        ...video,
        start: start || video.start || "0",
        end: end || video.end || duration.toString(),
        platform: tiktokVideo ? "tiktok" : youtubeVideo ? "youtube" : "soundcloud"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/createNewVideo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createNewVideo)
});
function createNewVideo(required, optionals) {
    if (!required) return;
    return {
        ...required,
        ...optionals
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/createVideo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createNewVideo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-client] (ecmascript)");
;
;
;
async function createVideo({ videoID, platform, setYoutubeVideo, setTiktokVideo, setSoundCloudVideo, optionals }) {
    switch(platform){
        case "youtube":
            if (typeof setYoutubeVideo === "undefined" || !setYoutubeVideo) return;
            const youtubeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(videoID);
            if (!youtubeResults) return;
            console.log(youtubeResults.creator);
            const requiredYoutubeVideoDetails = {
                videoID: videoID,
                title: youtubeResults.title,
                platform: "youtube",
                creator: youtubeResults.creator,
                thumbnail: youtubeResults.thumbnail,
                url: `https://www.youtube.com/watch?v=${videoID}`
            };
            const newYoutubeVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(requiredYoutubeVideoDetails, optionals);
            if (newYoutubeVideo) setYoutubeVideo(newYoutubeVideo);
            break;
        case "tiktok":
            if (typeof setTiktokVideo === "undefined" || !setTiktokVideo) return;
            const tiktokVideoURL = `https://www.tiktok.com/@${videoID.split("+")[0]}/video/${videoID.split("+")[1]}`;
            const tiktokResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tiktokVideoURL);
            if (tiktokResults.error) return null;
            const { creator, title, thumbnail } = tiktokResults.data;
            const creatorAndID = `${creator}+${videoID}`;
            const requiredTiktokVideoDetails = {
                title,
                creator,
                thumbnail,
                platform: "tiktok",
                url: tiktokVideoURL,
                videoID
            };
            const newTiktokVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(requiredTiktokVideoDetails, optionals);
            if (newTiktokVideo) setTiktokVideo(newTiktokVideo);
            break;
        default:
            break;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>setNewPlayerVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-client] (ecmascript)");
;
;
async function setNewPlayerVideo(setTiktokVideo, setYoutubeVideo, setSliderValue, setSoundCloudVideo) {
    // Fetch url params
    const params = new URLSearchParams(window.location.search);
    const soundCloudVideoID = params.get("sVideoID");
    const youtubeVideoID = params.get("yVideoID");
    const tiktokVideoID = params.get("tVideoID");
    const start = params.get("start");
    const index = params.get("index");
    const list = params.get("list");
    const end = params.get("end");
    // Default video
    const defaultVideoID = "FfsINwUQ75Q";
    const defaultUrl = `https://www.youtube.com/watch?v=${defaultVideoID}`;
    // Youtube
    const youtube_all = youtubeVideoID && start && end && list && index;
    const youtube_base = youtubeVideoID && !start && !end && !list && !index;
    const youtube_base_start_end = youtubeVideoID && start && end && !list && !index;
    // Tiktok
    const tiktok_all = tiktokVideoID && list && index;
    const tiktok_base = tiktokVideoID && !list && !index;
    // SoundCloud
    const soundCloud_all = soundCloudVideoID && start && end && list && index;
    const soundCloud_base = soundCloudVideoID && !start && !end && !list && !index;
    const soundCloud_start_end = soundCloudVideoID && start && end && !list && !index;
    // Default
    const default_ = !youtubeVideoID && !tiktokVideoID && !soundCloudVideoID && !start && !end && !list && !index;
    // Clear all video states
    setTiktokVideo(null);
    setYoutubeVideo(null);
    setSoundCloudVideo(null);
    // Play default video if no url params exist
    if (params.size === 0 || default_) {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultVideoID);
        if (!result.success) return;
        setYoutubeVideo({
            url: defaultUrl,
            platform: "youtube",
            title: result.title,
            creator: result.creator,
            videoID: defaultVideoID,
            thumbnail: result.thumbnail
        });
    } else if (youtube_base) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            setYoutubeVideo,
            platform: "youtube",
            videoID: youtubeVideoID
        });
    } else if (youtube_all || youtube_base_start_end) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            platform: "youtube",
            optionals: {
                start,
                end
            },
            setYoutubeVideo,
            videoID: youtubeVideoID
        });
        setTimeout(()=>{
            setSliderValue([
                parseInt(start),
                parseInt(end)
            ]);
        }, 1000);
    } else if (tiktok_base || tiktok_all) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            setTiktokVideo,
            platform: "tiktok",
            videoID: tiktokVideoID
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/firebase/addVideoToPlaylist.ts [app-client] (ecmascript) <export default as addVideoToPlaylist>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addVideoToPlaylist": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/addVideoToPlaylist.ts [app-client] (ecmascript)");
}}),
"[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>processVideoAddition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__addVideoToPlaylist$3e$__ = __turbopack_import__("[project]/app/firebase/addVideoToPlaylist.ts [app-client] (ecmascript) <export default as addVideoToPlaylist>");
;
;
async function processVideoAddition(buttonType, setCurrentVideo, video, addVideo, userID) {
    if (typeof userID !== "undefined" && userID) {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__addVideoToPlaylist$3e$__["addVideoToPlaylist"])(userID, video);
        if (!result.success) return;
        addVideo(video);
        setCurrentVideo(video);
        buttonType === "queue" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Video added to the queue") : buttonType === "playlist" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Video added to the playlist") : "";
    } else {
        addVideo(video);
        setCurrentVideo(video);
        buttonType === "queue" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Video added to the queue") : buttonType === "playlist" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Video added to the playlist") : "";
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/getTiktokVideoDetails.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getTikTokVideoDetails": (()=>getTikTokVideoDetails)
});
async function getTikTokVideoDetails(url) {
    try {
        const apiUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch TikTok metadata: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            success: true,
            error: null,
            title: data.title,
            creator: data.author_unique_id,
            thumbnail: data.thumbnail_url
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            title: null,
            creator: null,
            thumbnail: null
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/containsVideo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "containsVideo": (()=>containsVideo),
    "containsVideoID": (()=>containsVideoID)
});
function containsVideo(videos, newVideo) {
    return videos.some((video)=>(video && video.url) === (newVideo && newVideo.url));
}
function containsVideoID(videos, videoID) {
    const index = videos.findIndex((video)=>(video && video.videoID) === videoID);
    return {
        video: index !== -1 ? videos[index] : null,
        index: index !== -1 ? index : null
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewVideo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewPlayerVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getTiktokVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getTiktokVideoDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/containsVideo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/utils/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/formatTime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$randomCodeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/randomCodeGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/createSearchParams.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Email$2f$sendVerificationEmail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/Email/sendVerificationEmail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-client] (ecmascript) <export default as getVideoDetails>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getVideoDetails": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-client] (ecmascript)");
}}),
"[project]/app/components/VideoPlayer/Input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__getVideoDetails$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-client] (ecmascript) <export default as getVideoDetails>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/createSearchParams.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
function Input() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { setYoutubeVideo, setTiktokVideo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Input.useEffect": ()=>{
            if (url.length < 10) return;
            console.log(url);
            fetchVideoData(url, setYoutubeVideo, setTiktokVideo);
        }
    }["Input.useEffect"], [
        url
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mb-4 h-12 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: url,
            autoComplete: "off",
            onChange: (e)=>setUrl(e.target.value),
            placeholder: "https://www.youtube.com/watch?v=FfsINwUQ75Q",
            className: "h-full w-full rounded-lg border-2 border-gray-200 bg-white px-6 py-2 text-black placeholder-gray-500 outline-none"
        }, void 0, false, {
            fileName: "[project]/app/components/VideoPlayer/Input.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/VideoPlayer/Input.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(Input, "+hEKrAXTRlSkJZ06u5Q7EQrz3ls=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = Input;
async function fetchVideoData(url, setYoutubeVideo, setTiktokVideo) {
    let newSearchParams = {};
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__getVideoDetails$3e$__["getVideoDetails"])(url);
    let videoDetails = null;
    if (!result) return;
    if (result.youtubeVideoDetails) {
        videoDetails = result.youtubeVideoDetails;
        newSearchParams = {
            yVideoID: videoDetails.videoID
        };
    } else if (result.tiktokVideoDetails) {
        videoDetails = result.tiktokVideoDetails;
        newSearchParams = {
            tVideoID: videoDetails.videoID
        };
    }
    if (videoDetails) {
        console.log("running in Input.tsx", videoDetails, newSearchParams);
        if (result.youtubeVideoDetails) {
            setTiktokVideo(null);
            setYoutubeVideo(videoDetails);
        } else if (result.tiktokVideoDetails) {
            setYoutubeVideo(null);
            setTiktokVideo(videoDetails);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSearchParams"])(newSearchParams);
    }
}
var _c;
__turbopack_refresh__.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/ShufftleVideos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Shuffle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const Shuffle = ()=>{
    _s();
    const { toggleLoop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const onShuffle = ()=>toggleLoop(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn",
            onClick: onShuffle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "icon"
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/ShufftleVideos.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/VideoPlayer/ShufftleVideos.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/VideoPlayer/ShufftleVideos.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
};
_s(Shuffle, "SnVRJ7uDwhGWkRAolvKmh085bNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"]
    ];
});
_c = Shuffle;
const wiggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
`;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        position: relative;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        margin-left: 20px; /* Adjust margin as needed */
    }

    .btn::after {
        content: "Shuffle Videos";
        white-space: nowrap;
        position: absolute;
        font-size: 15px;
        color: white;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s linear, top 0.2s linear;
        top: 115%; /* Position the text below the button */
    }

    .btn:hover::after {
        opacity: 1;
        visibility: visible;
        top: 105%; /* Position adjustment on hover */
    }

    .icon {
        fill: black;
        transition: fill 0.4s ease-in-out;
        height: 28px;
        width: 28px;
    }

    .btn:hover > .icon {
        transform: scale(1.2); /* Scale effect on hover */
        fill: rgb(255, 255, 255);
    }

    .btn:active > .icon {
        animation: ${wiggle} 0.5s ease; /* Wiggle effect on click */
    }
`;
_c1 = StyledWrapper;
const __TURBOPACK__default__export__ = Shuffle;
var _c, _c1;
__turbopack_refresh__.register(_c, "Shuffle");
__turbopack_refresh__.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/createVideoObject.ts [app-client] (ecmascript) <export default as createVideoObject>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createVideoObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-client] (ecmascript)");
}}),
"[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-client] (ecmascript) <export default as processVideoAddition>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "processVideoAddition": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-client] (ecmascript)");
}}),
"[project]/app/components/VideoPlayer/QueueButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createVideoObject$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-client] (ecmascript) <export default as createVideoObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/containsVideo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__processVideoAddition$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-client] (ecmascript) <export default as processVideoAddition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const QueueButton = ()=>{
    _s();
    const { tiktokVideo, soundCloudVideo, youtubeVideo, duration } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const { addToQueue, queueVideos, setCurrentVideo, togglePlaylist, clearPlaylist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const onClickEvent = async (e)=>{
        const video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createVideoObject$3e$__["createVideoObject"])(duration, tiktokVideo, youtubeVideo, soundCloudVideo);
        if (!video) return;
        clearPlaylist();
        togglePlaylist(false);
        console.log(video);
        console.log(queueVideos);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsVideo"])(queueVideos, video)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Video is already in the queue");
        const platform = video.platform;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__processVideoAddition$3e$__["processVideoAddition"])("queue", setCurrentVideo, video, addToQueue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn",
            title: "Add New",
            onClick: onClickEvent,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: "icon",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/QueueButton.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 12H16",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/QueueButton.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 16V8",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/QueueButton.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoPlayer/QueueButton.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/VideoPlayer/QueueButton.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/VideoPlayer/QueueButton.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
};
_s(QueueButton, "SZbtnx2gtrahEukP7KObDveJUIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"]
    ];
});
_c = QueueButton;
const wiggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
`;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        position: relative;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        margin-left: 20px; /* Adjust margin as needed */
        padding: 0; /* Reset padding for a consistent look */
    }

    .btn::after {
        content: "Add To Queue";
        white-space: nowrap;
        position: absolute;
        font-size: 15px;
        color: white;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s linear, top 0.2s linear;
        top: 115%; /* Position the text below the button */
    }

    .btn:hover::after {
        opacity: 1;
        visibility: visible;
        top: 105%; /* Position adjustment on hover */
    }

    .icon {
        stroke: #fff;
        fill: none;
        width: 35px;
        height: 35px;
        transition: fill 0.4s ease-in-out, transform 0.4s ease-in-out;
    }

    .btn:hover > .icon {
        fill: #ff0000; /* Red fill on hover */
        transform: rotate(90deg); /* Rotate effect */
    }

    .btn:active > .icon {
        fill: #00d1b2; /* Teal fill on active */
        animation: ${wiggle} 0.5s ease; /* Wiggle effect on click */
    }
`;
_c1 = StyledWrapper;
const __TURBOPACK__default__export__ = QueueButton;
var _c, _c1;
__turbopack_refresh__.register(_c, "QueueButton");
__turbopack_refresh__.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/Slider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PlayerSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Slider$2f$Slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Slider/Slider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/formatTime.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
function PlayerSlider() {
    _s();
    const { duration, sliderValue, setSliderValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const onSliderChange = (event, value)=>{
        setSliderValue(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Slider$2f$Slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                min: 0,
                max: duration,
                value: sliderValue,
                onChange: onSliderChange,
                valueLabelDisplay: "auto",
                valueLabelFormat: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(value),
                sx: {
                    color: "#ffffff"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Slider.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-between mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-white",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(sliderValue[0])
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Slider.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-white",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(sliderValue[1])
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Slider.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoPlayer/Slider.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(PlayerSlider, "PnxZa8Yv7WYLTrcJDr8nRxyeeH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = PlayerSlider;
var _c;
__turbopack_refresh__.register(_c, "PlayerSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/YoutubePlayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>YoutubePlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/Slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/createSearchParams.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$player$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-player/youtube.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function YoutubePlayer({ youtubePlayerRef, youtubeVideo }) {
    _s();
    const { resetSlider, setYoutubeVideo, setTiktokVideo, setSliderValue, setDuration, sliderValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const { setVideoIsEnded, playNextVideo, loopEnabled, playlistID } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const { isPlaylistActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const url = youtubeVideo?.url;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YoutubePlayer.useEffect": ()=>{
            resetSlider();
            setVideoIsEnded(false);
        }
    }["YoutubePlayer.useEffect"], [
        youtubeVideo?.url,
        resetSlider
    ]);
    const handleDuration = (videoLength)=>{
        setDuration(videoLength);
        setSliderValue([
            0,
            videoLength
        ]);
    };
    const handleProgress = (progress)=>{
        const tolerance = 1;
        if (progress.playedSeconds >= sliderValue[1] - tolerance && progress.playedSeconds <= sliderValue[1] + tolerance || progress.playedSeconds >= sliderValue[1]) {
            if (loopEnabled) {
                youtubePlayerRef.current.seekTo(sliderValue[0]); // Seek to the loop start
            } else {
                setVideoIsEnded(true);
                playNextVideo(setTiktokVideo, setYoutubeVideo, setSliderValue, isPlaylistActive, playlistID, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSearchParams"]);
            }
        }
    };
    if (!youtubeVideo) return;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$player$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                playing: true,
                controls: true,
                url: url,
                width: "100%",
                height: "100%",
                ref: youtubePlayerRef,
                onDuration: handleDuration,
                onProgress: handleProgress,
                onError: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error loading video, please check the URL.");
                }
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/YoutubePlayer.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/YoutubePlayer.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(YoutubePlayer, "3DyuSf2O6jn98JuJGfp2EdOzoGQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = YoutubePlayer;
var _c;
__turbopack_refresh__.register(_c, "YoutubePlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/Tooltips.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Tooltips)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
;
;
function Tooltips() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/login",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 top-[550px] transform -translate-x-1/5 z-10 w-64 p-4 bg-white shadow-lg border border-stone-900 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700",
                    children: "Want to watch this again later? Sign in to add this video to a playlist."
                }, void 0, false, {
                    fileName: "[project]/app/components/VideoPlayer/Tooltips.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-4 inline-block text-blue-600 hover:text-blue-700 font-semibold",
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/app/components/VideoPlayer/Tooltips.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/VideoPlayer/Tooltips.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/VideoPlayer/Tooltips.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = Tooltips;
var _c;
__turbopack_refresh__.register(_c, "Tooltips");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/PlaylistButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Tooltips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/Tooltips.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/hooks/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useClickOutside$3e$__ = __turbopack_import__("[project]/app/hooks/useClickOutside.ts [app-client] (ecmascript) <export default as useClickOutside>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createVideoObject$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-client] (ecmascript) <export default as createVideoObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/containsVideo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__processVideoAddition$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-client] (ecmascript) <export default as processVideoAddition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$QueueMusic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/QueueMusic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
const PlaylistButton = ()=>{
    _s();
    const { tiktokVideo, soundCloudVideo, youtubeVideo, duration } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const { addToPlaylist, playlistID, playlistVideos, setCurrentVideo, togglePlaylist, clearQueue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [showTooltips, setShowTooltips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const clickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useClickOutside$3e$__["useClickOutside"])(clickRef, setShowTooltips, [
        "click"
    ], {
        "PlaylistButton.useClickOutside": ()=>{
            console.log("Clicked outside");
        }
    }["PlaylistButton.useClickOutside"]);
    const onClickEvent = async (e)=>{
        if (!user) {
            setShowTooltips(true);
            return;
        }
        const video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createVideoObject$3e$__["createVideoObject"])(duration, tiktokVideo, youtubeVideo, soundCloudVideo);
        if (!video) return;
        clearQueue();
        togglePlaylist(true);
        console.log(video, youtubeVideo);
        console.log(playlistVideos);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsVideo"])(playlistVideos, video)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Video is already in the playlist");
        const platform = video.platform;
        const userID = user.uid;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__processVideoAddition$3e$__["processVideoAddition"])("playlist", setCurrentVideo, video, addToPlaylist, userID);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn",
                title: "Add to Playlist",
                onClick: onClickEvent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$QueueMusic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "icon"
                }, void 0, false, {
                    fileName: "[project]/app/components/VideoPlayer/PlaylistButton.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/PlaylistButton.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            showTooltips && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: clickRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Tooltips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/components/VideoPlayer/PlaylistButton.tsx",
                    lineNumber: 50,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/PlaylistButton.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/VideoPlayer/PlaylistButton.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
};
_s(PlaylistButton, "hEgXNEbDivySs1tgz+bj14Cq9e4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useClickOutside$3e$__["useClickOutside"]
    ];
});
_c = PlaylistButton;
const wiggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
`;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        position: relative;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        padding: 0;
    }

    .btn::after {
        content: "Add to Playlist";
        white-space: nowrap;
        position: absolute;
        font-size: 15px;
        color: white;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.2s linear,
            top 0.2s linear;
        top: 115%; /* Position the text below the button */
    }

    .btn:hover::after {
        opacity: 1;
        visibility: visible;
        top: 105%; /* Position adjustment on hover */
    }

    .icon {
        color: white;
        width: 35px;
        height: 35px;
        transition:
            color 0.4s ease-in-out,
            transform 0.4s ease-in-out;
    }

    .btn:hover > .icon {
        fill: #ff0000; /* Red on hover */
        transform: scale(1.2); /* Scale effect */
    }

    .btn:active > .icon {
        animation: ${wiggle} 0.8s ease; /* Wiggle effect on click */
    }
`;
_c1 = StyledWrapper;
const __TURBOPACK__default__export__ = PlaylistButton;
var _c, _c1;
__turbopack_refresh__.register(_c, "PlaylistButton");
__turbopack_refresh__.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/TiktokPlayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TiktokPlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/createSearchParams.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
function TiktokPlayer({ tiktokVideo }) {
    _s();
    if (!tiktokVideo) return null;
    const { setYoutubeVideo, setTiktokVideo, setSliderValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const { loopEnabled, playNextVideo, playlistID } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    const { isPlaylistActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const videoID = tiktokVideo.videoID.split("+")[1];
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasEnded, setHasEnded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TiktokPlayer.useEffect": ()=>{
            const handlePlayerMessage = {
                "TiktokPlayer.useEffect.handlePlayerMessage": (event)=>{
                    if (event.data?.["x-tiktok-player"]) {
                        if (event.data.type === "onPlayerReady") {
                            iframeRef.current?.contentWindow?.postMessage({
                                type: "unMute",
                                "x-tiktok-player": true
                            }, "*");
                        }
                        if (event.data.type === "onStateChange" && event.data.value === 0) {
                            setHasEnded(true);
                        }
                    }
                }
            }["TiktokPlayer.useEffect.handlePlayerMessage"];
            window.addEventListener("message", handlePlayerMessage);
            return ({
                "TiktokPlayer.useEffect": ()=>{
                    window.removeEventListener("message", handlePlayerMessage);
                }
            })["TiktokPlayer.useEffect"];
        }
    }["TiktokPlayer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TiktokPlayer.useEffect": ()=>{
            if (hasEnded && !loopEnabled) {
                playNextVideo(setTiktokVideo, setYoutubeVideo, setSliderValue, isPlaylistActive, playlistID, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSearchParams"]);
            }
        }
    }["TiktokPlayer.useEffect"], [
        hasEnded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-700 rounded-lg h-[700px] w-[1000px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                ref: iframeRef,
                src: `https://www.tiktok.com/player/v1/${videoID}?autoplay=1&mute=0&loop=${loopEnabled ? 1 : 0}&volume_control=1&fullscreen_button=1`,
                allow: "fullscreen; autoplay",
                width: "100%",
                height: "100%",
                title: "TikTok Video",
                style: {
                    border: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/TiktokPlayer.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            hasEnded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white",
                children: "The video has ended."
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/TiktokPlayer.tsx",
                lineNumber: 50,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/VideoPlayer/TiktokPlayer.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(TiktokPlayer, "6L+8qKc228J0VNnIWYm1anM2mrI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = TiktokPlayer;
var _c;
__turbopack_refresh__.register(_c, "TiktokPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/ui.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Loop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/Loop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Playlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/Playlist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$ShufftleVideos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/ShufftleVideos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$QueueButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/QueueButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$YoutubePlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/YoutubePlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$PlaylistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/PlaylistButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$TiktokPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/TiktokPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
function UI({ youtubeVideo, tiktokVideo, youtubePlayerRef }) {
    _s();
    const { isPlaylistActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const { clearQueue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UI.useEffect": ()=>{
            console.log(isPlaylistActive);
            clearQueue();
        }
    }["UI.useEffect"], [
        isPlaylistActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-16 relative flex min-h-screen bg-gradient-to-t from-teal-200 via-teal-100 to-teal-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col 2xl:flex-row justify-center items-start mt-4 mx-4 space-y-8 2xl:space-y-0 2xl:space-x-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[850px] w-full 2xl:w-[1000px] flex flex-col justify-between items-center bg-transparent rounded-lg shadow-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$YoutubePlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    youtubeVideo: youtubeVideo,
                                    youtubePlayerRef: youtubePlayerRef
                                }, void 0, false, {
                                    fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$TiktokPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    tiktokVideo: tiktokVideo
                                }, void 0, false, {
                                    fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg flex items-center justify-between mt-2 space-x-20 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Loop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$PlaylistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$QueueButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$ShufftleVideos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[850px] w-full 2xl:w-[500px] flex flex-col justify-between items-center bg-transparent rounded-lg shadow-lg p-6",
                            children: isPlaylistActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Playlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                                lineNumber: 47,
                                columnNumber: 46
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-8 left-8 z-50 w-auto max-w-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                        duration: 5000,
                        richColors: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/VideoPlayer/ui.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/VideoPlayer/ui.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(UI, "fPrFmbxm4atTk6heeco5gRPOzUY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"]
    ];
});
_c = UI;
var _c;
__turbopack_refresh__.register(_c, "UI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/Guide.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Guide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Guide() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen p-8 text-center bg-gradient-to-t from-stone-50 via-transparent to-stone-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-6 text-teal-600",
                children: "What is LooTube?"
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 mb-4",
                children: "LoopTube is a free online tool to repeat any YouTube videos. Just select YouTube videos by typing a URL in the search bar, and you can set AB loop at any point of the video. This is useful when you want to learn some skills (such as languages, sports, music, etc.) by watching a specific part over and over."
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-semibold mb-4 text-teal-700",
                children: "Features:"
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc list-inside text-gray-700 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: "Select any video from a supported platform by pasting the URL"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: "Repeat the full or a part of a video in an infinite loop"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: "Control the video with simple buttons or keyboard shortcuts"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: "Take notes while controlling the video with keyboard shortcuts"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-semibold mb-4 mt-6 text-teal-700",
                children: "Supported platforms:"
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc list-inside text-gray-700 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: " Youtube "
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: " Youtube Shorts "
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: " Tiktok "
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-semibold mb-4 mt-6 text-teal-700",
                children: "Report a Bug"
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 mb-4",
                children: "We appreciate your feedback! If you encounter any issues while using LoopTube, please let us know so we can fix them. To report a bug, kindly provide the following information:"
            }, void 0, false, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc list-inside text-gray-700 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Description:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            " A brief description of the bug you encountered."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Steps to Reproduce:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this),
                            " Detailed steps on how to reproduce the bug."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Expected Behavior:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            " What you expected to happen when using the tool."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Device & Browser:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            " Information about your device and the browser you were using."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 mt-4",
                children: [
                    "You can report bugs directly to our support team at",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "mailto:support@looptube.com",
                        className: "text-teal-700 hover:underline",
                        children: "support@looptube.com"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    " ",
                    "or use the contact form on our website."
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/VideoPlayer/Guide.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
_c = Guide;
var _c;
__turbopack_refresh__.register(_c, "Guide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-client] (ecmascript) <export default as setNewPlayerVideo>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "setNewPlayerVideo": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewPlayerVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewPlayerVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-client] (ecmascript)");
}}),
"[project]/app/components/VideoPlayer/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>VideoPlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Guide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/VideoPlayer/Guide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/createSearchParams.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewPlayerVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__setNewPlayerVideo$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-client] (ecmascript) <export default as setNewPlayerVideo>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function VideoPlayer() {
    _s();
    const { initializeClient, isClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClient"])();
    const youtubePlayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const soundCloudPlayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { duration, tiktokVideo, sliderValue, youtubeVideo, setSliderValue, setTiktokVideo, soundCloudVideo, setYoutubeVideo, setSoundCloudVideo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    // Fetch url params
    // const params = new URLSearchParams(window.location.search);
    // const indexParam = params.get("index");
    // const listParam = params.get("list");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            initializeClient();
        }
    }["VideoPlayer.useEffect"], [
        initializeClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"].getState().subscribeToAuthState();
            return ({
                "VideoPlayer.useEffect": ()=>unsubscribe()
            })["VideoPlayer.useEffect"];
        }
    }["VideoPlayer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const params = new URLSearchParams(window.location.search);
            const indexParam = params.get("index");
            const listParam = params.get("list");
            if (sliderValue[0] >= 0 && duration > 0) {
                const player = youtubeVideo || tiktokVideo || soundCloudVideo;
                const videoRef = youtubePlayerRef.current || soundCloudPlayerRef.current;
                const timeoutId = setTimeout({
                    "VideoPlayer.useEffect.timeoutId": ()=>{
                        if (videoRef) videoRef.seekTo(sliderValue[0]);
                        if (player) {
                            let newSearchParams = {};
                            var list = youtubeVideo?.list || listParam;
                            var index = player.index || indexParam;
                            if (player === youtubeVideo) {
                                if (index && list) {
                                    newSearchParams = {
                                        yVideoID: youtubeVideo.videoID,
                                        start: sliderValue[0].toString(),
                                        end: sliderValue[1].toString(),
                                        list,
                                        index
                                    };
                                } else {
                                    newSearchParams = {
                                        yVideoID: youtubeVideo.videoID,
                                        start: sliderValue[0].toString(),
                                        end: sliderValue[1].toString()
                                    };
                                }
                            } else if (player === tiktokVideo) {
                                if (index && list) {
                                    newSearchParams = {
                                        tVideoID: tiktokVideo.videoID,
                                        list,
                                        index
                                    };
                                } else {
                                    newSearchParams = {
                                        tVideoID: tiktokVideo.videoID
                                    };
                                }
                            }
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSearchParams"])(newSearchParams);
                        }
                    }
                }["VideoPlayer.useEffect.timeoutId"], 300);
                return ({
                    "VideoPlayer.useEffect": ()=>clearTimeout(timeoutId)
                })["VideoPlayer.useEffect"];
            }
        }
    }["VideoPlayer.useEffect"], [
        sliderValue,
        duration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewPlayerVideo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__setNewPlayerVideo$3e$__["setNewPlayerVideo"])(setTiktokVideo, setYoutubeVideo, setSliderValue, setSoundCloudVideo);
        }
    }["VideoPlayer.useEffect"], []);
    if (!isClient) return; // return loading spinner
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    youtubeVideo: youtubeVideo,
                    tiktokVideo: tiktokVideo,
                    youtubePlayerRef: youtubePlayerRef
                }, void 0, false, {
                    fileName: "[project]/app/components/VideoPlayer/page.tsx",
                    lineNumber: 94,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoPlayer$2f$Guide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/components/VideoPlayer/page.tsx",
                    lineNumber: 95,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true)
    }, void 0, false);
}
_s(VideoPlayer, "GawNqka53UoIObYVArO04H3zY7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = VideoPlayer;
var _c;
__turbopack_refresh__.register(_c, "VideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/VideoPlayer/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_89e9f1._.js.map