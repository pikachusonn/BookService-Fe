/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoginRequest } from "@/common/interface";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api/AuthApi";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (params: ILoginRequest) => {
      return authApi.login(params);
    },
    onSuccess: (response: any) => {
      const { accessToken, ...userInfo } = response?.data?.data;
      console.log(accessToken, userInfo);

      if (accessToken) {
        Cookies.set("accessToken", accessToken);
      }
      if (userInfo) {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      }
      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/");
      }, 500);
    },
  });
};
