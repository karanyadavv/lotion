"use client";

import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";

import {
  useCreateBlockNote
} from "@blocknote/react";

import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import { useEdgeStore } from "@/lib/edgestore";

import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {

  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file
    });

    return response.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    // editable,
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    // onEditorContentChange: (editor) => {
    //   onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
    // },
    uploadFile: handleUpload
  });

  // const handleEditorChange = () => {
  //   onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
  // };


  return(
    <div>
      <BlockNoteView
        editor={editor}
        editable={editable}
        onChange={() => {}}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  )
}

export default Editor;