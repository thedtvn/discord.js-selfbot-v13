declare const Action: any;
declare const deletedStageInstances: any;
declare const Events: any;
declare class StageInstanceDeleteAction extends Action {
    handle(data: any): {
        stageInstance: any;
    } | {
        stageInstance?: undefined;
    };
}
