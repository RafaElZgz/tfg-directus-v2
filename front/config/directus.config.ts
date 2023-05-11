export default {
    url: process.env.DIRECTUS_URL,
    autoFetch: true,
    fetchUserParams: {
        fields: [
            'avatar',
            'description',
            'email',
            'first_name',
            'id',
            'language',
            'last_name',
            'password',
            'role',
            'status',
            'username',
        ],
    },
    token: process.env.DIRECTUS_TOKEN,
    cookieNameToken: 'api_token',
    cookienamerefreshtoken: 'api_refresh_token',
    devtools: false,
};
