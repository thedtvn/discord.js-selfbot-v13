type ErrorMessage = string | ((...args: unknown[]) => string);
declare const Messages: Record<string, ErrorMessage>;
export default Messages;
