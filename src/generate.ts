import { getInitials, getContrastYIQ } from './utils';
import { colors } from './colors';
import { IOptions } from './options.model';
export function generateAvatarSvgUrl(text: string, ops: IOptions) {
    const bgc = ops.backgroundColor || colors[Math.floor(Math.random()*colors.length)];
    const fgc = ops.textColor || getContrastYIQ(bgc);
    const options = {
        ...{
            backgroundColor: bgc,
            fontFamily: 'sans-serif',
            maxNumOfLetters: 5,
            rounded: true,
            textColor: fgc
        },
        ...ops
    } as IOptions;
    const initials = getInitials(text, options.maxNumOfLetters);
    // SVG Code
    const svgC = `<circle cx="500" cy="500" r="500" fill="${options.backgroundColor}" />`;
    const svgS = `<path fill="${options.backgroundColor}" d="M0 0h1000v1000H0z"/>`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">${options.rounded ? svgC : svgS}<text x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="${ initials.length > 2 ? 400 : 500 }" fill="${options.textColor}" font-family="${options.fontFamily}">${initials}</text></svg>`;

    return "data:image/svg+xml," + encodeURIComponent(svg);
}