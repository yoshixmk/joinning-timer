export const getMeetingUrl = (
  meetingIndexOrUrl: string | null,
  meetings: string[][],
): string | never => {
  if (meetingIndexOrUrl == null) {
    console.log("cannot null");
    Deno.exit(1);
  }

  if (/^https?.+/.test(meetingIndexOrUrl)) {
    return meetingIndexOrUrl; // is url
  }

  const meetingIndex = Number(meetingIndexOrUrl);
  return meetings[meetingIndex][1];
};
