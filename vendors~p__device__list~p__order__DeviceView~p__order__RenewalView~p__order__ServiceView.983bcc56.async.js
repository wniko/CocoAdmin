(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"4NMw":function(t,r,e){var n,o,i,a=function(){var t=function(t,r){var n=236,i=17,s=t,d=e[r],v=null,w=0,y=null,M=[],A={},C=function(t,r){w=4*s+17,v=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(w),B(0,0),B(w-7,0),B(0,w-7),b(),T(),m(t,r),s>=7&&D(t),null==y&&(y=x(s,d,M)),E(y,r)},B=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||w<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||w<=r+n||(v[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},k=function(){for(var t=0,r=0,e=0;e<8;e+=1){C(!0,e);var n=o.getLostPoint(A);(0==e||t>n)&&(t=n,r=e)}return r},T=function(){for(var t=8;t<w-8;t+=1)null==v[t][6]&&(v[t][6]=t%2==0);for(var r=8;r<w-8;r+=1)null==v[6][r]&&(v[6][r]=r%2==0)},b=function(){for(var t=o.getPatternPosition(s),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],i=t[e];if(null==v[n][i])for(var a=-2;a<=2;a+=1)for(var u=-2;u<=2;u+=1)v[n+a][i+u]=-2==a||2==a||-2==u||2==u||0==a&&0==u}},D=function(t){for(var r=o.getBCHTypeNumber(s),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);v[Math.floor(e/3)][e%3+w-8-3]=n}for(e=0;e<18;e+=1){n=!t&&1==(r>>e&1);v[e%3+w-8-3][Math.floor(e/3)]=n}},m=function(t,r){for(var e=d<<3|r,n=o.getBCHTypeInfo(e),i=0;i<15;i+=1){var a=!t&&1==(n>>i&1);i<6?v[i][8]=a:i<8?v[i+1][8]=a:v[w-15+i][8]=a}for(i=0;i<15;i+=1){a=!t&&1==(n>>i&1);i<8?v[8][w-i-1]=a:i<9?v[8][15-i-1+1]=a:v[8][15-i-1]=a}v[w-8][8]=!t},E=function(t,r){for(var e=-1,n=w-1,i=7,a=0,u=o.getMaskFunction(r),f=w-1;f>0;f-=2){6==f&&(f-=1);while(1){for(var c=0;c<2;c+=1)if(null==v[n][f-c]){var l=!1;a<t.length&&(l=1==(t[a]>>>i&1));var h=u(n,f-c);h&&(l=!l),v[n][f-c]=l,i-=1,-1==i&&(a+=1,i=7)}if(n+=e,n<0||w<=n){n-=e,e=-e;break}}}},P=function(t,r){for(var e=0,n=0,i=0,u=new Array(r.length),f=new Array(r.length),c=0;c<r.length;c+=1){var l=r[c].dataCount,h=r[c].totalCount-l;n=Math.max(n,l),i=Math.max(i,h),u[c]=new Array(l);for(var g=0;g<u[c].length;g+=1)u[c][g]=255&t.getBuffer()[g+e];e+=l;var s=o.getErrorCorrectPolynomial(h),d=a(u[c],s.getLength()-1),v=d.mod(s);f[c]=new Array(s.getLength()-1);for(g=0;g<f[c].length;g+=1){var w=g+v.getLength()-f[c].length;f[c][g]=w>=0?v.getAt(w):0}}var p=0;for(g=0;g<r.length;g+=1)p+=r[g].totalCount;var y=new Array(p),M=0;for(g=0;g<n;g+=1)for(c=0;c<r.length;c+=1)g<u[c].length&&(y[M]=u[c][g],M+=1);for(g=0;g<i;g+=1)for(c=0;c<r.length;c+=1)g<f[c].length&&(y[M]=f[c][g],M+=1);return y},x=function(t,r,e){for(var a=u.getRSBlocks(t,r),c=f(),l=0;l<e.length;l+=1){var h=e[l];c.put(h.getMode(),4),c.put(h.getLength(),o.getLengthInBits(h.getMode(),t)),h.write(c)}var g=0;for(l=0;l<a.length;l+=1)g+=a[l].dataCount;if(c.getLengthInBits()>8*g)throw"code length overflow. ("+c.getLengthInBits()+">"+8*g+")";c.getLengthInBits()+4<=8*g&&c.put(0,4);while(c.getLengthInBits()%8!=0)c.putBit(!1);while(1){if(c.getLengthInBits()>=8*g)break;if(c.put(n,8),c.getLengthInBits()>=8*g)break;c.put(i,8)}return P(c,a)};A.addData=function(t,r){r=r||"Byte";var e=null;switch(r){case"Numeric":e=c(t);break;case"Alphanumeric":e=l(t);break;case"Byte":e=h(t);break;case"Kanji":e=g(t);break;default:throw"mode:"+r}M.push(e),y=null},A.isDark=function(t,r){if(t<0||w<=t||r<0||w<=r)throw t+","+r;return v[t][r]},A.getModuleCount=function(){return w},A.make=function(){if(s<1){for(var t=1;t<40;t++){for(var r=u.getRSBlocks(t,d),e=f(),n=0;n<M.length;n++){var i=M[n];e.put(i.getMode(),4),e.put(i.getLength(),o.getLengthInBits(i.getMode(),t)),i.write(e)}var a=0;for(n=0;n<r.length;n++)a+=r[n].dataCount;if(e.getLengthInBits()<=8*a)break}s=t}C(!1,k())},A.createTableTag=function(t,r){t=t||2,r="undefined"==typeof r?4*t:r;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+r+"px;",e+='">',e+="<tbody>";for(var n=0;n<A.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<A.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=A.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>",e},A.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(o=arguments[0],t=o.cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r="undefined"==typeof r?4*t:r,e="string"===typeof e?{text:e}:e||{},e.text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,n="string"===typeof n?{text:n}:n||{},n.text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f,c,l=A.getModuleCount()*t+2*r,h="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",h+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',h+=o.scalable?"":' width="'+l+'px" height="'+l+'px"',h+=' viewBox="0 0 '+l+" "+l+'" ',h+=' preserveAspectRatio="xMinYMin meet"',h+=n.text||e.text?' role="img" aria-labelledby="'+L([n.id,e.id].join(" ").trim())+'"':"",h+=">",h+=n.text?'<title id="'+L(n.id)+'">'+L(n.text)+"</title>":"",h+=e.text?'<description id="'+L(e.id)+'">'+L(e.text)+"</description>":"",h+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',h+='<path d="',u=0;u<A.getModuleCount();u+=1)for(f=u*t+r,i=0;i<A.getModuleCount();i+=1)A.isDark(u,i)&&(a=i*t+r,h+="M"+a+","+f+c);return h+='" stroke="transparent" fill="black"/>',h+="</svg>",h},A.createDataURL=function(t,r){t=t||2,r="undefined"==typeof r?4*t:r;var e=A.getModuleCount()*t+2*r,n=r,o=e-r;return p(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return A.isDark(a,i)?0:1}return 1}))},A.createImgTag=function(t,r,e){t=t||2,r="undefined"==typeof r?4*t:r;var n=A.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=A.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=L(e),o+='"'),o+="/>",o};var L=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n;break}}return r},S=function(t){var r=1;t="undefined"==typeof t?2*r:t;var e,n,o,i,a,u=A.getModuleCount()*r+2*t,f=t,c=u-t,l={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},h={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},g="";for(e=0;e<u;e+=2){for(o=Math.floor((e-f)/r),i=Math.floor((e+1-f)/r),n=0;n<u;n+=1)a="\u2588",f<=n&&n<c&&f<=e&&e<c&&A.isDark(o,Math.floor((n-f)/r))&&(a=" "),f<=n&&n<c&&f<=e+1&&e+1<c&&A.isDark(i,Math.floor((n-f)/r))?a+=" ":a+="\u2588",g+=t<1&&e+1>=c?h[a]:l[a];g+="\n"}return u%2&&t>0?g.substring(0,g.length-u-1)+Array(u+1).join("\u2580"):g.substring(0,g.length-1)};return A.createASCII=function(t,r){if(t=t||1,t<2)return S(r);t-=1,r="undefined"==typeof r?2*t:r;var e,n,o,i,a=A.getModuleCount()*t+2*r,u=r,f=a-r,c=Array(t+1).join("\u2588\u2588"),l=Array(t+1).join("  "),h="",g="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),g="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&A.isDark(o,Math.floor((n-u)/t))&&(i=0),g+=i?c:l;for(o=0;o<t;o+=1)h+=g+"\n"}return h.substring(0,h.length-1)},A.renderTo2dContext=function(t,r){r=r||2;for(var e=A.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=A.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},A};t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}},t.stringToBytes=t.stringToBytesFuncs["default"],t.createStringToBytes=function(t,r){var e=function(){var e=v(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};while(1){var a=e.read();if(-1==a)break;var u=n(),f=n(),c=n(),l=String.fromCharCode(a<<8|u),h=f<<8|c;i[l]=h,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},e={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,o=7973,u=21522,f={},c=function(t){var r=0;while(0!=t)r+=1,t>>>=1;return r};return f.getBCHTypeInfo=function(t){var r=t<<10;while(c(r)-c(e)>=0)r^=e<<c(r)-c(e);return(t<<10|r)^u},f.getBCHTypeNumber=function(t){var r=t<<12;while(c(r)-c(o)>=0)r^=o<<c(r)-c(o);return t<<12|r},f.getPatternPosition=function(r){return t[r-1]},f.getMaskFunction=function(t){switch(t){case n.PATTERN000:return function(t,r){return(t+r)%2==0};case n.PATTERN001:return function(t,r){return t%2==0};case n.PATTERN010:return function(t,r){return r%3==0};case n.PATTERN011:return function(t,r){return(t+r)%3==0};case n.PATTERN100:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case n.PATTERN101:return function(t,r){return t*r%2+t*r%3==0};case n.PATTERN110:return function(t,r){return(t*r%2+t*r%3)%2==0};case n.PATTERN111:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},f.getErrorCorrectPolynomial=function(t){for(var r=a([1],0),e=0;e<t;e+=1)r=r.multiply(a([1,i.gexp(e)],0));return r},f.getLengthInBits=function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw"mode:"+t}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw"mode:"+t}else{if(!(e<41))throw"type:"+e;switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw"mode:"+t}}},f.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var l=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(l+=1);var h=Math.abs(100*l/r/r-50)/5;return e+=10*h,e},f}(),i=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){while(r<0)r+=255;while(r>=256)r-=255;return t[r]}};return n}();function a(t,r){if("undefined"==typeof t.length)throw t.length+"/"+r;var e=function(){var e=0;while(e<t.length&&0==t[e])e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=i.gexp(i.glog(n.getAt(e))+i.glog(t.getAt(o)));return a(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=i.glog(n.getAt(0))-i.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=i.gexp(i.glog(t.getAt(o))+r);return a(e,0).mod(t)}};return n}var u=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},n={},o=function(r,n){switch(n){case e.L:return t[4*(r-1)+0];case e.M:return t[4*(r-1)+1];case e.Q:return t[4*(r-1)+2];case e.H:return t[4*(r-1)+3];default:return}};return n.getRSBlocks=function(t,e){var n=o(t,e);if("undefined"==typeof n)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+e;for(var i=n.length/3,a=[],u=0;u<i;u+=1)for(var f=n[3*u+0],c=n[3*u+1],l=n[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},n}(),f=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},c=function(t){var e=r.MODE_NUMBER,n=t,o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){var r=n,e=0;while(e+2<r.length)t.put(i(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(i(r.substring(e,e+1)),4):r.length-e==2&&t.put(i(r.substring(e,e+2)),7))}},i=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+a(t.charAt(e));return r},a=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return o},l=function(t){var e=r.MODE_ALPHA_NUM,n=t,o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){var r=n,e=0;while(e+1<r.length)t.put(45*i(r.charAt(e))+i(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(i(r.charAt(e)),6)}},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return o},h=function(e){var n=r.MODE_8BIT_BYTE,o=t.stringToBytes(e),i={getMode:function(){return n},getLength:function(t){return o.length},write:function(t){for(var r=0;r<o.length;r+=1)t.put(o[r],8)}};return i},g=function(e){var n=r.MODE_KANJI,o=t.stringToBytesFuncs["SJIS"];if(!o)throw"sjis not supported.";!function(t,r){var e=o(t);if(2!=e.length||(e[0]<<8|e[1])!=r)throw"sjis not supported."}("\u53cb",38726);var i=o(e),a={getMode:function(){return n},getLength:function(t){return~~(i.length/2)},write:function(t){var r=i,e=0;while(e+1<r.length){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return a},s=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]",r}};return r},d=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){t=t<<8|255&n,r+=8,e+=1;while(r>=6)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o},v=function(t){var r=t,e=0,n=0,o=0,i={read:function(){while(o<8){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},w=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=2,o=u(r);t.writeByte(r);var i=0;while(o.length-i>255)t.writeByte(255),t.writeBytes(o,i,255),i+=255;t.writeByte(o.length-i),t.writeBytes(o,i,o.length-i),t.writeByte(0),t.writeString(";")}},a=function(t){var r=t,e=0,n=0,o={write:function(t,o){if(t>>>o!=0)throw"length over";while(e+o>=8)r.writeByte(255&(t<<e|n)),o-=8-e,t>>>=8-e,n=0,e=0;n|=t<<e,e+=o},flush:function(){e>0&&r.writeByte(n)}};return o},u=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=f(),u=0;u<r;u+=1)i.add(String.fromCharCode(u));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var c=s(),l=a(c);l.write(r,n);var h=0,g=String.fromCharCode(o[h]);h+=1;while(h<o.length){var d=String.fromCharCode(o[h]);h+=1,i.contains(g+d)?g+=d:(l.write(i.indexOf(g),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(g+d)),g=d)}return l.write(i.indexOf(g),n),l.write(e,n),l.flush(),c.toByteArray()},f=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return"undefined"!=typeof t[r]}};return e};return i},p=function(t,r,e){for(var n=w(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=s();n.write(a);for(var u=d(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();!function(){a.stringToBytesFuncs["UTF-8"]=function(t){function r(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}return r(t)}}(),function(e){o=[],n=e,i="function"===typeof n?n.apply(r,o):n,void 0===i||(t.exports=i)}((function(){return a}))},ejzm:function(t,r,e){"use strict";var n=this&&this.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])},t(r,e)};return function(r,e){function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=e("XaGS"),i=e("4NMw"),a=e("q1tI"),u=e("i8i4"),f=function(t){function r(r){var e=t.call(this,r)||this;return e.canvas=a.createRef(),e}return n(r,t),r.utf16to8=function(t){var r,e,n="",o=t.length;for(r=0;r<o;r++)e=t.charCodeAt(r),e>=1&&e<=127?n+=t.charAt(r):e>2047?(n+=String.fromCharCode(224|e>>12&15),n+=String.fromCharCode(128|e>>6&63),n+=String.fromCharCode(128|e>>0&63)):(n+=String.fromCharCode(192|e>>6&31),n+=String.fromCharCode(128|e>>0&63));return n},r.prototype.drawPositioningPattern=function(t,r,e,n,o,i){for(var a=-1;a<=7;a++)if(!(e+a<=-1||o<=e+a))for(var u=-1;u<=7;u++)if(!(n+u<=-1||o<=n+u)&&0<=a&&a<=6&&(0==u||6==u)||0<=u&&u<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=u&&u<=4){var f=Math.ceil((e+a+1)*t)-Math.floor((e+a)*t),c=Math.ceil((n+u+1)*t)-Math.floor((n+u)*t);i.fillStyle=this.props.fgColor,i.fillRect(Math.round((e+a)*t)+r,Math.round((n+u)*t)+r,f,c)}},r.prototype.shouldComponentUpdate=function(t){return!o(this.props,t)},r.prototype.componentDidMount=function(){this.update()},r.prototype.componentDidUpdate=function(){this.update()},r.prototype.update=function(){var t=this.props,e=t.value,n=t.ecLevel,o=t.enableCORS,a=t.size,f=t.quietZone,c=t.bgColor,l=t.fgColor,h=t.logoImage,g=t.logoWidth,s=t.logoHeight,d=t.logoOpacity,v=t.qrStyle,w=i(0,n);w.addData(r.utf16to8(e)),w.make();var p=u.findDOMNode(this.canvas.current),y=p.getContext("2d"),M=+a+2*+f,A=w.getModuleCount(),C=a/A,B=window.devicePixelRatio||1;p.height=p.width=M*B,y.scale(B,B),y.fillStyle=c,y.fillRect(0,0,M,M);var k=+f;if("dots"===v){y.fillStyle=l;for(var T=C/2,b=0;b<A;b++)for(var D=0;D<A;D++)w.isDark(b,D)&&(y.beginPath(),y.arc(Math.round(D*C)+T+k,Math.round(b*C)+T+k,T/100*75,0,2*Math.PI,!1),y.closePath(),y.fill());this.drawPositioningPattern(C,k,0,0,A,y),this.drawPositioningPattern(C,k,A-7,0,A,y),this.drawPositioningPattern(C,k,0,A-7,A,y)}else for(b=0;b<A;b++)for(D=0;D<A;D++)if(w.isDark(b,D)){y.fillStyle=l;var m=Math.ceil((D+1)*C)-Math.floor(D*C),E=Math.ceil((b+1)*C)-Math.floor(b*C);y.fillRect(Math.round(D*C)+k,Math.round(b*C)+k,m,E)}if(h){var P=new Image;o&&(P.crossOrigin="Anonymous"),P.onload=function(){var t=g||.2*a,r=s||t,e=(a-t)/2,n=(a-r)/2;P.width=t,P.height=r,y.save(),y.globalAlpha=d,y.drawImage(P,e+k,n+k,t,r),y.restore()},P.src=h}},r.prototype.render=function(){var t=+this.props.size+2*+this.props.quietZone;return a.createElement("canvas",{id:"react-qrcode-logo",height:t,width:t,style:{height:t+"px",width:t+"px"},ref:this.canvas})},r.defaultProps={value:"https://reactjs.org/",ecLevel:"M",enableCORS:!1,size:150,quietZone:10,bgColor:"#FFFFFF",fgColor:"#000000",logoOpacity:1,qrStyle:"squares"},r}(a.Component);r.QRCode=f}}]);