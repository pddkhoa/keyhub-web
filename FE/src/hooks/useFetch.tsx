import api from "@/api/axios";
import { requestApiHelper } from "@/helpers/request";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "./useToast";
import { loginFailed, loginStart, loginSuccess } from "@/redux/authSlice";
import { TokenType } from "@/types/token";
import User from "@/types/user";
import { register } from "module";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

const getApiRequest = (name: string) => {
  switch (name) {
    case "login":
      return {
        method: "post",
        url: "api/auth/login",
        typeResult: {} as TokenType,
        dispatchStart: () => {
          loginStart();
        },
        dispatchSuccess: (result: TokenType): AnyAction => {
          return loginSuccess(result);
        },
        dispatchFailed: () => {
          return loginFailed();
        },
      };

    default:
      return {
        method: "",
        url: "",
        typeResult: {} as any,
        dispatchStart: () => {},
        dispatchSuccess: () => {},
        dispatchFailed: () => {},
      };
  }
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRequest = async (name: string, report: any) => {
    const { url, dispatchSuccess, dispatchFailed, typeResult } =
      getApiRequest(name);
    type body = {
      success: boolean;
      message: string;
      result: typeof typeResult;
      statusCode: number;
    };
    try {
      setIsLoading(true);
      const { body } = await requestApiHelper<body>(api.post(url, report));
      if (body?.result) {
        // console.log(body.result);
        const a = dispatchSuccess(body.result);
        if (a) dispatch(a);
        showToast(body?.message || "Success", "success");
        navigate("/profile");
      } else {
        dispatch(dispatchFailed() as AnyAction);
        showToast(body?.message || "Error123", "error");
      }
    } catch (err) {
      dispatch(dispatchFailed() as AnyAction);
      showToast("Error", "error");
      console.log(err);
    }
  };

  return { isLoading, handleRequest };
};
