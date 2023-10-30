import React from 'react';
import LetterTable from './LetterTable';


function AlphabetChart() {

    const alphabet = [
        {'letter':'ت', 'sound':'t'},
        {'letter':'پ', 'sound':'p'},
        {'letter':'ج', 'sound':'j'},
        {'letter':'چ', 'sound':'ch'},
        {'letter':'ح', 'sound':'h'},
        {'letter':'خ', 'sound':'kh'},
        {'letter':'ن', 'sound':'n'},
        {'letter':'د', 'sound':'d'},
        {'letter':'ر', 'sound':'r'},
        {'letter':'ژ', 'sound':'zh'},
        {'letter':'ش', 'sound':'sh'},
        {'letter':'و', 'sound':'v'},
        {'letter':'ف', 'sound':'f'},
        {'letter':'ق', 'sound':'gh'},
        {'letter':'ص', 'sound':'s'},
        {'letter':'ث', 'sound':'s'},
        {'letter':'س', 'sound':'s'},
        {'letter':'ض', 'sound':'z'},
        {'letter':'ز', 'sound':'z'},
        {'letter':'ظ', 'sound':'z'},
        {'letter':'ذ', 'sound':'z'},
        {'letter':'ط', 'sound':'t'},
        {'letter':'ی', 'sound':'y'},
        {'letter':'ک', 'sound':'k'},
        {'letter':'گ', 'sound':'g'},
        {'letter':'ل', 'sound':'l'},
        {'letter':'غ', 'sound':'gh'},
        {'letter':'ع', 'sound':'a'},
        {'letter':'ه', 'sound':'h'},
        {'letter':'ا', 'sound':'a'},
        {'letter':'ب', 'sound':'b'},
        {'letter':'م', 'sound':'m'}
    ];

    return (
        <LetterTable letters={alphabet} />
    )
}
export default AlphabetChart;