import CommerceSDK from '@chec/commerce.js';

const client = new CommerceSDK(
    // process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY,
    'pk_54801e23b8341aadf76e75e2f1c60398ec83f1fed9fa5',
    true
);

export default client;
