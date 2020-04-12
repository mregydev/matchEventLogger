const pass = {
  value: "pass",
  shortcuts: {
    e: {
      fields: { height: "low" }
    },
    w: {
      fields: { type: "open-play", height: "ground" }
    }
  },
  fields: [
    {
      type: "single",
      name: "type",
      options: [
        {
          value: "open-play"
        },
        {
          value: "kick-off"
        },
        {
          value: "throw-in"
        }
      ]
    },
    {
      type: "single",
      name: "height",
      options: [
        {
          value: "ground",
          exclude: {
            type: ["throw-in"]
          }
        },
        {
          value: "low"
        },
        {
          value: "high"
        }
      ]
    },
    {
      type: "single",
      name: "body-part",
      exclude: {
        type: ["throw-in"]
      },
      options: [
        {
          value: "right-foot",
          shortcut: "2"
        },
        {
          value: "left-foot",
          shortcut: "3"
        },
        {
          value: "head",
          shortcut: "4",
          include: {
            type: ["open-play"],
            height: ["low", "high"],
            anded: true
          }
        }
      ]
    },
    {
      type: "multiple",
      name: "extras",
      options: [
        {
          value: "aerial-won",
          include: {
            "body-part": ["head"]
          }
        },
        {
          value: "backheel",
          include: {
            "body-part": ["right-foot", "left-foot"]
          }
        }
      ]
    }
  ]
};

const shot = {
  value: "shot",
  shortcuts: {
    s: {}
  },
  fields: [
    {
      type: "single",
      name: "type",
      options: [
        {
          value: "open-play"
        },
        {
          value: "free-kick"
        },
        {
          value: "penalty"
        },
        {
          value: "corner"
        }
      ]
    },
    {
      type: "single",
      name: "body-part",
      options: [
        {
          value: "right-foot",
          shortcut: "2"
        },
        {
          value: "left-foot",
          shortcut: "3"
        },
        {
          value: "head",
          shortcut: "4",
          include: {
            type: ["open-play"]
          }
        },
        {
          value: "other",
          shortcut: "1",
          include: {
            type: ["open-play"]
          }
        }
      ]
    },
    {
      type: "multiple",
      name: "extras",
      options: [
        {
          value: "aerial-won",
          include: {
            "body-part": ["head"]
          }
        },
        {
          value: "deflected"
        },
        {
          value: "first-time"
        },
        {
          value: "redirect"
        }
      ]
    }
  ]
};

export default [shot, pass];
