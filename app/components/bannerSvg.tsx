import React, { useState, useEffect } from 'react';

// Define the Point type
type Point = {
    x: number;
    y: number;
};

class Hexagon {
    points: Point[];
    shortLength: number;
    longLength: number;
    stroke: string;
    rotation: number;
    perimeter: number;
    strings: string[];
    globalSizeMod: number;
    fontSize: number;
    trueFontWidth: number;
    id: string;

    constructor(points: Point[], stroke: string, rotation: number) {
        const maxY = Math.max(...points.map(p => p.y));
        const minY = Math.min(...points.map(p => p.y));
        const maxX = Math.max(...points.map(p => p.x));
        const minX = Math.min(...points.map(p => p.x));

        this.points = points;
        this.shortLength = maxY - minY;
        this.longLength = maxX - minX;
        this.perimeter = this.longLength * 3;
        this.stroke = stroke;
        this.rotation = rotation;
        this.strings = [];
        this.globalSizeMod = .07;
        this.fontSize = 20;
        this.trueFontWidth = this.fontSize * this.globalSizeMod * .6;
        this.id = "";
    }

    calculateHexPoints(gap: number): Point[] {
        const sizeMod = (this.shortLength + gap * 2) * this.globalSizeMod / this.shortLength;
        return this.points.map(point => ({ x: parseFloat((point.x * sizeMod + 50).toFixed(2)), y: parseFloat((point.y * sizeMod + 50).toFixed(2)) }));
    }

    createString() {
    }

    renderHexagon(index: number): JSX.Element {
        this.id = `Hex-${index}`;
        const pathData = `
            M ${this.points[0].x},${this.points[0].y}
            Q ${this.points[1].x},${this.points[1].y} ${this.points[2].x},${this.points[2].y}
            L ${this.points[3].x},${this.points[3].y}
            Q ${this.points[4].x},${this.points[4].y} ${this.points[5].x},${this.points[5].y}
            L ${this.points[6].x},${this.points[6].y}
            Q ${this.points[7].x},${this.points[7].y} ${this.points[8].x},${this.points[8].y}
            L ${this.points[9].x},${this.points[9].y}
            Q ${this.points[10].x},${this.points[10].y} ${this.points[11].x},${this.points[11].y}
            L ${this.points[12].x},${this.points[12].y}
            Q ${this.points[13].x},${this.points[13].y} ${this.points[14].x},${this.points[14].y}
            L ${this.points[15].x},${this.points[15].y}
            Q ${this.points[16].x},${this.points[16].y} ${this.points[17].x},${this.points[17].y}
            Z`;

            let specialStrings: string[] = ["Programmer", "Web Developer", "Software Engineer", "Game Developer", "Henry Matthews"];
            let spacer = " • "
            let underlineArr = this.strings.map(e => (e.length * this.trueFontWidth).toFixed(2));
            let underlines = underlineArr.join(` ${(spacer.length * this.trueFontWidth).toFixed(2)} `) + " 100";

            let highlightStrings = () => {
                return this.strings.map((e, i) => {
                    if (specialStrings.includes(e)) {
                        return <tspan key={`${this.id}-string-${i}`}><tspan className="highlighted-hex-text" >{e}</tspan>{spacer}</tspan>
                    }
                    else return <tspan key={`${this.id}-string-${i}`}><tspan className="standard-hex-text" >{e}</tspan>{spacer}</tspan>;
                });
            }

        return (
            <g key={this.id} style={{ rotate: `${this.rotation}deg`, transformOrigin: "center center" }}>
                <path id={this.id} d={pathData} fill={"rgba(0,0,0,.15)"} stroke={this.stroke} strokeDasharray={underlines}/>

                {this.strings.length > 0 && <text>
                    <textPath href={`#${this.id}`} startOffset="0%" fontSize={`${this.fontSize * this.globalSizeMod}px`} fill="indigo">
                        {highlightStrings()}
                    </textPath>
                </text>}
            </g>
        );
    }
}

const HexagonSvg: React.FC<{loadedClass: string}> = ({loadedClass}) => {
    const [hexagons, setHexagons] = useState<Hexagon[]>([]);

    useEffect(() => {
        generateNestedHexagons();
    }, []);

    let generateNestedHexagons = () => {
        const firstHexPoints = [
            { x: 17, y: 22.53 }, { x: 15, y: 26 }, { x: 11, y: 26 },
            { x: -11, y: 26 }, { x: -15, y: 26 }, { x: -17, y: 22.53 },
            { x: -28, y: 3.47 }, { x: -30, y: 0 }, { x: -28, y: -3.47 },
            { x: -17, y: -22.53 }, { x: -15, y: -26 }, { x: -11, y: -26 },
            { x: 11, y: -26 }, { x: 15, y: -26 }, { x: 17, y: -22.53 },
            { x: 28, y: -3.47 }, { x: 30, y: 0 }, { x: 28, y: 3.47 }
        ];

        const firstHex = new Hexagon(firstHexPoints, "", 0);

        const generatedHexagons: Hexagon[] = [];
        const count = 10;
        const gap = 70;
        const stroke = "var(--color-1a)";
        const rotation = 8;

        let growingGap = gap;
        for (let i = 0; i < count; i++) {
            const points = firstHex.calculateHexPoints(growingGap);
            generatedHexagons.push(new Hexagon(points, stroke, i * rotation));
            growingGap += gap;
        }

        let wordIndex = 0;
        generatedHexagons.forEach(e => wordIndex = createHexagonText(e, wordIndex));
        generatedHexagons.reverse();

        setHexagons(generatedHexagons);
    }

    let createHexagonText = (hex: Hexagon, wordIndex: number = 0): number => {
        let textArr: string[] = [];
        let textLength: number = 0;
        let currentWordLength = 0;
        let joinString = " • ";
        const words = ["Cat Father", "Gardener", "Programmer", "Home Cook", "Pokémon Go Enthusiast", "Web Developer", "Anime Critic", "Former Cub Scout", "Game Developer", "Lego Lover", "Phlebotomist", "Software Engineer", "Roller Skater",  "Japanese American", "Henry Matthews"];

        while (true) {
            currentWordLength = (words[wordIndex].length + joinString.length) * hex.trueFontWidth;
            if (textLength + currentWordLength < hex.perimeter) {
                textLength += currentWordLength;
                textArr.push(words[wordIndex]);

                wordIndex++;
                wordIndex = wordIndex % words.length;
            }
            else break;
        }

        hex.strings = textArr;
        return wordIndex;
    }

    return (
        <svg className={"hex-pattern" + loadedClass} viewBox="0 0 100 100">
            {hexagons.map((hexagon, index) => hexagon.renderHexagon(index))}
        </svg>
    );
}

export default HexagonSvg;