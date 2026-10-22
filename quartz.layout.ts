import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const UnpublishedLinks = () => null

UnpublishedLinks.afterDOMLoaded = `
(() => {
  const indexPromise = fetch("/static/contentIndex.json")
    .then(r => r.ok ? r.json() : null)
    .catch(() => null);

  document.addEventListener("nav", async () => {
    const index = await indexPromise;
    if (!index) return;

    const published = new Set(Object.keys(index));

    // フォルダページも正常なリンクとして扱う
    for (const slug of Object.keys(index)) {
      let cut = slug.lastIndexOf("/");
      while (cut > 0) {
        published.add(slug.slice(0, cut));
        cut = slug.lastIndexOf("/", cut - 1);
      }
    }

    document.querySelectorAll(
      "article a.internal[href]:not(.tag-link)"
    ).forEach(link => {
      const url = new URL(link.href);
      if (url.origin !== location.origin) return;

      let slug;
      try {
        slug = decodeURIComponent(url.pathname)
          .split("/").filter(Boolean).join("/") || "index";
      } catch {
        return;
      }

      if (slug.endsWith(".html")) {
        slug = slug.slice(0, -5);
      }

      const exists =
        published.has(slug) ||
        published.has(slug + "/index");

      link.classList.toggle("unpublished-link", !exists);
    });
  });
})();
`



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [UnpublishedLinks],
  footer: Component.Footer({
    links: {
      GitHub: "xxx",
      "Discord Community": "xxx",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        fontSize: 0.45,
        repelForce: 1.0,
        linkDistance: 60,
        scale: 1.0,
        opacityScale: 2.0,
      },
      globalGraph: {
        fontSize: 0.18,
        repelForce: 2.5,
        linkDistance: 160,
        scale: 0.4,
        opacityScale: 2.5,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.RecentNotes()
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta(),
    Component.TableOfContents()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
