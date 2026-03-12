declare const libs: {
    sodium: (sodium: any) => {
        crypto_aead_xchacha20poly1305_ietf_encrypt: (plaintext: any, additionalData: any, nonce: any, key: any) => any;
        crypto_aead_xchacha20poly1305_ietf_decrypt: (plaintext: any, additionalData: any, nonce: any, key: any) => any;
    };
    'libsodium-wrappers': (sodium: any) => {
        crypto_aead_xchacha20poly1305_ietf_encrypt: (plaintext: any, additionalData: any, nonce: any, key: any) => any;
        crypto_aead_xchacha20poly1305_ietf_decrypt: (plaintext: any, additionalData: any, nonce: any, key: any) => any;
    };
    '@stablelib/xchacha20poly1305': (stablelib: any) => {
        crypto_aead_xchacha20poly1305_ietf_encrypt(cipherText: any, additionalData: any, nonce: any, key: any): any;
        crypto_aead_xchacha20poly1305_ietf_decrypt(plaintext: any, additionalData: any, nonce: any, key: any): any;
    };
};
declare function NoLib(): void;
declare function importModule(name: any, usingImport?: boolean): Promise<any>;
