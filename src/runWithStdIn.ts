export const runWithStdIn = async (command: string) => {
  const p = Deno.run({
    cmd: ["bash"],
    stdout: "piped",
    stdin: "piped",
  });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  await p.stdin.write(encoder.encode(command));

  await p.stdin.close();

  let output;
  if ((await p.status()).code === 0) {
    output = await p.output();
  } else {
    output = await p.stderrOutput();
  }
  const outStr = decoder.decode(output);

  p.close();

  return outStr;
};
