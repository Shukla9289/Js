marks=[85,97,44,76,37,60];
let n=marks.length;
let ans=0;
for(let i=0;i<n;i++){
     ans=ans+marks[i];
}
let average=ans/n;
console.log(`Average of class is:"${average}`);
