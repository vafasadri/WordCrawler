chrome.runtime.onInstalled.addListener(() => {
      chrome.storage.local.set({ 
      words : [],filter : "ضصثقفغعهخحجچشسیبلاتنمکگپظطزرذدئوآ",
     delimiters: "،؛ -!$%^&*()_+|~=`{}\\[\\]:\";'<>?,.\\/"
    }) 
   });
