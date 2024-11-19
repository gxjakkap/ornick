import prompts from "prompts"
import chalk from "chalk"
import fs from "fs"
import yoctoSpinner from 'yocto-spinner'
import download from "download"

import { scanDirectory } from "./scan.js"
import { getIgnoreLink } from "./links.js"

const langlist = ['C++', 'C', 'Ada', 'Agda', 'Android', 'Appengine', 'Appcelerator', 'Archlinux', 'Autotools', 'Ballerina', 'Cfwheels', 'Cmake', 'Cuda', 'Cakephp', 'Chefcookbook', 'Clojure', 'Codeigniter', 'Commonlisp', 'Composer', 'Concrete5', 'Coq', 'Craftcms', 'D', 'Dart', 'Delphi', 'Drupal', 'Elisp', 'Elixir', 'Elm', 'Erlang', 'Eagle', 'Flaxengine', 'Fuelphp', 'Go', 'Godot', 'Gradle', 'Haskell', 'Java', 'Jekyll', 'Julia', 'Kotlin', 'Labview', 'Laravel', 'Lua', 'Magento', 'Maven', 'Node', 'Nim', 'Ocaml', 'Python', 'Ruby', 'Rust', 'Scala', 'Swift', 'Unity', 'Unrealengine', 'Visualstudio', 'Wordpress', 'Zig']

async function downloadGitIgnoreFile(lang: string) {
    const { link, filename } = getIgnoreLink(lang)
    const downloadSpinner = yoctoSpinner({text: chalk.cyan(`Downloading ${chalk.underline(filename)}`)}).start()
    const downloadBuffer = await download(link)
    fs.writeFileSync('.gitignore', downloadBuffer)
    downloadSpinner.success(chalk.cyan(`Downloaded ${chalk.underline(filename)}`))
}

(async () => {
    try{
        let lang: string | null = null
        console.log(chalk.bold(chalk.cyan(("Ornick .gitignore Creator\n"))))
        const langDetectSpinner = yoctoSpinner({text: chalk.cyan(`Determining your project language...`)}).start()
        lang = scanDirectory(process.cwd())
        let langConfirmed: boolean = false
        if (lang){
            langDetectSpinner.success(`${chalk.gray("Language detected: ")}${chalk.bold(`${lang}`)}`)
            const langDetectedConfirmPrompt = await prompts([
              {
                type: 'confirm',
                name: 'langConfirm',
                message: 'Is that right?',
                initial: true
              }
            ])
            langConfirmed = langDetectedConfirmPrompt.langConfirm
        }
        else {
          langDetectSpinner.stop(chalk.red(`Failed to detect language. Please manually select it below.`))
        }

        if (langConfirmed){
          await downloadGitIgnoreFile(lang)
          process.exit(0)
        }  
        const langPrompt = await prompts([
            {
                type: 'select',
                name: "lang",
                message: chalk.gray("> Select your template.."),
                choices: langlist.map((l) => {return {'title': l, 'value': l}})
            }
        ])
        console.log(" ")
        lang = langPrompt.lang
        await downloadGitIgnoreFile(lang)
        process.exit(0)
    }
    catch(err: any){
      console.log(err.message)
    }
})()