import { parse } from "./deps.ts";
import { findMeetings } from "./src/findMeetings.ts";
import { getMeetingUrl } from "./src/getMeetingUrl.ts";
import { setTimerOpenUrl } from "./src/setTimerOpenUrl.ts";

const meetings = await findMeetings();

// n = index number, t = timer
const { n, t } = parse(Deno.args);

if (!n) {
  console.log(meetings.map(([name, _url], i) => `${i}: ${name}`).join("\n"));
}

const meetingIndexOrUrl = n ?? prompt("Please select number or url: ");

const timer = t ?? prompt("What time do you book today?（ex: 10:59）: ");

const output = await setTimerOpenUrl(
  timer,
  getMeetingUrl(meetingIndexOrUrl, meetings),
);

console.log(output);
