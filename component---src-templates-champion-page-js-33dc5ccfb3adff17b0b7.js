(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),i=a.n(l),s=a("q1tI"),c=a.n(s),o=a("vUet"),d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.noGutters,s=e.as,d=void 0===s?"div":s,u=e.className,f=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),m=Object(o.b)(a,"row");return c.a.createElement(d,Object(r.a)({ref:t},f,{className:i()(u,m,l&&"no-gutters")}))}));d.defaultProps={noGutters:!1},t.a=d},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,l=r(a("PJYZ")),i=r(a("VbXa")),s=r(a("8OQS")),c=r(a("pVnL")),o=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,h=b&&window.IntersectionObserver,E=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:l}),o.default.createElement("source",{media:n,srcSet:a,sizes:l}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+o+i+s+a+r+t+l+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,l=o.default.createElement(L,(0,c.default)({src:t},n));return a.length>1?o.default.createElement("picture",null,r(a),l):l},L=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,l=e.style,i=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,m=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},p,{onLoad:i,onError:d,onClick:u,ref:t,loading:f,draggable:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,l=void 0===n?{}:n,i=e.imgStyle,s=void 0===i?{}:i,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,y=e.itemProp,O=e.loading,N=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,c.default)({opacity:R?1:0,transition:k?"opacity "+h+"ms":"none"},s),P="boolean"==typeof b?"lightgray":b,C={transitionDelay:h+"ms"},V=(0,c.default)({opacity:this.state.imgLoaded?0:1},k&&C,{},s,{},f),z={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:y};if(p){var T=p,q=T[0];return o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},o.default.createElement(E,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),P&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&C)}),q.base64&&o.default.createElement(I,{src:q.base64,spreadProps:z,imageVariants:T,generateSources:w}),q.tracedSVG&&o.default.createElement(I,{src:q.tracedSVG,spreadProps:z,imageVariants:T,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,v(T),o.default.createElement(L,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:O,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,c.default)({alt:a,title:t,loading:O},q,{imageVariants:T}))}}))}if(g){var B=g,G=B[0],M=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},l);return"inherit"===l.display&&delete M.display,o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},P&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:P,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},k&&C)}),G.base64&&o.default.createElement(I,{src:G.base64,spreadProps:z,imageVariants:B,generateSources:w}),G.tracedSVG&&o.default.createElement(I,{src:G.tracedSVG,spreadProps:z,imageVariants:B,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,v(B),o.default.createElement(L,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:O,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,c.default)({alt:a,title:t,loading:O},G,{imageVariants:B}))}}))}return null},t}(o.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:k,sizes:x,fixed:d.default.oneOfType([k,d.default.arrayOf(k)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=R;t.default=P},"fvK/":function(e,t,a){"use strict";a.r(t);a("0mN4"),a("f3/d");var r=a("q1tI"),n=a.n(r),l=a("9eSz"),i=a.n(l),s=a("wx14"),c=a("zLVn"),o=a("TSYQ"),d=a.n(o),u=a("vUet"),f=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,l=e.pill,i=e.className,o=e.as,f=void 0===o?"span":o,m=Object(c.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(u.b)(a,"badge");return n.a.createElement(f,Object(s.a)({ref:t},m,{className:d()(i,p,l&&p+"-pill",r&&p+"-"+r)}))}));f.displayName="Badge",f.defaultProps={pill:!1};var m=f,p=a("3Z9Z"),g=a("JI6e"),b=a("1oE0"),h=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(s.a)({},t,{ref:a,className:d()(t.className,e)}))}))},E=a("Wzyw"),v=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.variant,i=e.as,o=void 0===i?"img":i,f=Object(c.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.b)(a,"card-img");return n.a.createElement(o,Object(s.a)({ref:t,className:d()(l?m+"-"+l:m,r)},f))}));v.displayName="CardImg",v.defaultProps={variant:null};var y=v,S=h("h5"),w=h("h6"),O=Object(b.a)("card-body"),N=n.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.bg,o=e.text,f=e.border,m=e.body,p=e.children,g=e.as,b=void 0===g?"div":g,h=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(u.b)(a,"card"),y=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return n.a.createElement(E.a.Provider,{value:y},n.a.createElement(b,Object(s.a)({ref:t},h,{className:d()(l,v,i&&"bg-"+i,o&&"text-"+o,f&&"border-"+f)}),m?n.a.createElement(O,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=y,N.Title=Object(b.a)("card-title",{Component:S}),N.Subtitle=Object(b.a)("card-subtitle",{Component:w}),N.Body=O,N.Link=Object(b.a)("card-link",{Component:"a"}),N.Text=Object(b.a)("card-text",{Component:"p"}),N.Header=Object(b.a)("card-header"),N.Footer=Object(b.a)("card-footer"),N.ImgOverlay=Object(b.a)("card-img-overlay");var j=N,I=a("JCAc"),L=a("rQNl"),R=a("VWqr"),k=a("ILyh"),x=n.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.active,i=e.disabled,o=e.className,f=e.variant,m=e.action,p=e.as,g=e.eventKey,b=e.onClick,h=Object(c.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(u.b)(a,"list-group-item");var E=Object(r.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();b&&b(e)}),[i,b]);return n.a.createElement(R.a,Object(s.a)({ref:t},h,{eventKey:Object(k.b)(g,h.href),as:p||(m?h.href?"a":"button":"div"),onClick:E,className:d()(o,a,l&&"active",i&&"disabled",f&&a+"-"+f,m&&a+"-action")}))}));x.defaultProps={variant:null,active:!1,disabled:!1},x.displayName="ListGroupItem";var P=x,C=n.a.forwardRef((function(e,t){var a=Object(I.a)(e,{activeKey:"onSelect"}),r=a.className,l=a.bsPrefix,i=a.variant,o=a.as,f=void 0===o?"div":o,m=Object(c.a)(a,["className","bsPrefix","variant","as"]);return l=Object(u.b)(l,"list-group"),n.a.createElement(L.a,Object(s.a)({ref:t},m,{as:f,className:d()(r,l,i&&l+"-"+i)}))}));C.defaultProps={variant:null},C.displayName="ListGroup",C.Item=P;var V=C,z=a("Bl7J"),T=a("vrFN");a.d(t,"queryResult",(function(){return B}));var q={marginRight:"auto",marginLeft:"auto",display:"block"},B="2141121789";t.default=function(e){var t=e.data.championsJson;return n.a.createElement(z.a,{activeIndex:"champions"},n.a.createElement(T.a,{title:t.name}),n.a.createElement("h1",null,t.name),n.a.createElement("h5",null,t.tags.map((function(e){return n.a.createElement(m,{variant:"secondary"},e)}))),n.a.createElement(p.a,{style:{marginTop:"1rem"}},n.a.createElement(g.a,{md:"auto",xs:12,style:{marginBottom:"1.5rem"}},n.a.createElement(i.a,{style:q,className:"champion-icon",fixed:t.bannerImg.childImageSharp.fixed,alt:t.name})),n.a.createElement(g.a,{style:{marginBottom:"1.5rem"}},n.a.createElement(j,{bg:"secondary",border:"secondary",className:"add-shadow-orange",style:{borderRadius:"25px"}},n.a.createElement(j.Header,null,n.a.createElement("b",{className:"dark-yellow-text"},"Stats At a Glance")),n.a.createElement(V,{variant:"flush"},n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"HP")),n.a.createElement(g.a,null,t.stats.hp))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"MP")),n.a.createElement(g.a,null,t.stats.mp))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"Move Speed")),n.a.createElement(g.a,null,t.stats.movespeed))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"Armor")),n.a.createElement(g.a,null,t.stats.armor))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"Spell Block")),n.a.createElement(g.a,null,t.stats.spellblock))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"Attack Range")),n.a.createElement(g.a,null,t.stats.attackrange))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"HP Regen")),n.a.createElement(g.a,null,t.stats.hpregen))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"MP Regen")),n.a.createElement(g.a,null,t.stats.mpregen))),n.a.createElement(V.Item,null,n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"Attack Damage")),n.a.createElement(g.a,null,t.stats.attackdamage))),n.a.createElement(V.Item,{style:{borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}},n.a.createElement(p.a,{className:"justify-content-between"},n.a.createElement(g.a,null,n.a.createElement("b",null,"Attack Speed")),n.a.createElement(g.a,null,t.stats.attackspeed))))))),n.a.createElement("h1",null,"Lore"),n.a.createElement("p",null,t.lore))}}}]);
//# sourceMappingURL=component---src-templates-champion-page-js-33dc5ccfb3adff17b0b7.js.map