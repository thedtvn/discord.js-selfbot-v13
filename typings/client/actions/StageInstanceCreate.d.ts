declare const Action: any;
declare const Events: any;
declare class StageInstanceCreateAction extends Action {
    handle(data: any): {
        stageInstance: any;
    } | {
        stageInstance?: undefined;
    };
}
