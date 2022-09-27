import { pathExists } from 'fs-extra';
import type { Task } from '../task';
import { exec } from '../utils/exec';

export const build: Task = {
  before: ['sandbox'],
  async ready({ builtSandboxDir }) {
    return pathExists(builtSandboxDir);
  },
  async run({ sandboxDir }, { dryRun, debug }) {
    return exec(`yarn build-storybook --quiet`, { cwd: sandboxDir }, { dryRun, debug });
  },
};
