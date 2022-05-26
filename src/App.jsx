import { Aside } from "./components/Aside";
import { Navbar } from "./components/Navbar";
import { SectionMiddle } from "./components/SectionMiddle";
import { SectionRight } from "./components/SectionRight";

export const App = () => {
  return(
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Aside />
        <SectionMiddle />
        <SectionRight />
      </main>
    </>
  );
}