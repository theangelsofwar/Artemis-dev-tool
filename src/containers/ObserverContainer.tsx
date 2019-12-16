<<<<<<< HEAD
import React, { Fragment } from 'react'
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query from "../components/Query.tsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import Schema from "../components/Schema.jsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.jsx";
import GraphQLVisualizer from '../components/GraphQLVisualizer.jsx';
=======
import * as React from 'react'
import HistoryContainer from "./HistoryContainer";
import Query from "../components/Query";
import GraphQLResponse from "../components/GraphQLResponse";
import Schema from "../components/Schema";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache";
import GraphQLVisualizer from '../components/GraphQLVisualizer';
>>>>>>> e3aa3af06bcdf48b89b7ee140eff339e09bd3be3
// import ChartComponent from "../components/ChartComponent.jsx";

interface IProps {
  timeStamps: object[],
  queries: object[],
  isToggle: (index: number) => void,
  history: string[],
  historyBtn: number,
  results: string[],
  visualizerStatus: boolean,
  schemaStatus: boolean,
  url: string,
  cacheStatus: boolean,
  getCache: () => void,
  cache: any,
}

const ObserverContainer: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      <div id="observerContainers">
        <HistoryContainer timeStamps={props.timeStamps} queries={props.queries} isToggle={props.isToggle} history={props.history} />
        <Query queries={props.queries} historyBtn={props.historyBtn} />
        <GraphQLResponse results={props.results} historyBtn={props.historyBtn} />
      </div>
      {props.visualizerStatus ? <GraphQLVisualizer results={props.results} /> : null}
      {props.schemaStatus ? <Schema url={props.url} queries={props.queries} /> : null}
      {props.cacheStatus ? <ApolloGraphQLCache queries={props.queries} getCache={props.getCache} cache={props.cache} /> : null}
    </React.Fragment>
  )
}

export default ObserverContainer;
