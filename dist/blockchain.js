!function o(s,a,c){function h(e,n){if(!a[e]){if(!s[e]){var t="function"==typeof require&&require;if(!n&&t)return t(e,!0);if(u)return u(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var r=a[e]={exports:{}};s[e][0].call(r.exports,function(n){var t=s[e][1][n];return h(t||n)},r,r.exports,o,s,a,c)}return a[e].exports}for(var u="function"==typeof require&&require,n=0;n<c.length;n++)h(c[n]);return h}({1:[function(n,t,e){var i,r;i=this,r=function(){var u,e,n,t,i,f,r,o,s,a,c,h,l=l||(u=Math,e=Object.create||function(){function e(){}return function(n){var t;return e.prototype=n,t=new e,e.prototype=null,t}}(),t=(n={}).lib={},i=t.Base={extend:function(n){var t=e(this);return n&&t.mixIn(n),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),(t.init.prototype=t).$super=this,t},create:function(){var n=this.extend();return n.init.apply(n,arguments),n},init:function(){},mixIn:function(n){for(var t in n)n.hasOwnProperty(t)&&(this[t]=n[t]);n.hasOwnProperty("toString")&&(this.toString=n.toString)},clone:function(){return this.init.prototype.extend(this)}},f=t.WordArray=i.extend({init:function(n,t){n=this.words=n||[],this.sigBytes=null!=t?t:4*n.length},toString:function(n){return(n||o).stringify(this)},concat:function(n){var t=this.words,e=n.words,i=this.sigBytes,r=n.sigBytes;if(this.clamp(),i%4)for(var o=0;o<r;o++){var s=e[o>>>2]>>>24-o%4*8&255;t[i+o>>>2]|=s<<24-(i+o)%4*8}else for(o=0;o<r;o+=4)t[i+o>>>2]=e[o>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,t=this.sigBytes;n[t>>>2]&=4294967295<<32-t%4*8,n.length=u.ceil(t/4)},clone:function(){var n=i.clone.call(this);return n.words=this.words.slice(0),n},random:function(n){for(var t,e=[],i=function(t){t=t;var e=987654321,i=4294967295;return function(){var n=((e=36969*(65535&e)+(e>>16)&i)<<16)+(t=18e3*(65535&t)+(t>>16)&i)&i;return n/=4294967296,(n+=.5)*(.5<u.random()?1:-1)}},r=0;r<n;r+=4){var o=i(4294967296*(t||u.random()));t=987654071*o(),e.push(4294967296*o()|0)}return new f.init(e,n)}}),r=n.enc={},o=r.Hex={stringify:function(n){for(var t=n.words,e=n.sigBytes,i=[],r=0;r<e;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(n){for(var t=n.length,e=[],i=0;i<t;i+=2)e[i>>>3]|=parseInt(n.substr(i,2),16)<<24-i%8*4;return new f.init(e,t/2)}},s=r.Latin1={stringify:function(n){for(var t=n.words,e=n.sigBytes,i=[],r=0;r<e;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(n){for(var t=n.length,e=[],i=0;i<t;i++)e[i>>>2]|=(255&n.charCodeAt(i))<<24-i%4*8;return new f.init(e,t)}},a=r.Utf8={stringify:function(n){try{return decodeURIComponent(escape(s.stringify(n)))}catch(n){throw new Error("Malformed UTF-8 data")}},parse:function(n){return s.parse(unescape(encodeURIComponent(n)))}},c=t.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(n){"string"==typeof n&&(n=a.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes},_process:function(n){var t=this._data,e=t.words,i=t.sigBytes,r=this.blockSize,o=i/(4*r),s=(o=n?u.ceil(o):u.max((0|o)-this._minBufferSize,0))*r,a=u.min(4*s,i);if(s){for(var c=0;c<s;c+=r)this._doProcessBlock(e,c);var h=e.splice(0,s);t.sigBytes-=a}return new f.init(h,a)},clone:function(){var n=i.clone.call(this);return n._data=this._data.clone(),n},_minBufferSize:0}),t.Hasher=c.extend({cfg:i.extend(),init:function(n){this.cfg=this.cfg.extend(n),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(n){return this._append(n),this._process(),this},finalize:function(n){return n&&this._append(n),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(n,t){return new e.init(t).finalize(n)}},_createHmacHelper:function(e){return function(n,t){return new h.HMAC.init(e,t).finalize(n)}}}),h=n.algo={},n);return l},"object"==typeof e?t.exports=e=r():"function"==typeof define&&define.amd?define([],r):i.CryptoJS=r()},{}],2:[function(n,t,e){var i,r;i=this,r=function(c){return function(r){var n=c,t=n.lib,e=t.WordArray,i=t.Hasher,o=n.algo,s=[],B=[];!function(){function n(n){for(var t=r.sqrt(n),e=2;e<=t;e++)if(!(n%e))return!1;return!0}function t(n){return 4294967296*(n-(0|n))|0}for(var e=2,i=0;i<64;)n(e)&&(i<8&&(s[i]=t(r.pow(e,.5))),B[i]=t(r.pow(e,1/3)),i++),e++}();var x=[],a=o.SHA256=i.extend({_doReset:function(){this._hash=new e.init(s.slice(0))},_doProcessBlock:function(n,t){for(var e=this._hash.words,i=e[0],r=e[1],o=e[2],s=e[3],a=e[4],c=e[5],h=e[6],u=e[7],f=0;f<64;f++){if(f<16)x[f]=0|n[t+f];else{var l=x[f-15],d=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,p=x[f-2],k=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;x[f]=d+x[f-7]+k+x[f-16]}var v=i&r^i&o^r&o,g=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),m=u+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&c^~a&h)+B[f]+x[f];u=h,h=c,c=a,a=s+m|0,s=o,o=r,r=i,i=m+(g+v)|0}e[0]=e[0]+i|0,e[1]=e[1]+r|0,e[2]=e[2]+o|0,e[3]=e[3]+s|0,e[4]=e[4]+a|0,e[5]=e[5]+c|0,e[6]=e[6]+h|0,e[7]=e[7]+u|0},_doFinalize:function(){var n=this._data,t=n.words,e=8*this._nDataBytes,i=8*n.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=r.floor(e/4294967296),t[15+(i+64>>>9<<4)]=e,n.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var n=i.clone.call(this);return n._hash=this._hash.clone(),n}});n.SHA256=i._createHelper(a),n.HmacSHA256=i._createHmacHelper(a)}(Math),c.SHA256},"object"==typeof e?t.exports=e=r(n("./core")):"function"==typeof define&&define.amd?define(["./core"],r):r(i.CryptoJS)},{"./core":1}],3:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("crypto-js/sha256"),r=function(){function n(n,t,e){this.timestamp=n,this.transactions=t,this.previousHash=e,this.hash=this.calculateHash(),this.nonce=0}return n.prototype.calculateHash=function(){return i(this.previousHash+this.timestamp+JSON.stringify(this.transactions)+this.nonce).toString()},n.prototype.mineBlock=function(n){for(;this.hash.substring(0,n)!==Array(n+1).join("0");)this.nonce++,this.hash=this.calculateHash();console.log("Block mined: "+this.hash+"\n")},n}();e.Block=r},{"crypto-js/sha256":2}],4:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("./block"),r=n("./transaction"),o=function(){function n(){this.chain=[this.createGenesisBlock()],this.difficulty=4,this.miningReward=100,this.pendingTransactions=[]}return n.prototype.createGenesisBlock=function(){var n=new Date;n.getUTCDate();var t=[new r.Transaction(null,"Genesis Block",0)];return new i.Block(n,t)},n.prototype.getLatestBlock=function(){return this.chain[this.chain.length-1]},n.prototype.createTransaction=function(n){this.pendingTransactions.push(n)},n.prototype.minePendingTransactions=function(n){var t=new Date;t.getUTCDate();var e=new i.Block(t,this.pendingTransactions);e.previousHash=this.getLatestBlock().hash,e.mineBlock(this.difficulty),this.chain.push(e),this.pendingTransactions=[new r.Transaction(null,n,this.miningReward)]},n.prototype.getBalance=function(n){for(var t=0,e=0,i=this.chain;e<i.length;e++)for(var r=0,o=i[e].transactions;r<o.length;r++){var s=o[r];s.fromAddress==n&&(t-=s.amount),s.toAddress==n&&(t+=s.amount)}return t},n.prototype.isChainValid=function(){for(var n=1;n<this.chain.length;n++){var t=this.chain[n],e=this.chain[n-1];if(t.hash!==t.calculateHash())return!1;if(t.previousHash!==e.hash)return!1}return!0},n}();e.BlockChain=o},{"./block":3,"./transaction":6}],5:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("./blockchain"),r=n("./transaction"),o=new i.BlockChain;o.createTransaction(new r.Transaction(null,"1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y",10)),o.createTransaction(new r.Transaction(null,"2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y",10)),o.createTransaction(new r.Transaction("1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y","2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y",10)),o.createTransaction(new r.Transaction("2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y","1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y",2)),o.minePendingTransactions("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y"),o.createTransaction(new r.Transaction("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y","2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y",20)),o.minePendingTransactions("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y"),o.minePendingTransactions("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y"),console.log(JSON.stringify(o,null,4)+"\n"),console.log("address1 balance = "+o.getBalance("1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y")),console.log("address2 balance = "+o.getBalance("2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y")),console.log("address3 balance = "+o.getBalance("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y")),console.log("Blockchain valid = "+o.isChainValid())},{"./blockchain":4,"./transaction":6}],6:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(n,t,e){this.fromAddress=n,this.toAddress=t,this.amount=e};e.Transaction=i},{}]},{},[5]);