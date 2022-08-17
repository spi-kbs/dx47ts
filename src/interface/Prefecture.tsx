
interface Prefecture {
  name: string;
  prefecture: "do" | "to" | "fu" | "ken";
}

export interface Region {
  name: string;
  area: Prefecture[]
}

