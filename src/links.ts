const base = "https://raw.githubusercontent.com/github/gitignore/refs/heads/main/"

const ignoreFile = {
    "cpp": "C++.gitignore",
    "c": "C.gitignore",
    "ada": "Ada.gitignore",
    "agda": "Agda.gitignore",
    "android": "Android.gitignore",
    "appengine": "AppEngine.gitignore",
    "appcelerator": "AppceleratorTitanium.gitignore",
    "archlinux": "ArchLinuxPackages.gitignore",
    "autotools": "Autotools.gitignore",
    "ballerina": "Ballerina.gitignore",
    "cfwheels": "CFWheels.gitignore",
    "cmake": "CMake.gitignore",
    "cuda": "CUDA.gitignore",
    "cakephp": "CakePHP.gitignore",
    "chefcookbook": "ChefCookbook.gitignore",
    "clojure": "Clojure.gitignore",
    "codeigniter": "CodeIgniter.gitignore",
    "commonlisp": "CommonLisp.gitignore",
    "composer": "Composer.gitignore",
    "concrete5": "Concrete5.gitignore",
    "coq": "Coq.gitignore",
    "craftcms": "CraftCMS.gitignore",
    "d": "D.gitignore",
    "dart": "Dart.gitignore",
    "delphi": "Delphi.gitignore",
    "drupal": "Drupal.gitignore",
    "elisp": "Elisp.gitignore",
    "elixir": "Elixir.gitignore",
    "elm": "Elm.gitignore",
    "erlang": "Erlang.gitignore",
    "eagle": "Eagle.gitignore",
    "flaxengine": "FlaxEngine.gitignore",
    "fuelphp": "FuelPHP.gitignore",
    "go": "Go.gitignore",
    "godot": "Godot.gitignore",
    "gradle": "Gradle.gitignore",
    "haskell": "Haskell.gitignore",
    "java": "Java.gitignore",
    "jekyll": "Jekyll.gitignore",
    "julia": "Julia.gitignore",
    "kotlin": "Kotlin.gitignore",
    "labview": "LabVIEW.gitignore",
    "laravel": "Laravel.gitignore",
    "lua": "Lua.gitignore",
    "magento": "Magento.gitignore",
    "maven": "Maven.gitignore",
    "node": "Node.gitignore",
    "nim": "Nim.gitignore",
    "ocaml": "OCaml.gitignore",
    "python": "Python.gitignore",
    "ruby": "Ruby.gitignore",
    "rust": "Rust.gitignore",
    "scala": "Scala.gitignore",
    "swift": "Swift.gitignore",
    "unity": "Unity.gitignore",
    "unrealengine": "UnrealEngine.gitignore",
    "visualstudio": "VisualStudio.gitignore",
    "wordpress": "WordPress.gitignore",
    "zig": "Zig.gitignore"
}

export const getIgnoreLink = (lang: string) => {
    const l = lang.toLowerCase()
    if (!ignoreFile[l]) return null

    return {
        link: `${base}${encodeURIComponent(ignoreFile[l])}`,
        filename: ignoreFile[l]
    }
}