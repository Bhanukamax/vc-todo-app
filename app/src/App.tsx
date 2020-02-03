import React from "react";
import Todo from "./todo";
import "./App.css";
import Footer from "./footer";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo/client";

interface IProps {
  path?: any;
}
const App: React.FC<IProps> = (props: any) => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Todo />
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
