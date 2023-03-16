import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";

import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType<{}> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default api.withTRPC(MyApp);
