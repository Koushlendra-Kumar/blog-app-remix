import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Scripts, Outlet, Meta } from "@remix-run/react";


import globalLargeStylesUrl from "~/styles/global-large.css";
import globalMediumStylesUrl from "~/styles/global-medium.css";
import globalStylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  {
    rel: "stylesheet",
    href: globalMediumStylesUrl,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalLargeStylesUrl,
    media: "screen and (min-width: 1024px)",
  },
];

export const meta: MetaFunction = () =>{
  const description = "Learn Remix and laugh at the same time!";
  return [
    {name: "description", content: description},
    {name: "twitter:description", content: description},
    {title: "Remix: So great, it's funny!"}
  ]
}

export default function App() {
  let title = "It's funny!"
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="keywords" content="Remix,jokes" />
        <meta
          name="twitter:image"
          content="https://remix-jokes.lol/social.png"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta name="twitter:creator" content="@remix_run" />
        <meta name="twitter:site" content="@remix_run" />
        <meta name="twitter:title" content="Remix Jokes" />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links/>
      </head>
      <body>
        <Outlet />
        <Scripts/>
        <LiveReload />
      </body>
    </html>
  );
}
