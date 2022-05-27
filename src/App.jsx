import { useState, useEffect } from 'react';
import { Aside } from "./components/Aside";
import { Navbar } from "./components/Navbar";
import { SectionMiddle } from "./components/SectionMiddle";
import { SectionRight } from "./components/SectionRight";

export const App = () => {
  const [asideBtn, setAsideBtn] = useState(false);
  const [applyDarkTheme, setApplyDarkTheme] = useState(false);

  const activeAside = () => {
    setAsideBtn(!asideBtn);
  }

  const activeTheme = () => {
    setApplyDarkTheme(!applyDarkTheme);
  }

  useEffect(() => {
    if (applyDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });
  

  return(
    <>
      <header>
        <Navbar activeTheme={activeTheme} activeAside={activeAside} applyDarkTheme={applyDarkTheme} />
      </header>

      <main>
        <Aside asideBtn={asideBtn} />
        <SectionMiddle />
        <SectionRight />
      </main>
    </>
  );
}