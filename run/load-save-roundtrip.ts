import { DocDb, LoadAndValidate, ValidateAndSave } from '../lib/utils';

const docDb: DocDb = LoadAndValidate();

console.log(`Loaded and validated ${Object.keys(docDb).length} documents`);

ValidateAndSave(docDb);

console.log(`Validated and saved. If there are any changes, roundtrip is broken.`);