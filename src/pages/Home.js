import { Banner } from "../components/Banner";
import { Details } from "../components/Details";
import { Events } from "../components/Events";
import { Whatsapp } from "../components/Whatsapp";
import { QuotesContainer } from "../containers/QuotesContainer";
import { DefaultLayout } from "../layouts/Default";

export function Home() {
  return (
    <DefaultLayout>
      <Banner />
      <Details />
      <Events />
      {/* <Quotes /> */}
      <QuotesContainer />
      <Whatsapp />
    </DefaultLayout>
  )
}