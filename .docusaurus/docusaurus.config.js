export default {
  "title": "Definitely Not Intimidating",
  "tagline": "A blog by Chris Tacey-Green",
  "url": "https://ctaceygreen.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "ctaceygreen",
  "projectName": "ctaceygreen.github.io",
  "trailingSlash": false,
  "themeConfig": {
    "navbar": {
      "title": "Definitely Not Intimidating",
      "logo": {
        "alt": "My Site Logo",
        "src": "https://avatars.githubusercontent.com/u/11404995?v=4"
      },
      "items": [
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/ctaceygreen",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/ctaceygreen"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Chris Tacey-Green. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#d6deeb",
          "backgroundColor": "#011627"
        },
        "styles": [
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(162, 191, 252)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgba(239, 83, 80, 0.56)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "inserted",
              "attr-name"
            ],
            "style": {
              "color": "rgb(173, 219, 103)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(99, 119, 119)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "url"
            ],
            "style": {
              "color": "rgb(173, 219, 103)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(214, 222, 235)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "selector",
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(255, 203, 139)"
            }
          },
          {
            "types": [
              "tag",
              "operator",
              "keyword"
            ],
            "style": {
              "color": "rgb(127, 219, 202)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "property"
            ],
            "style": {
              "color": "rgb(128, 203, 196)"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\dev\\ctaceygreen.github.io\\sidebars.js",
          "editUrl": "https://github.com/ctaceygreen/ctaceygreen.github.io"
        },
        "blog": {
          "blogTitle": "Definitely Not Intimidating",
          "blogDescription": "The tech blog of Chris Tacey-Green, removing the intimidation from tech",
          "blogSidebarCount": 5,
          "postsPerPage": 1,
          "showReadingTime": true,
          "editUrl": "https://github.com/ctaceygreen/ctaceygreen.github.io/"
        },
        "theme": {
          "customCss": "C:\\dev\\ctaceygreen.github.io\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};