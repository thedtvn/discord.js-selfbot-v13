declare const Action: any;
declare const VoiceState: any;
declare const Events: any;
declare class VoiceStateUpdate extends Action {
    handle(data: any): void;
}
