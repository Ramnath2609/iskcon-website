import { Banner } from "../components/Banner";
import { Details } from "../components/Details";
import { Events } from "../components/Events";
import { Quotes } from "../components/Quotes";
import { Whatsapp } from "../components/Whatsapp";
import { DefaultLayout } from "../layouts/Default";

export function Home() {
  return (
    <DefaultLayout>
      <Banner />
      <Details />
      <Events />
      <Quotes />
      <Whatsapp />
    </DefaultLayout>
  )
}