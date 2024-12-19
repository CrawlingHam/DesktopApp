module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-route.runtime.dev.js");

module.exports = mod;
}}),
"[externals]/ [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("@opentelemetry/api");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js");

module.exports = mod;
}}),
"[project]/app/utils/formatTime.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[externals]/ [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto");

module.exports = mod;
}}),
"[project]/app/utils/randomCodeGenerator.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>randomCodeGenerator)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (crypto, cjs)");
;
function randomCodeGenerator() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 6;
    const code = Array.from((0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(length)).map((byte)=>characters[byte % characters.length]).join("");
    const minutes = 10;
    const timelimit = minutes * 60 * 1000;
    const expirationDate = Date.now() + timelimit;
    return {
        code,
        expirationDate
    };
}
}}),
"[project]/app/utils/createSearchParams.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/utils/Email/sendVerificationEmail.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[externals]/ [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util");

module.exports = mod;
}}),
"[externals]/ [external] (process, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("process");

module.exports = mod;
}}),
"[externals]/ [external] (tls, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tls");

module.exports = mod;
}}),
"[externals]/ [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs");

module.exports = mod;
}}),
"[externals]/ [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os");

module.exports = mod;
}}),
"[externals]/ [external] (net, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("net");

module.exports = mod;
}}),
"[externals]/ [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events");

module.exports = mod;
}}),
"[externals]/ [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream");

module.exports = mod;
}}),
"[externals]/ [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path");

module.exports = mod;
}}),
"[externals]/ [external] (http2, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http2");

module.exports = mod;
}}),
"[externals]/ [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http");

module.exports = mod;
}}),
"[externals]/ [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url");

module.exports = mod;
}}),
"[externals]/ [external] (dns, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("dns");

module.exports = mod;
}}),
"[externals]/ [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib");

module.exports = mod;
}}),
"[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "app": (()=>app),
    "auth": (()=>auth),
    "db": (()=>db),
    "googleAuth": (()=>googleAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__X__as__GoogleAuthProvider$3e$__ = __turbopack_import__("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-3df2f5f9.js [app-route] (ecmascript) <export X as GoogleAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__ = __turbopack_import__("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-3df2f5f9.js [app-route] (ecmascript) <export o as getAuth>");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyARO-NB7AiUg3mlYVK1QezCziF3fsSMDq4"),
    authDomain: ("TURBOPACK compile-time value", "tauriappdb.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "tauriappdb"),
    storageBucket: ("TURBOPACK compile-time value", "tauriappdb.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "1004570009182"),
    appId: ("TURBOPACK compile-time value", "1:1004570009182:web:e892f4ac3d7d81e1851ecf")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const googleAuth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__X__as__GoogleAuthProvider$3e$__["GoogleAuthProvider"]();
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__["getAuth"])(app);
;
}}),
"[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/app/firebase/fetchPlaylist.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>fetchPlaylist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
async function fetchPlaylist(uid) {
    try {
        // Get the playlist ID from the user document
        const userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid);
        const userDocSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(userDocRef);
        if (!userDocSnapshot.exists()) throw new Error("User document does not exist");
        const userData = userDocSnapshot.data();
        const playlistID = userData?.videosPlaylistID;
        if (!playlistID) throw new Error("Playlist ID is missing");
        // Fetch the playlist subcollection and it's values
        const playlistDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid, "playlists", playlistID);
        const playlistSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(playlistDocRef);
        if (!playlistSnapshot.exists()) throw new Error("Playlist document does not exist");
        const playlistData = playlistSnapshot.data();
        if (!playlistData) throw new Error("No data found in playlist");
        return {
            success: true,
            error: null,
            playlistData,
            playlistID
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            playlistData: null,
            playlistID: null
        };
    }
}
}}),
"[project]/app/firebase/addNewClientUser.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AddNewClientUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm/v4.js [app-route] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function AddNewClientUser({ uid, email, setUserRole, displayName, setUserEmail, emailVerified, setUserUsername, setUserIsVerified }) {
    const role = "standard";
    try {
        // Generate a random playlist ID
        const playlistID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        // Create the user document
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid), {
            email,
            username: displayName,
            role: role,
            isVerified: emailVerified,
            videosPlaylistID: playlistID
        });
        // Create a default playlist document in the 'playlists' subcollection
        const playlistDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid, "playlists"), playlistID);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setDoc"])(playlistDocRef, {
            owner: uid,
            public: true,
            title: "My Playlist",
            videos: []
        });
        // Create a publicPlaylists collection pointing to the playlist and owner uid
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "publicPlaylists", playlistID), {
            owner: uid,
            public: true,
            videosPlaylistID: playlistID,
            createdAt: new Date().toISOString()
        });
        // Update user context
        setUserRole(role);
        setUserEmail(email);
        setUserUsername(displayName);
        setUserIsVerified(emailVerified);
        return {
            success: true,
            error: null
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
}}),
"[project]/app/firebase/fetchPlaylistByID.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>fetchPlaylistByID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
async function fetchPlaylistByID(playlistID) {
    try {
        const publicPlaylistsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "publicPlaylists", playlistID);
        const publicPlaylistSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(publicPlaylistsRef);
        if (!publicPlaylistSnapshot.exists()) throw new Error("Playlist is private or does not exist");
        const { owner } = publicPlaylistSnapshot.data() || {};
        if (!owner) throw new Error("Owner of the playlist could not be determined");
        // Fetch playlist from user's subcollection
        const playlistDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", owner, "playlists", playlistID);
        const playlistSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(playlistDocRef);
        if (!playlistSnapshot.exists()) throw new Error("Playlist document does not exist");
        const playlistData = playlistSnapshot.data();
        // Ensure the playlist is public
        if (!playlistData?.public) throw new Error("Playlist is private");
        return {
            success: true,
            error: null,
            title: playlistData.title,
            videos: playlistData.videos,
            playlistID
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            title: null,
            videos: null,
            playlistID: null
        };
    }
}
}}),
"[project]/app/firebase/addVideoToPlaylist.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>addVideoToPlaylist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function addVideoToPlaylist(uid, video) {
    try {
        // Get the playlist ID from the user document
        const userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid);
        const userDocSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(userDocRef);
        if (!userDocSnapshot.exists()) throw new Error("User document does not exist");
        const userData = userDocSnapshot.data();
        const playlistID = userData?.videosPlaylistID;
        if (!playlistID) throw new Error("Playlist ID is missing");
        // Fetch the playlist subcollection and it's values
        const playlistDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid, "playlists", playlistID);
        const playlistDocSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(playlistDocRef);
        if (!playlistDocSnapshot.exists()) {
            throw new Error("Playlist does not exist");
        }
        // Check if the video already exists in the playlist
        const playlistData = playlistDocSnapshot.data();
        const existingVideos = playlistData?.videos || [];
        const videoExists = existingVideos.some((existingVideo)=>existingVideo?.videoID === video?.videoID);
        if (videoExists) {
            return {
                success: false,
                error: "Video already exists in the playlist",
                playlistID
            };
        }
        // Update the playlist
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDoc"])(playlistDocRef, {
            videos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayUnion"])(video)
        });
        return {
            success: true,
            error: null,
            playlistID
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            playlistID: null
        };
    }
}
}}),
"[project]/app/firebase/storeGeneratedCode.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>storeGeneratedCode),
    "isCodeValid": (()=>isCodeValid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function storeGeneratedCode(email, code, expirationDate) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setLogLevel"])("info");
    try {
        const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "verification_codes", sanitizedEmail), {
            code,
            isUsed: false,
            isExpired: false,
            expirationDate
        });
        return {
            success: true,
            code,
            error: null
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            code: null
        };
    }
}
async function isCodeValid(email, inputCode) {
    let verificationCode;
    try {
        const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "verification_codes", sanitizedEmail);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        // If document does not exist, return valid false
        if (!docSnap.exists()) {
            return {
                valid: false,
                success: false,
                error: "Code is expired or already used"
            };
        }
        const data = docSnap.data();
        const { code, isUsed, expirationDate } = data;
        verificationCode = code;
        // Check if the code has expired or is already used
        const expired = Date.now() > expirationDate;
        const used = isUsed;
        // If expired or used, delete the document and return valid: false
        if (expired || used) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
            return {
                valid: false,
                success: false,
                error: "Code is expired or already used"
            };
        }
        // Check if the input code matches the stored code
        const validCode = inputCode === code;
        if (!validCode) {
            return {
                valid: false,
                success: false,
                error: "Invalid code"
            };
        }
        // If everything is valid, return valid as true and mark the code as used
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
        return {
            valid: true,
            success: true,
            error: null
        };
    } catch (error) {
        return {
            valid: false,
            success: false,
            error: error.message
        };
    }
}
}}),
"[project]/app/firebase/removeVideoFromPlaylist.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>removeVideoFromPlaylist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function removeVideoFromPlaylist(uid, video) {
    try {
        // Get the playlist ID from the user document
        const userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid);
        const userDocSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(userDocRef);
        if (!userDocSnapshot.exists()) throw new Error("User document does not exist");
        const userData = userDocSnapshot.data();
        const playlistID = userData?.videosPlaylistID;
        if (!playlistID) throw new Error("Playlist ID is missing");
        // Fetch the playlist subcollection and it's values
        const playlistDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid, "playlists", playlistID);
        // Remove the specific video
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDoc"])(playlistDocRef, {
            videos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayRemove"])(video)
        });
        return {
            success: true,
            error: null,
            playlistID
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            playlistID: null
        };
    }
}
}}),
"[project]/app/firebase/authentication/login.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useLogin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__ab__as__signInWithEmailAndPassword$3e$__ = __turbopack_import__("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-3df2f5f9.js [app-route] (ecmascript) <export ab as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function useLogin(email, password) {
    try {
        const userCredentials = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__ab__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], email, password);
        const user = userCredentials.user;
        return {
            success: true,
            error: null,
            user
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            user: null
        };
    }
}
}}),
"[project]/app/firebase/authentication/signup.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "PasswordIsValid": (()=>PasswordIsValid),
    "default": (()=>useSignup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__aa__as__createUserWithEmailAndPassword$3e$__ = __turbopack_import__("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-3df2f5f9.js [app-route] (ecmascript) <export aa as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function useSignup(email, password, confirmPassword) {
    if (!email || !password) {
        return {
            success: false,
            error: "Email and password are required",
            user: null
        };
    }
    const passwordValidation = PasswordIsValid(password, confirmPassword);
    if (!passwordValidation.validPassword) {
        return {
            success: false,
            error: passwordValidation.message,
            user: null
        };
    }
    try {
        const userCredentials = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__aa__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], email, password);
        const user = userCredentials.user;
        return {
            success: true,
            error: null,
            user
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            user: null
        };
    }
}
function PasswordIsValid(password, confirmPassword) {
    const isLengthValid = password.length >= 8 && password.length <= 266; // Set minimum and maximum length
    const hasTwoLetters = (password.match(/[A-Za-z]/g) || []).length >= 2; // Set minimum amount of letters
    const hasTwoNumbers = (password.match(/[0-9]/g) || []).length >= 2; // Set minimum amount of numbers
    const passwordsMatch = password === confirmPassword; // Check if the two passwords match
    const validPassword = isLengthValid && hasTwoLetters && hasTwoNumbers && passwordsMatch; // Validate password based on the requirements above
    // Set error messages if any of the conditions are not met
    if (password === "" || confirmPassword === "" || !validPassword) {
        let message = "Password must be at least 8 characters long, contain at least 2 letters, 2 numbers, and match the confirm password.";
        if (!isLengthValid) message = "Password must be between 8 and 266 characters.";
        else if (!hasTwoLetters) message = "Password must contain at least 2 letters.";
        else if (!hasTwoNumbers) message = "Password must contain at least 2 numbers.";
        else if (!passwordsMatch) message = "Passwords do not match.";
        return {
            validPassword,
            message
        };
    }
    return {
        validPassword,
        message: "Password validation successful"
    };
}
}}),
"[project]/app/firebase/authentication/logout.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useLogout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__signOut$3e$__ = __turbopack_import__("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-3df2f5f9.js [app-route] (ecmascript) <export C as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function useLogout() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
        return {
            success: true,
            error: null,
            user: null
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
}}),
"[project]/app/firebase/authentication/googleLogin.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>googleLogin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__signInWithPopup$3e$__ = __turbopack_import__("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-3df2f5f9.js [app-route] (ecmascript) <export c as signInWithPopup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
;
;
async function googleLogin() {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__signInWithPopup$3e$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["googleAuth"]);
        const user = result.user;
        return {
            success: true,
            error: null,
            user
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            user: null
        };
    }
}
}}),
"[project]/app/firebase/authentication/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
}}),
"[project]/app/firebase/authentication/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$login$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/login.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$signup$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/signup.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$logout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/logout.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$googleLogin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/googleLogin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/authentication/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/app/firebase/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
;
}}),
"[project]/app/firebase/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/fetchPlaylist.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addNewClientUser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/addNewClientUser.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylistByID$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/fetchPlaylistByID.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/addVideoToPlaylist.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$storeGeneratedCode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/storeGeneratedCode.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$removeVideoFromPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/removeVideoFromPlaylist.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/authentication/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/app/store/useUser.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useUser": (()=>useUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__y__as__onAuthStateChanged$3e$__ = __turbopack_import__("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-3df2f5f9.js [app-route] (ecmascript) <export y as onAuthStateChanged>");
;
;
;
const useUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])((set)=>({
        user: null,
        role: null,
        code: null,
        email: null,
        loading: true,
        username: null,
        codeIsUsed: null,
        isVerified: null,
        codeIsExpired: null,
        isPlaylistActive: false,
        setCode: (code)=>set({
                code
            }),
        setUserRole: (role)=>set({
                role
            }),
        setUserEmail: (email)=>set({
                email
            }),
        setUserUsername: (username)=>set({
                username
            }),
        setCodeIsUsed: (codeIsUsed)=>set({
                codeIsUsed
            }),
        setUserIsVerified: (isVerified)=>set({
                isVerified
            }),
        setCodeIsExpired: (codeIsExpired)=>set({
                codeIsExpired
            }),
        togglePlaylist: (enabled)=>set({
                isPlaylistActive: enabled
            }),
        fetchUserData: async (uid)=>{
            const userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", uid);
            const userDocSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDoc"])(userDocRef);
            if (userDocSnap.exists()) {
                const data = userDocSnap.data();
                set({
                    role: data.role || null,
                    email: data.email || null,
                    username: data.displayName || null,
                    isVerified: data.isVerified || false
                });
            }
        },
        // Initialize auth state
        subscribeToAuthState: ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$3df2f5f9$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__y__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], (currentUser)=>{
                set({
                    user: currentUser,
                    loading: false
                });
                if (currentUser) {
                    useUser.getState().fetchUserData(currentUser.uid);
                    set({
                        isPlaylistActive: true
                    }); // Set to true upon login
                } else {
                    set({
                        role: null,
                        email: null,
                        username: null,
                        isVerified: null,
                        code: null,
                        codeIsUsed: null,
                        codeIsExpired: null,
                        isPlaylistActive: false
                    });
                }
            });
            return unsubscribe;
        }
    }));
}}),
"[project]/app/firebase/removeVideoFromPlaylist.ts [app-route] (ecmascript) <export default as removeVideoFromPlaylist>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "removeVideoFromPlaylist": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$removeVideoFromPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$removeVideoFromPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/removeVideoFromPlaylist.ts [app-route] (ecmascript)");
}}),
"[project]/app/firebase/fetchPlaylist.ts [app-route] (ecmascript) <export default as fetchPlaylist>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchPlaylist": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/fetchPlaylist.ts [app-route] (ecmascript)");
}}),
"[project]/app/store/useMedia.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useMedia": (()=>useMedia)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$removeVideoFromPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__removeVideoFromPlaylist$3e$__ = __turbopack_import__("[project]/app/firebase/removeVideoFromPlaylist.ts [app-route] (ecmascript) <export default as removeVideoFromPlaylist>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__fetchPlaylist$3e$__ = __turbopack_import__("[project]/app/firebase/fetchPlaylist.ts [app-route] (ecmascript) <export default as fetchPlaylist>");
;
;
const useMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        error: null,
        isLoading: false,
        queueVideos: [],
        playlistVideos: [],
        currentVideo: null,
        loopEnabled: false,
        videoIsEnded: false,
        playlistID: "",
        playlistTitle: "",
        isPlaylistActive: false,
        videos: [],
        removeVideo: (video)=>set((state)=>({
                    videos: state.videos.filter((v)=>v?.videoID !== video?.videoID)
                })),
        addVideo: (video)=>set((state)=>({
                    videos: [
                        ...state.videos,
                        video
                    ]
                })),
        setVideos: (Videos)=>set({
                videos: Videos
            }),
        clearVideos: ()=>set({
                videos: []
            }),
        setCurrentVideo: (video)=>set({
                currentVideo: video
            }),
        setPlaylistVideos: (videos)=>set({
                playlistVideos: videos
            }),
        toggleLoop: (enabled)=>set({
                loopEnabled: enabled
            }),
        addToQueue: (video)=>set((state)=>({
                    queueVideos: [
                        ...state.queueVideos,
                        video
                    ]
                })),
        removeFromQueue: (video)=>set((state)=>({
                    queueVideos: state.queueVideos.filter((v)=>v?.videoID !== video?.videoID)
                })),
        clearQueue: ()=>set({
                queueVideos: []
            }),
        addToPlaylist: (video)=>set((state)=>({
                    playlistVideos: [
                        ...state.playlistVideos,
                        video
                    ]
                })),
        removeFromPlaylist: async (video, userID)=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$removeVideoFromPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__removeVideoFromPlaylist$3e$__["removeVideoFromPlaylist"])(userID, video);
            if (result.success) {
                set((state)=>({
                        playlistVideos: state.playlistVideos.filter((v)=>v?.videoID !== video?.videoID)
                    }));
            } else {
                console.error(result.error);
            }
        },
        clearPlaylist: ()=>set({
                playlistVideos: []
            }),
        togglePlaylist: (isActive)=>set({
                isPlaylistActive: isActive
            }),
        setVideoIsEnded: (ended)=>set({
                videoIsEnded: ended
            }),
        playNextVideo: (setTiktokVideo, setYoutubeVideo, setSoundCloudVideo, setSliderValue, isPlaylistActive, playlistID, createSearchParams)=>{
            const { videos, currentVideo, setCurrentVideo } = get();
            console.log("Active Videos:", videos); // Check active videos
            console.log(currentVideo);
            if (!currentVideo || videos.length === 0) return;
            const currentIndex = videos.findIndex((video)=>video?.videoID === currentVideo.videoID);
            const nextIndex = (currentIndex + 1) % videos.length;
            const nextVideo = videos[nextIndex];
            console.log("Current Video:", currentVideo); // Check current video
            console.log("Next Video:", nextVideo); // Check next video
            if (nextVideo && nextVideo.platform === "youtube" || nextVideo && nextVideo.url.includes("youtube")) {
                setTiktokVideo(null);
                setSoundCloudVideo(null);
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
                setSoundCloudVideo(null);
                setTiktokVideo({
                    ...nextVideo,
                    index: nextIndex.toString()
                });
                setCurrentVideo({
                    ...nextVideo,
                    index: nextIndex.toString()
                });
                console.log("Current video set to:", nextVideo); // Log current video after setting
            // const index = nextVideo?.index?.toString();
            // if (playlistID && index) {
            //     const newSearchParams: Record<string, string> = {
            //         tVideoID: currentVideo.videoID,
            //         list: playlistID,
            //         index,
            //     };
            //     console.log(newSearchParams);
            // }
            } else if (nextVideo && nextVideo.platform === "soundcloud" || nextVideo && nextVideo.url.includes("soundcloud")) {
                setYoutubeVideo(null);
                setTiktokVideo(null);
                setSoundCloudVideo({
                    ...nextVideo,
                    index: nextIndex.toString()
                });
                setCurrentVideo({
                    ...nextVideo,
                    index: nextIndex.toString()
                });
                const { start, end } = nextVideo;
                setTimeout(()=>{
                    if (start && end) {
                        setSliderValue([
                            parseInt(start),
                            parseInt(end)
                        ]);
                    }
                }, 500);
            }
        },
        playSelectedVideo: (index, setTiktokVideo, setYoutubeVideo, setSoundCloudVideo, setSliderValue, isPlaylistActive, playlistID)=>{
            const { playlistVideos, queueVideos, currentVideo, setCurrentVideo } = get();
            const activeVideos = isPlaylistActive ? playlistVideos : queueVideos;
            console.log("Active Videos:", activeVideos); // Check active videos
            console.log(currentVideo);
            if (!currentVideo || activeVideos.length === 0 || index < 0 || index >= activeVideos.length) return;
            const selectedVideo = activeVideos[index]; // Get the selected video based on the provided index
            console.log("Selected Video:", selectedVideo); // Log the selected video
            if (selectedVideo) {
                // Check the platform of the selected video
                if (selectedVideo.platform === "youtube" || selectedVideo.url.includes("youtube")) {
                    setTiktokVideo(null);
                    setSoundCloudVideo(null);
                    setYoutubeVideo({
                        ...selectedVideo,
                        index: index.toString()
                    });
                    setCurrentVideo({
                        ...selectedVideo,
                        index: index.toString()
                    });
                    console.log("Current video set to:", selectedVideo); // Log current video after setting
                    const { start, end } = selectedVideo;
                    setTimeout(()=>{
                        if (start && end) {
                            setSliderValue([
                                parseInt(start),
                                parseInt(end)
                            ]);
                        }
                    }, 500);
                } else if (selectedVideo.platform === "tiktok" || selectedVideo.url.includes("tiktok")) {
                    console.log("Setting TikTok video:", selectedVideo.videoID); // Log next TikTok video
                    setYoutubeVideo(null);
                    setSoundCloudVideo(null);
                    setTiktokVideo({
                        ...selectedVideo,
                        index: index.toString()
                    });
                    setCurrentVideo({
                        ...selectedVideo,
                        index: index.toString()
                    });
                    console.log("Current video set to:", selectedVideo); // Log current video after setting
                    const newIndex = selectedVideo?.index?.toString();
                    if (playlistID && newIndex) {
                        const newSearchParams = {
                            tVideoID: selectedVideo.videoID,
                            list: playlistID,
                            index: newIndex
                        };
                        console.log(newSearchParams);
                    // Uncomment the next line if you want to create search params
                    // createSearchParams(newSearchParams);
                    }
                } else if (selectedVideo.platform === "soundcloud" || selectedVideo.url.includes("soundcloud")) {
                    setTiktokVideo(null);
                    setYoutubeVideo(null);
                    setSoundCloudVideo({
                        ...selectedVideo,
                        index: index.toString()
                    });
                    setCurrentVideo({
                        ...selectedVideo,
                        index: index.toString()
                    });
                    console.log("Current video set to:", selectedVideo); // Log current video after setting
                    const { start, end } = selectedVideo;
                    setTimeout(()=>{
                        if (start && end) {
                            setSliderValue([
                                parseInt(start),
                                parseInt(end)
                            ]);
                        }
                    }, 500);
                }
            } else {
                console.warn("No video found at the specified index."); // Log a warning if the video is not found
            }
        },
        fetchPlaylistData: async (user)=>{
            if (!user?.uid) return;
            set({
                isLoading: true,
                error: null
            });
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__fetchPlaylist$3e$__["fetchPlaylist"])(user.uid);
                if (result.success && result.playlistData) {
                    set({
                        playlistTitle: result.playlistData.title,
                        playlistVideos: result.playlistData.videos,
                        playlistID: result.playlistID,
                        isLoading: false
                    });
                } else {
                    set({
                        error: result.error || "Failed to fetch playlist.",
                        isLoading: false
                    });
                }
            } catch (error) {
                set({
                    error: error.message,
                    isLoading: false
                });
            }
        }
    }));
}}),
"[project]/app/store/usePlayer.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "usePlayer": (()=>usePlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
;
const usePlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        duration: 0,
        currentTime: 0,
        tiktokVideo: null,
        youtubeVideo: null,
        sliderValue: [
            0,
            0
        ],
        soundCloudVideo: null,
        setDuration: (duration)=>{
            set({
                duration
            });
            const sliderValue = get().sliderValue; // Automatically reset slider to match new duration
            set({
                sliderValue: [
                    sliderValue[0],
                    duration
                ]
            });
        },
        setSliderValue: (value)=>set({
                sliderValue: value
            }),
        setYoutubeVideo: (video)=>{
            set({
                youtubeVideo: video
            });
        },
        setTiktokVideo: (video)=>{
            set({
                tiktokVideo: video
            });
        },
        setSoundCloudVideo: (video)=>{
            set({
                soundCloudVideo: video
            });
        },
        resetSlider: ()=>{
            const duration = get().duration;
            set({
                sliderValue: [
                    0,
                    duration
                ]
            });
        }
    }));
}}),
"[project]/app/store/useClient.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useClient": (()=>useClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
;
const useClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isClient: false,
        initializeClient: ()=>set({
                isClient: true
            })
    }));
}}),
"[project]/app/store/usePlaylist.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "usePlaylist": (()=>usePlaylist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__fetchPlaylist$3e$__ = __turbopack_import__("[project]/app/firebase/fetchPlaylist.ts [app-route] (ecmascript) <export default as fetchPlaylist>");
;
;
const usePlaylist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])((set)=>({
        error: null,
        isLoading: false,
        playlistID: "",
        playlistTitle: "",
        playlistVideos: [],
        currentVideo: null,
        setCurrentVideo: (video)=>set({
                currentVideo: video
            }),
        setPlaylistVideos: (videos)=>set({
                playlistVideos: videos
            }),
        fetchPlaylistData: async (user)=>{
            if (!user?.uid) return;
            set({
                isLoading: true,
                error: null
            });
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$fetchPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__fetchPlaylist$3e$__["fetchPlaylist"])(user.uid);
                if (result.success && result.playlistData) {
                    set({
                        playlistTitle: result.playlistData.title,
                        playlistVideos: result.playlistData.videos,
                        playlistID: result.playlistID,
                        isLoading: false
                    });
                } else {
                    set({
                        error: result.error || "Failed to fetch playlist.",
                        isLoading: false
                    });
                }
            } catch (error) {
                set({
                    error: error.message,
                    isLoading: false
                });
            }
        }
    }));
}}),
"[project]/app/store/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
}}),
"[project]/app/store/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useUser.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlayer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlayer.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useClient.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$usePlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/usePlaylist.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/app/utils/VideoPlayer/setNewVideo.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>setNewVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-route] (ecmascript)");
;
async function setNewVideo(setYoutubeVideo, setTiktokVideo, isPlaylistActive, setSliderValue, playlistID) {
    const { playlistVideos, queueVideos, currentVideo, setCurrentVideo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useMedia"])();
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
}}),
"[project]/app/utils/VideoPlayer/fetchTrackURL.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>fetchTrackURL)
});
async function fetchTrackURL(trackURL) {
    try {
        const response = await fetch(`/api/scrape/soundcloud/track?url=${encodeURIComponent(trackURL)}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const { href } = data;
        return {
            success: true,
            error: null,
            href
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            href: null
        };
    }
}
}}),
"[externals]/ [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:stream");

module.exports = mod;
}}),
"[externals]/ [external] (buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("buffer");

module.exports = mod;
}}),
"[externals]/ [external] (string_decoder, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("string_decoder");

module.exports = mod;
}}),
"[externals]/ [external] (node:assert, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:assert");

module.exports = mod;
}}),
"[externals]/ [external] (node:http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:http");

module.exports = mod;
}}),
"[externals]/ [external] (node:net, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:net");

module.exports = mod;
}}),
"[externals]/ [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer");

module.exports = mod;
}}),
"[externals]/ [external] (node:util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:util");

module.exports = mod;
}}),
"[externals]/ [external] (node:querystring, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:querystring");

module.exports = mod;
}}),
"[externals]/ [external] (node:events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:events");

module.exports = mod;
}}),
"[externals]/ [external] (node:zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:zlib");

module.exports = mod;
}}),
"[externals]/ [external] (node:perf_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:perf_hooks");

module.exports = mod;
}}),
"[externals]/ [external] (node:util/types, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:util/types");

module.exports = mod;
}}),
"[externals]/ [external] (node:worker_threads, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:worker_threads");

module.exports = mod;
}}),
"[externals]/ [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:crypto");

module.exports = mod;
}}),
"[externals]/ [external] (node:diagnostics_channel, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:diagnostics_channel");

module.exports = mod;
}}),
"[externals]/ [external] (node:tls, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:tls");

module.exports = mod;
}}),
"[externals]/ [external] (node:http2, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:http2");

module.exports = mod;
}}),
"[externals]/ [external] (node:url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:url");

module.exports = mod;
}}),
"[externals]/ [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks");

module.exports = mod;
}}),
"[externals]/ [external] (node:console, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:console");

module.exports = mod;
}}),
"[project]/app/utils/VideoPlayer/getTrackURL.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getTrackURL": (()=>getTrackURL)
});
const cheerio = __turbopack_require__("[project]/node_modules/cheerio/dist/commonjs/index.js [app-route] (ecmascript)");
async function getTrackURL(embeddedTrackURL) {
    try {
        // Fetch the public SoundCloud page
        const response = await fetch(embeddedTrackURL);
        const html = await response.text();
        // Load the page into Cheerio
        const $ = cheerio.load(html);
        // Get the real URL path from the embedded player page
        const canonicalHref = $('link[rel="canonical"]').attr('href');
        return {
            success: true,
            error: null,
            href: canonicalHref ?? 'Canonical href not found'
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            href: null
        };
    }
}
}}),
"[project]/app/utils/VideoPlayer/sanitizeURLs.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/utils/VideoPlayer/getVideoID.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getVideoID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/sanitizeURLs.ts [app-route] (ecmascript)");
;
function getVideoID(platform, url) {
    if (platform === "Youtube") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeYoutubeURL"])(url);
    else if (platform === 'Youtube Shorts') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeYoutubeShortsURL"])(url);
    else if (platform === 'Youtu.be') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeEmbeddedYoutubeURL"])(url);
    else if (platform === 'Tiktok') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeTiktokURL"])(url);
    else if (platform === 'SoundCloud') return 'SoundCloud';
    else return null;
}
}}),
"[project]/app/utils/VideoPlayer/getPlatform.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/utils/VideoPlayer/fetchTrackDetails.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>fetchTrackDetails)
});
async function fetchTrackDetails(trackURL) {
    try {
        const response = await fetch(`/api/scrape/soundcloud?url=${encodeURIComponent(trackURL)}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const { title, creator, thumbnail, trackID } = data;
        return {
            success: true,
            error: null,
            title,
            creator,
            thumbnail,
            trackID
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            title: null,
            creator: null,
            thumbnail: null,
            trackID: null
        };
    }
}
}}),
"[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getYoutubeVideoDetails)
});
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
}}),
"[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getVideoDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoID$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoID.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getPlatform$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getPlatform.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTrackDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-route] (ecmascript)");
;
;
;
;
;
async function getVideoDetails(url) {
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getPlatform$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(url);
    if (!platform) return null;
    const videoID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoID$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(platform, url);
    if (!videoID) return null;
    const PlayerDetails = {
        tiktokVideoDetails: null,
        youtubeVideoDetails: null,
        soundCloudVideoDetails: null
    };
    if (platform === "Youtube") {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(videoID);
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(url);
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
    } else if (platform === "SoundCloud") {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(url);
        if (result.error) return null;
        const { creator, thumbnail, title, trackID } = result;
        console.log({
            creator,
            thumbnail,
            title,
            trackID
        });
        return {
            ...PlayerDetails,
            soundCloudVideoDetails: {
                url,
                title,
                creator,
                thumbnail,
                videoID: trackID
            }
        };
    }
}
}}),
"[project]/app/utils/VideoPlayer/getTrackDetails.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getTrackDetails": (()=>getTrackDetails)
});
const cheerio = __turbopack_require__("[project]/node_modules/cheerio/dist/commonjs/index.js [app-route] (ecmascript)");
async function getTrackDetails(trackUrl) {
    try {
        // Fetch the public SoundCloud page
        const response = await fetch(trackUrl);
        const html = await response.text();
        // Load the page into Cheerio
        const $ = cheerio.load(html);
        // Look for the details in the Open Graph metadata
        const thumbnail = $('meta[property="og:image"]').attr("content");
        const title = $('meta[property="og:title"]').attr("content");
        // Parse creator name:
        let creator;
        const fullTitle = $("title").text();
        const match = fullTitle.match(/ by (.*?) \| Listen online/i);
        if (match) {
            creator = match[1]?.trim();
        }
        // const canonicalHref = $('link[rel="canonical"]').attr('href');
        // Parse track ID
        let trackID = null;
        // Try to find the track ID from twitter:player
        const playerMeta = $('meta[property="twitter:player"]').attr("content");
        if (playerMeta) {
            const match = playerMeta.match(/tracks\/(\d+)/);
            if (match) {
                trackID = match[1];
            }
        }
        // If trackID is still not found, try twitter:app:url:googleplay
        if (!trackID) {
            const appMeta = $('meta[property="twitter:app:url:googleplay"]').attr("content");
            if (appMeta) {
                const match = appMeta.match(/sounds:(\d+)/);
                if (match) {
                    trackID = match[1];
                }
            }
        }
        return {
            success: true,
            error: null,
            title: title ?? "Title not found",
            creator: creator ?? "Creator not found",
            thumbnail: thumbnail ?? "Thumbnail not found",
            trackID: trackID ?? "Track ID not found"
        };
    } catch (error) {
        console.error("Error fetching track page:", error);
        return {
            success: false,
            error: error.message,
            title: null,
            creator: null,
            thumbnail: null,
            trackID: null
        };
    }
}
}}),
"[project]/app/utils/VideoPlayer/createVideoObject.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/utils/VideoPlayer/createNewVideo.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/utils/VideoPlayer/createVideo.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createNewVideo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackURL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTrackURL.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTrackDetails.ts [app-route] (ecmascript)");
;
;
;
;
;
async function createVideo({ videoID, platform, setYoutubeVideo, setTiktokVideo, setSoundCloudVideo, optionals }) {
    switch(platform){
        case "youtube":
            if (typeof setYoutubeVideo === "undefined" || !setYoutubeVideo) return;
            const youtubeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(videoID);
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
            const newYoutubeVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(requiredYoutubeVideoDetails, optionals);
            if (newYoutubeVideo) setYoutubeVideo(newYoutubeVideo);
            break;
        case "tiktok":
            if (typeof setTiktokVideo === "undefined" || !setTiktokVideo) return;
            const tiktokVideoURL = `https://www.tiktok.com/@${videoID.split("+")[0]}/video/${videoID.split("+")[1]}`;
            const tiktokResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(tiktokVideoURL);
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
            const newTiktokVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(requiredTiktokVideoDetails, optionals);
            if (newTiktokVideo) setTiktokVideo(newTiktokVideo);
            break;
        case "soundcloud":
            if (typeof setSoundCloudVideo === "undefined" || !setSoundCloudVideo) return;
            const embedUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${videoID}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
            const extraction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackURL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(embedUrl);
            if (!extraction.success) return;
            const soundCloudResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(extraction.href);
            if (soundCloudResults.success) {
                const { title, creator, thumbnail, trackID } = soundCloudResults;
                const newEmbedUrl = `https://api.soundcloud.com/tracks/${videoID}`;
                const requiredSoundCloudVideoDetails = {
                    title,
                    creator,
                    thumbnail,
                    videoID: trackID,
                    url: newEmbedUrl,
                    platform: "soundcloud"
                };
                const newSoundCloudVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(requiredSoundCloudVideoDetails, optionals);
                if (newSoundCloudVideo) setSoundCloudVideo(newSoundCloudVideo);
            }
            break;
        default:
            break;
    }
}
}}),
"[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>setNewPlayerVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-route] (ecmascript)");
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(defaultVideoID);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            setYoutubeVideo,
            platform: "youtube",
            videoID: youtubeVideoID
        });
    } else if (youtube_all || youtube_base_start_end) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            setTiktokVideo,
            platform: "tiktok",
            videoID: tiktokVideoID
        });
    } else if (soundCloud_base) {
        console.log('running soundcloud base');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            setSoundCloudVideo,
            platform: "soundcloud",
            videoID: soundCloudVideoID
        });
    } else if (soundCloud_start_end || soundCloud_all) {
        console.log('running soundcloud start_end or all');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            platform: "soundcloud",
            optionals: {
                start,
                end
            },
            setSoundCloudVideo,
            videoID: soundCloudVideoID
        });
        setTimeout(()=>{
            setSliderValue([
                parseInt(start),
                parseInt(end)
            ]);
        }, 1000);
    }
}
}}),
"[project]/app/utils/VideoPlayer/containsVideo.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/firebase/addVideoToPlaylist.ts [app-route] (ecmascript) <export default as addVideoToPlaylist>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addVideoToPlaylist": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/addVideoToPlaylist.ts [app-route] (ecmascript)");
}}),
"[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>processVideoAddition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/containsVideo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__addVideoToPlaylist$3e$__ = __turbopack_import__("[project]/app/firebase/addVideoToPlaylist.ts [app-route] (ecmascript) <export default as addVideoToPlaylist>");
;
;
;
;
async function processVideoAddition(buttonType, setCurrentVideo, videos, addVideo, user, togglePlaylist, duration, soundCloudVideo, youtubeVideo, tiktokVideo, clearVideos, pressed, setPressed, setShowTooltips) {
    const video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(duration, tiktokVideo, youtubeVideo, soundCloudVideo);
    if (!video) return;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["containsVideo"])(videos, video)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toast"].error("Video is already in the playlist");
    if (buttonType === "playlist") {
        console.log('running playlist process');
        if (!pressed) clearVideos();
        setPressed(true);
        console.log('clearVideos was ran');
        togglePlaylist(true);
        if (user) {
            await addVideoToDB(user.uid, video);
            addVideoToArray(setCurrentVideo, addVideo, video);
            toastMessage(buttonType);
        } else {
            if (setShowTooltips) {
                setShowTooltips(true);
                return;
            }
        }
    } else if (buttonType === "queue") {
        console.log("running queue process");
        if (!pressed) clearVideos();
        setPressed(true);
        console.log('cearVideos was ran');
        togglePlaylist(false);
        addVideoToArray(setCurrentVideo, addVideo, video);
        toastMessage(buttonType);
    }
}
async function addVideoToDB(userID, video) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__addVideoToPlaylist$3e$__["addVideoToPlaylist"])(userID, video);
    if (result.error && result.error === "Video already exists in the playlist") {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toast"].error("Video already exists in the playlist");
        return null;
    }
    return result.playlistID;
}
function addVideoToArray(setCurrentVideo, addVideo, video) {
    addVideo(video);
    setCurrentVideo(video);
}
function toastMessage(buttonType) {
    switch(buttonType){
        case "queue":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toast"].success("Video added to the queue");
            break;
        case "playlist":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toast"].success("Video added to the playlist");
            break;
        default:
            break;
    }
}
}}),
"[project]/app/utils/VideoPlayer/getTiktokVideoDetails.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
}}),
"[project]/app/utils/VideoPlayer/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
;
;
;
;
}}),
"[project]/app/utils/VideoPlayer/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewVideo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackURL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTrackURL.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getTrackURL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getTrackURL.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getTrackDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTrackDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewPlayerVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getTiktokVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getTiktokVideoDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/containsVideo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/app/utils/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
}}),
"[project]/app/utils/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/formatTime.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$randomCodeGenerator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/randomCodeGenerator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/createSearchParams.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Email$2f$sendVerificationEmail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/Email/sendVerificationEmail.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/app/api/scrape/soundcloud/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getTrackDetails.ts [app-route] (ecmascript)");
;
;
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    if (!url) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "URL is required"
        }, {
            status: 400
        });
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getTrackDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTrackDetails"])(url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error("Error in API handler:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Error fetching track details"
        }, {
            status: 500
        });
    }
}
}}),
"[project]/ (server-utils)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d55657._.js.map