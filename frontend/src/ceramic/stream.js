import {TileDocument} from "@ceramicnetwork/stream-tile";
// import {IDX} from "@ceramicstudio/idx";

export async function createStream(ceramic, content, schema, controllers, idx) {
  try {
    // console.log(schema, content, controllers);
    const doc = await TileDocument.create(ceramic, content, {
      controllers,
      schema,
    });

    const streamId = doc.id.toString();

    console.log("StreamId is : ", streamId);

    // const listOfFiles = await idx.get<FilesList>('fileListDef');
    // const list = listOfFiles ? listOfFiles.files : []

    // const rest = await idx.set('fileListDef', {
    //   files: [content, ...list],
    // });

    return streamId;
  } catch (error) {
    console.error("Ceramic stream error: \n", error);
  }
}
