Object.defineProperty(exports,"__esModule",{value:!0});const e=require("fs"),r=require("@apollo/server"),l=require("@apollo/server/standalone"),o=require("@apollo/server/plugin/landingPage/default"),s=require("./resolvers"),n=require("./libs"),a=(0,e.readFileSync)("./src/schema.graphql",{encoding:"utf-8"}),i=[(0,o.ApolloServerPluginLandingPageLocalDefault)({embed:!0})],t=new r.ApolloServer({typeDefs:a,resolvers:s.resolvers,introspection:!0,plugins:i});(0,l.startStandaloneServer)(t,{listen:{port:n.ENV.PORT}}).then((({url:e})=>console.log(`🚀  Server ready at ${e}`)));