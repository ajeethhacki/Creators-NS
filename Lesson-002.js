function testFunc() { 
  console.log("Hello.. "); 
  return 1; 
}
testFunc()    // Calling

function testFunc(user) { 
  console.log("Hello.. "+user); 
  return 1; 
}
testFunc('Steve')    // Calling

var test = function testMethod() { 
  console.log('Hello'); 
}
test()    // Calling


var test = function() { 
  console.log('Hello'); 
}
test()    // Calling


function sumOfArray(arr) {
    if (arr.length <= 0) {
        console.log("Sum will be 0");
    } else {
        sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log("Sum is " + sum);
    }
}

sumOfArray([])  // Sum is 0

sumOfArray([1,2,3,4])  // Sum is 10

/*
<!doctype html>
<html>
	<head>
		<title>Index Page</title>
	</head>
	<body>
	</body>
</html>
 */


function test() {
    document.writeln('<ul>');
    for (var i = 0; i < 5; i++) {
        document.writeln('<li>Value ' + i + '</li>');
    }
    document.writeln('</ul>');
}

test()        // View Your Page it will Show you Output as list

function renderFruits(index){
	var arr=new Array('orange', 'apple', 'grapes', 'mango', 'banana', 'greenapple', 'pomegrante', 'watermelon', 'pineapple');
	document.writeln("<ol>");
	for(var i=0;i < arr.length; i++)
		document.writeln("<li>"+arr[i]+"</li>");
	document.writeln("</ol>");
	return arr[index%10];
}

var selected = renderFruits(3)

document.writeln("<h1>You have selected </h1>" + selected);

var emp = {}

emp // object {}

emp.name = 'Steve'

emp //Object {name: "Steve"}name: "Steve"__proto__: Object

emp.company = 'Apple Inc.'

emp //Object {name: "Steve", company: "Apple Inc."}

emp.name = 'Steve Jobs'

emp //Object {name: "Steve Jobs", company: "Apple Inc."}

emp.name //"Steve Jobs"

emp.showProfile = function() {
   console.log(this.name + "\t" + this.company);
}

emp //Object {name: "Steve Jobs", company: "Apple Inc."}company: "Apple Inc."name: "Steve Jobs"showProfile: ()arguments: nullcaller: nulllength: 0name: ""prototype: Objectconstructor: ()__proto__: Object__proto__: ()<function scope>Global: WindowInfinity: InfinityAnalyserNode: AnalyserNode()AnimationEvent: AnimationEvent()AppBannerPromptResult: AppBannerPromptResult()ApplicationCache: ApplicationCache()ApplicationCacheErrorEvent: ApplicationCacheErrorEvent()Array: Array()ArrayBuffer: ArrayBuffer()Attr: Attr()Audio: HTMLAudioElement()AudioBuffer: AudioBuffer()AudioBufferSourceNode: AudioBufferSourceNode()AudioContext: AudioContext()AudioDestinationNode: AudioDestinationNode()AudioListener: AudioListener()AudioNode: AudioNode()AudioParam: AudioParam()AudioProcessingEvent: AudioProcessingEvent()BarProp: BarProp()BatteryManager: BatteryManager()BeforeInstallPromptEvent: BeforeInstallPromptEvent()BeforeUnloadEvent: BeforeUnloadEvent()BiquadFilterNode: BiquadFilterNode()Blob: Blob()BlobEvent: BlobEvent()Boolean: Boolean()ByteLengthQueuingStrategy: ByteLengthQueuingStrategy()CDATASection: CDATASection()CSS: CSS()CSSFontFaceRule: CSSFontFaceRule()CSSGroupingRule: CSSGroupingRule()CSSImportRule: CSSImportRule()CSSKeyframeRule: CSSKeyframeRule()CSSKeyframesRule: CSSKeyframesRule()CSSMediaRule: CSSMediaRule()CSSNamespaceRule: CSSNamespaceRule()CSSPageRule: CSSPageRule()CSSRule: CSSRule()CSSRuleList: CSSRuleList()CSSStyleDeclaration: CSSStyleDeclaration()CSSStyleRule: CSSStyleRule()CSSStyleSheet: CSSStyleSheet()CSSSupportsRule: CSSSupportsRule()CSSViewportRule: CSSViewportRule()Cache: Cache()CacheStorage: CacheStorage()CanvasCaptureMediaStreamTrack: CanvasCaptureMediaStreamTrack()CanvasGradient: CanvasGradient()CanvasPattern: CanvasPattern()CanvasRenderingContext2D: CanvasRenderingContext2D()ChannelMergerNode: ChannelMergerNode()ChannelSplitterNode: ChannelSplitterNode()CharacterData: CharacterData()ClientRect: ClientRect()ClientRectList: ClientRectList()ClipboardEvent: ClipboardEvent()CloseEvent: CloseEvent()Comment: Comment()CompositionEvent: CompositionEvent()ConvolverNode: ConvolverNode()CountQueuingStrategy: CountQueuingStrategy()Credential: Credential()CredentialsContainer: CredentialsContainer()Crypto: Crypto()CryptoKey: CryptoKey()CustomEvent: CustomEvent()DOMError: DOMError()DOMException: DOMException()DOMImplementation: DOMImplementation()DOMParser: DOMParser()DOMStringList: DOMStringList()DOMStringMap: DOMStringMap()DOMTokenList: DOMTokenList()DataTransfer: DataTransfer()DataTransferItem: DataTransferItem()DataTransferItemList: DataTransferItemList()DataView: DataView()Date: Date()DelayNode: DelayNode()DeviceMotionEvent: DeviceMotionEvent()DeviceOrientationEvent: DeviceOrientationEvent()Document: Document()DocumentFragment: DocumentFragment()DocumentType: DocumentType()DragEvent: DragEvent()DynamicsCompressorNode: DynamicsCompressorNode()Element: Element()Error: Error()ErrorEvent: ErrorEvent()EvalError: EvalError()Event: Event()EventSource: EventSource()EventTarget: EventTarget()FederatedCredential: FederatedCredential()File: File()FileError: FileError()FileList: FileList()FileReader: FileReader()Float32Array: Float32Array()Float64Array: Float64Array()FocusEvent: FocusEvent()FontFace: FontFace()FormData: FormData()Function: Function()GainNode: GainNode()Gamepad: Gamepad()GamepadButton: GamepadButton()GamepadEvent: GamepadEvent()HTMLAllCollection: HTMLAllCollection()HTMLAnchorElement: HTMLAnchorElement()HTMLAreaElement: HTMLAreaElement()HTMLAudioElement: HTMLAudioElement()HTMLBRElement: HTMLBRElement()HTMLBaseElement: HTMLBaseElement()HTMLBodyElement: HTMLBodyElement()HTMLButtonElement: HTMLButtonElement()HTMLCanvasElement: HTMLCanvasElement()HTMLCollection: HTMLCollection()HTMLContentElement: HTMLContentElement()HTMLDListElement: HTMLDListElement()HTMLDataListElement: HTMLDataListElement()HTMLDetailsElement: HTMLDetailsElement()HTMLDialogElement: HTMLDialogElement()HTMLDirectoryElement: HTMLDirectoryElement()HTMLDivElement: HTMLDivElement()HTMLDocument: HTMLDocument()HTMLElement: HTMLElement()HTMLEmbedElement: HTMLEmbedElement()HTMLFieldSetElement: HTMLFieldSetElement()HTMLFontElement: HTMLFontElement()HTMLFormControlsCollection: HTMLFormControlsCollection()HTMLFormElement: HTMLFormElement()HTMLFrameElement: HTMLFrameElement()HTMLFrameSetElement: HTMLFrameSetElement()HTMLHRElement: HTMLHRElement()HTMLHeadElement: HTMLHeadElement()HTMLHeadingElement: HTMLHeadingElement()HTMLHtmlElement: HTMLHtmlElement()HTMLIFrameElement: HTMLIFrameElement()HTMLImageElement: HTMLImageElement()HTMLInputElement: HTMLInputElement()HTMLKeygenElement: HTMLKeygenElement()HTMLLIElement: HTMLLIElement()HTMLLabelElement: HTMLLabelElement()HTMLLegendElement: HTMLLegendElement()HTMLLinkElement: HTMLLinkElement()HTMLMapElement: HTMLMapElement()HTMLMarqueeElement: HTMLMarqueeElement()HTMLMediaElement: HTMLMediaElement()HTMLMenuElement: HTMLMenuElement()HTMLMetaElement: HTMLMetaElement()HTMLMeterElement: HTMLMeterElement()HTMLModElement: HTMLModElement()HTMLOListElement: HTMLOListElement()HTMLObjectElement: HTMLObjectElement()HTMLOptGroupElement: HTMLOptGroupElement()HTMLOptionElement: HTMLOptionElement()HTMLOptionsCollection: HTMLOptionsCollection()HTMLOutputElement: HTMLOutputElement()HTMLParagraphElement: HTMLParagraphElement()HTMLParamElement: HTMLParamElement()HTMLPictureElement: HTMLPictureElement()HTMLPreElement: HTMLPreElement()HTMLProgressElement: HTMLProgressElement()HTMLQuoteElement: HTMLQuoteElement()HTMLScriptElement: HTMLScriptElement()HTMLSelectElement: HTMLSelectElement()HTMLShadowElement: HTMLShadowElement()HTMLSourceElement: HTMLSourceElement()HTMLSpanElement: HTMLSpanElement()HTMLStyleElement: HTMLStyleElement()HTMLTableCaptionElement: HTMLTableCaptionElement()HTMLTableCellElement: HTMLTableCellElement()HTMLTableColElement: HTMLTableColElement()HTMLTableElement: HTMLTableElement()HTMLTableRowElement: HTMLTableRowElement()HTMLTableSectionElement: HTMLTableSectionElement()HTMLTemplateElement: HTMLTemplateElement()HTMLTextAreaElement: HTMLTextAreaElement()HTMLTitleElement: HTMLTitleElement()HTMLTrackElement: HTMLTrackElement()HTMLUListElement: HTMLUListElement()HTMLUnknownElement: HTMLUnknownElement()HTMLVideoElement: HTMLVideoElement()HashChangeEvent: HashChangeEvent()Headers: Headers()History: History()IDBCursor: IDBCursor()IDBCursorWithValue: IDBCursorWithValue()IDBDatabase: IDBDatabase()IDBFactory: IDBFactory()IDBIndex: IDBIndex()IDBKeyRange: IDBKeyRange()IDBObjectStore: IDBObjectStore()IDBOpenDBRequest: IDBOpenDBRequest()IDBRequest: IDBRequest()IDBTransaction: IDBTransaction()IDBVersionChangeEvent: IDBVersionChangeEvent()IIRFilterNode: IIRFilterNode()IdleDeadline: IdleDeadline()Image: HTMLImageElement()ImageBitmap: ImageBitmap()ImageData: ImageData()InputDeviceCapabilities: InputDeviceCapabilities()Int8Array: Int8Array()Int16Array: Int16Array()Int32Array: Int32Array()IntersectionObserver: IntersectionObserver()IntersectionObserverEntry: IntersectionObserverEntry()Intl: ObjectJSON: JSONKeyboardEvent: KeyboardEvent()Location: Location()MIDIAccess: MIDIAccess()MIDIConnectionEvent: MIDIConnectionEvent()MIDIInput: MIDIInput()MIDIInputMap: MIDIInputMap()MIDIMessageEvent: MIDIMessageEvent()MIDIOutput: MIDIOutput()MIDIOutputMap: MIDIOutputMap()MIDIPort: MIDIPort()Map: Map()Math: MathMediaDevices: MediaDevices()MediaElementAudioSourceNode: MediaElementAudioSourceNode()MediaEncryptedEvent: MediaEncryptedEvent()MediaError: MediaError()MediaKeyMessageEvent: MediaKeyMessageEvent()MediaKeySession: MediaKeySession()MediaKeyStatusMap: MediaKeyStatusMap()MediaKeySystemAccess: MediaKeySystemAccess()MediaKeys: MediaKeys()MediaList: MediaList()MediaQueryList: MediaQueryList()MediaQueryListEvent: MediaQueryListEvent()MediaRecorder: MediaRecorder()MediaSource: MediaSource()MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode()MediaStreamAudioSourceNode: MediaStreamAudioSourceNode()MediaStreamEvent: MediaStreamEvent()MediaStreamTrack: MediaStreamTrack()MessageChannel: MessageChannel()MessageEvent: MessageEvent()MessagePort: MessagePort()MimeType: MimeType()MimeTypeArray: MimeTypeArray()MouseEvent: MouseEvent()MutationEvent: MutationEvent()MutationObserver: MutationObserver()MutationRecord: MutationRecord()NaN: NaNNamedNodeMap: NamedNodeMap()Navigator: Navigator()Node: Node()NodeFilter: NodeFilter()NodeIterator: NodeIterator()NodeList: NodeList()Notification: Notification()Number: Number()Object: Object()OfflineAudioCompletionEvent: OfflineAudioCompletionEvent()OfflineAudioContext: OfflineAudioContext()Option: HTMLOptionElement()OscillatorNode: OscillatorNode()PageTransitionEvent: PageTransitionEvent()PasswordCredential: PasswordCredential()Path2D: Path2D()Performance: Performance()PerformanceEntry: PerformanceEntry()PerformanceMark: PerformanceMark()PerformanceMeasure: PerformanceMeasure()PerformanceNavigation: PerformanceNavigation()PerformanceObserver: PerformanceObserver()PerformanceObserverEntryList: PerformanceObserverEntryList()PerformanceResourceTiming: PerformanceResourceTiming()PerformanceTiming: PerformanceTiming()PeriodicWave: PeriodicWave()PermissionStatus: PermissionStatus()Permissions: Permissions()Plugin: Plugin()PluginArray: PluginArray()PopStateEvent: PopStateEvent()Presentation: Presentation()PresentationAvailability: PresentationAvailability()PresentationConnection: PresentationConnection()PresentationConnectionAvailableEvent: PresentationConnectionAvailableEvent()PresentationConnectionCloseEvent: PresentationConnectionCloseEvent()PresentationRequest: PresentationRequest()ProcessingInstruction: ProcessingInstruction()ProgressEvent: ProgressEvent()Promise: Promise()PromiseRejectionEvent: PromiseRejectionEvent()Proxy: Proxy()PushManager: PushManager()PushSubscription: PushSubscription()RTCCertificate: RTCCertificate()RTCIceCandidate: RTCIceCandidate()RTCSessionDescription: RTCSessionDescription()RadioNodeList: RadioNodeList()Range: Range()RangeError: RangeError()ReadableStream: ReadableStream()ReferenceError: ReferenceError()Reflect: ObjectRegExp: RegExp()Request: Request()Response: Response()SVGAElement: SVGAElement()SVGAngle: SVGAngle()SVGAnimateElement: SVGAnimateElement()SVGAnimateMotionElement: SVGAnimateMotionElement()SVGAnimateTransformElement: SVGAnimateTransformElement()SVGAnimatedAngle: SVGAnimatedAngle()SVGAnimatedBoolean: SVGAnimatedBoolean()SVGAnimatedEnumeration: SVGAnimatedEnumeration()SVGAnimatedInteger: SVGAnimatedInteger()SVGAnimatedLength: SVGAnimatedLength()SVGAnimatedLengthList: SVGAnimatedLengthList()SVGAnimatedNumber: SVGAnimatedNumber()SVGAnimatedNumberList: SVGAnimatedNumberList()SVGAnimatedPreserveAspectRatio: SVGAnimatedPreserveAspectRatio()SVGAnimatedRect: SVGAnimatedRect()SVGAnimatedString: SVGAnimatedString()SVGAnimatedTransformList: SVGAnimatedTransformList()SVGAnimationElement: SVGAnimationElement()SVGCircleElement: SVGCircleElement()SVGClipPathElement: SVGClipPathElement()SVGComponentTransferFunctionElement: SVGComponentTransferFunctionElement()SVGCursorElement: SVGCursorElement()SVGDefsElement: SVGDefsElement()SVGDescElement: SVGDescElement()SVGDiscardElement: SVGDiscardElement()SVGElement: SVGElement()SVGEllipseElement: SVGEllipseElement()SVGFEBlendElement: SVGFEBlendElement()SVGFEColorMatrixElement: SVGFEColorMatrixElement()SVGFEComponentTransferElement: SVGFEComponentTransferElement()SVGFECompositeElement: SVGFECompositeElement()SVGFEConvolveMatrixElement: SVGFEConvolveMatrixElement()SVGFEDiffuseLightingElement: SVGFEDiffuseLightingElement()SVGFEDisplacementMapElement: SVGFEDisplacementMapElement()SVGFEDistantLightElement: SVGFEDistantLightElement()SVGFEDropShadowElement: SVGFEDropShadowElement()SVGFEFloodElement: SVGFEFloodElement()SVGFEFuncAElement: SVGFEFuncAElement()SVGFEFuncBElement: SVGFEFuncBElement()SVGFEFuncGElement: SVGFEFuncGElement()SVGFEFuncRElement: SVGFEFuncRElement()SVGFEGaussianBlurElement: SVGFEGaussianBlurElement()SVGFEImageElement: SVGFEImageElement()SVGFEMergeElement: SVGFEMergeElement()SVGFEMergeNodeElement: SVGFEMergeNodeElement()SVGFEMorphologyElement: SVGFEMorphologyElement()SVGFEOffsetElement: SVGFEOffsetElement()SVGFEPointLightElement: SVGFEPointLightElement()SVGFESpecularLightingElement: SVGFESpecularLightingElement()SVGFESpotLightElement: SVGFESpotLightElement()SVGFETileElement: SVGFETileElement()SVGFETurbulenceElement: SVGFETurbulenceElement()SVGFilterElement: SVGFilterElement()SVGForeignObjectElement: SVGForeignObjectElement()SVGGElement: SVGGElement()SVGGeometryElement: SVGGeometryElement()SVGGradientElement: SVGGradientElement()SVGGraphicsElement: SVGGraphicsElement()SVGImageElement: SVGImageElement()SVGLength: SVGLength()SVGLengthList: SVGLengthList()SVGLineElement: SVGLineElement()SVGLinearGradientElement: SVGLinearGradientElement()SVGMPathElement: SVGMPathElement()SVGMarkerElement: SVGMarkerElement()SVGMaskElement: SVGMaskElement()SVGMatrix: SVGMatrix()SVGMetadataElement: SVGMetadataElement()SVGNumber: SVGNumber()SVGNumberList: SVGNumberList()SVGPathElement: SVGPathElement()SVGPatternElement: SVGPatternElement()SVGPoint: SVGPoint()SVGPointList: SVGPointList()SVGPolygonElement: SVGPolygonElement()SVGPolylineElement: SVGPolylineElement()SVGPreserveAspectRatio: SVGPreserveAspectRatio()SVGRadialGradientElement: SVGRadialGradientElement()SVGRect: SVGRect()SVGRectElement: SVGRectElement()SVGSVGElement: SVGSVGElement()SVGScriptElement: SVGScriptElement()SVGSetElement: SVGSetElement()SVGStopElement: SVGStopElement()SVGStringList: SVGStringList()SVGStyleElement: SVGStyleElement()SVGSwitchElement: SVGSwitchElement()SVGSymbolElement: SVGSymbolElement()SVGTSpanElement: SVGTSpanElement()SVGTextContentElement: SVGTextContentElement()SVGTextElement: SVGTextElement()SVGTextPathElement: SVGTextPathElement()SVGTextPositioningElement: SVGTextPositioningElement()SVGTitleElement: SVGTitleElement()SVGTransform: SVGTransform()SVGTransformList: SVGTransformList()SVGUnitTypes: SVGUnitTypes()SVGUseElement: SVGUseElement()SVGViewElement: SVGViewElement()SVGViewSpec: SVGViewSpec()SVGZoomEvent: SVGZoomEvent()Screen: Screen()ScreenOrientation: ScreenOrientation()ScriptProcessorNode: ScriptProcessorNode()SecurityPolicyViolationEvent: SecurityPolicyViolationEvent()Selection: Selection()ServiceWorker: ServiceWorker()ServiceWorkerContainer: ServiceWorkerContainer()ServiceWorkerMessageEvent: ServiceWorkerMessageEvent()ServiceWorkerRegistration: ServiceWorkerRegistration()Set: Set()ShadowRoot: ShadowRoot()SharedWorker: SharedWorker()SiteBoundCredential: SiteBoundCredential()SourceBuffer: SourceBuffer()SourceBufferList: SourceBufferList()SpeechSynthesisEvent: SpeechSynthesisEvent()SpeechSynthesisUtterance: SpeechSynthesisUtterance()Storage: Storage()StorageEvent: StorageEvent()String: String()StyleSheet: StyleSheet()StyleSheetList: StyleSheetList()SubtleCrypto: SubtleCrypto()Symbol: Symbol()SyncManager: SyncManager()SyntaxError: SyntaxError()Text: Text()TextDecoder: TextDecoder()TextEncoder: TextEncoder()TextEvent: TextEvent()TextMetrics: TextMetrics()TextTrack: TextTrack()TextTrackCue: TextTrackCue()TextTrackCueList: TextTrackCueList()TextTrackList: TextTrackList()TimeRanges: TimeRanges()Touch: Touch()TouchEvent: TouchEvent()TouchList: TouchList()TrackEvent: TrackEvent()TransitionEvent: TransitionEvent()TreeWalker: TreeWalker()TypeError: TypeError()UIEvent: UIEvent()URIError: URIError()URL: URL()URLSearchParams: URLSearchParams()Uint8Array: Uint8Array()Uint8ClampedArray: Uint8ClampedArray()Uint16Array: Uint16Array()Uint32Array: Uint32Array()VTTCue: VTTCue()ValidityState: ValidityState()WaveShaperNode: WaveShaperNode()WeakMap: WeakMap()WeakSet: WeakSet()WebGLActiveInfo: WebGLActiveInfo()WebGLBuffer: WebGLBuffer()WebGLContextEvent: WebGLContextEvent()WebGLFramebuffer: WebGLFramebuffer()WebGLProgram: WebGLProgram()WebGLRenderbuffer: WebGLRenderbuffer()WebGLRenderingContext: WebGLRenderingContext()WebGLShader: WebGLShader()WebGLShaderPrecisionFormat: WebGLShaderPrecisionFormat()WebGLTexture: WebGLTexture()WebGLUniformLocation: WebGLUniformLocation()WebKitAnimationEvent: AnimationEvent()WebKitCSSMatrix: WebKitCSSMatrix()WebKitMutationObserver: MutationObserver()WebKitTransitionEvent: TransitionEvent()WebSocket: WebSocket()WheelEvent: WheelEvent()Window: Window()Worker: Worker()XMLDocument: XMLDocument()XMLHttpRequest: XMLHttpRequest()XMLHttpRequestEventTarget: XMLHttpRequestEventTarget()XMLHttpRequestUpload: XMLHttpRequestUpload()XMLSerializer: XMLSerializer()XPathEvaluator: XPathEvaluator()XPathExpression: XPathExpression()XPathResult: XPathResult()XSLTProcessor: XSLTProcessor()alert: alert()applicationCache: ApplicationCacheatob: atob()blur: ()btoa: btoa()caches: CacheStoragecancelAnimationFrame: cancelAnimationFrame()cancelIdleCallback: cancelIdleCallback()captureEvents: captureEvents()chrome: ObjectclearInterval: clearInterval()clearTimeout: clearTimeout()clientInformation: Navigatorclose: ()closed: falseconfirm: confirm()console: ObjectcreateImageBitmap: createImageBitmap()crypto: CryptodecodeURI: decodeURI()decodeURIComponent: decodeURIComponent()defaultStatus: ""defaultstatus: ""devicePixelRatio: 1document: documentemp: ObjectencodeURI: encodeURI()encodeURIComponent: encodeURIComponent()escape: escape()eval: eval()event: undefinedexternal: Objectfetch: fetch()find: find()focus: ()frameElement: nullframes: Windowfriut: ObjectgetComputedStyle: getComputedStyle()getMatchedCSSRules: getMatchedCSSRules()getSelection: getSelection()history: HistoryindexedDB: IDBFactoryinnerHeight: 619innerWidth: 508isFinite: isFinite()isNaN: isNaN()isSecureContext: truelength: 0localStorage: Storagelocation: Locationlocationbar: BarPropmatchMedia: matchMedia()menubar: BarPropmoveBy: moveBy()moveTo: moveTo()name: ""navigator: NavigatoroffscreenBuffering: trueonabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonbeforeunload: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncuechange: nullondblclick: nullondevicemotion: nullondeviceorientation: nullondeviceorientationabsolute: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonhashchange: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonlanguagechange: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonmessage: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonoffline: nullononline: nullonpagehide: nullonpageshow: nullonpause: nullonplay: nullonplaying: nullonpopstate: nullonprogress: nullonratechange: nullonrejectionhandled: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonshow: nullonstalled: nullonstorage: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitionend: nullonunhandledrejection: nullonunload: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkittransitionend: nullonwheel: nullopen: open()openDatabase: openDatabase()opener: nullouterHeight: 708outerWidth: 1230pageXOffset: 0pageYOffset: 0parent: WindowparseFloat: parseFloat()parseInt: parseInt()performance: Performancepersonalbar: BarProppostMessage: ()print: print()prompt: prompt()releaseEvents: releaseEvents()renderFruits: renderFruits(index)requestAnimationFrame: requestAnimationFrame()requestIdleCallback: requestIdleCallback()resizeBy: resizeBy()resizeTo: resizeTo()screen: ScreenscreenLeft: 44screenTop: 0screenX: 44screenY: 0scroll: scroll()scrollBy: scrollBy()scrollTo: scrollTo()scrollX: 0scrollY: 0scrollbars: BarPropselected: "mango"self: WindowsessionStorage: StoragesetInterval: setInterval()setTimeout: setTimeout()speechSynthesis: SpeechSynthesisstatus: ""statusbar: BarPropstop: stop()styleMedia: StyleMediatoolbar: BarProptop: Windowundefined: undefinedunescape: unescape()webkitAudioContext: AudioContext()webkitCancelAnimationFrame: webkitCancelAnimationFrame()webkitCancelRequestAnimationFrame: webkitCancelRequestAnimationFrame()webkitIDBCursor: IDBCursor()webkitIDBDatabase: IDBDatabase()webkitIDBFactory: IDBFactory()webkitIDBIndex: IDBIndex()webkitIDBKeyRange: IDBKeyRange()webkitIDBObjectStore: IDBObjectStore()webkitIDBRequest: IDBRequest()webkitIDBTransaction: IDBTransaction()webkitIndexedDB: IDBFactorywebkitMediaStream: MediaStream()webkitOfflineAudioContext: OfflineAudioContext()webkitRTCPeerConnection: RTCPeerConnection()webkitRequestAnimationFrame: webkitRequestAnimationFrame()webkitRequestFileSystem: webkitRequestFileSystem()webkitResolveLocalFileSystemURL: webkitResolveLocalFileSystemURL()webkitSpeechGrammar: SpeechGrammar()webkitSpeechGrammarList: SpeechGrammarList()webkitSpeechRecognition: SpeechRecognition()webkitSpeechRecognitionError: SpeechRecognitionError()webkitSpeechRecognitionEvent: SpeechRecognitionEvent()webkitStorageInfo: DeprecatedStorageInfowebkitURL: URL()window: Window__proto__: Window__proto__: Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: __proto__()set __proto__: __proto__()

emp.showProfile() //Steve Jobs	Apple Inc.

var emp1 = {
   name: "Guido Van Rossom",
   company: "Python Org."
}

emp1 //Object {name: "Guido Van Rossom", company: "Python Org."}

emp1.showProfile = function() {
   console.log(this.name + "\t" + this.company);
}

emp //Object {name: "Steve Jobs", company: "Apple Inc."}

emp1 //Object {name: "Guido Van Rossom", company: "Python Org."}

emp.showProfile() //Steve Jobs	Apple Inc.

emp1.showProfile() //Guido Van Rossom	Python Org.

emp["name"] = "Steve";

emp["showProfile"]()

delete emp.location

var emp = new Object()

var emp = {
	name: "Steve Jobs",
	company: "Apple Inc.",
	showProfile: function() {
		console.log(this.name + "\t\t" + this.company);
	}
}

function Employee(name,company) {
	this.name = name;
	this.company = company;
	showProfile = profile;
	function profile() {
		console.log(this.name + "\t\t" + this.company);
	}
}

var emp = new Employee("Steve Jobs", "Apple Inc.");

function Employee(name,company) {
	this.name = name;
	this.company = company;
	this.showProfile = profile;
	function profile() {
		console.log(this.name + "\t\t" + this.company);
	}
}

var emp = new Employee("Steve Jobs", "Apple Inc.");

var emp1 = new Employee("Guido Van Rossom", "Python org.");

function Employee(name,company) {
	this.name = name;
	this.company = company;
	this.showProfile = profile;
}

function profile() {
	console.log(name + "\t\t" + company);
}

var emp = new Employee("Steve Jobs", "Apple Inc.");

emp.showProfile()	//Uncaught ReferenceError: company is not defined(…)profile, (anonymous function)

function profile() {
	console.log(this.name + "\t\t" + this.company);
}

var emp = new Employee("Steve Jobs", "Apple Inc.");

emp.showProfile()	//Steve Jobs		Apple Inc.
