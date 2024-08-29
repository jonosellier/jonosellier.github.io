var de=Object.defineProperty;var xe=(c,e,t)=>e in c?de(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var g=(c,e,t)=>(xe(c,typeof e!="symbol"?e+"":e,t),t);import{s as be,n as J,c as me,o as we}from"../chunks/scheduler.DIcuhWVn.js";import{S as ye,i as $e,e as K,s as Te,H as ze,c as Y,m as _e,f as Re,a as Se,w as Ie,d as L,n as ee,g as Q}from"../chunks/index.DgmR3Q5x.js";import{p as Ae}from"../chunks/stores.CEN0ds5W.js";function D(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let z=D();function le(c){z=c}const oe=/[&<>"']/,Ee=new RegExp(oe.source,"g"),ae=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Le=new RegExp(ae.source,"g"),ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},te=c=>ve[c];function b(c,e){if(e){if(oe.test(c))return c.replace(Ee,te)}else if(ae.test(c))return c.replace(Le,te);return c}const qe=/(^|[^\[])\^/g;function f(c,e){let t=typeof c=="string"?c:c.source;e=e||"";const n={replace:(s,i)=>{let r=typeof i=="string"?i:i.source;return r=r.replace(qe,"$1"),t=t.replace(s,r),n},getRegex:()=>new RegExp(t,e)};return n}function ne(c){try{c=encodeURI(c).replace(/%25/g,"%")}catch{return null}return c}const S={exec:()=>null};function se(c,e){const t=c.replace(/\|/g,(i,r,l)=>{let o=!1,h=r;for(;--h>=0&&l[h]==="\\";)o=!o;return o?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function _(c,e,t){const n=c.length;if(n===0)return"";let s=0;for(;s<n;){const i=c.charAt(n-s-1);if(i===e&&!t)s++;else if(i!==e&&t)s++;else break}return c.slice(0,n-s)}function Ce(c,e){if(c.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<c.length;n++)if(c[n]==="\\")n++;else if(c[n]===e[0])t++;else if(c[n]===e[1]&&(t--,t<0))return n;return-1}function ie(c,e,t,n){const s=e.href,i=e.title?b(e.title):null,r=c[1].replace(/\\([\[\]])/g,"$1");if(c[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:s,title:i,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:s,title:i,text:b(r)}}function Pe(c,e){const t=c.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[r]=i;return r.length>=n.length?s.slice(n.length):s}).join(`
`)}class q{constructor(e){g(this,"options");g(this,"rules");g(this,"lexer");this.options=e||z}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:_(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Pe(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=_(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:_(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=_(t[0],`
`).split(`
`),s="",i="";const r=[];for(;n.length>0;){let l=!1;const o=[];let h;for(h=0;h<n.length;h++)if(/^ {0,3}>/.test(n[h]))o.push(n[h]),l=!0;else if(!l)o.push(n[h]);else break;n=n.slice(h);const a=o.join(`
`),p=a.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${a}`:a,i=i?`${i}
${p}`:p;const k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,r,!0),this.lexer.state.top=k,n.length===0)break;const d=r[r.length-1];if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){const x=d,m=x.raw+`
`+n.join(`
`),$=this.blockquote(m);r[r.length-1]=$,s=s.substring(0,s.length-x.raw.length)+$.raw,i=i.substring(0,i.length-x.text.length)+$.text;break}else if((d==null?void 0:d.type)==="list"){const x=d,m=x.raw+`
`+n.join(`
`),$=this.list(m);r[r.length-1]=$,s=s.substring(0,s.length-d.raw.length)+$.raw,i=i.substring(0,i.length-x.raw.length)+$.raw,n=m.substring(r[r.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:r,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;e;){let o=!1,h="",a="";if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;h=t[0],e=e.substring(h.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,B=>" ".repeat(3*B.length)),k=e.split(`
`,1)[0],d=!p.trim(),x=0;if(this.options.pedantic?(x=2,a=p.trimStart()):d?x=t[1].length+1:(x=t[2].search(/[^ ]/),x=x>4?1:x,a=p.slice(x),x+=t[1].length),d&&/^ *$/.test(k)&&(h+=k+`
`,e=e.substring(k.length+1),o=!0),!o){const B=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),G=new RegExp(`^ {0,${Math.min(3,x-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),W=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:\`\`\`|~~~)`),V=new RegExp(`^ {0,${Math.min(3,x-1)}}#`);for(;e;){const M=e.split(`
`,1)[0];if(k=M,this.options.pedantic&&(k=k.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),W.test(k)||V.test(k)||B.test(k)||G.test(e))break;if(k.search(/[^ ]/)>=x||!k.trim())a+=`
`+k.slice(x);else{if(d||p.search(/[^ ]/)>=4||W.test(p)||V.test(p)||G.test(p))break;a+=`
`+k}!d&&!k.trim()&&(d=!0),h+=M+`
`,e=e.substring(M.length+1),p=k.slice(x)}}i.loose||(l?i.loose=!0:/\n *\n *$/.test(h)&&(l=!0));let m=null,$;this.options.gfm&&(m=/^\[[ xX]\] /.exec(a),m&&($=m[0]!=="[ ] ",a=a.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:h,task:!!m,checked:$,loose:!1,text:a,tokens:[]}),i.raw+=h}i.items[i.items.length-1].raw=i.items[i.items.length-1].raw.trimEnd(),i.items[i.items.length-1].text=i.items[i.items.length-1].text.trimEnd(),i.raw=i.raw.trimEnd();for(let o=0;o<i.items.length;o++)if(this.lexer.state.top=!1,i.items[o].tokens=this.lexer.blockTokens(i.items[o].text,[]),!i.loose){const h=i.items[o].tokens.filter(p=>p.type==="space"),a=h.length>0&&h.some(p=>/\n.*\n/.test(p.raw));i.loose=a}if(i.loose)for(let o=0;o<i.items.length;o++)i.items[o].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=se(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)/^ *-+: *$/.test(l)?r.align.push("right"):/^ *:-+: *$/.test(l)?r.align.push("center"):/^ *:-+ *$/.test(l)?r.align.push("left"):r.align.push(null);for(let l=0;l<n.length;l++)r.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:r.align[l]});for(const l of i)r.rows.push(se(l,r.header.length).map((o,h)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[h]})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:b(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=_(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=Ce(t[2],"()");if(r>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);r&&(s=r[1],i=r[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),ie(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(/\s+/g," "),i=t[s.toLowerCase()];if(!i){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return ie(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...s[0]].length-1;let l,o,h=r,a=0;const p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+r);(s=p.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(o=[...l].length,s[3]||s[4]){h+=o;continue}else if((s[5]||s[6])&&r%3&&!((r+o)%3)){a+=o;continue}if(h-=o,h>0)continue;o=Math.min(o,o+h+a);const k=[...s[0]][0].length,d=e.slice(0,r+s.index+k+o);if(Math.min(r,o)%2){const m=d.slice(1,-1);return{type:"em",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}const x=d.slice(2,-2);return{type:"strong",raw:d,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return s&&i&&(n=n.substring(1,n.length-1)),n=b(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=b(t[1]),s="mailto:"+n):(n=b(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=b(t[0]),i="mailto:"+s;else{let r;do r=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(r!==t[0]);s=b(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=b(t[0]),{type:"text",raw:t[0],text:n}}}}const Ze=/^(?: *(?:\n|$))+/,Be=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Me=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,A=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Qe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ce=/(?:[*+-]|\d{1,9}[.)])/,he=f(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ce).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),H=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,je=/^[^\n]+/,O=/(?!\s*\])(?:\\.|[^\[\]\\])+/,De=f(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",O).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),He=f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ce).getRegex(),Z="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Oe=f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",N).replace("tag",Z).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pe=f(H).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex(),Ne=f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",pe).getRegex(),U={blockquote:Ne,code:Be,def:De,fences:Me,heading:Qe,hr:A,html:Oe,lheading:he,list:He,newline:Ze,paragraph:pe,table:S,text:je},re=f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex(),Ue={...U,table:re,paragraph:f(H).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",re).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex()},Fe={...U,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:S,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(H).replace("hr",A).replace("heading",` *#{1,6} *[^
]`).replace("lheading",he).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ue=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fe=/^( {2,}|\\)\n(?!\s*$)/,Ge=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,E="\\p{P}\\p{S}",We=f(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,E).getRegex(),Ve=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Je=f(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,E).getRegex(),Ke=f("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,E).getRegex(),Ye=f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,E).getRegex(),et=f(/\\([punct])/,"gu").replace(/punct/g,E).getRegex(),tt=f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nt=f(N).replace("(?:-->|$)","-->").getRegex(),st=f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",nt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),C=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,it=f(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",C).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ge=f(/^!?\[(label)\]\[(ref)\]/).replace("label",C).replace("ref",O).getRegex(),ke=f(/^!?\[(ref)\](?:\[\])?/).replace("ref",O).getRegex(),rt=f("reflink|nolink(?!\\()","g").replace("reflink",ge).replace("nolink",ke).getRegex(),F={_backpedal:S,anyPunctuation:et,autolink:tt,blockSkip:Ve,br:fe,code:Xe,del:S,emStrongLDelim:Je,emStrongRDelimAst:Ke,emStrongRDelimUnd:Ye,escape:ue,link:it,nolink:ke,punctuation:We,reflink:ge,reflinkSearch:rt,tag:st,text:Ge,url:S},lt={...F,link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",C).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",C).getRegex()},j={...F,escape:f(ue).replace("])","~|])").getRegex(),url:f(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ot={...j,br:f(fe).replace("{2,}","*").getRegex(),text:f(j.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},v={normal:U,gfm:Ue,pedantic:Fe},R={normal:F,gfm:j,breaks:ot,pedantic:lt};class w{constructor(e){g(this,"tokens");g(this,"options");g(this,"state");g(this,"tokenizer");g(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||z,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:v.normal,inline:R.normal};this.options.pedantic?(t.block=v.pedantic,t.inline=R.pedantic):this.options.gfm&&(t.block=v.gfm,this.options.breaks?t.inline=R.breaks:t.inline=R.gfm),this.tokenizer.rules=t}static get rules(){return{block:v,inline:R}}static lex(e,t){return new w(t).lex(e)}static lexInline(e,t){return new w(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,o,h)=>o+"    ".repeat(h.length));let s,i,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(s=l.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+s.raw,i.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=e.slice(1);let h;this.options.extensions.startBlock.forEach(a=>{h=a.call({lexer:this},o),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(r=e.substring(0,l+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){i=t[t.length-1],n&&(i==null?void 0:i.type)==="paragraph"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s),n=r.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,i,r=e,l,o,h;if(this.tokens.links){const a=Object.keys(this.tokens.links);if(a.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)a.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,l.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(o||(h=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let a=1/0;const p=e.slice(1);let k;this.options.extensions.startInline.forEach(d=>{k=d.call({lexer:this},p),typeof k=="number"&&k>=0&&(a=Math.min(a,k))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(n=this.tokenizer.inlineText(i)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),o=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return t}}class P{constructor(e){g(this,"options");g(this,"parser");this.options=e||z}space(e){return""}code({text:e,lang:t,escaped:n}){var r;const s=(r=(t||"").match(/^\S*/))==null?void 0:r[0],i=e.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+b(s)+'">'+(n?i:b(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:b(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let l=0;l<e.items.length;l++){const o=e.items[l];s+=this.listitem(o)}const i=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+i+r+`>
`+s+"</"+i+`>
`}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" "}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){const r=e.rows[i];n="";for(let l=0;l<r.length;l++)n+=this.tablecell(r[l]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),i=ne(e);if(i===null)return s;e=i;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+s+"</a>",r}image({href:e,title:t,text:n}){const s=ne(e);if(s===null)return n;e=s;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class X{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class y{constructor(e){g(this,"options");g(this,"renderer");g(this,"textRenderer");this.options=e||z,this.options.renderer=this.options.renderer||new P,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new X}static parse(e,t){return new y(t).parse(e)}static parseInline(e,t){return new y(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const l=i,o=this.options.extensions.renderers[l.type].call({parser:this},l);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){n+=o||"";continue}}const r=i;switch(r.type){case"space":{n+=this.renderer.space(r);continue}case"hr":{n+=this.renderer.hr(r);continue}case"heading":{n+=this.renderer.heading(r);continue}case"code":{n+=this.renderer.code(r);continue}case"table":{n+=this.renderer.table(r);continue}case"blockquote":{n+=this.renderer.blockquote(r);continue}case"list":{n+=this.renderer.list(r);continue}case"html":{n+=this.renderer.html(r);continue}case"paragraph":{n+=this.renderer.paragraph(r);continue}case"text":{let l=r,o=this.renderer.text(l);for(;s+1<e.length&&e[s+1].type==="text";)l=e[++s],o+=`
`+this.renderer.text(l);t?n+=this.renderer.paragraph({type:"paragraph",raw:o,text:o,tokens:[{type:"text",raw:o,text:o}]}):n+=o;continue}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const l=this.options.extensions.renderers[i.type].call({parser:this},i);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=l||"";continue}}const r=i;switch(r.type){case"escape":{n+=t.text(r);break}case"html":{n+=t.html(r);break}case"link":{n+=t.link(r);break}case"image":{n+=t.image(r);break}case"strong":{n+=t.strong(r);break}case"em":{n+=t.em(r);break}case"codespan":{n+=t.codespan(r);break}case"br":{n+=t.br(r);break}case"del":{n+=t.del(r);break}case"text":{n+=t.text(r);break}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}}class I{constructor(e){g(this,"options");g(this,"block");this.options=e||z}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?w.lex:w.lexInline}provideParser(){return this.block?y.parse:y.parseInline}}g(I,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class at{constructor(...e){g(this,"defaults",D());g(this,"options",this.setOptions);g(this,"parse",this.parseMarkdown(!0));g(this,"parseInline",this.parseMarkdown(!1));g(this,"Parser",y);g(this,"Renderer",P);g(this,"TextRenderer",X);g(this,"Lexer",w);g(this,"Tokenizer",q);g(this,"Hooks",I);this.use(...e)}walkTokens(e,t){var s,i;let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const l=r;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of l.rows)for(const h of o)n=n.concat(this.walkTokens(h.tokens,t));break}case"list":{const l=r;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=r;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const h=l[o].flat(1/0);n=n.concat(this.walkTokens(h,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const r=t.renderers[i.name];r?t.renderers[i.name]=function(...l){let o=i.renderer.apply(this,l);return o===!1&&(o=r.apply(this,l)),o}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[i.level];r?r.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){const i=this.defaults.renderer||new P(this.defaults);for(const r in n.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const l=r,o=n.renderer[l],h=i[l];i[l]=(...a)=>{let p=o.apply(i,a);return p===!1&&(p=h.apply(i,a)),p||""}}s.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new q(this.defaults);for(const r in n.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const l=r,o=n.tokenizer[l],h=i[l];i[l]=(...a)=>{let p=o.apply(i,a);return p===!1&&(p=h.apply(i,a)),p}}s.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new I;for(const r in n.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const l=r,o=n.hooks[l],h=i[l];I.passThroughHooks.has(r)?i[l]=a=>{if(this.defaults.async)return Promise.resolve(o.call(i,a)).then(k=>h.call(i,k));const p=o.call(i,a);return h.call(i,p)}:i[l]=(...a)=>{let p=o.apply(i,a);return p===!1&&(p=h.apply(i,a)),p}}s.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,r=n.walkTokens;s.walkTokens=function(l){let o=[];return o.push(r.call(this,l)),i&&(o=o.concat(i.call(this,l))),o}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return w.lex(e,t??this.defaults)}parser(e,t){return y.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const i={...s},r={...this.defaults,...i},l=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const o=r.hooks?r.hooks.provideLexer():e?w.lex:w.lexInline,h=r.hooks?r.hooks.provideParser():e?y.parse:y.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(a=>o(a,r)).then(a=>r.hooks?r.hooks.processAllTokens(a):a).then(a=>r.walkTokens?Promise.all(this.walkTokens(a,r.walkTokens)).then(()=>a):a).then(a=>h(a,r)).then(a=>r.hooks?r.hooks.postprocess(a):a).catch(l);try{r.hooks&&(n=r.hooks.preprocess(n));let a=o(n,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let p=h(a,r);return r.hooks&&(p=r.hooks.postprocess(p)),p}catch(a){return l(a)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+b(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}}const T=new at;function u(c,e){return T.parse(c,e)}u.options=u.setOptions=function(c){return T.setOptions(c),u.defaults=T.defaults,le(u.defaults),u};u.getDefaults=D;u.defaults=z;u.use=function(...c){return T.use(...c),u.defaults=T.defaults,le(u.defaults),u};u.walkTokens=function(c,e){return T.walkTokens(c,e)};u.parseInline=T.parseInline;u.Parser=y;u.parser=y.parse;u.Renderer=P;u.TextRenderer=X;u.Lexer=w;u.lexer=w.lex;u.Tokenizer=q;u.Hooks=I;u.parse=u;u.options;u.setOptions;u.use;u.walkTokens;u.parseInline;y.parse;w.lex;function ct(c){let e,t='<a class="btn" href="/writing">All articles</a>',n,s,i;return{c(){e=K("div"),e.innerHTML=t,n=Te(),s=K("article"),i=new ze(!1),this.h()},l(r){e=Y(r,"DIV",{class:!0,"data-svelte-h":!0}),_e(e)!=="svelte-1ormi1y"&&(e.innerHTML=t),n=Re(r),s=Y(r,"ARTICLE",{class:!0});var l=Se(s);i=Ie(l,!1),l.forEach(L),this.h()},h(){ee(e,"class","mb-8"),i.a=null,ee(s,"class","article mb-64")},m(r,l){Q(r,e,l),Q(r,n,l),Q(r,s,l),i.m(c[0],s)},p(r,[l]){l&1&&i.p(r[0])},i:J,o:J,d(r){r&&(L(e),L(n),L(s))}}}function ht(c,e,t){let n;me(c,Ae,l=>t(1,n=l));const{slug:s}=n.params;let i="";async function r(){const l=await(await fetch(`${s}.md`)).text();t(0,i=await u.parse(l))}return we(r),[i]}class kt extends ye{constructor(e){super(),$e(this,e,ht,ct,be,{})}}export{kt as component};
