import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "./useAppDispatch";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { SendRequestProps } from "@/types";
import useAuth from "./useAuth";
import { requestApiHelper } from "@/helpers/request";
import { getRequestConfig } from "@/services/getRequest";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { accessToken, axiosJWT } = useAuth();
  const [Modal, setModal] = useState(false);

  const sendRequest = async ({ type, data, slug }: SendRequestProps) => {
    type body = {
      success: boolean;
      message: string;
      result: any;
      statusCode: number;
    };

    try {
      setIsLoading(true);

      const config = getRequestConfig(type, slug);
      if (!config) throw Error("Invalid request type!");

      const {
        method,
        url,
        isToken,
        isShowToast,
        isDispatch,
        showModal,
        action,
        redirect,
        customAction,
        formMutil,
      } = config;

      let response;

      if (isToken) {
        if (formMutil) {
          response = await requestApiHelper<body>(
            axiosJWT({
              method,
              url,
              data,
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
              },
            })
          );
        } else {
          response = await requestApiHelper<body>(
            axiosJWT({
              method,
              url,
              data,
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
          );
        }
      } else {
        response = await requestApiHelper<body>(axios({ method, url, data }));
      }

      setIsLoading(false);

      if (response.body?.success) {
        if (isDispatch && action)
          dispatch(action(!customAction ? response.body.result : slug));
        if (showModal) setModal(true);
        if (isShowToast) toast.success("Successfully!");
        if (redirect?.success) navigate(redirect.success);
      } else {
        if (isShowToast) toast.error(response.body?.message || "Error");
        if (redirect?.error) navigate(redirect.error);
        setModal(false);
        throw response;
      }
    } catch (error) {
      setIsLoading(false);
      setModal(false);
      console.log(error);
    }
  };

  return { Modal, isLoading, sendRequest };
};

export default useFetch;
