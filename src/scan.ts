import fs from 'fs'
import path from 'path'

const languageIndicators = {
  'Node': 'package.json',
  'Go': 'go.mod',
  'Python': '.py',
  'Java': ['.java'],
  'Gradle': ['build.gradle'],
  'Maven': ['pom.xml']
}

export function scanDirectory(dirPath: string) {
  let languageDetected: string | null = null

  function scanDirRecursively(currentDir: string) {
    const files = fs.readdirSync(currentDir)

    for (const file of files) {
      const fullPath = path.join(currentDir, file)
      const stats = fs.statSync(fullPath)

      if (stats.isDirectory()) {
        scanDirRecursively(fullPath)
      } else {
        for (const [language, indicators] of Object.entries(languageIndicators)) {
          if (Array.isArray(indicators)) {
            if (indicators.some(ext => fullPath.endsWith(ext))) {
              languageDetected = language
              return
            }
          } else if (fullPath.includes(indicators)) {
            languageDetected = language
            return
          }
        }
      }
    }
  }
  scanDirRecursively(dirPath)
  return languageDetected
}
