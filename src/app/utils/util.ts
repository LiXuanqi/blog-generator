const decodeMetaInfo = (data) => {
  const body: string = data.body;
  const start = body.indexOf("<!--");
  const end = body.indexOf("-->");
  const meta = body.substring(start + 4,end);
  try {
    return JSON.parse(meta);
  } catch (e) {
    return {
      pic: null,
      desc: "no description."
    };
  }

}

export {
  decodeMetaInfo
}