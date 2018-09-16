let fs = require('fs');
let path = require('path');

let watchEnabled = process.argv.indexOf('-watch') >= 0;
let buildPath = process.argv[process.argv.indexOf('-path') + 1];
if (!buildPath) throw "No buildpath";
console.log('Destination is ' + buildPath);
const root = './src/doc';


const utf8opts = {encoding: 'utf8'};
const includeDocAsPrefix = [/(^lesson.*?)\.md$/];

const startFiles = ['lesson1', 'lesson3', 'lesson2', 'lesson4'];
const lessonFiles = ['lesson1'];

let blocks = {};
let fileTitles = {};

buildDoc();
buildImg();

if (watchEnabled) {
    console.log('Watching now');

    fs.copyFileSync('src/preview-doc.html', 'build/preview-doc.html');

    let livereload = require('livereload');
    let server = livereload.createServer({
        watch: 'build',
        port: 35000
    });



    let changedImg = false;
    let changedDoc = false;

    fs.watch(root, {recursive: true}, (eventType, fileName) => {
        if (fileName.startsWith('img')) {
            changedImg = true;
        } else {
            changedDoc = true;
        }
    });

    setInterval(() => {
        if (changedImg) {
            console.log('Img changed');
            changedImg = false;
            buildImg();
            server.refresh('md');
        }
        if (changedDoc) {
            console.log('Doc changed');
            changedDoc = false;
            buildDoc();
            server.refresh('md');
        }
    }, 100);


}
function buildDoc() {
    blocks = {};

    fileTitles = {};

    splitDoc(buildPath + '/doc');

    saveOverviews(buildPath + '/doc');

    initBlock();
    buildBlocks();
    saveBlocks(buildPath);
}
function buildImg() {
    copyBinaries(buildPath + '/doc');
}

function copyBinaries(dest) {
    let src = root + '/img';
    mkdirpSync(dest + '/img/.');
    let files = fs.readdirSync(src, utf8opts);
    for (let file of files) {
        if (!file.endsWith('.gif') && !file.endsWith('.png') && !file.endsWith('.jpg')) continue;
        console.log('Copy ' + file);
        fs.copyFileSync(src + '/' + file, dest + '/img/' + file);
    }
}
function splitDoc(dest) {
    let languages = fs.readdirSync(root, utf8opts);
    languages.forEach(language => {
        fileTitles[language] = {};
        let docs = fs.readdirSync(root + '/' + language, utf8opts);
        docs.forEach(doc => {
            let data = fs.readFileSync(root + '/' + language + '/' + doc, utf8opts);

            let docName = getDocName(doc);
            console.log('Docname is ' + docName);
            let lines = data.split(/\r?\n/);
            let currName;
            let currContent;
            let wantNext = false;
            let firstChapter = true;
            let parCount = -1;
            let fn;
            let prevFn;

            function writePreviousFile() {
                prevFn = fn;
                if (currName) {
                    if (docName) {
                        fn = docName;
                        if (!firstChapter) {
                            fn += '-';
                            fn += parCount;
                        } else {
                            fileTitles[language][docName] = currName;
                        }
                        firstChapter = false;
                        wantNext = true;
                    } else {
                        fn = currName;
                    }
                    fn = fn.replace(/\s/g, '_');
                    fn = fn.replace(/[^\d\w\-\.]/g, '');
                } else {
                    fn = undefined;
                }
                if (prevFn) {
                    if (wantNext && fn) {
                        currContent += '::: next\n[next](' + fn + ')\n:::\n\n';
                        wantNext = false;
                    }
                    console.log('write to ' + prevFn);
                    let newFn = dest + '/' + language + '/' + prevFn;
                    mkdirpSync(newFn);
                    fs.writeFileSync(newFn, currContent, 'utf8');

                }
            }

            lines.forEach(line => {
                if (line.startsWith('# ') || line.startsWith('## ')) {
                    currName = line.substr(line.indexOf(' ') + 1);
                    // console.log('CurrName is ' + currName);
                    parCount += 1;
                    // if (line.startsWith('## ')) currName = '' + (parCount+=1);
                    writePreviousFile();
                    currContent = '';
                }
                currContent += line + '\n';
            });
            currName = undefined;
            writePreviousFile();
        });
    });
    console.log(JSON.stringify(languages));
}



function getDocName(filename) {
    let docName = filename;
    if (docName.indexOf('/') >= 0) {
        docName = docName.substr(docName.lastIndexOf('/') + 1);
    }
    for (let i = 0; i < includeDocAsPrefix.length; i += 1) {
        let re = includeDocAsPrefix[i];
        if (docName.match(re)) {
            return docName.replace(re, '$1');
        }
    }
    return undefined;
}

function saveOverviews(dest) {
    let languages = fs.readdirSync(root, utf8opts);
    languages.forEach(language => {
        if (language === 'img') return;
        let start = '';
        startFiles.forEach(file => {
            start += '::: indexButton\n[' + fileTitles[language][file] + '](' + file + ')\n:::\n\n';
        });
        fs.writeFileSync(dest + '/' + language + '/start', start, 'utf8');
        let lessons = '';
        lessonFiles.forEach(file => {
            lessons += '::: indexButton\n[' + fileTitles[language][file] + '](' + file + ')\n:::\n\n';
        });
        fs.writeFileSync(dest + '/' + language + '/lessons', lessons, 'utf8');
    });
}

function saveBlocks(dest) {
    fs.writeFileSync(dest + '/scratch_blocks.json',
        JSON.stringify(blocks), 'utf8');
    fs.writeFileSync(dest + '/scratch_blocks.json',
        JSON.stringify(blocks), 'utf8');
}

function buildBlocks() {
    blocks.scratch.forEach(module => {
        module.sections.forEach(section => {
            let data;
            let file = './src/blocks/' + module.type + '/' + (section.section || 'Empty') + '.txt';
            try {
                data = fs.readFileSync(file, utf8opts);
            } catch (e) {
                console.warn('file not found: ' + file);
                return;
            }

            let lines = data.split(/\r?\n/);
            let currBlock;
            lines.forEach(line => {
                if (!line.length) {
                    currBlock = undefined;
                } else if (line.startsWith('; ')) {
                    // ignore
                } else if (line.startsWith('::')) {
                    if (!currBlock) {
                        currBlock = {
                            block: null,
                            items: [],
                            refs: []
                        };
                        section.blocks.push(currBlock);
                    }
                    if (!currBlock.block) {
                        currBlock.block = line.substr(2);
                    } else {
                        currBlock.block += '\n' + line.substr(2);
                    }
                } else if (line.startsWith('==')) {
                    let sepName = line.substr(2);
                    currBlock = undefined;
                    section.blocks.push({
                        sep: sepName
                    });
                } else if (line.startsWith('[') && line.endsWith(']')) {
                    let type = line.substring(1, line.indexOf(':'));
                    let ref = line.substring(line.indexOf(':') + 1, line.length - 1);
                    currBlock.refs.push({
                        type: type,
                        ref: ref
                    })
                } else if (currBlock) {
                    line = line.replace(/\\n/g, '\n');
                    line = line.replace(/\\t/g, '\t');
                    let item = {
                        snippet: line
                    };
                    currBlock.items.push(item);
                }
            });
        })
    })
}

function initBlock() {
    // function createSection(name, _class) {
    //     return {
    //         section: name,
    //         "class": _class,
    //         blocks: [],
    //     }
    // }
    // function initSections(sections) {
    //     sections.push(createSection("Motion", "motion"));
    //     sections.push(createSection("Events", "events"));
    //     sections.push(createSection("Looks", "looks"));
    //     sections.push(createSection("Control", "control"));
    //     sections.push(createSection("Physics", "physics"));
    //     sections.push(createSection("Sensing", "sensing"));
    //     sections.push(createSection("Pen & sound", "pen"));
    //     sections.push(createSection("Operators", "operators"));
    //     sections.push(createSection("Data", "data"));
    //     sections.push(createSection("More", "more"));
    // }

    let file = './src/blocks_base.json';
    try {
        blocks = JSON.parse(fs.readFileSync(file, utf8opts));
    } catch (e) {
        console.warn('file not found: ' + file);
        return;
    }


    // blocks = {scratch:[]};
    // let stage = {
    //     type: "Stage",
    //     sections:[]
    // };
    // initSections(stage.sections);
    // blocks.scratch.push(stage);
    // let sprite = {
    //     type: "Sprite",
    //     active: "true",
    //     sections:[]
    // };
    // initSections(sprite.sections);
    // blocks.scratch.push(sprite);
}

function mkdirpSync(path) {
    let parent = path.replace(/\\/g, '/');
    let i = 0;
    while ((i = parent.indexOf('/', i + 1)) >= 0) {
        let subDir = parent.substr(0, i);
        if (!fs.existsSync(subDir)) {
            console.log("Create parent folder " + subDir);
            fs.mkdirSync(subDir);
        }
    }
}
