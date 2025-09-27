export const environment = {
    production: true,
    apiUrl: 'https://ton-backend.onrender.com',
    frontendUrl: 'https://your-frontend-url.vercel.app', // Replace with actual Vercel URL
    payUnit: {
        x_api_key: 'ta_clef_prod',
        authorization: 'Bearer ton_token_prod',
        baseUrl: 'https://api.payunit.net/api', // mode production
    }
};
