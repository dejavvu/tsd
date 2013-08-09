// Type definitions for chai-fuzzy v1.6.0 assert style
// Project: http://chaijs.com/
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../chai/chai-assert.d.ts" />

declare module chai {
	interface Assert {
		like(act:any, exp:any, msg?:string);
		notLike(act:any, exp:any, msg?:string);
		containOneLike(act:any, exp:any, msg?:string);
		notContainOneLike(act:any, exp:any, msg?:string);
		jsonOf(act:any, exp:any, msg?:string);
		notJsonOf(act:any, exp:any, msg?:string);
	}
}