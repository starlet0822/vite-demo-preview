System.register([],(function(u){"use strict";return{execute:function(){u("e",(function(u){for(var r=[],e=u.length,s=0;s<e;s++){var h=u.charCodeAt(s);if(h>=55296&&h<=56319&&e>s+1){var t=u.charCodeAt(s+1);t>=56320&&t<=57343&&(h=1024*(h-55296)+t-56320+65536,s+=1)}h<128?r.push(h):h<2048?(r.push(h>>6|192),r.push(63&h|128)):h<55296||h>=57344&&h<65536?(r.push(h>>12|224),r.push(h>>6&63|128),r.push(63&h|128)):h>=65536&&h<=1114111?(r.push(h>>18|240),r.push(h>>12&63|128),r.push(h>>6&63|128),r.push(63&h|128)):r.push(239,191,189)}return new Uint8Array(r).buffer}))}}}));
