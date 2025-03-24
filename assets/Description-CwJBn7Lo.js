var v=Object.defineProperty;var T=s=>{throw TypeError(s)};var k=(s,t,e)=>t in s?v(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var p=(s,t,e)=>k(s,typeof t!="symbol"?t+"":t,e),x=(s,t,e)=>t.has(s)||T("Cannot "+e);var b=(s,t,e)=>(x(s,t,"read from private field"),e?e.call(s):t.get(s)),S=(s,t,e)=>t.has(s)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),j=(s,t,e,i)=>(x(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);import{O as I,a2 as C,l as Z,ac as z,ad as Y,ae as U,a7 as K,o as _,a8 as g,a9 as f,Q as O,af as L,z as d,ag as q,aa as H,ah as X,a5 as n,a4 as F}from"./index-CMz5eQYG.js";var m;class w extends I{constructor(){super();S(this,m);p(this,"assetsManager");p(this,"canvas");p(this,"loop");p(this,"size");p(this,"tick",()=>{this.update(this.loop.delta,this.loop.elapsed)});j(this,m,C.getInstance()),this.assetsManager=b(this,m).assetsManager,this.canvas=b(this,m).canvas,this.loop=b(this,m).loop,this.size=b(this,m).size}update(e,i){}dispose(){}}m=new WeakMap;class lt extends Z{constructor(e){super(e);p(this,"assetsManager");p(this,"loop");p(this,"size");const i=C.getInstance();this.assetsManager=i.assetsManager,this.loop=i.loop,this.size=i.size}dispose(){}}class ct extends w{constructor(t=6){super();const e=new z(16777215,1.5);e.position.set(1,3.5,1),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.bias=-9e-5,e.shadow.blurSamples=8,e.shadow.radius=5,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.far=t,this.add(e)}}class pt extends w{constructor(){super();p(this,"camera");this.camera=new Y(35,this.size.width/this.size.height,.1,100),this.camera.position.set(12,9,17)}}class dt extends w{constructor(e){super();p(this,"map");this.map=this.assetsManager.assets.get("envMap3"),this.map.mapping=U,e.environment=this.map}}const A={type:"change"},D={type:"start"},N={type:"end"},E=new q,R=new H,W=Math.cos(70*X.DEG2RAD),h=new _,l=2*Math.PI,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},P=1e-6;class _t extends K{constructor(t,e=null){super(t,e),this.state=o.NONE,this.enabled=!0,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:g.ROTATE,MIDDLE:g.DOLLY,RIGHT:g.PAN},this.touches={ONE:f.ROTATE,TWO:f.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new O,this._lastTargetPosition=new _,this._quat=new O().setFromUnitVectors(t.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new L,this._sphericalDelta=new L,this._scale=1,this._panOffset=new _,this._rotateStart=new d,this._rotateEnd=new d,this._rotateDelta=new d,this._panStart=new d,this._panEnd=new d,this._panDelta=new d,this._dollyStart=new d,this._dollyEnd=new d,this._dollyDelta=new d,this._dollyDirection=new _,this._mouse=new d,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B.bind(this),this._onPointerDown=V.bind(this),this._onPointerUp=Q.bind(this),this._onContextMenu=it.bind(this),this._onMouseWheel=J.bind(this),this._onKeyDown=tt.bind(this),this._onTouchStart=et.bind(this),this._onTouchMove=st.bind(this),this._onMouseDown=G.bind(this),this._onMouseMove=$.bind(this),this._interceptControlDown=ot.bind(this),this._interceptControlUp=at.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A),this.update(),this.state=o.NONE}update(t=null){const e=this.object.position;h.copy(e).sub(this.target),h.applyQuaternion(this._quat),this._spherical.setFromVector3(h),this.autoRotate&&this.state===o.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=l:i>Math.PI&&(i-=l),a<-Math.PI?a+=l:a>Math.PI&&(a-=l),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=c!=this._spherical.radius}if(h.setFromSpherical(this._spherical),h.applyQuaternion(this._quatInverse),e.copy(this.target).add(h),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=h.length();c=this._clampDistance(u*this._scale);const y=u-c;this.object.position.addScaledVector(this._dollyDirection,y),this.object.updateMatrixWorld(),r=!!y}else if(this.object.isOrthographicCamera){const u=new _(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=y!==this.object.zoom;const M=new _(this._mouse.x,this._mouse.y,0);M.unproject(this.object),this.object.position.sub(M).add(u),this.object.updateMatrixWorld(),c=h.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(E.origin.copy(this.object.position),E.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(E.direction))<W?this.object.lookAt(this.target):(R.setFromNormalAndCoplanarPoint(this.object.up,this.target),E.intersectPlane(R,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>P||8*(1-this._lastQuaternion.dot(this.object.quaternion))>P||this._lastTargetPosition.distanceToSquared(this.target)>P?(this.dispatchEvent(A),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?l/60*this.autoRotateSpeed*t:l/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){h.setFromMatrixColumn(e,0),h.multiplyScalar(-t),this._panOffset.add(h)}_panUp(t,e){this.screenSpacePanning===!0?h.setFromMatrixColumn(e,1):(h.setFromMatrixColumn(e,0),h.crossVectors(this.object.up,h)),h.multiplyScalar(t),this._panOffset.add(h)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;h.copy(a).sub(this.target);let r=h.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,r=e-i.top,c=i.width,u=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(r/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(l*this._rotateDelta.x/e.clientHeight),this._rotateUp(l*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(l*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-l*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(l*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-l*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,a=t.pageY-e.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(l*this._rotateDelta.x/e.clientHeight),this._rotateUp(l*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,a=t.pageY-e.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new d,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function V(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function B(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Q(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(N),this.state=o.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function G(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case g.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=o.DOLLY;break;case g.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=o.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=o.ROTATE}break;case g.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=o.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=o.PAN}break;default:this.state=o.NONE}this.state!==o.NONE&&this.dispatchEvent(D)}function $(s){switch(this.state){case o.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case o.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case o.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function J(s){this.enabled===!1||this.enableZoom===!1||this.state!==o.NONE||(s.preventDefault(),this.dispatchEvent(D),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(N))}function tt(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function et(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case f.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=o.TOUCH_ROTATE;break;case f.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=o.TOUCH_PAN;break;default:this.state=o.NONE}break;case 2:switch(this.touches.TWO){case f.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=o.TOUCH_DOLLY_PAN;break;case f.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=o.TOUCH_DOLLY_ROTATE;break;default:this.state=o.NONE}break;default:this.state=o.NONE}this.state!==o.NONE&&this.dispatchEvent(D)}function st(s){switch(this._trackPointer(s),this.state){case o.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case o.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case o.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case o.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=o.NONE}}function it(s){this.enabled!==!1&&s.preventDefault()}function ot(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function at(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const nt=()=>n.jsxs("div",{className:"animated-arrow",children:[n.jsx("div",{className:"animated-arrow-left"}),n.jsx("div",{className:"animated-arrow-right"}),n.jsx("div",{className:"animated-arrow-middle"})]}),ut=({title:s})=>{const[t,e]=F.useState(!0);return n.jsxs("section",{className:`description${t?"":" description--hidden"}`,children:[n.jsx("div",{className:"outer-glow"}),n.jsxs("div",{className:"content",children:[n.jsx("button",{className:"close-btn",onClick:()=>e(!t),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 -960 960 960",width:"18px",fill:"#c9c9c9",children:n.jsx("path",{d:"M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"})})}),n.jsxs("div",{className:"change-view",children:[n.jsx(nt,{}),s]}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"22px",viewBox:"0 -960 960 960",width:"22px",fill:"#c9c9c9",children:n.jsx("path",{d:"m350.77-185.39-42.15-42.15 77.69-78.92q-122.23-16.23-204.27-64.04T100-480q0-73.77 110.12-126.88Q320.23-660 480-660q159.77 0 269.88 53.12Q860-553.77 860-480q0 52.77-60.54 96.77-60.54 44-159.46 66.46V-378q77-20 118.5-49.5T800-480q0-33.15-85.5-76.58Q629-600 480-600t-234.5 43.42Q160-513.15 160-480q0 26.31 58.69 60.77 58.7 34.46 156.54 50.31l-66.61-66.62 42.15-42.15 146.15 146.15-146.15 146.15Z"})}),"Click and Drag to ",n.jsx("b",{children:"Rotate"}),"."]}),n.jsxs("li",{children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"22px",viewBox:"0 -960 960 960",width:"22px",fill:"#c9c9c9",children:n.jsx("path",{d:"M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55 0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23 251.23-42.15 42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Zm-30-76.93V-550h-77.69v-60h77.69v-77.69h60V-610h77.69v60h-77.69v77.69h-60Z"})}),"Scroll to ",n.jsx("b",{children:"Zoom"})]}),n.jsxs("li",{children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"22px",viewBox:"0 -960 960 960",width:"22px",fill:"#c9c9c9",children:n.jsx("path",{d:"M408-140q-24.68 0-47.07-10.54t-38.37-30.11L79.08-478 102-499.15q14.77-14.39 35-16.04 20.23-1.65 36.62 9.5L300-422.77v-407.61q0-12.75 8.63-21.38 8.63-8.62 21.38-8.62 12.76 0 21.37 8.62 8.62 8.63 8.62 21.38v521.99l-139.85-91.84 149.48 181.6q7.6 8.71 17.45 13.67Q396.92-200 408-200h262q37.61 0 63.81-26.19Q760-252.39 760-290v-280q0-12.75 8.63-21.38 8.63-8.62 21.38-8.62 12.76 0 21.37 8.62Q820-582.75 820-570v280q0 62.15-43.92 106.08Q732.15-140 670-140H408Zm105.46-214.61Zm-60-105.39v-230q0-12.75 8.63-21.38 8.63-8.62 21.39-8.62 12.75 0 21.37 8.62 8.61 8.63 8.61 21.38v230h-60Zm153.46 0v-186.15q0-12.75 8.63-21.38 8.63-8.62 21.39-8.62 12.75 0 21.37 8.62 8.61 8.63 8.61 21.38V-460h-60Z"})}),"Shift and Drag to ",n.jsx("b",{children:"Move"})]})]})]})]})};export{w as A,ut as D,dt as E,_t as O,lt as S,pt as a,ct as b};
