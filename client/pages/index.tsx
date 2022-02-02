import type { NextPage } from "next";
import Canvas from "../components/canvas";
import Header from "../components/header";
import Navigator from "../components/navigator";

const Index: NextPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex">
        <Navigator />
        <Canvas />
      </div>
    </div>
  );
};

export default Index;
