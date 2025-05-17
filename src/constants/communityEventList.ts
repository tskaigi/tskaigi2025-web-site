type CommunityEventMonth = "6月";

type CommunityEvent = {
  name: string;
  link: string;
};

export const communityEventList: {
  [key in CommunityEventMonth]: CommunityEvent[];
} = {
  "6月": [],
};
