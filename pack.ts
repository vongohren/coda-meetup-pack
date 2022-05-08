import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

pack.addNetworkDomain("meetup.com");

// https://www.meetup.com/api/authentication/#graphQl-authentication
pack.setUserAuthentication({
  type: coda.AuthenticationType.OAuth2,
  authorizationUrl: "https://secure.meetup.com/oauth2/authorize",
  tokenUrl: "https://secure.meetup.com/oauth2/access",
  tokenPrefix: "token",

  // Determines the name of the GitHub account that was connected.
  getConnectionName: async function (context) {
    console.log(context);
    return "My meetup connection"
  },
});
