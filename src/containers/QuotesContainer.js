import axios from "axios";
import { useEffect, useState } from "react";
import { Quotes } from "../components/Quotes";

export function QuotesContainer() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("https://api.navayogendraswami.com/api/quotes")
      .then((res) => {
        setQuotes(res.data.data)
      })
  }, []);
  return (
    <Quotes data={quotes} />
  )
}