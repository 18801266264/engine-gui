import * as path from 'path';
import * as fs from 'fs';
export function run() {
    let canvas = document.getElementById("app") as HTMLCanvasElement;
    let stage = Dragon.run(canvas);
    let textField = new Dragon.TextField();
    textField.text = "Hello,World";
    textField.x = 200;
    textField.y = 200;
    stage.addChild(textField);

    let projectUserPick = path.resolve(__dirname, "../../test-project")
    let configPath = path.join(projectUserPick, "data.config");

    if (!fs.existsSync(configPath)) {
        alert("该文件夹不是有效路径！");
    }
    //  let dataContent = fs.readFileSync(configPath,"utf-8");
    else {
        let dataContent = fs.readFileSync(configPath, "utf-8");
        let data = JSON.parse(dataContent);
        let num: number = 0;
        for (let element of data.books) {
            let t = new Dragon.TextField();
            t.text = element.name;
            t.y = num * 20;
            stage.addChild(t);
            num++;
        }

        dataContent = JSON.stringify(data, null, "\t");
        fs.writeFileSync(configPath, dataContent, "utf-8");
    }


}

class Book {
    id: string;
    name: string;
    constructor(id: string, name: string) {
        this.id = id;
    }

}