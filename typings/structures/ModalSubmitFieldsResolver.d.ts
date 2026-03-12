/**
 * A resolver for modal submit interaction text inputs.
 */
declare class ModalSubmitFieldsResolver {
    components: any[];
    constructor(components: any[]);
    /**
     * The extracted fields from the modal
     * @type {PartialInputTextData[]} The fields in the modal
     * @private
     */
    get _fields(): any[];
    /**
     * Gets a field given a custom id from a component
     * @param {string} customId The custom id of the component
     * @returns {?PartialInputTextData}
     */
    getField(customId: string): any;
    /**
     * Gets the value of a text input component given a custom id
     * @param {string} customId The custom id of the text input component
     * @returns {?string}
     */
    getTextInputValue(customId: string): string;
}
export default ModalSubmitFieldsResolver;
