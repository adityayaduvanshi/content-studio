"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Underline from "@tiptap/extension-underline";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import Placeholder from "@tiptap/extension-placeholder";
import DragNdropImage from "./ui/dragNdropImage";
import { Input } from "@/components/ui/input";

import {
  Bold,
  Check,
  Coffee,
  ImagePlus,
  Italic,
  List,
  MessageSquare,
  Pencil,
  Smile,
  Sparkles,
  UnderlineIcon,
  Underline as UnderLineIcon,
  Wand2,
  Zap,
} from "lucide-react";
import CharacterCount from "@tiptap/extension-character-count";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const instructions = [
  {
    icon: <Sparkles className="w-3 h-3" />,
    text: "Summarize",
    prompt: "Summarize the following text:",
  },
  {
    icon: <Zap className="w-3 h-3" />,
    text: "Expand",
    prompt: "Expand on the following text:",
  },
  {
    icon: <Check className="w-3 h-3" />,
    text: "Improve Post",
    prompt: "Improve the following text:",
  },
  {
    icon: <Pencil className="w-3 h-3" />,
    text: "Same But Different",
    prompt: "Rewrite the following text keeping the same meaning:",
  },
  {
    icon: <MessageSquare className="w-3 h-3" />,
    text: "Continue Writing",
    prompt: "Continue the following text:",
  },
  {
    icon: <Sparkles className="w-3 h-3" />,
    text: "Fix Grammar",
    prompt: "Fix the grammar in the following text:",
  },
  {
    icon: <Smile className="w-3 h-3" />,
    text: "Add Emojis",
    prompt: "Add appropriate emojis to the following text:",
  },
  {
    icon: <Zap className="w-3 h-3" />,
    text: "Make It More Engaging",
    prompt: "Make the following text more engaging:",
  },
  {
    icon: <Coffee className="w-3 h-3" />,
    text: "Make It More Assertive",
    prompt: "Make the following text more assertive:",
  },
  {
    icon: <Coffee className="w-3 h-3" />,
    text: "Make It More Casual",
    prompt: "Make the following text more casual:",
  },
  // {
  //   icon: <Smile className="w-3 h-3" />,
  //   text: 'Generate LinkedIn Hashtags',
  //   prompt:
  //     'Generate a list of relevant hashtags for LinkedIn for the following text:',
  // },
  // {
  //   icon: <Coffee className="w-3 h-3" />,
  //   text: 'Generate Twitter Hashtags',
  //   prompt:
  //     'Generate a list of relevant hashtags for Twitter for the following text:',
  // },
];

const TextEditor = () => {
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCommand, setShowCommand] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [customInstruction, setCustomInstruction] = useState<string>("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({ limit: 5000 }),
      Underline,
      Placeholder.configure({
        placeholder: "Write something …",
        emptyEditorClass: "is-editor-empty",
      }),
    ],
    content: "",
    autofocus: "end",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-2 focus:outline-none",
      },
    },
    immediatelyRender: false,
  });

  const placeholderStyles = `
  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }
`;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) {
        if (event.key === "z") {
          event.preventDefault();
          editor?.commands.undo();
        }
        if (event.key === "y" || (event.shiftKey && event.key === "Z")) {
          event.preventDefault();
          editor?.commands.redo();
        }
      }
    },
    [editor]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!editor) {
    return null;
  }
  const handleCustomInstruction = () => {
    handleAIProcess(customInstruction, customInstruction);
    setCustomInstruction("");
    setShowCommand(false);
  };
  const onEmojiClick = (emojiData: EmojiClickData) => {
    editor?.chain().focus().insertContent(emojiData.emoji).run();
    setShowEmojiPicker(false);
  };
  // const handleAIProcess = async (command: string) => {
  //   setIsProcessing(true);
  //   // GET VALUE FROM EDITOR
  //   setShowCommand(false);

  //   const selectedText = editor.state.selection.empty
  //     ? editor.getText()
  //     : editor.state.doc.textBetween(
  //         editor.state.selection.from,
  //         editor.state.selection.to
  //       );
  //   console.log(selectedText);

  //   const processedText = `${command}: ${selectedText.toUpperCase() + 'test'}`;

  //   // API delay

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   if (editor.state.selection.empty) {
  //     // IF SELECTION IS EMPTY THEN SET VALUE IN EDITOR
  //     editor.commands.setContent(processedText);
  //   } else {
  //     // IF SELECTION
  //     editor.commands.insertContentAt(editor.state.selection, processedText);
  //   }

  //   setIsProcessing(false);
  // };
  const handleAIProcess = async (instruction: string, prompt: string) => {
    setIsProcessing(true);

    const selectedText = editor.state.selection.empty
      ? editor.getText()
      : editor.state.doc.textBetween(
          editor.state.selection.from,
          editor.state.selection.to
        );
    // const skeletonHtml = `<div class="animate-pulse">
    //     ${selectedText
    //       .split('\n')
    //       .map(() => '<div class="h-4 bg-gray-900 rounded w-full mb-2"></div>')
    //       .join('')}
    //   </div>`;

    // if (editor.state.selection.empty) {
    //   editor.commands.setContent(skeletonHtml);
    // } else {
    //   editor.commands.insertContentAt(editor.state.selection, skeletonHtml);
    // }
    try {
      const response = await fetch("/api/ai/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `${prompt}\n\n${selectedText}`,
          instruction: instruction,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process with OpenAI");
      }

      const data = await response.json();
      console.log(data, "aaaaaaaaaaaaaa");
      const processedText = data.result;

      if (editor.state.selection.empty) {
        editor.commands.setContent(processedText);
        console.log(processedText, "sss");
      } else {
        editor.commands.insertContentAt(editor.state.selection, processedText);
        console.log(processedText, "aaaaa");
      }
    } catch (error) {
      console.error("Error processing with OpenAI:", error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && customInstruction.trim()) {
      handleCustomInstruction();
    }
  };
  const check = async () => {
    try {
      const response = await axios.get("/api/ai/check");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <style>{placeholderStyles}</style>

      <div className="grid gap-y-2 relative pt-24">
        <div className="border rounded-lg p-4">
          <EditorContent
            editor={editor}
            className="prose max-w-none"
            // height=""
          />
        </div>
        <div className="flex justify-between items-center space-x-2 mb-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>{editor.storage.characterCount.characters()} characters</span>
          </div>
          {/* <Button onClick={check}>Check</Button> */}
          <div className="flex gap-2 items-center">
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="outline"
                  onClick={() => setShowCommand(!showCommand)}
                  disabled={isProcessing}
                >
                  {/* {isProcessing ? 'Processing...' : 'AI Process'} */}
                  <Wand2 className="h-4 w-4 " />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 h-80 overflow-y-auto p-1">
                <div className="space-y-1">
                  {/* <h4 className="text-xs font-medium leading-none mb-2">
                  AI Instructions
                </h4> */}
                  <div>
                    <input
                      type="text"
                      value={customInstruction}
                      onChange={(e) => setCustomInstruction(e.target.value)}
                      placeholder="Enter custom instruction"
                      className="w-full text-xs py-2 px-1 border outline-none border-gray-200 rounded"
                      onKeyDown={handleInputKeyDown}
                    />
                  </div>
                  {instructions.map((instruction, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start   gap-2 text-xs "
                      onClick={() =>
                        handleAIProcess(instruction.text, instruction.prompt)
                      }
                      disabled={isProcessing}
                    >
                      {instruction.icon}
                      <span>{instruction.text}</span>
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Button
              variant="outline"
              size="icon"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "bg-muted" : ""}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "bg-muted" : ""}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
              className={editor?.isActive("underline") ? "bg-muted" : ""}
            >
              <UnderlineIcon className="h-4 w-4" />
            </Button>
            <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <Smile className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <EmojiPicker
                  height={420}
                  className=" h-220"
                  onEmojiClick={onEmojiClick}
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <ImagePlus className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-0">
                <DragNdropImage
                  onFilesSelected={(files) => {
                    // Handle the selected files here
                    console.log(files);
                    // You might want to upload the files to a server or process them
                  }}
                  width="100%"
                  height="200px"
                />

                <div className="py-6 px-3 font-semibold text-lg flex gap-16">
                  Web URL
                  <Input className=" w-52 h-8"></Input>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
