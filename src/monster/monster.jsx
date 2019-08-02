import React from "react";
import { string } from "prop-types";

export default class MonsterDisplay extends React.Component {
  constructor(props) {
    super();

    this.stdData = new StandardData();
  }
}

class Monster {
  constructor() {}

  MakeMTIS() {
    return {
      version: 0
    };
  }
}

class MTIS {
  constructor(strOrStage, influType, influVar) {
    this.stdData = new StandardData();
    if (typeof strOrStage === "string") {
      this.ParseStringRepresentation(strOrStage);
    } else {
      this.version = this.stdData.MTISVersion;
    }
  }
}

class StandardData {
  constructor() {
    this.MTISVersion = 0;
    this.MonsterPartStepData = [
      [100],
      [60, 40],
      [40, 32, 28],
      [32, 27, 23, 18],
      [24, 21, 19, 18, 17]
    ];

    this.Attributes = {
      Fire: {
        weakness: [],
        resist: []
      },
      Water: {
        weakness: [],
        resist: []
      },
      Ice: {
        weakness: [],
        resist: []
      },
      Ancient: {
        weakness: [],
        resist: []
      },
      Metal: {
        weakness: [],
        resist: []
      },
      Nature: {
        weakness: [],
        resist: []
      },
      Electric: {
        weakness: [],
        resist: []
      },
      Shadow: {
        weakness: [],
        resist: []
      },
      Light: {
        weakness: [],
        resist: []
      },
      Melee: {
        weakness: [],
        resist: []
      },
      Air: {
        weakness: [],
        resist: []
      },
      Ethereal: {
        weakness: [],
        resist: []
      },
      Earth: {
        weakness: [],
        resist: []
      },
      Acid: {
        weakness: [],
        resist: []
      },
      At15: {
        weakness: [],
        resist: []
      },
      At16: {
        weakness: [],
        resist: []
      }
    };
  }
}
