System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "assets/js/bundle.js": [
      "assets/js/app.js",
      "assets/js/components/email-form.js",
      "npm:react@0.14.2",
      "npm:react-dom@0.14.2",
      "assets/js/components/item-card-list.js",
      "npm:react-dom@0.14.2/index",
      "npm:react@0.14.2/react",
      "assets/js/components/item-card.js",
      "npm:react@0.14.2/lib/ReactDOM",
      "npm:react@0.14.2/lib/React",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.14.2/lib/ReactDOMTextComponent",
      "npm:react@0.14.2/lib/ReactCurrentOwner",
      "npm:react@0.14.2/lib/ReactDefaultInjection",
      "npm:react@0.14.2/lib/ReactInstanceHandles",
      "npm:react@0.14.2/lib/ReactMount",
      "npm:react@0.14.2/lib/ReactReconciler",
      "npm:react@0.14.2/lib/ReactPerf",
      "npm:react@0.14.2/lib/ReactUpdates",
      "npm:react@0.14.2/lib/ReactVersion",
      "npm:react@0.14.2/lib/findDOMNode",
      "npm:react@0.14.2/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.3.2/lib/warning",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.2/lib/ReactDOMServer",
      "npm:react@0.14.2/lib/ReactIsomorphic",
      "npm:react@0.14.2/lib/Object.assign",
      "npm:react@0.14.2/lib/deprecated",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:react@0.14.2/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.2/lib/DOMChildrenOperations",
      "npm:react@0.14.2/lib/DOMPropertyOperations",
      "npm:react@0.14.2/lib/escapeTextContentForBrowser",
      "npm:react@0.14.2/lib/validateDOMNesting",
      "npm:react@0.14.2/lib/setTextContent",
      "npm:react@0.14.2/lib/ChangeEventPlugin",
      "npm:react@0.14.2/lib/BeforeInputEventPlugin",
      "npm:react@0.14.2/lib/ClientReactRootIndex",
      "npm:react@0.14.2/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.2/lib/DefaultEventPluginOrder",
      "npm:react@0.14.2/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.2/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.2/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.2/lib/ReactEventListener",
      "npm:react@0.14.2/lib/ReactDOMComponent",
      "npm:react@0.14.2/lib/ReactReconcileTransaction",
      "npm:react@0.14.2/lib/ReactInjection",
      "npm:react@0.14.2/lib/SelectEventPlugin",
      "npm:react@0.14.2/lib/ServerReactRootIndex",
      "npm:react@0.14.2/lib/ReactDefaultPerf",
      "npm:react@0.14.2/lib/ReactRootIndex",
      "npm:react@0.14.2/lib/SimpleEventPlugin",
      "npm:react@0.14.2/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.2/lib/ReactBrowserEventEmitter",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:react@0.14.2/lib/DOMProperty",
      "npm:react@0.14.2/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.2/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.2/lib/ReactElement",
      "npm:react@0.14.2/lib/ReactInstanceMap",
      "npm:react@0.14.2/lib/ReactMarkupChecksum",
      "npm:react@0.14.2/lib/ReactUpdateQueue",
      "npm:fbjs@0.3.2/lib/containsNode",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:react@0.14.2/lib/instantiateReactComponent",
      "npm:react@0.14.2/lib/shouldUpdateReactComponent",
      "npm:react@0.14.2/lib/setInnerHTML",
      "npm:react@0.14.2/lib/CallbackQueue",
      "npm:react@0.14.2/lib/ReactRef",
      "npm:react@0.14.2/lib/PooledClass",
      "npm:react@0.14.2/lib/Transaction",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:react@0.14.2/lib/ReactServerRendering",
      "npm:react@0.14.2/lib/ReactChildren",
      "npm:react@0.14.2/lib/ReactComponent",
      "npm:react@0.14.2/lib/ReactClass",
      "npm:react@0.14.2/lib/ReactElementValidator",
      "npm:react@0.14.2/lib/ReactDOMFactories",
      "npm:react@0.14.2/lib/ReactPropTypes",
      "npm:react@0.14.2/lib/onlyChild",
      "npm:react@0.14.2/lib/ReactDOMIDOperations",
      "npm:process@0.11.2",
      "npm:react@0.14.2/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.2/lib/Danger",
      "npm:react@0.14.2/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.2/lib/EventConstants",
      "npm:react@0.14.2/lib/EventPluginHub",
      "npm:react@0.14.2/lib/EventPropagators",
      "npm:react@0.14.2/lib/SyntheticEvent",
      "npm:react@0.14.2/lib/getEventTarget",
      "npm:react@0.14.2/lib/isEventSupported",
      "npm:react@0.14.2/lib/isTextInputElement",
      "npm:react@0.14.2/lib/FallbackCompositionState",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:react@0.14.2/lib/SyntheticCompositionEvent",
      "npm:react@0.14.2/lib/SyntheticInputEvent",
      "npm:react@0.14.2/lib/SyntheticMouseEvent",
      "npm:fbjs@0.3.2/lib/getUnboundedScrollPosition",
      "npm:fbjs@0.3.2/lib/EventListener",
      "npm:react@0.14.2/lib/CSSPropertyOperations",
      "npm:react@0.14.2/lib/AutoFocusUtils",
      "npm:react@0.14.2/lib/ReactDOMInput",
      "npm:react@0.14.2/lib/ReactDOMButton",
      "npm:react@0.14.2/lib/ReactDOMOption",
      "npm:react@0.14.2/lib/canDefineProperty",
      "npm:react@0.14.2/lib/ReactDOMTextarea",
      "npm:react@0.14.2/lib/ReactDOMSelect",
      "npm:react@0.14.2/lib/ReactMultiChild",
      "npm:fbjs@0.3.2/lib/shallowEqual",
      "npm:react@0.14.2/lib/ReactInputSelection",
      "npm:react@0.14.2/lib/ReactComponentEnvironment",
      "npm:react@0.14.2/lib/ReactEmptyComponent",
      "npm:react@0.14.2/lib/ReactNativeComponent",
      "npm:fbjs@0.3.2/lib/performanceNow",
      "npm:fbjs@0.3.2/lib/getActiveElement",
      "npm:react@0.14.2/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.14.2/lib/SyntheticFocusEvent",
      "npm:react@0.14.2/lib/SyntheticClipboardEvent",
      "npm:react@0.14.2/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.2/lib/SyntheticDragEvent",
      "npm:react@0.14.2/lib/SyntheticTouchEvent",
      "npm:react@0.14.2/lib/SyntheticUIEvent",
      "npm:react@0.14.2/lib/getEventCharCode",
      "npm:react@0.14.2/lib/SyntheticWheelEvent",
      "npm:react@0.14.2/lib/ReactEventEmitterMixin",
      "npm:react@0.14.2/lib/ViewportMetrics",
      "npm:react@0.14.2/lib/adler32",
      "npm:fbjs@0.3.2/lib/isTextNode",
      "npm:react@0.14.2/lib/ReactCompositeComponent",
      "npm:react@0.14.2/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.2/lib/ReactOwner",
      "npm:react@0.14.2/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.2/lib/traverseAllChildren",
      "npm:react@0.14.2/lib/EventPluginRegistry",
      "npm:react@0.14.2/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.3.2/lib/keyMirror",
      "npm:react@0.14.2/lib/ReactPropTypeLocations",
      "npm:react@0.14.2/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.2/lib/getIteratorFn",
      "npm:fbjs@0.3.2/lib/mapObject",
      "npm:process@0.11.2/browser",
      "npm:fbjs@0.3.2/lib/getMarkupWrap",
      "npm:fbjs@0.3.2/lib/createNodesFromMarkup",
      "npm:react@0.14.2/lib/ReactErrorUtils",
      "npm:react@0.14.2/lib/EventPluginUtils",
      "npm:react@0.14.2/lib/forEachAccumulated",
      "npm:react@0.14.2/lib/getTextContentAccessor",
      "npm:react@0.14.2/lib/CSSProperty",
      "npm:react@0.14.2/lib/accumulateInto",
      "npm:react@0.14.2/lib/getEventModifierState",
      "npm:fbjs@0.3.2/lib/camelizeStyleName",
      "npm:react@0.14.2/lib/dangerousStyleValue",
      "npm:fbjs@0.3.2/lib/focusNode",
      "npm:fbjs@0.3.2/lib/hyphenateStyleName",
      "npm:react@0.14.2/lib/LinkedValueUtils",
      "npm:fbjs@0.3.2/lib/memoizeStringOnly",
      "npm:react@0.14.2/lib/ReactChildReconciler",
      "npm:react@0.14.2/lib/flattenChildren",
      "npm:fbjs@0.3.2/lib/performance",
      "npm:react@0.14.2/lib/ReactDOMSelection",
      "npm:fbjs@0.3.2/lib/isNode",
      "npm:react@0.14.2/lib/getEventKey",
      "npm:fbjs@0.3.2/lib/camelize",
      "npm:react@0.14.2/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.3.2/lib/createArrayFromMixed",
      "npm:fbjs@0.3.2/lib/hyphenate",
      "npm:fbjs@0.3.2/lib/toArray"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.33",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "core-js": "npm:core-js@1.2.5",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "react": "npm:react@0.14.2",
    "react-dom": "npm:react-dom@0.14.2",
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:brace-expansion@1.1.1": {
      "balanced-match": "npm:balanced-match@0.2.1",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.37",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.1"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.0.1": {
      "bn.js": "npm:bn.js@4.1.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.5",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.0.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.2": {
      "react": "npm:react@0.14.2"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.2": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.37": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.12",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
