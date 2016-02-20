/**
 * Created by Administrator on 2016/2/20.
 */
//module Validation {
//    export interface StringValidator {
//        isAcceptable(s:string):boolean;
//    }
//    var lettersRegexp = /^[A-Za-z]+$/;
//    var numberRegexp = /^[0-9+$]/;
//
//    export class LetterOnlyValidator implements StringValidator {
//        isAcceptable(s:string):boolean {
//            return lettersRegexp.test(s);
//        }
//    }
//    export class ZipCodeValidator implements StringValidator {
//        isAcceptable(s:string):boolean {
//            return s.length === 5 && numberRegexp.test(s);
//        }
//    }
//}

module Timer {

    export class Test {
        element:HTMLElement;
        span:HTMLElement;
        timer:number;

        constructor(e:HTMLElement) {
            this.element = e;
            this.element.innerHTML = "现在的时间是：";
            this.span = document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toTimeString();
        }

        start() {
            this.timer = setInterval(()=>this.span.innerHTML = new Date().toTimeString(), 500)
        }

        stop() {
            clearInterval(this.timer);
        }
    }
}
