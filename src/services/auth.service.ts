import axios, { AxiosInstance } from "axios";

class AuthService {

    authLogin = async (username: string, password: string) => {
        return await axios.post(
            process.env.NEXT_APP_API_URL + '/auth/login',{  username, password  }
        ).then((res) => {
            return {
                user_id:    res.data.data.user_data.id,
                fullName:   res.data.data.user_data.fullName,
                username:   res.data.data.user_data.username,
                token_type: res.data.data.token.type,
                token_value:    res.data.data.token.token,
                date_expiration:    res.data.data.expireAt
            }
        })
    }

    
}    

export { AuthService as default };