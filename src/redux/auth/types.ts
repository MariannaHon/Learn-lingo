
export interface AuthCredentials {
    name?: string; 
    email: string;
    password: string;
}

export interface ErrorResponse {
    message: string;
}

export interface AuthResponse {
    data: {
        accessToken: string;
    };
}