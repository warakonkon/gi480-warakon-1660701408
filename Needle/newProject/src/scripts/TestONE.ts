import { Behaviour ,serializable} from "@needle-tools/engine";

export class FirstScript extends Behaviour

{
    @serializable()
    speed : number = 10;
    message : string = 'Hello';
    awake() {
        
    }
    start() {
        console.log("hello World");
        
    }

    update(){
        this.gameObject.totateY(this.context.time.deltaTime * this.speed)
    }
}