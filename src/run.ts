export const run = async (command: string[]) => {
  const p = Deno.run({
    cmd: command,
    stdout: "piped",
    stderr: "piped",
  });

  let output;
  if ((await p.status()).code === 0) {
    output = await p.output();
  } else {
    output = await p.stderrOutput();
  }
  const outStr = new TextDecoder().decode(output);

  p.close();

  return outStr;
};
