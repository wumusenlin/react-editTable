"use strict";(self.webpackChunkwumu_edit_table=self.webpackChunkwumu_edit_table||[]).push([[433],{54226:function(Se,O,b){b.r(O),b.d(O,{default:function(){return Ie}});var ae=b(42122),C=b.n(ae),re=b(27424),p=b.n(re),v=b(67294),l=b(85893);function Q(e){var t=e.columns,n=e.autoCol,a=e.scrollBar,u=n.autoWidthColIndex,r=n.autoColWidth,c=a?t.concat([{width:a}]):t;return(0,l.jsx)("colgroup",{children:c.map(function(i,o){var d=i.width,f="col-".concat(o);return u===o?(0,l.jsx)("col",{style:{width:r!=null?r:120}},f):(0,l.jsx)("col",{style:{width:d!=null?d:120}},f)})})}function ie(e){var t=e.columns,n=e.clientWidth,a=n===void 0?0:n,u=null;t.forEach(function(c,i){var o=c.fixed;o!=="right"&&(u=i)});var r=a-1-t.reduce(function(c,i,o){var d;return c+(o===u?0:(d=i.width)!==null&&d!==void 0?d:120)},0);return{autoWidthColIndex:u,autoColWidth:r}}function de(e){return e.map(function(t,n){return C()(C()({},t),{},{_rowKey:n,rowIndex:n})})}function U(){return(0,l.jsx)("div",{className:"wumu-deafult-not-found-content",children:"\u6682\u65E0\u6570\u636E~"})}function q(e){var t=e.containerInfo,n=e.children,a=n===void 0?U():n,u={width:t.offsetWidth,marginLeft:t.scrollLeft};return(0,l.jsx)("div",{children:(0,l.jsx)("div",{style:u,children:a})})}function ee(e){var t=e.className,n=e.rowIndex,a=e.columnIndex,u=e.readonly,r=e.fixed,c=e.fixedClassName,i=c===void 0?"table-fixed-td":c,o=t;return n===0&&(o+=" table-first-tr"),a===0&&(o+=" table-first-td"),u&&(o+=" table-td-readonly"),r&&(o+=" ".concat(i)),o}function te(e){var t=e.style,n=e.fixed,a=e.align;return a&&(t.textAlign=a),n&&(t.position="sticky",t.left=0,t.zIndex=1),t}function le(e){var t=e.columns,n=e.headerHeight,a=t.map(function(r,c){var i=r.title,o=r.dataIndex,d=r.align,f=d===void 0?"left":d,h=r.fixed,g=r.readonly,m={textAlign:f},x="".concat(o,"-").concat(c);return(0,l.jsx)("th",{title:i,className:ee({className:"table-th",readonly:g,fixed:h,fixedClassName:"table-fixed-th"}),style:te({style:m,align:f,fixed:h}),children:i},x)}),u={height:n};return(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{style:u,className:"table-header",children:a})})}var ue=le;function ne(e){return Array.isArray(e)?e:[]}function be(e){return e!=null&&e!==""}var ce=function(t){var n=t.initValue,a=t.inputChange,u=a===void 0?function(){}:a,r=t.onEdit,c=r===void 0?function(){}:r,i=t.column,o=i.align,d=o===void 0?"left":o,f={textAlign:d};return(0,l.jsx)("input",{className:"wumu-input",style:f,defaultValue:n,onChange:function(g){u(g.target.value)},autoFocus:!0,onBlur:function(){return c("")}})},se=ce;function he(e){var t=e.rowIndex,n=e.columns,a=e.record,u=e.rowHeight,r=e.editId,c=e.onEdit,i=c===void 0?function(){}:c,o=e.handleChange,d=o===void 0?function(){}:o,f=a._rowKey;return(0,l.jsx)("tr",{className:"table-tr",children:n.map(function(h,g){var m=h.dataIndex,x=h.align,s=x===void 0?"left":x,H=h.readonly,E=H===void 0?!1:H,w=h.fixed,W="".concat(g,"-").concat(m),N="".concat(f,"-").concat(m),_=N===r,L={height:u,boxShadow:_?"inset 0px 0px 0px 1px var(--primary-color)":"",padding:_?" 0 8px":"0 12px"},A=function($){d($,{rowIndex:f,dataIndex:m,record:a})},j=a[m],R=_?(0,l.jsx)(se,{initValue:j,inputChange:A,onEdit:i,column:h}):j;return(0,l.jsx)("td",{id:N,style:te({style:L,align:s,fixed:w}),className:ee({className:"table-td",rowIndex:t,columnIndex:g,readonly:E,fixed:w}),title:j,onClick:function(){return typeof i=="function"&&!E?i(N):void 0},children:R},W)})})}var fe=he;function ve(e){var t=e.dataSource,n=e.columns,a=e.rowHeight,u=a===void 0?40:a,r=e.onEdit,c=e.editId,i=e.handleChange,o=i===void 0?function(){}:i,d=e.notFoundContent,f=ne(t).length===0;return f?d:(0,l.jsx)("tbody",{className:"table-tbody",children:ne(t).map(function(h,g){return fe({rowIndex:g,record:h,columns:n,rowHeight:u,onEdit:r,editId:c,handleChange:o})})})}var ge=ve,me=function(t,n){var a,u,r=n.overscan,c=r===void 0?0:r,i=n.itemHeight,o=i===void 0?40:i,d=n.maxHeight,f=d===void 0?400:d,h=n.onScrolled,g=h===void 0?function(){}:h,m=n.wrapperPropsStyle,x=m===void 0?{}:m,s=(0,v.useRef)(null),H=(0,v.useState)(0),E=p()(H,2),w=E[0],W=E[1],N=(0,v.useState)(Math.ceil(f/o)),_=p()(N,1),L=_[0],A=(0,v.useState)({offsetWidth:0,clientWidth:0}),j=p()(A,2),R=j[0],y=j[1],$=w*o,P=(t==null?void 0:t.length)*o,B=function(T){var V=T.target,K=V.scrollTop,S=K===void 0?0:K,M=V.scrollLeft,D=M===void 0?0:M;g({scrollLeft:D}),y(function(k){return C()(C()({},k),{},{scrollTop:S,scrollLeft:D})});var z=c>0?Math.floor(S/o)-Math.ceil(c/2):Math.floor(S/o);W(z>0?z:0)},F={style:C()(C()({},x),{},{width:"100%",height:P,transform:"translateZ(0)",paddingTop:$})},X={onScroll:B,ref:function(T){return s.current=T},style:{overflowY:"overlay",overflowX:"auto",maxHeight:f,overflow:"auto"}};(0,v.useEffect)(function(){s!=null&&s.current&&y({offsetWidth:s.current.offsetWidth,clientWidth:s.current.clientWidth})},[s==null?void 0:s.current]);var I=t.slice(w,w+L+c);return console.log("bottomHeight",P,$,((a=I.length)!==null&&a!==void 0?a:0)*o),{list:I,wrapperProps:F,containerProps:X,topHeight:$,bottomHeight:P-$-((u=I.length)!==null&&u!==void 0?u:0)*o,containerInfo:R}},xe=me;function Ce(){return 16}var we=function(t){var n=t.columns,a=t.dataSource,u=t.editId,r=t.onEdit,c=r===void 0?function(){}:r,i=t.rowHeight,o=i===void 0?40:i,d=t.maxHeight,f=d===void 0?400:d,h=t.headerHeight,g=h===void 0?55:h,m=t.onChange,x=m===void 0?function(){}:m,s=t.hiddenHerder,H=s===void 0?!1:s,E=t.notFoundContent,w=E===void 0?null:E,W=(0,v.useRef)(null),N=(0,v.useState)([]),_=p()(N,2),L=_[0],A=_[1],j=(0,v.useState)([]),R=p()(j,2),y=R[0],$=R[1],P=(0,v.useState)({autoWidthColIndex:null,autoColWidth:120}),B=p()(P,2),F=B[0],X=B[1],I=xe(L,{itemHeight:o,maxHeight:f,overscan:0,onScrolled:function(k){var G=k.scrollLeft;W.current&&(W.current.scrollLeft=G)},wrapperPropsStyle:{borderSpacing:0}}),Y=I.list,T=I.wrapperProps,V=I.containerProps,K=I.bottomHeight,S=I.containerInfo,M=function(k,G){var Z=G.rowIndex,oe=G.dataIndex,J=L;J[Z][oe]=k,x(J,{rowIndex:Z,dataIndex:oe,value:k,record:J[Z]})};(0,v.useEffect)(function(){A(de(a))},[a.length]),(0,v.useEffect)(function(){$(n)},[n]),(0,v.useLayoutEffect)(function(){S.clientWidth&&X(ie({columns:y,clientWidth:S.clientWidth}))},[S]);var D=H?null:(0,l.jsx)("div",{className:"wumu-table-header",ref:W,children:(0,l.jsxs)("table",{children:[Q({columns:y,autoCol:F,scrollBar:Ce()}),ue({columns:y,headerHeight:g})]})});return(0,l.jsxs)("div",{className:"wumu-table",children:[D,(0,l.jsx)("div",C()(C()({className:"wumu-table-body"},V),{},{children:(0,l.jsxs)("table",C()(C()({},T),{},{children:[Q({columns:n,autoCol:F}),ge({dataSource:Y,columns:y,rowHeight:o,onEdit:c,editId:u,handleChange:M,notFoundContent:q(w?{containerInfo:S,children:w}:{containerInfo:S,children:U()})}),(0,l.jsx)("div",{style:{height:K}})]}))}))]})},ye=we,Ie=function(){var e=(0,v.useState)(""),t=p()(e,2),n=t[0],a=t[1],u=[{title:"\u5E8F\u53F7",dataIndex:"index",width:60,align:"center",fixed:"left"},{title:"\u7248\u672C\u53F7",dataIndex:"verison",width:300},{title:"\u66F4\u65B0\u65E5\u5FD7",dataIndex:"log",align:"right",width:300},{title:"\u5907\u6CE8",dataIndex:"remark"}],r=[{verison:"0.0.1",log:"init project",remark:"\u{1F44A}based on dumi v2"},{verison:"0.0.2",log:"add header Render"},{verison:"0.0.3",log:"feat style"},{verison:"\u{1F4A5}0.1.0",log:"add changeHandle",remark:"\u57FA\u7840\u529F\u80FD\u5DF2\u7ECF\u53EF\u7528"},{verison:"0.1.2",log:"add api docs",remark:"\u2728\u65B0\u589Eapi\u6587\u6863"},{verison:"\u{1F38A}0.1.3",log:"add github pages",remark:"\u5730\u5740: https://wumusenlin.github.io/wumu-edit-table/components/edit-table"}],c=(0,v.useState)(r.map(function(x,s){return C()(C()({},x),{},{index:s})})),i=p()(c,2),o=i[0],d=i[1],f=function(){d(function(s){return s.concat([{}])})},h=function(){d(function(s){return s.slice(0,-1)})},g=function(){d([])},m=function(s,H){console.log("options",H),d(s)};return(0,l.jsxs)("div",{className:"wumu-demo",children:[(0,l.jsxs)("div",{style:{display:"flex",marginBottom:"16px"},children:[(0,l.jsx)("button",{onClick:f,type:"button",className:"wumu-demo-button",children:"\u65B0\u589E\u4E00\u884C\u5230\u6700\u540E"}),(0,l.jsx)("button",{onClick:h,type:"button",className:"wumu-demo-button",children:"\u5220\u9664\u6700\u540E\u4E00\u884C"}),(0,l.jsx)("button",{onClick:g,type:"button",className:"wumu-demo-button",children:"\u5220\u9664\u6240\u6709\u6570\u636E"})]}),(0,l.jsx)(ye,{editId:n,onEdit:a,columns:u,dataSource:o,onChange:m})]})}}}]);
