import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloClient,InMemoryCache,ApolloProvider,gql } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const pokemon_client = new ApolloClient({
  uri:"https://beta.pokeapi.co/graphql/v1beta",
  cache:new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={pokemon_client} >
      <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
