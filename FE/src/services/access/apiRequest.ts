import { requestApiHelper } from "@/helpers/request";
import api from "../../api/axios";
import {
    logOutFailed,
    logOutStart,
    logOutSuccess,
    loginFailed,
    loginStart,
    loginSuccess,
} from "../../redux/authSlice";
import { showToast } from "@/hooks/useToast";
import { TokenType } from "@/types/token";
import User from "@/types/user";
import jwt_decode from "jwt-decode";
import { getUserSuccess } from "../../redux/userSlice";
import toast from "react-hot-toast";

export const loginUser = async (user: any, dispatch: any, navigate: any) => {
    type body = {
        success: boolean;
        message: string;
        result: TokenType;
        statusCode: number;
    };

    dispatch(loginStart());
    try {
        const { body } = await requestApiHelper<body>(
            api.post("/auth/login", user)
        );
        if (body?.success) {
            const { userDetails }: any = jwt_decode(body.result.token);
            dispatch(loginSuccess(body.result));
            dispatch(getUserSuccess(userDetails.users));
            toast.success(body.message);
            if (userDetails.users.role === "ADMIN") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } else {
            dispatch(loginFailed());
            toast.error(body?.message || "Error");
        }
    } catch (err) {
        dispatch(loginFailed());
        console.log(err);
    }
};
export const registerUser = async (user: any) => {
    type body = {
        success: boolean;
        message: string;
        result: User;
        statusCode: number;
    };

    return await requestApiHelper<body>(api.post("api/auth/signup", user));
};

export const verifyAccount = async (otp: any) => {
    type body = {
        success: boolean;
        message: string;
        result: boolean | null;
        statusCode: number;
    };

    return await requestApiHelper<body>(
        api.post(`/auth/verify-account?token=${otp}`)
    );
};

export const logOut = async (
    dispatch: any,
    refreshToken: string,
    navigate: any,
    accessToken: any,
    axiosJWT: any
) => {
    dispatch(logOutStart());
    try {
        await axiosJWT.post(`/auth/logout?refreshToken=${refreshToken}`, null, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        dispatch(logOutSuccess());
        showToast("Congratulations! Logout Success");
        navigate("/login");
    } catch (err) {
        dispatch(logOutFailed());
    }
};

export const forgortPassword = async (email: any) => {
    type body = {
        success: boolean;
        message: string;
        result: string;
        statusCode: number;
    };
    return await requestApiHelper<body>(
        api.post(`/auth/forgot-password?email=${email}`)
    );
};
export const checkOtp = async (data: any) => {
    type body = {
        success: boolean;
        message: string;
        result: string;
        statusCode: number;
    };
    return await requestApiHelper<body>(api.post(`/auth/veriry-otp`, data));
};

export const resetPassword = async (data: any) => {
    type body = {
        success: boolean;
        message: string;
        result: string | null;
        statusCode: number;
    };
    return await requestApiHelper<body>(
        api.patch(`/auth/reset-password`, data)
    );
};
