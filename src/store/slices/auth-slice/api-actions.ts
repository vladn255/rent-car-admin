import { createAPI } from "../../../services/api";
import { AuthCredentials } from "../../../const";

const getLoginCredentials = () => {
    return JSON.stringify({
        username: AuthCredentials.name,
        password: AuthCredentials.password
    })
}

const api = createAPI()

const fetchAuthorization = () => {
    return api.post('/auth/login', getLoginCredentials())
        .then((response) => {
            return response.data
        })
        .catch((err) => console.log(err))
}

export {
    fetchAuthorization
}