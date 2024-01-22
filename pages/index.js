import Head from "next/head";
import { LoginPage } from "../components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-200">
      <Head>
        <title>Ini Judul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginPage />
    </div>
  );
}
