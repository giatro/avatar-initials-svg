import { colors } from "./colors";

export function getInitials(text, maxNumOfLetters) {
    let replace = '$1';
    switch (maxNumOfLetters) {
        case 3:
            replace = '$1$2$4';
            break;
        case 2:
            replace = '$1$4';
            break;
    }
    return (text.split(" ").map((n)=>n[0]).join('').replace(/(\w)(\w)?(\w)*(\w)$/, replace) || '').toUpperCase();
}

export function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
}

export const getColorByName = (s: string) => colors[c(s) % colors.length];

const c = (s:string): number => Array.from(s).reduce((sum: number, c:string) => sum + c.charCodeAt(0), 0);