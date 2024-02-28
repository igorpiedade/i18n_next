import GitHubIcon from "@mui/icons-material/GitHub";

import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import initTranslations from "../helpers/i18n";

export default async function Home({ params: { locale } }) {
  const { t: text } = await initTranslations(locale, ["home"]);

  return (
    <div className="flex flex-col lg:items-center justify-center h-full w-full">
      <p className=" text-stone-100 text-3xl sm:text-6xl ml-5">
        {text("header")}
      </p>
      <p className=" text-slate-400 text-lg sm:2xl m-5">{text("sub_header")}</p>
      <div className="flex flex-col text-stone-100 items-center m-10 text-lg">
        <p>{text("check_git")}</p>
        <GitHubIcon className="mt-2 text-6xl" />
      </div>
      <div className="mt-10 text-slate-100">
        <p>{text("swap_language")}</p>
        <div className="flex justify-center gap-6 mt-2">
          <Link href="/en/">
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="US"
            />
          </Link>
          <Link href="/pt-BR/">
            <ReactCountryFlag
              countryCode="BR"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="BR"
            />
          </Link>
          <Link href="/es/">
            <ReactCountryFlag
              countryCode="ES"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="ES"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
