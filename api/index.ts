import type { VercelRequest, VercelResponse } from "@vercel/node";

function getParameters(pathname: string) {
  if (pathname.startsWith("/www.superindep.fr/")) {
    const url = new URL(`https://${pathname.slice(1)}`);

    const closeUrl = new URL(url);
    closeUrl.searchParams.set("utm_source", "gabin.app");
    closeUrl.searchParams.set("utm_medium", "embed.gabin.app");
    closeUrl.searchParams.set("utm_campaign", "partnership");

    return {
      title: "SuperIndep x Gabin",
      url: url.toString(),
      banner: `<div class="SuperIndep">
      <div class="SuperIndepLogo">
        <img src="/superindep.png" alt="Logo SuperIndep" height="22px" />
        <span style="font-size: 0.8rem;">x</span>
        <span style="font-size: 1.2rem; font-weight: bold;">
          Gabin
        </span>
      </div>

      <div class="SuperIndepDescription"> : -10€ sur les abonnements pendant 3 mois 🎁</div>

      <div class="SuperIndepActions">
        <a class="SuperIndepButton" href="https://go.gabin.app/superindep">
          J'en profite
        </a>
        <a class="SuperIndepIconButton" href="${closeUrl.toString()}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x "><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </a>
      </div>
    </div>`,
    };
  }

  return undefined;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const parameters = req.url ? getParameters(req.url) : undefined;

  if (parameters == null) {
    return res.redirect(307, "https://gabin.app");
  }

  return res.send(
    `<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${parameters.title}</title>
      <style>
        /*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */
  
        /*
        Document
        ========
        */
  
        /**
        Use a better box model (opinionated).
        */
  
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
  
        html {
          /* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
          font-family:
            system-ui,
            'Segoe UI',
            Roboto,
            Helvetica,
            Arial,
            sans-serif,
            'Apple Color Emoji',
            'Segoe UI Emoji';
          line-height: 1.15; /* 1. Correct the line height in all browsers. */
          -webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
          -moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
          tab-size: 4; /* 3 */
        }
  
        /*
        Sections
        ========
        */
  
        body {
          margin: 0; /* Remove the margin in all browsers. */
        }
  
        /*
        Grouping content
        ================
        */
  
        /**
        1. Add the correct height in Firefox.
        2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
        */
  
        hr {
          height: 0; /* 1 */
          color: inherit; /* 2 */
        }
  
        /*
        Text-level semantics
        ====================
        */
  
        /**
        Add the correct text decoration in Chrome, Edge, and Safari.
        */
  
        abbr[title] {
          text-decoration: underline dotted;
        }
  
        /**
        Add the correct font weight in Edge and Safari.
        */
  
        b,
        strong {
          font-weight: bolder;
        }
  
        /**
        1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
        2. Correct the odd 'em' font sizing in all browsers.
        */
  
        code,
        kbd,
        samp,
        pre {
          font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            'Liberation Mono',
            Menlo,
            monospace; /* 1 */
          font-size: 1em; /* 2 */
        }
  
        /**
        Add the correct font size in all browsers.
        */
  
        small {
          font-size: 80%;
        }
  
        /**
        Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
        */
  
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
  
        sub {
          bottom: -0.25em;
        }
  
        sup {
          top: -0.5em;
        }
  
        /*
        Tabular data
        ============
        */
  
        /**
        1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
        2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
        */
  
        table {
          text-indent: 0; /* 1 */
          border-color: inherit; /* 2 */
        }
  
        /*
        Forms
        =====
        */
  
        /**
        1. Change the font styles in all browsers.
        2. Remove the margin in Firefox and Safari.
        */
  
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
        }
  
        /**
        Remove the inheritance of text transform in Edge and Firefox.
        */
  
        button,
        select {
          text-transform: none;
        }
  
        /**
        Correct the inability to style clickable types in iOS and Safari.
        */
  
        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
        }
  
        /**
        Remove the inner border and padding in Firefox.
        */
  
        ::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
  
        /**
        Restore the focus styles unset by the previous rule.
        */
  
        :-moz-focusring {
          outline: 1px dotted ButtonText;
        }
  
        /**
        Remove the additional ':invalid' styles in Firefox.
        See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
        */
  
        :-moz-ui-invalid {
          box-shadow: none;
        }
  
        /**
        Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
        */
  
        legend {
          padding: 0;
        }
  
        /**
        Add the correct vertical alignment in Chrome and Firefox.
        */
  
        progress {
          vertical-align: baseline;
        }
  
        /**
        Correct the cursor style of increment and decrement buttons in Safari.
        */
  
        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }
  
        /**
        1. Correct the odd appearance in Chrome and Safari.
        2. Correct the outline style in Safari.
        */
  
        [type='search'] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
        }
  
        /**
        Remove the inner padding in Chrome and Safari on macOS.
        */
  
        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }
  
        /**
        1. Correct the inability to style clickable types in iOS and Safari.
        2. Change font properties to 'inherit' in Safari.
        */
  
        ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
        }
  
        /*
        Interactive
        ===========
        */
  
        /*
        Add the correct display in Chrome and Safari.
        */
  
        summary {
          display: list-item;
        }
      </style>
      <style>
        html,
        body {
          height: 100dvh;
          overflow: hidden;
        }
  
        body {
          display: flex;
          flex-direction: column;
        }
  
        iframe {
          flex: 1;
          width: 100%;
          height: 100%;
          border: 0;
        }
      </style>
      <style>
        .SuperIndep {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.4);
          color: #1e0f68;
        }
  
        .SuperIndepLogo {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
  
        .SuperIndepDescription {
          display: none;
        }
  
        .SuperIndepActions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .SuperIndepButton,
        .SuperIndepIconButton {
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          background-color: #ff5884;
          color: white;
          text-decoration: none;
          border: 2px solid transparent;
          white-space: nowrap;
        }

        .SuperIndepIconButton {
          background-color: transparent;
          border-color: #9c97b6;
          color: #9c97b6;
          padding: 0.6rem;
        }
  
        @media (min-width: 800px) {
          .SuperIndepDescription {
            display: block;
            flex: 1;
          }
        }
      </style>
    </head>
    <body>
      <iframe title="${parameters.title}" src="${parameters.url}"></iframe>
      ${parameters.banner}
      <script>
        window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
      </script>
      <script defer src="/_vercel/insights/script.js"></script>
    </body>
  </html>`
  );
}
