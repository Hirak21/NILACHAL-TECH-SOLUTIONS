export type Principle = {
  statement: string;
  detail: string;
};

export const principles: Principle[] = [
  {
    statement: "Solve before adding tools",
    detail: "Understand the real problem first. A tool is not always the answer.",
  },
  {
    statement: "Build for real users",
    detail: "The people who use the system daily are the design audience.",
  },
  {
    statement: "Keep systems understandable",
    detail: "If staff cannot explain it, it will not last.",
  },
  {
    statement: "Measure actual outcomes",
    detail: "Track what changed in daily operations, not vanity metrics.",
  },
  {
    statement: "Never promise fake rankings or results",
    detail: "Honest descriptions of work completed. No invented statistics.",
  },
];
