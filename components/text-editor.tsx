'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '@/components/ui/button';
import { Bold, Italic, List, Wand2 } from 'lucide-react';
import CharacterCount from '@tiptap/extension-character-count';
const TextEditor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit, CharacterCount.configure({ limit: 500 })],
    content: '<p>Start typing here...</p>',
    autofocus: true,

    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-2 focus:outline-none',
      },
    },
  });
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) {
        if (event.key === 'z') {
          event.preventDefault();
          editor?.commands.undo();
        }
        if (event.key === 'y' || (event.shiftKey && event.key === 'Z')) {
          event.preventDefault();
          editor?.commands.redo();
        }
      }
    },
    [editor]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  if (!editor) {
    return null;
  }
  const handleAIProcess = async () => {
    setIsProcessing(true);
    // GET VALUE FROM EDITOR
    const selectedText = editor.state.selection.empty
      ? editor.getText()
      : editor.state.doc.textBetween(
          editor.state.selection.from,
          editor.state.selection.to
        );
    console.log(selectedText);

    const processedText = selectedText.toUpperCase() + 'test';

    //  API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (editor.state.selection.empty) {
      // IF SELECTION IS EMPTY THEN SET VALUE IN EDITOR
      editor.commands.setContent(processedText);
    } else {
      // IF SELECTION
      editor.commands.insertContentAt(editor.state.selection, processedText);
    }

    setIsProcessing(false);
  };

  return (
    <div className=" grid gap-y-2">
      <div className="border rounded-lg p-4">
        <EditorContent
          editor={editor}
          className="prose max-w-none"
          height={500}
        />
      </div>
      <div className="flex justify-between items-center space-x-2 mb-2">
        <div className="flex justify-between text-sm text-gray-500">
          <span>{editor.storage.characterCount.characters()} characters</span>
        </div>
        <div className=" flex gap-2 items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'bg-muted' : ''}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'bg-muted' : ''}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={handleAIProcess}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'AI Process'}
            <Wand2 className="h-4 w-4 ml-2" />
          </Button>
          {/* <Button
            variant="outline"
            size="icon"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'bg-muted' : ''}
          >
            <List className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
