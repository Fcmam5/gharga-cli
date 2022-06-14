import fs from 'fs';
import { load as loadYaml } from 'js-yaml';
import { ReusableGHAction } from '../models/reusable-action';

export const loadActionAsJSON = (path: string) => {
  const file = fs.readFileSync(path, 'utf8');
  return loadYaml(file) as ReusableGHAction; // TODO return other types
};

export default loadActionAsJSON;
