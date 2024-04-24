import AuthService from "services/auth.service"

export const useLogin = () => {

    const authService = new AuthService();

    const authLogin = async (username: string, password: string) => {
       const user = await authService.authLogin(username, password)
       if(user){
            console.log("*** USER *** : " + JSON.stringify(user))
            let appDataArray = [];

          //  Todo : Encrypt data on localStorage
          const appData = {
            token_type: user.token_type,
            token_value:  user.token_value
          };
          appDataArray.push(appData);
    
          localStorage.setItem('stike_data', JSON.stringify(appData))
       }
       return user;
    }

    return {authLogin}
}