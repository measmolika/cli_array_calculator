#!/usr/bin/env node

const [,, ... args] = process.argv
const help = "[USAGE]:\n"+
"calc add <num1> <num2> ... <num>\n"+
"calc subtract <num1> <num2> ... <num>\n"+
"calc multiply <num1> <num2> ... <num>\n"+
"calc divide <num1> <num2> ... <num>"

var arr = [];
for(var i=1; i<args.length; i++) {
	var n = parseFloat(args[i])
	arr.push(n)
}

var res 

if(args.length >= 2) {
   res = arr[0]
   switch(args[0]) {
	case "add":
		for (var i = 1; i < arr.length; i++) {
			res += arr[i]		
		}
		console.log(`result is ${res.toFixed(2)}`)
		break
	case "subtract":
		for (var i = 1; i < arr.length; i++) {
			res -= arr[i]
		}
		console.log(`result is ${res.toFixed(2)}`)
		break
	case "multiply":
                for (var i = 1; i < arr.length; i++) {
                        res *= arr[i]
                }
		console.log(`result is ${res.toFixed(2)}`)
		break
	case "divide":
                for (var i = 1; i < arr.length; i++) {
                        res /= arr[i]
                }		
		console.log(`result is ${res.toFixed(2)}`)
		break
	default :
		console.log("Invalid Argument")
		break
   }
} else {
	console.log(help)
}
