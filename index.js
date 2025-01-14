// Your code here

class Polygon{
    constructor(array){
        this.array = array;
    }
    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        return this.array.reduce((s, total) => total +s, 0) 
    }
}

class Triangle extends Polygon{

    get isValid(){
        if ((this.array[0] + this.array[1]) < this.array[2] || ((this.array[0] + this.array[2]) < this.array[1]) || ((this.array[2] + this.array[1]) < this.array[0])){
            return false
        } else {
            return true
        }
    }

}

class Square extends Polygon{

    get isValid(){
        if (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]){
            return true
        } else{
            return false
        }
    }


    get area(){
        if (this.isValid){
            return this.array[0] **2
        }
    }
}