import React from 'react';
import LetterTable from './LetterTable';


function AlphabetChart() {

    const alphabet = [
        {'letter':'ت', 'sound':'t', 'forms':['ت', '<span style="color:black">ت<span><span style="color:white">ش<span>']},
        {'letter':'پ', 'sound':'p', 'forms':["پ",'<span style="color:black">پ<span><span style="color:white">ش<span>' ]},
        {'letter':'ج', 'sound':'j', 'forms':["ج", '<span style="color:black">ج<span><span style="color:white">ش<span>']},
        {'letter':'چ', 'sound':'ch', 'forms':["چ",'<span style="color:black">چ<span><span style="color:white">ش<span>']},
        {'letter':'ح', 'sound':'h', 'forms':["ح", '<span style="color:black">ح<span><span style="color:white">ش<span>']},
        {'letter':'خ', 'sound':'kh','forms':["خ", '<span style="color:black">خ<span><span style="color:white">ش<span>']},
        {'letter':'ن', 'sound':'n','forms':["ن",'<span style="color:black">ن<span><span style="color:white">ش<span>']},
        {'letter':'د', 'sound':'d','forms':["د"]},
        {'letter':'ر', 'sound':'r','forms':["ر"]},
        {'letter':'ژ', 'sound':'zh','forms':["ژ"]},
        {'letter':'ش', 'sound':'sh','forms':["ش", '<span style="color:black">ش<span><span style="color:white">ش<span>']},
        {'letter':'و', 'sound':'v','forms':["و"]},
        {'letter':'ف', 'sound':'f','forms':["ف", '<span style="color:black">ث<span><span style="color:white">ش<span>']},
        {'letter':'ق', 'sound':'gh','forms':["ق",'<span style="color:black">ق<span><span style="color:white">ش<span>']},
        {'letter':'ص', 'sound':'s','forms':["ص", '<span style="color:black">ص<span><span style="color:white">ش<span>']},
        {'letter':'ث', 'sound':'s','forms':["ث", '<span style="color:black">ث<span><span style="color:white">ش<span>']},
        {'letter':'س', 'sound':'s','forms':["س", '<span style="color:black">س<span><span style="color:white">ش<span>']},
        {'letter':'ض', 'sound':'z','forms':["ض", '<span style="color:black">ض<span><span style="color:white">ش<span>']},
        {'letter':'ز', 'sound':'z','forms':["ز"]},
        {'letter':'ظ', 'sound':'z','forms':["ظ"]},
        {'letter':'ذ', 'sound':'z','forms':["ذ"]},
        {'letter':'ط', 'sound':'t','forms':["ط"]},
        {'letter':'ی', 'sound':'y','forms':["ی", '<span style="color:black">ی<span><span style="color:white">ش<span>']},
        {'letter':'ک', 'sound':'k','forms':["ک", '<span style="color:black">ک<span><span style="color:white">ش<span>']},
        {'letter':'گ', 'sound':'g','forms':["گ", '<span style="color:black">گ<span><span style="color:white">ش<span>']},
        {'letter':'ل', 'sound':'l','forms':["ل", '<span style="color:black">ل<span><span style="color:white">ش<span>']},
        {'letter':'غ', 'sound':'gh','forms':['<span style="color:white">ش<span><span style="color:black">غ<span>', 
                                            '<span style="color:black">غ<span><span style="color:white">ر<span>', 
                                            '<span style="color:white">ش<span><span style="color:black">غ<span><span style="color:white">ش<span>',
                                            "غ", "gh"
                                            ]
        },
        {'letter':'ع', 'sound':'a','forms':['<span style="color:white">ش<span><span style="color:black">ع<span>', 
        '<span style="color:black">ع<span><span style="color:white">ر<span>', 
        '<span style="color:white">ش<span><span style="color:black">ع<span><span style="color:white">ش<span>',
        "ع", "gh"]},
        {'letter':'ه', 'sound':'h','forms':['<span style="color:white">ش<span><span style="color:black">ه<span>', 
        '<span style="color:black">ه<span><span style="color:white">ر<span>', 
        '<span style="color:white">ش<span><span style="color:black">ه<span><span style="color:white">ش<span>',
        "ه", "gh"]},
        {'letter':'ا', 'sound':'a','forms':['ا']},
        {'letter':'ب', 'sound':'b','forms':["ب", '<span style="color:black">ب<span><span style="color:white">ش<span>']},
        {'letter':'م', 'sound':'m','forms':["م", '<span style="color:black">م<span><span style="color:white">ش<span>']}
    ];

    return (
        <LetterTable letters={alphabet} />
    )
}
export default AlphabetChart;