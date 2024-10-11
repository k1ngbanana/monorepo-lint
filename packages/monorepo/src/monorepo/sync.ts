import { execa } from 'execa'
import pc from 'picocolors'
import { logger } from '../logger'
import { getWorkspacePackages } from './workspace'

export async function syncNpmMirror(cwd: string) {
  const packages = await getWorkspacePackages(cwd)
  logger.info(`[即将同步的包]:\n${packages.filter(x => x.manifest.name).map(x => `- ${pc.green(x.manifest.name)}`).join('\n')}\n`)
  for (
    const project of packages
  ) {
    if (project.manifest.name) {
      await execa({
        stdout: ['pipe', 'inherit'],
      })`cnpm sync ${project.manifest.name}`
    }
  }
}
