import { makePhotos } from "./data.js";
import { generateMiniatures } from "./miniatures-creator.js";

const generatedData = makePhotos();
console.log(generatedData);
generateMiniatures(generatedData);
