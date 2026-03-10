const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let ans=1;
  for(let i=0;i<arr.length;i++){
    ans*=arr[i];
  }

  return ans;
};

const power = function(base,exp) {
	let ans=1;
  for(let i=1;i<=exp;i++)
      ans*=base;
  
  return ans;
};

const factorial = function(x) {
	if(x==0) return 1;
  let ans=1;
  while(x>=1){
    ans*=x;
    x--;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
