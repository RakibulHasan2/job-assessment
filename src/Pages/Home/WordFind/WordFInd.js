import React, { useState } from 'react';

const WordFInd = () => {
    const [output, setOutput] = useState("")
    const getRestSentence = e => {
        e.preventDefault()
        const form = e.target
        const sentence = form.sentence.value
        const word = form.word.value
        // console.log("sentence", sentence, "word", word)

        function restSentence(sentence, word) {
            var times = 0, i;

            for (i = 0; i < sentence.length; i++) {

                if (sentence[i] === word)
                    times++;

                if (times === 1)
                    break;
            }
            if (i < sentence.length - 1) {
                return sentence.substring(i + 1)
                // console.log(sentence.substring(i + 1));
            }
            else {
                return "The letter does not exist in the sentence"
                // console.log("The letter does not exist in the sentence");
            }

        }
       const text = (restSentence(sentence, word));
       setOutput(text)
    }
    return (
        <div className=''>
            <h1 className='text-3xl font-bold text-center'>Find Word</h1>
            <div className='flex justify-center mt-4'>
                <div className='flex flex-col'>
                    <form onSubmit={getRestSentence} className='grid grid-cols-1'>
                        <input name='sentence' className='bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='write a sentence...'

                        />
                        <input name='word' maxLength="1" className=' bg-slate-200 rounded-xl mb-4 p-3' type="text" placeholder='word...'
                        />
                        <h1 className='mb-2 text-xl font-bold text-center'>Output : <span className='text-primary'>{output}</span></h1>
                        <button className=' btn bg-gray-600'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WordFInd;