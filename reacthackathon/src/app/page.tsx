import { NextUIProvider } from '@nextui-org/react'
const { SpotifyApi } = require("@spotify/web-api-ts-sdk");


async function getSpotifyResults() {
  const sdk = SpotifyApi.withClientCredentials(process.env.SPOTIFY_CLIENT_ID, process.env.SPOTIFY_CLIENT_SECRET);
  const items = await sdk.search("The Beatles", ["artist"]);
  console.log("hi")
  console.table(items.artists.items.map((item) => ({
      name: item.name,
      followers: item.followers.total,
      popularity: item.popularity,
  })));
}   


export default function Home() {
  //const sdk = SpotifyApi.withClientCredentials("fcc98cb78af7452387969a676455c982", "5741d93e9eec4665a4029ff03287eb5a");
  getSpotifyResults();
  console.log("HI");
  
  const recommendationArgs = "";
  //const items = await sdk.recommendations.get(recommendationArgs);
  return (
      <div></div>
  )
}
