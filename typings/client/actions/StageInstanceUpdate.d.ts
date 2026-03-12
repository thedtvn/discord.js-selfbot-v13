declare const Action: any;
declare const Events: any;
declare class StageInstanceUpdateAction extends Action {
    handle(data: any): {
        oldStageInstance: any;
        newStageInstance: any;
    } | {
        oldStageInstance?: undefined;
        newStageInstance?: undefined;
    };
}
