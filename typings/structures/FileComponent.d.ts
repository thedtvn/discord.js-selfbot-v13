import BaseMessageComponent from './BaseMessageComponent';
declare class FileComponent extends BaseMessageComponent {
    /**
     * @property {UnfurledMediaItem} [file] This unfurled media item is unique in that it only supports attachment references using the attachment://<filename> syntax
     * @property {Boolean} [spoiler] Whether the container should be a spoiler (or blurred out). Defaults to false.
     */
    /**
     * @param {FileComponent | APIFileComponent} [data={}] The data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * @returns {APIFileComponent}
     */
    toJSON(): {
        type: any;
        file: any;
        spoiler: any;
    };
}
export default FileComponent;
