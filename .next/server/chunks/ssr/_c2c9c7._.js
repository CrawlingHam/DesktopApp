module.exports = {

"[project]/app/firebase/authentication/signup.ts [app-ssr] (ecmascript) <export default as useSignup>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useSignup": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$signup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$signup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/signup.ts [app-ssr] (ecmascript)");
}}),
"[project]/app/firebase/authentication/createNewClientUser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createNewClientUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/authentication/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$signup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useSignup$3e$__ = __turbopack_import__("[project]/app/firebase/authentication/signup.ts [app-ssr] (ecmascript) <export default as useSignup>");
;
;
async function createNewClientUser(email, password, confirmPassword) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$signup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useSignup$3e$__["useSignup"])(email, password, confirmPassword);
    if (result.success) return result;
    switch(result.error){
        case "auth/email-already-in-use":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Email is already in use.");
            break;
        case "auth/invalid-email":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Invalid email address.");
            break;
        case "auth/weak-password":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Weak password. Please choose a stronger password.");
            break;
        case "Password must be between 8 and 266 characters.":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Password must be between 8 and 266 characters.");
            break;
        case "Password must contain at least 2 letters.":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Password must contain at least 2 letters.");
            break;
        case "Password must contain at least 2 numbers.":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Password must contain at least 2 numbers.");
            break;
        case "Passwords do not match.":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Passwords do not match.");
            break;
        default:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An unknown error occurred.");
            break;
    }
}
}}),
"[project]/app/utils/formatTime.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/randomCodeGenerator.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/createSearchParams.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/Email/sendVerificationEmail.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/setNewVideo.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>setNewVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/store/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useMedia.ts [app-ssr] (ecmascript)");
;
async function setNewVideo(setYoutubeVideo, setTiktokVideo, isPlaylistActive, setSliderValue, playlistID) {
    const { playlistVideos, queueVideos, currentVideo, setCurrentVideo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useMedia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMedia"])();
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
"[project]/app/utils/VideoPlayer/sanitizeURLs.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/getVideoID.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getVideoID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/sanitizeURLs.ts [app-ssr] (ecmascript)");
;
function getVideoID(platform, url) {
    if (platform === "Youtube") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeYoutubeURL"])(url);
    else if (platform === 'Youtube Shorts') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeYoutubeShortsURL"])(url);
    else if (platform === 'Youtu.be') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeEmbeddedYoutubeURL"])(url);
    else if (platform === 'Tiktok') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$sanitizeURLs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeTiktokURL"])(url);
    else if (platform === 'SoundCloud') return 'SoundCloud';
    else return null;
}
}}),
"[project]/app/utils/VideoPlayer/getPlatform.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getVideoDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoID$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoID.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getPlatform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getPlatform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-ssr] (ecmascript)");
;
;
;
;
async function getVideoDetails(url) {
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getPlatform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(url);
    if (!platform) return null;
    const videoID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoID$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(platform, url);
    if (!videoID) return null;
    const PlayerDetails = {
        tiktokVideoDetails: null,
        youtubeVideoDetails: null,
        soundCloudVideoDetails: null
    };
    if (platform === "Youtube") {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(videoID);
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(url);
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
}}),
"[project]/app/utils/VideoPlayer/createVideoObject.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/createNewVideo.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/createVideo.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createNewVideo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-ssr] (ecmascript)");
;
;
;
async function createVideo({ videoID, platform, setYoutubeVideo, setTiktokVideo, setSoundCloudVideo, optionals }) {
    switch(platform){
        case "youtube":
            if (typeof setYoutubeVideo === "undefined" || !setYoutubeVideo) return;
            const youtubeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(videoID);
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
            const newYoutubeVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(requiredYoutubeVideoDetails, optionals);
            if (newYoutubeVideo) setYoutubeVideo(newYoutubeVideo);
            break;
        case "tiktok":
            if (typeof setTiktokVideo === "undefined" || !setTiktokVideo) return;
            const tiktokVideoURL = `https://www.tiktok.com/@${videoID.split("+")[0]}/video/${videoID.split("+")[1]}`;
            const tiktokResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tiktokVideoURL);
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
            const newTiktokVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createNewVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(requiredTiktokVideoDetails, optionals);
            if (newTiktokVideo) setTiktokVideo(newTiktokVideo);
            break;
        default:
            break;
    }
}
}}),
"[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>setNewPlayerVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getYoutubeVideoDetails.ts [app-ssr] (ecmascript)");
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getYoutubeVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultVideoID);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            setYoutubeVideo,
            platform: "youtube",
            videoID: youtubeVideoID
        });
    } else if (youtube_all || youtube_base_start_end) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            setTiktokVideo,
            platform: "tiktok",
            videoID: tiktokVideoID
        });
    }
}
}}),
"[project]/app/utils/VideoPlayer/containsVideo.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/firebase/addVideoToPlaylist.ts [app-ssr] (ecmascript) <export default as addVideoToPlaylist>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addVideoToPlaylist": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/addVideoToPlaylist.ts [app-ssr] (ecmascript)");
}}),
"[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>processVideoAddition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/containsVideo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__addVideoToPlaylist$3e$__ = __turbopack_import__("[project]/app/firebase/addVideoToPlaylist.ts [app-ssr] (ecmascript) <export default as addVideoToPlaylist>");
;
;
;
;
async function processVideoAddition(buttonType, setCurrentVideo, videos, addVideo, user, togglePlaylist, duration, soundCloudVideo, youtubeVideo, tiktokVideo, clearVideos, setShowTooltips) {
    const video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(duration, tiktokVideo, youtubeVideo, soundCloudVideo);
    if (!video) return;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsVideo"])(videos, video)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Video is already in the playlist");
    if (buttonType === "playlist") {
        console.log('running playlist process');
        clearVideos();
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
        clearVideos();
        console.log('cearVideos was ran');
        togglePlaylist(false);
        addVideoToArray(setCurrentVideo, addVideo, video);
        toastMessage(buttonType);
    }
}
async function addVideoToDB(userID, video) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addVideoToPlaylist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__addVideoToPlaylist$3e$__["addVideoToPlaylist"])(userID, video);
    if (result.error && result.error === "Video already exists in the playlist") {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Video already exists in the playlist");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Video added to the queue");
            break;
        case "playlist":
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Video added to the playlist");
            break;
        default:
            break;
    }
}
}}),
"[project]/app/utils/VideoPlayer/getTiktokVideoDetails.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/utils/VideoPlayer/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
}}),
"[project]/app/utils/VideoPlayer/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewVideo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getVideoDetails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$createVideoObject$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/createVideoObject.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$setNewPlayerVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/setNewPlayerVideo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$processVideoAddition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/processVideoAddition.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$getTiktokVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/getTiktokVideoDetails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$fetchTiktokVideoDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/fetchTiktokVideoDetails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$containsVideo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/containsVideo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/app/utils/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
"[project]/app/utils/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/formatTime.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$randomCodeGenerator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/randomCodeGenerator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$createSearchParams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/createSearchParams.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Email$2f$sendVerificationEmail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/Email/sendVerificationEmail.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$VideoPlayer$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/VideoPlayer/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/app/components/AuthPages/Input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Input({ Icon, type, value, iconSize, onChange, placeholder, divClassName, autoComplete, iconClassName, inputClassName }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: divClassName,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                required: true,
                type: type,
                value: value,
                onChange: onChange,
                placeholder: placeholder,
                className: inputClassName,
                autoComplete: autoComplete
            }, void 0, false, {
                fileName: "[project]/app/components/AuthPages/Input.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                fontSize: iconSize,
                className: iconClassName
            }, void 0, false, {
                fileName: "[project]/app/components/AuthPages/Input.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AuthPages/Input.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/components/AuthPages/PageModel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PageModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/AuthPages/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/AccountCircle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VisibilityOff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/VisibilityOff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Visibility.js [app-ssr] (ecmascript)");
;
;
;
;
;
function PageModel({ email, password, titleName, buttonName, isLoginPage, onClickEvent, onEmailChange, confirmPassword, onPasswordChange, emailPlaceholder, passwordIsVisible, passwordPlaceholder, onConfirmPasswordChange, confirmPasswordPlaceholder }) {
    // shared classnames
    const sharedDivClassName = "relative my-8 h-12 w-full";
    const sharedIconClassName = `absolute right-4 top-1/2 -translate-y-1/2 transform text-xl hover:text-pink-500 text-teal-400`;
    const sharedInputClassName = `h-full w-full rounded-full border-2 border-gray-200 bg-transparent px-6 py-2 text-black 
    placeholder-black outline-none`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onClickEvent,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl text-center ",
                children: titleName
            }, void 0, false, {
                fileName: "[project]/app/components/AuthPages/PageModel.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                type: "text",
                value: email,
                iconSize: "small",
                autoComplete: "off",
                onChange: onEmailChange,
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                placeholder: emailPlaceholder,
                divClassName: sharedDivClassName,
                iconClassName: sharedIconClassName,
                inputClassName: sharedInputClassName
            }, void 0, false, {
                fileName: "[project]/app/components/AuthPages/PageModel.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                type: "password",
                iconSize: "small",
                value: password,
                autoComplete: "off",
                onChange: onPasswordChange,
                divClassName: sharedDivClassName,
                iconClassName: sharedIconClassName,
                inputClassName: sharedInputClassName,
                placeholder: passwordPlaceholder,
                Icon: passwordIsVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VisibilityOff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/app/components/AuthPages/PageModel.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            !isLoginPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSize: "small",
                type: "password",
                autoComplete: "off",
                value: confirmPassword,
                divClassName: sharedDivClassName,
                onChange: onConfirmPasswordChange,
                iconClassName: sharedIconClassName,
                inputClassName: sharedInputClassName,
                placeholder: confirmPasswordPlaceholder,
                Icon: passwordIsVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VisibilityOff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/app/components/AuthPages/PageModel.tsx",
                lineNumber: 66,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "h-12 w-full rounded-full shadow-md hover:shadow-lg    bg-gradient-to-r from-gray-300 to-teal-400 text-white border    cursor-pointer hover:from-orange-50 hover:to-pink-500",
                children: buttonName
            }, void 0, false, {
                fileName: "[project]/app/components/AuthPages/PageModel.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AuthPages/PageModel.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/components/AuthPages/Form.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Form)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$PageModel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/AuthPages/PageModel.tsx [app-ssr] (ecmascript)");
;
;
function Form({ email, password, isLoginPage, onEmailChange, confirmPassword, onPasswordChange, passwordIsVisible, onLoginButtonClick, onSignupButtonClick, onConfirmPasswordChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$PageModel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        email: email,
        password: password,
        isLoginPage: isLoginPage,
        onEmailChange: onEmailChange,
        emailPlaceholder: "Enter email",
        confirmPassword: confirmPassword,
        onPasswordChange: onPasswordChange,
        passwordPlaceholder: "Enter password",
        passwordIsVisible: passwordIsVisible,
        titleName: isLoginPage ? "Login" : "Sign Up",
        confirmPasswordPlaceholder: "Confirm password",
        buttonName: isLoginPage ? "Login" : "Sign Up",
        onConfirmPasswordChange: onConfirmPasswordChange,
        onClickEvent: isLoginPage ? onLoginButtonClick : onSignupButtonClick
    }, void 0, false, {
        fileName: "[project]/app/components/AuthPages/Form.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/components/AuthPages/ThirdPartyAuth.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ThirdPartyAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Google$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Google.js [app-ssr] (ecmascript)");
;
;
function ThirdPartyAuth({ onGoogleIconClick, fontSize }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Google$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "hover:cursor-pointer",
            fontSize: fontSize,
            onClick: onGoogleIconClick
        }, void 0, false, {
            fileName: "[project]/app/components/AuthPages/ThirdPartyAuth.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/AuthPages/ThirdPartyAuth.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/components/AuthPages/ToggleForms.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ToggleForms)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
;
;
function ToggleForms({ isLoginPage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: isLoginPage ? "/signup" : "/login",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    isLoginPage ? "Don't have an account?" : "Already Have An Account?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-[100px] h-10 ml-2 p-2 bg-gradient-to-r from-gray-300    to-teal-400 text-white border rounded-lg cursor-pointer    hover:from-orange-50 hover:to-pink-500",
                        children: isLoginPage ? "Sign Up" : "Log In"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AuthPages/ToggleForms.tsx",
                        lineNumber: 9,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AuthPages/ToggleForms.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/AuthPages/ToggleForms.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/AuthPages/ToggleForms.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/components/AuthPages/CodeModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CodeModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CodeModal({ handleCloseModal, handleVerify, email, setCode, code }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-lg shadow-md max-w-sm w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCloseModal,
                    className: "ml-80 text-gray-500 text-2xl hover:text-teal-300 transform hover:scale-125 transition-transform duration-100",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-center mb-4",
                    children: "Enter a 6-Digit Code to verify your Email"
                }, void 0, false, {
                    fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "mb-3",
                    children: [
                        " You're almost there! We've sent a 6 digit code to ",
                        email,
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleVerify,
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: code,
                            onChange: (e)=>setCode(e.target.value),
                            maxLength: 6,
                            className: "w-full h-12 p-2 mb-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400",
                            placeholder: "Enter Code"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: `w-full h-12 mt-4 bg-gradient-to-r from-gray-300 to-teal-400 text-white border rounded-lg cursor-pointer ${code.length !== 6 ? "bg-gray-300 cursor-not-allowed" : "hover:from-orange-50 hover:to-pink-500"}`,
                            disabled: code.length !== 6,
                            children: "Verify"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/AuthPages/CodeModal.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/firebase/storeGeneratedCode.ts [app-ssr] (ecmascript) <export default as storeGeneratedCode>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "storeGeneratedCode": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$storeGeneratedCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$storeGeneratedCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/storeGeneratedCode.ts [app-ssr] (ecmascript)");
}}),
"[project]/app/firebase/addNewClientUser.ts [app-ssr] (ecmascript) <export default as AddNewClientUser>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AddNewClientUser": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addNewClientUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addNewClientUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/addNewClientUser.ts [app-ssr] (ecmascript)");
}}),
"[project]/app/firebase/authentication/googleLogin.ts [app-ssr] (ecmascript) <export default as googleLogin>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "googleLogin": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$googleLogin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$googleLogin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/googleLogin.ts [app-ssr] (ecmascript)");
}}),
"[project]/app/firebase/authentication/login.ts [app-ssr] (ecmascript) <export default as useLogin>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useLogin": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$login$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$login$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/login.ts [app-ssr] (ecmascript)");
}}),
"[project]/app/components/AuthPages/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AuthPages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/firebase/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$createNewClientUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/authentication/createNewClientUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$Form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/AuthPages/Form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$ThirdPartyAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/AuthPages/ThirdPartyAuth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$ToggleForms$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/AuthPages/ToggleForms.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$CodeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/AuthPages/CodeModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/store/useClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Email$2f$sendVerificationEmail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/Email/sendVerificationEmail.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$storeGeneratedCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__storeGeneratedCode$3e$__ = __turbopack_import__("[project]/app/firebase/storeGeneratedCode.ts [app-ssr] (ecmascript) <export default as storeGeneratedCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$storeGeneratedCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/firebase/storeGeneratedCode.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addNewClientUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AddNewClientUser$3e$__ = __turbopack_import__("[project]/app/firebase/addNewClientUser.ts [app-ssr] (ecmascript) <export default as AddNewClientUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$googleLogin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__googleLogin$3e$__ = __turbopack_import__("[project]/app/firebase/authentication/googleLogin.ts [app-ssr] (ecmascript) <export default as googleLogin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$login$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLogin$3e$__ = __turbopack_import__("[project]/app/firebase/authentication/login.ts [app-ssr] (ecmascript) <export default as useLogin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/firebase/config.ts [app-ssr] (ecmascript) <locals>");
"use client";
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
;
function AuthPages() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const isLoginPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() === "/login";
    const handleCloseModal = ()=>setShowCodeModal(false);
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCodeModal, setShowCodeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [passwordIsVisible, setPasswordIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const onEmailChange = (event)=>setEmail(event.target.value);
    const onPasswordChange = (event)=>setPassword(event.target.value);
    const onConfirmPasswordChange = (event)=>setConfirmPassword(event.target.value);
    const { email: userEmail, role, username, isVerified, setUserRole, setUserIsVerified, setUserEmail, setUserUsername, fetchUserData, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const { initializeClient, isClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initializeClient();
    }, [
        initializeClient
    ]);
    const handleSignupClick = async (event)=>{
        event.preventDefault();
        if (!email || !password || !confirmPassword) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Email, password, and confirmation are required.");
            return;
        }
        setShowCodeModal(true);
        const verificationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Email$2f$sendVerificationEmail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendVerificationEmail"])(email);
        console.log(verificationResult, "verification result");
        if (!verificationResult.success || !verificationResult.expirationDate) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(verificationResult.error);
            return;
        }
        const expirationDate = verificationResult.expirationDate;
        const verificationCode = verificationResult.code;
        const storeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$storeGeneratedCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__storeGeneratedCode$3e$__["storeGeneratedCode"])(email, verificationCode, expirationDate);
        if (!storeResult.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(storeResult.error);
            return;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"].getState().subscribeToAuthState();
        return ()=>unsubscribe();
    }, []);
    const handleVerify = async (e)=>{
        e.preventDefault();
        const validCode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$storeGeneratedCode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCodeValid"])(email, code);
        if (!validCode.success || !validCode.valid) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(validCode.error);
            return;
        }
        setCode("");
        setUserIsVerified(true);
        setShowCodeModal(false);
        const userCredentials = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$createNewClientUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(email, password, confirmPassword);
        if (!userCredentials?.success || !userCredentials?.user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(userCredentials?.error);
            return;
        }
        const uid = userCredentials.user.uid;
        const emailVerified = true;
        const displayName = userCredentials.user.displayName;
        const dbResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$addNewClientUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AddNewClientUser$3e$__["AddNewClientUser"])({
            uid,
            email,
            displayName,
            emailVerified,
            setUserRole,
            setUserIsVerified,
            setUserEmail,
            setUserUsername
        });
        if (dbResult.success) router.push("/login");
    };
    const onGoogleIconClick = async ()=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$googleLogin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__googleLogin$3e$__["googleLogin"])();
            if (result.success && result.user) router.push("/");
            else if (result.error) throw Error(result.error);
        } catch (error) {
            console.error(error.message);
        }
    };
    const onLoginButtonClick = async (event)=>{
        event.preventDefault();
        if (!email || !password) return;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$authentication$2f$login$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLogin$3e$__["useLogin"])(email, password);
            if (result.success && result.user) {
                // Sync user data with store
                const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].currentUser;
                if (!currentUser) {
                    const errorMessage = "An error occurred. Please try again.";
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
                    throw new Error(errorMessage);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"].getState().fetchUserData(currentUser.uid);
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$useUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"].getState().setUserEmail(currentUser.email);
                console.log("Forced user sync:", currentUser);
                console.log("Login successfull: ", result.user);
                router.push("/");
            } else throw new Error("An error occurred. Please try again.");
        } catch (error) {
            console.error(error.message);
        } finally{
            setEmail("");
            setPassword("");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user) router.push("/VideoPlayer");
    }, [
        user,
        router
    ]);
    if (!isClient) return; // return loading spinner
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-cover bg-center bg-wavy-lines flex items-stretch bg-grey-lighter min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-20 pb-10 w-96 bg-transparent border-2 border-black/30 backdrop-blur-lg shadow-md text-black rounded-lg p-10 mx-auto my-28",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$Form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            passwordIsVisible: passwordIsVisible,
                            email: email,
                            password: password,
                            confirmPassword: confirmPassword,
                            isLoginPage: isLoginPage,
                            onConfirmPasswordChange: onConfirmPasswordChange,
                            onEmailChange: onEmailChange,
                            onPasswordChange: onPasswordChange,
                            onLoginButtonClick: onLoginButtonClick,
                            onSignupButtonClick: handleSignupClick,
                            onGoogleIconClick: onGoogleIconClick
                        }, void 0, false, {
                            fileName: "[project]/app/components/AuthPages/page.tsx",
                            lineNumber: 162,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "my-5 text-center text-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AuthPages/page.tsx",
                            lineNumber: 175,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$ThirdPartyAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "medium",
                            onGoogleIconClick: onGoogleIconClick
                        }, void 0, false, {
                            fileName: "[project]/app/components/AuthPages/page.tsx",
                            lineNumber: 176,
                            columnNumber: 25
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$ToggleForms$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isLoginPage: isLoginPage
                        }, void 0, false, {
                            fileName: "[project]/app/components/AuthPages/page.tsx",
                            lineNumber: 177,
                            columnNumber: 25
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AuthPages/page.tsx",
                    lineNumber: 160,
                    columnNumber: 21
                }, this),
                showCodeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthPages$2f$CodeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    code: code,
                    email: email,
                    handleCloseModal: handleCloseModal,
                    handleVerify: handleVerify,
                    setCode: setCode
                }, void 0, false, {
                    fileName: "[project]/app/components/AuthPages/page.tsx",
                    lineNumber: 182,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-8 left-8 z-50 w-auto max-w-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                            duration: 5000,
                            richColors: true
                        }, void 0, false, {
                            fileName: "[project]/app/components/AuthPages/page.tsx",
                            lineNumber: 186,
                            columnNumber: 25
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AuthPages/page.tsx",
                    lineNumber: 185,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AuthPages/page.tsx",
            lineNumber: 159,
            columnNumber: 17
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/components/AuthPages/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}}),
"[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Toaster": (()=>Be),
    "toast": (()=>te),
    "useSonner": (()=>Ce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
var kt = (r)=>{
    switch(r){
        case "success":
            return Vt;
        case "info":
            return Kt;
        case "warning":
            return Ot;
        case "error":
            return Jt;
        default:
            return null;
    }
}, Ut = Array(12).fill(0), Dt = ({ visible: r, className: o })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: [
            "sonner-loading-wrapper",
            o
        ].filter(Boolean).join(" "),
        "data-visible": r
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sonner-spinner"
    }, Ut.map((t, s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${s}`
        })))), Vt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
})), Ot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
})), Kt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
})), Jt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
})), Ht = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}));
;
var At = ()=>{
    let [r, o] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(document.hidden);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        let t = ()=>{
            o(document.hidden);
        };
        return document.addEventListener("visibilitychange", t), ()=>window.removeEventListener("visibilitychange", t);
    }, []), r;
};
;
var ft = 1, mt = class {
    constructor(){
        this.subscribe = (o)=>(this.subscribers.push(o), ()=>{
                let t = this.subscribers.indexOf(o);
                this.subscribers.splice(t, 1);
            });
        this.publish = (o)=>{
            this.subscribers.forEach((t)=>t(o));
        };
        this.addToast = (o)=>{
            this.publish(o), this.toasts = [
                ...this.toasts,
                o
            ];
        };
        this.create = (o)=>{
            var P;
            let { message: t, ...s } = o, g = typeof (o == null ? void 0 : o.id) == "number" || ((P = o.id) == null ? void 0 : P.length) > 0 ? o.id : ft++, l = this.toasts.find((h)=>h.id === g), E = o.dismissible === void 0 ? !0 : o.dismissible;
            return l ? this.toasts = this.toasts.map((h)=>h.id === g ? (this.publish({
                    ...h,
                    ...o,
                    id: g,
                    title: t
                }), {
                    ...h,
                    ...o,
                    id: g,
                    dismissible: E,
                    title: t
                }) : h) : this.addToast({
                title: t,
                ...s,
                dismissible: E,
                id: g
            }), g;
        };
        this.dismiss = (o)=>(o || this.toasts.forEach((t)=>{
                this.subscribers.forEach((s)=>s({
                        id: t.id,
                        dismiss: !0
                    }));
            }), this.subscribers.forEach((t)=>t({
                    id: o,
                    dismiss: !0
                })), o);
        this.message = (o, t)=>this.create({
                ...t,
                message: o
            });
        this.error = (o, t)=>this.create({
                ...t,
                message: o,
                type: "error"
            });
        this.success = (o, t)=>this.create({
                ...t,
                type: "success",
                message: o
            });
        this.info = (o, t)=>this.create({
                ...t,
                type: "info",
                message: o
            });
        this.warning = (o, t)=>this.create({
                ...t,
                type: "warning",
                message: o
            });
        this.loading = (o, t)=>this.create({
                ...t,
                type: "loading",
                message: o
            });
        this.promise = (o, t)=>{
            if (!t) return;
            let s;
            t.loading !== void 0 && (s = this.create({
                ...t,
                promise: o,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let g = o instanceof Promise ? o : o(), l = s !== void 0, E, P = g.then(async (c)=>{
                if (E = [
                    "resolve",
                    c
                ], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(c)) l = !1, this.create({
                    id: s,
                    type: "default",
                    message: c
                });
                else if (Qt(c) && !c.ok) {
                    l = !1;
                    let k = typeof t.error == "function" ? await t.error(`HTTP error! status: ${c.status}`) : t.error, j = typeof t.description == "function" ? await t.description(`HTTP error! status: ${c.status}`) : t.description;
                    this.create({
                        id: s,
                        type: "error",
                        message: k,
                        description: j
                    });
                } else if (t.success !== void 0) {
                    l = !1;
                    let k = typeof t.success == "function" ? await t.success(c) : t.success, j = typeof t.description == "function" ? await t.description(c) : t.description;
                    this.create({
                        id: s,
                        type: "success",
                        message: k,
                        description: j
                    });
                }
            }).catch(async (c)=>{
                if (E = [
                    "reject",
                    c
                ], t.error !== void 0) {
                    l = !1;
                    let y = typeof t.error == "function" ? await t.error(c) : t.error, k = typeof t.description == "function" ? await t.description(c) : t.description;
                    this.create({
                        id: s,
                        type: "error",
                        message: y,
                        description: k
                    });
                }
            }).finally(()=>{
                var c;
                l && (this.dismiss(s), s = void 0), (c = t.finally) == null || c.call(t);
            }), h = ()=>new Promise((c, y)=>P.then(()=>E[0] === "reject" ? y(E[1]) : c(E[1])).catch(y));
            return typeof s != "string" && typeof s != "number" ? {
                unwrap: h
            } : Object.assign(s, {
                unwrap: h
            });
        };
        this.custom = (o, t)=>{
            let s = (t == null ? void 0 : t.id) || ft++;
            return this.create({
                jsx: o(s),
                id: s,
                ...t
            }), s;
        };
        this.subscribers = [], this.toasts = [];
    }
}, T = new mt, Gt = (r, o)=>{
    let t = (o == null ? void 0 : o.id) || ft++;
    return T.addToast({
        title: r,
        ...o,
        id: t
    }), t;
}, Qt = (r)=>r && typeof r == "object" && "ok" in r && typeof r.ok == "boolean" && "status" in r && typeof r.status == "number", qt = Gt, Zt = ()=>T.toasts, te = Object.assign(qt, {
    success: T.success,
    info: T.info,
    warning: T.warning,
    error: T.error,
    custom: T.custom,
    message: T.message,
    promise: T.promise,
    dismiss: T.dismiss,
    loading: T.loading
}, {
    getHistory: Zt
});
function pt(r, { insertAt: o } = {}) {
    if (!r || typeof document == "undefined") return;
    let t = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", o === "top" && t.firstChild ? t.insertBefore(s, t.firstChild) : t.appendChild(s), s.styleSheet ? s.styleSheet.cssText = r : s.appendChild(document.createTextNode(r));
}
pt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function V(r) {
    return r.label !== void 0;
}
var ae = 3, ne = "32px", Lt = 4e3, se = 356, re = 14, ie = 20, le = 200;
function de(...r) {
    return r.filter(Boolean).join(" ");
}
var ce = (r)=>{
    var xt, vt, wt, Tt, Rt, St, Et, Nt, Pt, Ct, Bt;
    let { invert: o, toast: t, unstyled: s, interacting: g, setHeights: l, visibleToasts: E, heights: P, index: h, toasts: c, expanded: y, removeToast: k, defaultRichColors: j, closeButton: O, style: st, cancelButtonStyle: i, actionButtonStyle: K, className: J = "", descriptionClassName: rt = "", duration: _, position: it, gap: lt, loadingIcon: X, expandByDefault: C, classNames: a, icons: N, closeButtonAriaLabel: G = "Close toast", pauseWhenPageIsHidden: Q, cn: R } = r, [B, q] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(!1), [U, dt] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(!1), [M, A] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(!1), [Z, L] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(!1), [Y, tt] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(!1), [d, u] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0), [b, w] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0), D = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(t.duration || _ || Lt), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null), H = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null), et = h === 0, ot = h + 1 <= E, x = t.type, F = t.dismissible !== !1, jt = t.className || "", Yt = t.descriptionClassName || "", at = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>P.findIndex((n)=>n.toastId === t.id) || 0, [
        P,
        t.id
    ]), Ft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        var n;
        return (n = t.closeButton) != null ? n : O;
    }, [
        t.closeButton,
        O
    ]), ue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>t.duration || _ || Lt, [
        t.duration,
        _
    ]), ct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0), $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0), gt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0), nt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null), [ht, $t] = it.split("-"), bt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>P.reduce((n, m, p)=>p >= at ? n : n + m.height, 0), [
        P,
        at
    ]), yt = At(), Wt = t.invert || o, ut = x === "loading";
    $.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>at * lt + bt, [
        at,
        bt
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        q(!0);
    }, []), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        let n = H.current;
        if (n) {
            let m = n.getBoundingClientRect().height;
            return w(m), l((p)=>[
                    {
                        toastId: t.id,
                        height: m,
                        position: t.position
                    },
                    ...p
                ]), ()=>l((p)=>p.filter((v)=>v.toastId !== t.id));
        }
    }, [
        l,
        t.id
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useLayoutEffect(()=>{
        if (!B) return;
        let n = H.current, m = n.style.height;
        n.style.height = "auto";
        let p = n.getBoundingClientRect().height;
        n.style.height = m, w(p), l((v)=>v.find((I)=>I.toastId === t.id) ? v.map((I)=>I.toastId === t.id ? {
                    ...I,
                    height: p
                } : I) : [
                {
                    toastId: t.id,
                    height: p,
                    position: t.position
                },
                ...v
            ]);
    }, [
        B,
        t.title,
        t.description,
        l,
        t.id
    ]);
    let z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        dt(!0), u($.current), l((n)=>n.filter((m)=>m.toastId !== t.id)), setTimeout(()=>{
            k(t);
        }, le);
    }, [
        t,
        k,
        l,
        $
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (t.promise && x === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
        let n;
        return y || g || Q && yt ? (()=>{
            if (gt.current < ct.current) {
                let v = new Date().getTime() - ct.current;
                D.current = D.current - v;
            }
            gt.current = new Date().getTime();
        })() : (()=>{
            D.current !== 1 / 0 && (ct.current = new Date().getTime(), n = setTimeout(()=>{
                var v;
                (v = t.onAutoClose) == null || v.call(t, t), z();
            }, D.current));
        })(), ()=>clearTimeout(n);
    }, [
        y,
        g,
        t,
        x,
        Q,
        yt,
        z
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        t.delete && z();
    }, [
        z,
        t.delete
    ]);
    function _t() {
        var n, m, p;
        return N != null && N.loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: R(a == null ? void 0 : a.loader, (n = t == null ? void 0 : t.classNames) == null ? void 0 : n.loader, "sonner-loader"),
            "data-visible": x === "loading"
        }, N.loading) : X ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: R(a == null ? void 0 : a.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"),
            "data-visible": x === "loading"
        }, X) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Dt, {
            className: R(a == null ? void 0 : a.loader, (p = t == null ? void 0 : t.classNames) == null ? void 0 : p.loader),
            visible: x === "loading"
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        tabIndex: 0,
        ref: H,
        className: R(J, jt, a == null ? void 0 : a.toast, (xt = t == null ? void 0 : t.classNames) == null ? void 0 : xt.toast, a == null ? void 0 : a.default, a == null ? void 0 : a[x], (vt = t == null ? void 0 : t.classNames) == null ? void 0 : vt[x]),
        "data-sonner-toast": "",
        "data-rich-colors": (wt = t.richColors) != null ? wt : j,
        "data-styled": !(t.jsx || t.unstyled || s),
        "data-mounted": B,
        "data-promise": !!t.promise,
        "data-swiped": Y,
        "data-removed": U,
        "data-visible": ot,
        "data-y-position": ht,
        "data-x-position": $t,
        "data-index": h,
        "data-front": et,
        "data-swiping": M,
        "data-dismissible": F,
        "data-type": x,
        "data-invert": Wt,
        "data-swipe-out": Z,
        "data-expanded": !!(y || C && B),
        style: {
            "--index": h,
            "--toasts-before": h,
            "--z-index": c.length - h,
            "--offset": `${U ? d : $.current}px`,
            "--initial-height": C ? "auto" : `${b}px`,
            ...st,
            ...t.style
        },
        onPointerDown: (n)=>{
            ut || !F || (f.current = new Date, u($.current), n.target.setPointerCapture(n.pointerId), n.target.tagName !== "BUTTON" && (A(!0), nt.current = {
                x: n.clientX,
                y: n.clientY
            }));
        },
        onPointerUp: ()=>{
            var v, W, I, It;
            if (Z || !F) return;
            nt.current = null;
            let n = Number(((v = H.current) == null ? void 0 : v.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), m = new Date().getTime() - ((W = f.current) == null ? void 0 : W.getTime()), p = Math.abs(n) / m;
            if (Math.abs(n) >= ie || p > .11) {
                u($.current), (I = t.onDismiss) == null || I.call(t, t), z(), L(!0), tt(!1);
                return;
            }
            (It = H.current) == null || It.style.setProperty("--swipe-amount", "0px"), A(!1);
        },
        onPointerMove: (n)=>{
            var W, I;
            if (!nt.current || !F) return;
            let m = n.clientY - nt.current.y, p = ((W = window.getSelection()) == null ? void 0 : W.toString().length) > 0, v = ht === "top" ? Math.min(0, m) : Math.max(0, m);
            Math.abs(v) > 0 && tt(!0), !p && ((I = H.current) == null || I.style.setProperty("--swipe-amount", `${v}px`));
        }
    }, Ft && !t.jsx ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": G,
        "data-disabled": ut,
        "data-close-button": !0,
        onClick: ut || !F ? ()=>{} : ()=>{
            var n;
            z(), (n = t.onDismiss) == null || n.call(t, t);
        },
        className: R(a == null ? void 0 : a.closeButton, (Tt = t == null ? void 0 : t.classNames) == null ? void 0 : Tt.closeButton)
    }, (Rt = N == null ? void 0 : N.close) != null ? Rt : Ht) : null, t.jsx || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, x || t.icon || t.promise ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-icon": "",
        className: R(a == null ? void 0 : a.icon, (St = t == null ? void 0 : t.classNames) == null ? void 0 : St.icon)
    }, t.promise || t.type === "loading" && !t.icon ? t.icon || _t() : null, t.type !== "loading" ? t.icon || (N == null ? void 0 : N[x]) || kt(x) : null) : null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-content": "",
        className: R(a == null ? void 0 : a.content, (Et = t == null ? void 0 : t.classNames) == null ? void 0 : Et.content)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-title": "",
        className: R(a == null ? void 0 : a.title, (Nt = t == null ? void 0 : t.classNames) == null ? void 0 : Nt.title)
    }, typeof t.title == "function" ? t.title() : t.title), t.description ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-description": "",
        className: R(rt, Yt, a == null ? void 0 : a.description, (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt.description)
    }, typeof t.description == "function" ? t.description() : t.description) : null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(t.cancel) ? t.cancel : t.cancel && V(t.cancel) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: t.cancelButtonStyle || i,
        onClick: (n)=>{
            var m, p;
            V(t.cancel) && F && ((p = (m = t.cancel).onClick) == null || p.call(m, n), z());
        },
        className: R(a == null ? void 0 : a.cancelButton, (Ct = t == null ? void 0 : t.classNames) == null ? void 0 : Ct.cancelButton)
    }, t.cancel.label) : null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(t.action) ? t.action : t.action && V(t.action) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: t.actionButtonStyle || K,
        onClick: (n)=>{
            var m, p;
            V(t.action) && ((p = (m = t.action).onClick) == null || p.call(m, n), !n.defaultPrevented && z());
        },
        className: R(a == null ? void 0 : a.actionButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.actionButton)
    }, t.action.label) : null));
};
function zt() {
    if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
    let r = document.documentElement.getAttribute("dir");
    return r === "auto" || !r ? window.getComputedStyle(document.documentElement).direction : r;
}
function Ce() {
    let [r, o] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>T.subscribe((t)=>{
            o((s)=>{
                if ("dismiss" in t && t.dismiss) return s.filter((l)=>l.id !== t.id);
                let g = s.findIndex((l)=>l.id === t.id);
                if (g !== -1) {
                    let l = [
                        ...s
                    ];
                    return l[g] = {
                        ...l[g],
                        ...t
                    }, l;
                } else return [
                    t,
                    ...s
                ];
            });
        }), []), {
        toasts: r
    };
}
var Be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function(o, t) {
    let { invert: s, position: g = "bottom-right", hotkey: l = [
        "altKey",
        "KeyT"
    ], expand: E, closeButton: P, className: h, offset: c, theme: y = "light", richColors: k, duration: j, style: O, visibleToasts: st = ae, toastOptions: i, dir: K = zt(), gap: J = re, loadingIcon: rt, icons: _, containerAriaLabel: it = "Notifications", pauseWhenPageIsHidden: lt, cn: X = de } = o, [C, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]), N = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>Array.from(new Set([
            g
        ].concat(C.filter((d)=>d.position).map((d)=>d.position)))), [
        C,
        g
    ]), [G, Q] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]), [R, B] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(!1), [q, U] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(!1), [dt, M] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(y !== "system" ? y : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null), Z = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null), Y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(!1), tt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((d)=>{
        a((u)=>{
            var b;
            return (b = u.find((w)=>w.id === d.id)) != null && b.delete || T.dismiss(d.id), u.filter(({ id: w })=>w !== d.id);
        });
    }, []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>T.subscribe((d)=>{
            if (d.dismiss) {
                a((u)=>u.map((b)=>b.id === d.id ? {
                            ...b,
                            delete: !0
                        } : b));
                return;
            }
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flushSync(()=>{
                    a((u)=>{
                        let b = u.findIndex((w)=>w.id === d.id);
                        return b !== -1 ? [
                            ...u.slice(0, b),
                            {
                                ...u[b],
                                ...d
                            },
                            ...u.slice(b + 1)
                        ] : [
                            d,
                            ...u
                        ];
                    });
                });
            });
        }), []), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (y !== "system") {
            M(y);
            return;
        }
        if (y === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? M("dark") : M("light")), typeof window == "undefined") return;
        let d = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            d.addEventListener("change", ({ matches: u })=>{
                M(u ? "dark" : "light");
            });
        } catch (u) {
            d.addListener(({ matches: b })=>{
                try {
                    M(b ? "dark" : "light");
                } catch (w) {
                    console.error(w);
                }
            });
        }
    }, [
        y
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        C.length <= 1 && B(!1);
    }, [
        C
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        let d = (u)=>{
            var w, D;
            l.every((f)=>u[f] || u.code === f) && (B(!0), (w = A.current) == null || w.focus()), u.code === "Escape" && (document.activeElement === A.current || (D = A.current) != null && D.contains(document.activeElement)) && B(!1);
        };
        return document.addEventListener("keydown", d), ()=>document.removeEventListener("keydown", d);
    }, [
        l
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (A.current) return ()=>{
            L.current && (L.current.focus({
                preventScroll: !0
            }), L.current = null, Y.current = !1);
        };
    }, [
        A.current
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        "aria-label": `${it} ${Z}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false"
    }, N.map((d, u)=>{
        var D;
        let [b, w] = d.split("-");
        return C.length ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("ol", {
            key: d,
            dir: K === "auto" ? zt() : K,
            tabIndex: -1,
            ref: A,
            className: h,
            "data-sonner-toaster": !0,
            "data-theme": dt,
            "data-y-position": b,
            "data-lifted": R && C.length > 1 && !E,
            "data-x-position": w,
            style: {
                "--front-toast-height": `${((D = G[0]) == null ? void 0 : D.height) || 0}px`,
                "--offset": typeof c == "number" ? `${c}px` : c || ne,
                "--width": `${se}px`,
                "--gap": `${J}px`,
                ...O
            },
            onBlur: (f)=>{
                Y.current && !f.currentTarget.contains(f.relatedTarget) && (Y.current = !1, L.current && (L.current.focus({
                    preventScroll: !0
                }), L.current = null));
            },
            onFocus: (f)=>{
                f.target instanceof HTMLElement && f.target.dataset.dismissible === "false" || Y.current || (Y.current = !0, L.current = f.relatedTarget);
            },
            onMouseEnter: ()=>B(!0),
            onMouseMove: ()=>B(!0),
            onMouseLeave: ()=>{
                q || B(!1);
            },
            onPointerDown: (f)=>{
                f.target instanceof HTMLElement && f.target.dataset.dismissible === "false" || U(!0);
            },
            onPointerUp: ()=>U(!1)
        }, C.filter((f)=>!f.position && u === 0 || f.position === d).map((f, H)=>{
            var et, ot;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ce, {
                key: f.id,
                icons: _,
                index: H,
                toast: f,
                defaultRichColors: k,
                duration: (et = i == null ? void 0 : i.duration) != null ? et : j,
                className: i == null ? void 0 : i.className,
                descriptionClassName: i == null ? void 0 : i.descriptionClassName,
                invert: s,
                visibleToasts: st,
                closeButton: (ot = i == null ? void 0 : i.closeButton) != null ? ot : P,
                interacting: q,
                position: d,
                style: i == null ? void 0 : i.style,
                unstyled: i == null ? void 0 : i.unstyled,
                classNames: i == null ? void 0 : i.classNames,
                cancelButtonStyle: i == null ? void 0 : i.cancelButtonStyle,
                actionButtonStyle: i == null ? void 0 : i.actionButtonStyle,
                removeToast: tt,
                toasts: C.filter((x)=>x.position == f.position),
                heights: G.filter((x)=>x.position == f.position),
                setHeights: Q,
                expandByDefault: E,
                gap: J,
                loadingIcon: rt,
                expanded: R,
                pauseWhenPageIsHidden: lt,
                cn: X
            });
        })) : null;
    }));
});
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@mui/icons-material/esm/AccountCircle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/utils/createSvgIcon.js [app-ssr] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), 'AccountCircle');
}}),
"[project]/node_modules/@mui/icons-material/esm/VisibilityOff.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/utils/createSvgIcon.js [app-ssr] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), 'VisibilityOff');
}}),
"[project]/node_modules/@mui/icons-material/esm/Visibility.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/utils/createSvgIcon.js [app-ssr] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), 'Visibility');
}}),
"[project]/node_modules/@mui/icons-material/esm/Google.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/utils/createSvgIcon.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
}), 'Google');
}}),

};

//# sourceMappingURL=_c2c9c7._.js.map