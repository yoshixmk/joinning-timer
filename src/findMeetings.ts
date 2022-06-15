import { run } from "./run.ts";

export const findMeetings = async () => {
  const outStr = await run(["zoom", "ls"]);

  return convertToArray(outStr);
};

const convertToArray = (meetings: string) => {
  const array = meetings
    // deno-lint-ignore no-control-regex
    .replaceAll(/\n?\x1b\[(1|0)m/g, "") // コンソールの特殊文字（太文字）を削除
    .replaceAll(/\s+?url/g, "") // "<title>: <url>"形式にする
    .replaceAll(/\n$/g, "") // 改行のみの行を削除
    .split("\n");

  return array.map((e) => e.split(": "));
};
