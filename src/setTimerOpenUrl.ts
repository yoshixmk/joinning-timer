import { runWithStdIn } from "./runWithStdIn.ts";

const d = new Date();

export const setTimerOpenUrl = async (timer: string, url: string) => {
  const outStr = await runWithStdIn(
    `echo "open '${url}'" | at ${timer} ${d.getDate()}.${d.getMonth() + 1}.${
      d.getFullYear() % 100
    }`,
  );
  return outStr;
};
