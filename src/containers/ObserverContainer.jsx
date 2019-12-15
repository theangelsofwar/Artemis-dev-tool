import React from "react";
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query from "../components/Query.jsx";
import GraphQLResponse from "../components/GraphQLResponse.tsx";
import Schema from "../components/Schema.jsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.tsx";
import GraphQLVisualizer from '../components/GraphQLVisualizer.tsx';

const ObserverContainers = props => {

  return (
    <React.Fragment>
      <div id="observerContainers">
        <HistoryOfPastQueries queries={props.queries} isToggle={props.isToggle} history={props.history} />
        <Query queries={props.queries} historyBtn={props.historyBtn} />
        <GraphQLResponse results={props.results} historyBtn={props.historyBtn} />

      </div>
      {props.visualizerStatus ? <GraphQLVisualizer results={props.results} /> : null}
      {props.schemaStatus ? <Schema historyBtn={props.historyBtn} url={props.url} queries={props.queries} /> : null}
      {props.cacheStatus ? <ApolloGraphQLCache historyBtn={props.historyBtn} url={props.url} queries={props.queries} getCache={props.getCache} cache={props.cache} /> : null}
      <TreeVisualizer/>
    </React.Fragment>
  );
};

export default ObserverContainers;