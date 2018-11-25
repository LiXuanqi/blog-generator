import { DEFAULT_POST_COVER_PIC } from "src/config";

const decodeMetaInfo = (data) => {
  const body: string = data.body;
  const start = body.indexOf("<!--");
  const end = body.indexOf("-->");
  const meta = body.substring(start + 4,end);
  try {
    return JSON.parse(meta);
  } catch (e) {
    console.error(e);
    return {
      pic: DEFAULT_POST_COVER_PIC,
      desc: "no description."
    };
  }

}

export {
  decodeMetaInfo
}