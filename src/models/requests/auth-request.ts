//todo: read this comments
//Set the requests depending on the backend

export interface LoginRequest{
    email: string;
    password: string;
};
//Set the requests depending on the backend

export interface RegisterRequest{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

//Set the requests depending on the backend
export interface VerifyEmailRequest{
    email: string;
    code: string;

};