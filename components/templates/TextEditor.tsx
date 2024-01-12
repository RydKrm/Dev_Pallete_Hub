import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

 interface TextInterface {
    handleEditor: (text:string) =>void
 }

export default function TextEditor({ handleEditor }: TextInterface) {
    const editorRef = useRef(null);
    return (
        <div className='bg-c_bg_light dark:bg-c_bg_dark'>
            <Editor
            // @ts-ignore
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=""
                apiKey={process.env.NEXT_PUBLIC_TINYMC_API_KEY}
                onEditorChange={(newText) => handleEditor(newText)}

                init={{
                    height: 300,
                    width:450,
                    menubar: false,
                    body_class: 'background-color:black',  // Custom body class
                    content_css: 'writer',
                    skin: 'oxide',
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link image', 'charmap', 'preview', 'anchor',
                        'searchreplace', 'visualblocks', 'code', 'fullscreen', 'codesample',
                        'insertdatetime', 'media', 'table', 'paste', 'wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | codesample ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ',
                    content_style: `
                        body {
                            font-family: 'Helvetica', Arial, sans-serif;
                           
                            font-size: 16px;
                        }
                    `
                }}
            />
        </div>
    );
}
